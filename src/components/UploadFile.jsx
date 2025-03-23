import React, { useState } from "react";

const UploadFile = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleFileUpload = (file) => {
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Only JPG and PNG images are allowed.");
        return;
      }

      if (file.size > 500 * 1024) {
        setError("File size must be less than 500KB.");
        return;
      }

      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      setError("");

      onImageUpload(imageURL);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    onImageUpload(null);
  };

  return (
    <div className="form-item mb-10">
      <label htmlFor="file-input" className="font-semibold">Upload Avatar</label>

      <div
        className="border border-dashed border-gray-500 hover:bg-gray-700 p-6 text-center rounded-lg cursor-pointer relative flex flex-col items-center"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById("file-input").click()}
      >
        {image ? (
          <div className="relative w-32 h-32">
            <img src={image} alt="Uploaded" className="w-full h-full rounded-full border border-gray-300 shadow" />
            
            <div className="absolute inset-x-0 bottom-[-2rem] flex gap-2 justify-center mb-5">
              <button className="bg-red-500 text-white px-3 py-1 text-sm rounded-md" onClick={handleRemoveImage}>
                Remove
              </button>
              <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-md" onClick={() => document.getElementById("file-input").click()}>
                Change
              </button>
            </div>
          </div>
        ) : (
          <>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/icon-upload.svg`}
              alt="Upload Icon"
              className="mx-auto mb-2 w-12"
            />
            <p className="text-gray-600">Drag & drop or click to upload</p>
          </>
        )}
      </div>

      <input
        type="file"
        id="file-input"
        accept="image/png, image/jpeg"
        className="hidden"
        onChange={(e) => handleFileUpload(e.target.files[0])}
      />

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {!image && (
        <p className="text-sm text-gray-500 mt-2">
          ⚠️ Upload a JPG or PNG (Max size: 500KB).
        </p>
      )}
    </div>
  );
};

export default UploadFile;
