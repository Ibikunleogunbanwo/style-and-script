"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bgimage from "../../assets/images/bg-main-desktop.png";
import cardfront from "../../assets/images/bg-card-front.png";
import cardback from "../../assets/images/bg-card-back.png";
import cardcomplete from "../../assets/images/icon-complete.svg"

const Cardcomplete = () => {
  
  const [data, setData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });


  useEffect(() => {
    const storedData = localStorage.getItem("cardFormData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  

  

  return (
    <div className="w-full flex flex-col lg:flex-row h-screen">
      {/* LEFT SECTION */}
      <div className="relative lg:w-2/6 w-full h-1/3 lg:h-full md:mb-4">
        <Image src={bgimage} alt="background image" className="object-fill w-full h-full" />

        {/* FRONT CARD */}
        <div className="absolute z-10 top-auto right-auto bottom-[-40px] left-[15px] md:top-[53%] lg:top-[30%] md:left-[30] lg:right-[-28%] lg:bottom-auto lg:left-auto md:bottom-auto md:right-auto">
          <div className="relative">
            <div className="absolute top-5 left-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md z-10"></div>
            <div className="absolute top-7 md:top-8 left-18 md:left-20 w-6 h-6 bg-transparent border-2 border-white rounded-full shadow-md z-10"></div>
            <div className="absolute bottom-6 left-6 z-10 text-xs md:text-sm text-white font-bold">
              {data.cardName.toUpperCase() || "JANE APPLESEED"}
            </div>
            <div className="absolute bottom-6 right-6 z-10 text-white font-bold">
              {(data.expMonth || "00").padStart(2, "0")}/{(data.expYear || "00").padStart(2, "0")}
            </div>
            <div className="absolute bottom-11 md:bottom-17 left-6 z-10 text-white text-xl md:text-2xl lg:text-3xl font-bold">
              {data.cardNumber || "0000 0000 0000 0000"}
            </div>
            <Image src={cardfront} alt="card front" className="w-72 md:w-96 md:h-48 lg:w-96 h-auto object-cover rounded-xl" />
          </div>
        </div>

        {/* BACK CARD */}
        <div className="absolute z-0 top-auto right-auto bottom-15 left-[35px] md:top-5 lg:top-[57%] md:left-auto lg:right-[-48%] lg:bottom-auto lg:left-auto md:bottom-auto md:right-50">
          <div className="relative">
            <div className="absolute right-8 bottom-17 md:bottom-21 md:right-10 z-10 text-white font-bold">
              {data.cvc || "000"}
            </div>
            <Image src={cardback} alt="card back" className="w-72 md:w-96 md:h-48 lg:w-96 h-auto object-cover rounded-xl" />
          </div>
        </div>
      </div>

     
      <div className="lg:w-4/6 w-full h-2/3 lg:h-auto bg-white flex flex-col items-center justify-center">
       
      <Image src={cardcomplete} alt="card back" className="w-auto h-auto object-cover md:w-36 md:h-36 mb-6 " />

        <h1 className="font-semibold text-3xl mb-6">Thank you!</h1>

        <p>We've added your card details.</p>
        <button
              type="Continue"
              className="w-1/4 text-xs bg-[#0B0A0B] text-white rounded p-3 font-bold mt-6"
            >
              Complete
            </button>
       
      </div>
    </div>
  );
};

export default Cardcomplete;