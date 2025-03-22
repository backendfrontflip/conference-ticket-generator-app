import React, { useState } from "react";
import UploadFile from "./UploadFile";

const FormEntry = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    github: "",
    avatar: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
  };

  const handleImageUpload = (imageURL) => {
    setFormData({ ...formData, avatar: imageURL });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `Please enter your ${key.replace(/([A-Z])/g, " $1").toLowerCase()}.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 rounded-lg shadow-md">
      <div className="w-full flex justify-center mb-6">
        <UploadFile onImageUpload={handleImageUpload} />
      </div>

      <div className="flex flex-col gap-6">
        <div className="form-item flex flex-col">
          <label htmlFor="fullName" className="font-semibold">Full Name</label>
          <input
            type="text"
            id="fullName"
            className={`border p-2 bg-transparent hover:bg-gray-700 cursor-pointer rounded-md ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        <div className="form-item flex flex-col">
          <label htmlFor="email" className="font-semibold">Email Address</label>
          <input
            type="email"
            id="email"
            className={`border p-2 bg-transparent rounded-md hover:bg-gray-700 cursor-pointer ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div className="form-item flex flex-col">
          <label htmlFor="github" className="font-semibold">GitHub Username</label>
          <input
            type="text"
            id="github"
            className={`border p-2 bg-transparent rounded-md hover:bg-gray-700 cursor-pointer ${
              errors.github ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.github}
            onChange={handleChange}
          />
          {errors.github && <p className="text-sm text-red-500 mt-1">{errors.github}</p>}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className="bg-orange-500 text-black font-bold w-full px-6 py-2 rounded-md hover:bg-orange-700 transition"
        >
          Generate My Ticket
        </button>
      </div>
    </form>
  );
};

export default FormEntry;
