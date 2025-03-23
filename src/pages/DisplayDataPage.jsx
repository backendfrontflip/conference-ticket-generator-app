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

  const avatarSrc = formData.avatar || "/assets/images/default-avatar.png";

  return (
    <div className="p-4 mx-auto min-h-screen flex flex-col items-center justify-center">
      
      <div className="w-full max-w-2xl text-center">
        <img src="/assets/images/logo-full.svg" alt="logo" className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold">
          Congrats,{" "}
          <span className="gradient-text bg-gradient-to-r from-[#f43f5e] to-white bg-clip-text text-transparent">
            {formData.fullName}!
          </span>
        </h1>
        <p className="text-2xl font-bold">Your ticket is ready.</p>
        <p className="text-gray-300 mt-5 mb-10">
          We've emailed your ticket to{" "}
          <span className="text-orange-500 font-bold">{formData.email}</span> and will send updates in the run-up to the event.
        </p>
      </div>

      <div className="w-full max-w-md">
        <div className="ticket-container p-6 shadow-md relative bg-[url('/assets/images/pattern-ticket.svg')] bg-cover bg-center rounded-md flex flex-col justify-between">
          <div>
            <div className="logo flex items-start text-lg font-semibold text-3xl">
              <img src="/assets/images/logo-mark.svg" alt="Logo" className="w-6 h-6 mr-2" />
              <p className="mt">Coding Conf</p>
            </div>

            <p className="date text-gray-500 mt-2 flex items-start pb-5">Jan 31, 2025 / Austin, TX</p>

            <div className="ticket-user flex items-start gap-3 mt-4">
              <img
                src={avatarSrc}
                alt="User Avatar"
                className="p-1 w-16 h-16 rounded-full border object-cover"
              />
              <div className="user-info">
                <span className="text-lg font-semibold">{formData.fullName}</span>
                <div className="github-username flex items-center text-sm text-gray-500">
                  <img src="/assets/images/icon-github.svg" alt="GitHub Icon" className="w-4 h-4 mr-1" />
                  <span>{formData.github}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="ticket-number absolute bottom-6 right-6 top-16 rotate-90 text-gray-500 text-2xl font-semibold">
            #02303
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-700 transition"
      >
        Back to Home
      </button>

      <div className="mt-5 w-full text-center font-bold p-4 bg-orange-600 border rounded-full max-w-md">
       Challenge by <span><a href="https://www.frontendmentor.io?ref=challenge" className="text-black border-orange-500 hover:bg-orange-700">
        Frontend Mentor.
        </a></span>
        <p className="mt-2">Coded by <span><a href="https://backendfrontflip.github.io/spacecadetio/Socials/socials.html?fbclid=PAZXh0bgNhZW0CMTEAAabFp9fEE_4fLr7EkFU_A5yVvNfuzEC3uf6EDpOGaX00M3Lfiur2U9GGGxI_aem_B8FgTY0lbmdS6kxU0xSgGw" className="text-black border-orange-500 hover:bg-orange-700 ">Space Cadet.</a></span>
        </p>
      </div>
    </div>
  );
};

export default DisplayDataPage;
