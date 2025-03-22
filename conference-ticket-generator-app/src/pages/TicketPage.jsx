import React from "react";
import { useNavigate } from "react-router-dom";
import FormEntry from "../components/FormEntry";
import Header from "../components/Header";

const TicketPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    navigate("/ticket", { state: formData });
  };

  return (
    <div className="p-4 mx-auto min-h-screen flex flex-col items-center justify-center">
      
      <div className="w-full max-w-2xl text-center">
        <Header />
      </div>

      <div className="w-full max-w-lg">
        <FormEntry onFormSubmit={handleFormSubmit} />
      </div>

      <div className=" w-full text-center font-bold p-4 bg-orange-600 border rounded-full max-w-md">
       Challenge by <span><a href="https://www.frontendmentor.io?ref=challenge" className="text-black border-orange-500 hover:bg-orange-700">
        Frontend Mentor.
        </a></span>
        <p className="mt-2">Coded by <span><a href="https://backendfrontflip.github.io/spacecadetio/Socials/socials.html?fbclid=PAZXh0bgNhZW0CMTEAAabFp9fEE_4fLr7EkFU_A5yVvNfuzEC3uf6EDpOGaX00M3Lfiur2U9GGGxI_aem_B8FgTY0lbmdS6kxU0xSgGw" className="text-black border-orange-500 hover:bg-orange-700 ">Space Cadet.</a></span>
        </p>
      </div>
    </div>
  );
};

export default TicketPage;
