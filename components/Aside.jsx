

import React from 'react'
import Link from 'next/link';
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import Showpath from './Showpath'



const aside = (props) => {
   const t = useTranslations("Menu");
   const lang = props.locale;

  return (
   
    <div><div className="flex flex-col items-center h-screen overflow-hidden text-zinc-800 dark:text-zinc-300 bg-white dark:bg-[#1d1e20] ">
    <a className="flex items-center w-full px-3 mt-6" href="#">
       <img src="/logo.png" width="120px" />
    </a>
    <div className="w-full px-2">
       <div className="flex flex-col items-center w-full mt-3 dark:border-t dark:border-zinc-600">
          <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:dark:text-primary hover:text-zinc-600 hover:font-black "  href={`/${lang}/dashboard`}>
             <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
             </svg>
             <span className="ml-2 text-sm font-medium">{t("Dashboard")}</span>
          </a>
          <a className="flex items-center w-full h-12 px-3 mt-2 rounded  hover:text-primary" href={`/${lang}/agentui`}>
             <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
             <span className="ml-2 text-sm font-medium">{t("agentUI")}</span>
          </a>
          <a className="flex items-center w-full h-12 px-3 mt-2  hover:text-primary rounded" href={`/${lang}/chat`}>
             <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
             <span className="ml-2 text-sm font-medium">{t("Assistant")}</span>
          </a>
          <a className="flex items-center w-full h-12 px-3 mt-2 rounded  hover:text-primary" href={`/${lang}/docu`}>
             <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
             </svg>
             <span className="ml-2 text-sm font-medium">{t("Docs")}</span>
          </a>
       </div>
       
    </div>
    {/* <a className="flex items-center justify-center w-full h-16 mt-auto bg-zinc-200 dark:bg-zinc-700 hover:bg-[#6759FF] hover:text-gray-300" href="#">
       <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
       <span className="ml-2 text-sm font-medium">Account</span>
    </a> */}
 </div></div>
  )
}

export default aside