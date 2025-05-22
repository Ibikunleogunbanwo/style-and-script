"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Logo from "@/component/logo";
import darkicon from "../../assets/images/icon-moon.svg";
import lighticon from "../../assets/images/icon-sun.svg";
import Card from "../../component/card"

const Browser = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  useEffect(() => {
    if (theme === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  }, [theme]);

  return (
    <main className="mx-3">
    <div className="h-screen flex flex-col items-center justify-start gap-8 pt-8 px-4">
      <div className="flex items-center justify-between p-4 w-full lg:w-5/6  shadow-2xl rounded-xl dark:bg-browser-neutral-100 bg-browser-neutral-0">
        <Logo />
        <div className="p-2 bg-browser-neutral-200 shadow-lg flex justify-center items-center rounded-xl">
          <button onClick={toggleTheme}>
            <Image
              src={theme === "light" ? darkicon : lighticon}
              alt="logo for icon to switch mode"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between w-full lg:w-5/6 items-center text-3xl font-bold text-browser-neutral-900 dark:text-white px-4">
        <h1 className="text-2xl">Extension List</h1>
        <div className="flex space-x-2 md:space-x-4 text-xl p-4">
          <button className="bg-browser-neutral-0 w-12 md:w-15 h-10 text-base rounded-3xl shadow-2xl text-shadow-zinc-200 hover:bg-browser-red-400 hover:text-white dark:hover:text-black">
            All
          </button>
          <button className="bg-browser-neutral-0 w-17 md:w-20 h-10 text-base rounded-3xl shadow-2xl text-shadow-zinc-200 hover:bg-browser-red-400 hover:text-white dark:hover:text-black">
            Active
          </button>
          <button className="bg-browser-neutral-0 w-22 md:w-25 h-10 text-base rounded-3xl shadow-2xl text-shadow-zinc-200 hover:bg-browser-red-400 hover:text-white dark:hover:text-black">
            Inactive
          </button>
        </div>
      </div>



     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-5/6">
     <Card isActive = 'true'/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     </div>
      
      <div className="dark:text-white text-browser-neutral-900">{theme}</div>
    </div>
    </main>
   
  );
};

export default Browser;
