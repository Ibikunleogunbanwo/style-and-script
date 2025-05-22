import React, { useState } from "react";
import Image from "next/image";
import deviens from "../assets/images/logo-devlens.svg";

const Card = (data) => {

  const [isActive, setIsActive] = useState(data.isActive);

  const handleToggle = () => setIsActive(prev => !prev);

  return (
    <div className="h-45 grid content-between bg-browser-neutral-0 dark:bg-browser-neutral-100 border-none rounded-xl shadow-md text-wrap transition-colors duration-300">
      <div className="flex gap-2 pt-3 px-2 h-auto items-start">
        <Image className="h-14" 
        src={data.logo}
        width={100}
        height={100}
        alt="logo_image"
        aria-hidden="true"
        />
        <div className="flex flex-col ">
          <h1 className="font-extrabold text-base dark:text-white mb-1 ">
            {data.name}
          </h1>
          <p className="text-sm dark:text-white ">
            {data.description}
          </p>
        </div>
      </div>

      <div className="flex flex-nowrap justify-between items-center px-2 h-auto w-full">
        <div className="text-xs m-2">
          <button className=" px-4 py-2 border border-browser-neutral-300 rounded-3xl mb-4 hover:bg-browser-red-500 hover:text-white dark:text-white hover:dark:text-black font-bold">
            Remove
          </button>
        </div>

        <div className="p-4 mb-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
            type="checkbox" 
            className="sr-only peer"
            checked={isActive}
            onChange={handleToggle} />
            <span
              className="w-14 h-8 bg-browser-neutral-300 peer-focus:outline-none rounded-full 
                     peer peer-checked:after:translate-x-6 peer-checked:after:border-white 
                     after:content-[''] after:absolute after:top-1 after:left-1 
                     after:bg-white after:border-gray-300 after:border 
                     after:rounded-full after:h-6 after:w-6 after:transition-all 
                     peer-checked:bg-browser-red-500"
            ></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
