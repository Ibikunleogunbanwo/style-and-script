"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgimage from "../../assets/images/bg-main-desktop.png";
import cardfront from "../../assets/images/bg-card-front.png";
import cardback from "../../assets/images/bg-card-back.png";
import { useRouter } from "next/navigation";

const Cardform = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
 

  const router = useRouter()




  const validate = () => {
    const newErrors = {};
    const now = new Date();
    const month = parseInt(data.expMonth, 10);
    const year = parseInt(data.expYear, 10);

    if (!data.cardName.trim()) {
      newErrors.cardName = "Name is required";
    }

    if (!/^\d{16}$/.test(data.cardNumber.replace(/\s+/g, ""))) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (isNaN(month) || month < 1 || month > 12) {
      newErrors.expMonth = "Invalid month";
    }

    if (isNaN(year) || year < now.getFullYear() % 100) {
      newErrors.expYear = "Invalid or past year";
    }

    if (!/^\d{3}$/.test(data.cvc)) {
      newErrors.cvc = "CVC must be 3 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCardNumberChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formatted = rawValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    if (formatted.length >19){
      return;
    }
    setData({ ...data, cardNumber: formatted });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("cardFormData", JSON.stringify(data));
      console.log("Form submitted:", data);
     router.push("/cardcomplete")
    }
  };



  
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

      {/* RIGHT SECTION */}
      <div className="lg:w-4/6 w-full h-2/3 lg:h-auto bg-white flex flex-col items-center justify-center">
        <div className="text-grey mt-2 p-4 lg:ml-28 w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div>
              {/* Cardholder Name */}
              <label htmlFor="cardName" className="text-grey font-bold text-xs">
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={data.cardName}
                onChange={(e) => setData({ ...data, cardName: e.target.value })}
                placeholder="e.g. Jane Appleseed"
                className="border border-gray-300 text-xs rounded p-2 w-full mt-2 mb-1"
                autoComplete="cc-name"
              />
              {errors.cardName && <p className="text-red-500 text-xs">{errors.cardName}</p>}

              {/* Card Number */}
              <label htmlFor="cardNumber" className="text-grey font-bold text-xs mt-4 block">
                CARD NUMBER
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={data.cardNumber}
                onChange={handleCardNumberChange}
                placeholder="e.g. 1234 5678 9123 0000"
                className="border border-gray-300 text-xs rounded p-2 w-full mt-2 mb-1"
              />
              {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber}</p>}
            </div>

            {/* Expiration and CVC */}
            <div className="flex gap-3 mt-4">
              <div className="w-1/2">
                <label htmlFor="expMonth" className="text-grey font-bold text-xs">
                  EXP. DATE (MM/YY)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="expMonth"
                    name="expMonth"
                    value={data.expMonth}
                    onChange={(e) => setData({ ...data, expMonth: e.target.value })}
                    placeholder="MM"
                    className="border border-gray-300 rounded p-2 w-1/2 mt-2 mb-1"
                  />
                  <input
                    type="text"
                    id="expYear"
                    name="expYear"
                    value={data.expYear}
                    onChange={(e) => setData({ ...data, expYear: e.target.value })}
                    placeholder="YY"
                    className="border border-gray-300 rounded p-2 w-1/2 mt-2 mb-1"
                  />
                </div>
                {errors.expMonth && <p className="text-red-500 text-xs">{errors.expMonth}</p>}
                {/* {errors.expYear && <p className="text-red-500 text-xs">{errors.expYear}</p>} */}
              </div>

              {/* CVC */}
              <div className="w-1/2">
                <label htmlFor="cvc" className="text-grey font-bold text-xs">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  value={data.cvc}
                  onChange={(e) => setData({ ...data, cvc: e.target.value })}
                  placeholder="e.g. 123"
                  className="border border-gray-300 rounded p-2 w-full mt-2 mb-1"
                />
                {errors.cvc && <p className="text-red-500 text-xs">{errors.cvc}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B0A0B] text-white rounded p-3 font-bold mt-6"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cardform;