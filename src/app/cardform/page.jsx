import React from "react";
import Image from "next/image";
import bgimage from "../../assets/images/bg-main-desktop.png";

const Cardform = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      <div className="flex-1/2 lg:flex-2/6 relative w-full lg:w-2/6">
        <Image
          src={bgimage}
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-white flex-1/2 lg:flex-4/6 w-full h-screen lg:w-4/6 flex flex-col place-items-center justify-center gap-8 items-center">
        <div className="text-grey p-4 mx-8 w-full lg:w-1/2">
          <form>
            <div className="">
              <label
                className="text-grey font-bold text-xs "
                htmlFor="cardholder name"
              >
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                name="CARDHOLDER NAME"
                placeholder="e.g. Jane Appleseed"
                className="border border-gray-300 rounded text-bold text-grey p-2 w-full mt-2 mb-4"
              />

              <label
                className="text-grey font-bold text-xs mb-2 pb-2"
                htmlFor="card number"
              >
                CARD NUMBER
              </label>
              <input
                type="text"
                name="CARD NUMBER"
                placeholder="e.g. 1234 5678 9123 0000"
                className="border border-gray-300 rounded text-bold text-grey p-2 w-full mt-2 mb-4"
              />
            </div>
            <div className="flex gap-3">
            <div className="w-1/2"> 
              <label
                className="text-grey font-bold text-xs "
                htmlFor="Exp Date"
              >
                EXP. DATE (MM/YY)
              </label>
              <div className="flex gap-2">
              <input
                type="number"
                name="MONTH"
                placeholder="MM"
                className="border border-gray-300 rounded text-bold text-grey p-2 w-1/2 mt-2 mb-4"
              />

              <input
                type="number"
                name="YEAR"
                placeholder="YY"
                className="border border-gray-300 rounded text-bold text-grey p-2 w-1/2 mt-2 mb-4"
              />
              </div>
              </div>
              <div className="w-1/2">
              <label
                className="text-grey font-bold text-xs "
                htmlFor="cvc"
              >
                CVC
              </label>
              <input
                type="number"
                name="CVC"
                placeholder="e.g. 123"
                className="border border-gray-300 rounded text-bold text-grey p-2 w-full mt-2 mb-4"
              />
              </div>
            </div>
            <button 
            className="w-full bg-black text-white rounded p-3 font-bold mt-6"
            >Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cardform;
