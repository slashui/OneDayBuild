
import React from 'react'
import Link from 'next/link';
import { useTranslations } from "next-intl";
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';


const Header = () => {
    const t = useTranslations("Index");
  
  return (
    <nav class="bg-white dark:bg-zinc-800 w-full">
    <div class="w-full flex flex-row items-center justify-between mx-auto px-10 h-[70px]">
      
        <div class="basis-1/2 hidden md:block px-4">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-600 rounded-lg bg-gray-50/10 focus:ring-gray-50 focus:border-gray-50  focus:text-white" placeholder="Search..." />
        </div>

      <div class="basis-1/2 flex flex-row justify-end">
        <div className=' px-2 pt-6'> <ThemeSwitcher /></div>
        <div className=' px-2 pt-6'> <LanguageSwitcher /></div>
        <div class="flex items-center space-x-4 px-4 py-3 hover:bg-gray-100/10">
          <img class="w-10 h-10 rounded-full" src="https://ideogram.ai/api/images/direct/ADnMl2orSZW__3tyYF_uGQ" alt="" />
          <div class="font-medium dark:text-white">
              <div class="dark:text-white text-zinc-700">Elon Musk</div>
              <div class="text-sm text-gray-500 ">ElonMusk@tesla.com</div>
          </div>
        </div>
        
      </div>

        
    </div>
   
  </nav>


  )
}

export default Header