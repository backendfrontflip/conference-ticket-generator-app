import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DisplayDataPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  if (!formData) {
    navigate("/");
    return null;
  }

  const avatarSrc = formData.avatar || `${import.meta.env.BASE_URL}assets/images/default-avatar.png`;

  return (
    <div className="p-4 mx-auto min-h-screen flex flex-col items-center justify-center">
      
      <div className="w-full max-w-2xl text-center">
        <img src={`${import.meta.env.BASE_URL}assets/images/logo-full.svg`} alt="logo" className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold">
          Congrats, <span className="gradient-text">{formData.fullName}!</span>
        </h1>
      </div>

      <div className="ticket-container">
        <div className="ticket-content">
          <img src={avatarSrc} alt="User Avatar" className="rounded-full border object-cover" />
        </div>
      </div>

      <button onClick={() => navigate("/")} className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md">
        Back to Home
      </button>
    </div>
  );
};

export default DisplayDataPage;
