"use client";

import { useSession } from 'next-auth/react'
import React from 'react'
import Link from 'next/link';
import { useTranslations } from "next-intl";
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { current } from './LanguageSwitcher'
import { useRouter } from 'next/navigation'
import { useEffect } from "react";


const Header = () => {
  const router = useRouter();
  const { data: session } = useSession()

  return (
    <nav className="dark:bg-black w-full bg-[#F5F6FB]">
    <div className="w-full flex flex-wrap items-center justify-between mx-auto px-10 h-[55px]">
      
      <div><div className="relative hidden lg:block w-[300px] border  rounded-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" className="block w-full h-8 p-2 pl-10 text-sm text-gray-900 border dark:border-[#000000] border-zinc-200 rounded-full dark:bg-gray-50/10 bg-white focus:ring-gray-50 focus:border-gray-50  dark:focus:text-white focus:text-gray-900" placeholder="Search..." />
      </div></div>
      <div>
     

       
       
     
        
    </div>
   
    
      <div className="flex md:order-2 flex-row relative">
      <ThemeSwitcher />
      <LanguageSwitcher />
        <div className="flex items-center space-x-2 px-4 py-1 hover:bg-gray-100/10">
          <img className="w-10 h-10 rounded-full" src={session?.user?.image} alt="" />
          <div className="font-medium dark:text-white">
              <Link className='dark:text-white text-zinc-800 underline hover:text-zinc-500' href={`/cn/setting/${session?.user?.id}`}>{session?.user?.name}</Link><br />
              <Link className='dark:text-white text-zinc-800' href={`/setting/${session?.user?.id}`}>{session?.user?.email}</Link>
              
          </div>
      </div>
      <div id='signout' className='hidden'>
        <button className="absolute" onClick={() => signOut()}>Sign Out</button></div>
      </div>  
    </div>
  </nav>

  )
}

export default Header