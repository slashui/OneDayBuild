"use client"
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const FrontHero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["AI Application", "AI Agent", "Block Chain", "More SaaS"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 400,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
   
   
    <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between max-w-7xl">
      <div className="flex w-3/5 flex-col justify-center p-6  rounded-sm text-left">
      <img src='/logo.png' className='w-28 mb-8' />
        <h1 className="text-2xl font-inter leadi sm:text-5xl">Focus on Your <span ref={el}></span></h1>
        <h1 className="text-2xl font-inter leadi sm:text-5xl">Leave the Basics to <span className='font-bold dark:text-primary text-[#dea8ee]'  style={{ display: 'inline' }}>OneDay.Build</span></h1>

        <p className="mt-6 mb-8 text-lg sm:mb-8 leading-6 dark:text-zinc-300 text-zinc-600">It is your gateway to transforming ideas into income, efficiently and effectively.<br />
Accelerate your app creation build today and go live tomorrow.<br />
Seize the opportunity to secure your first $$$.
         
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a rel="noopener noreferrer" href="#" className="px-24 py-2 text-lg font-semibold bg-black text-white rounded-full dark:bg-primary hover:dark:bg-primary/80 dark:text-gray-900">Got it</a>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 ">

        <img src="/pic/hero.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:w-full" />
      </div>
    </div>

  )
}

export default FrontHero