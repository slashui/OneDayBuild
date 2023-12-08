
import React from 'react'
import Link from 'next/link';
import { useTranslations } from "next-intl";



const aside = () => {
    const t = useTranslations("Menu");

  return (
    <aside className="w-full h-screen" aria-label="Sidebar">
     <div class="flex flex-col items-center h-full overflow-hidden text-zinc-900 bg-white dark:text-zinc-300 dark:bg-zinc-800">
        <a class="flex items-center w-full px-3" href="#">
            <img  src="/icon/logo.png" width="120px" />
        </a>
        <div class="w-full px-2">
            <div class="flex flex-col items-center w-full mt-3 border-t border-zinc-600">
              <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#6759FF] hover:text-gray-300" href="#">
                  <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span class="ml-2 text-sm font-medium">{t("Dashboard")}</span>
              </a>
              <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#6759FF] hover:text-gray-300" href="#">
                  <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span class="ml-2 text-sm font-medium">{t("Search")}</span>
              </a>
              <a class="flex items-center w-full h-12 px-3 mt-2 text-gray-200 bg-[#6759FF] rounded" href="#">
                  <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="ml-2 text-sm font-medium">{t("Insights")}</span>
              </a>
              <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#6759FF] hover:text-gray-300" href="#">
                  <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  <span class="ml-2 text-sm font-medium">{t("Docs")}</span>
              </a>
            </div>
            <div class="flex flex-col items-center w-full mt-2 border-t border-zinc-600">
              <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#6759FF] hover:text-gray-300" href="#">
                  <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span class="ml-2 text-sm font-medium">{t("Products")}</span>
              </a>
              <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#6759FF] hover:text-gray-300" href="#">
                  <svg class="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <span class="ml-2 text-sm font-medium">{t("Settings")}</span>
              </a>
              <a class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-[#6759FF] hover:text-gray-300" href="#">
                  <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span class="ml-2 text-sm font-medium">{t("Messages")}</span>
                  <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
              </a>
            </div>
        </div>
        <a class="flex items-center justify-center w-full h-16 mt-auto bg-zinc-200 dark:bg-zinc-700 hover:bg-[#6759FF] hover:text-gray-300" href="#">
            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="ml-2 text-sm font-medium">{t("Account")}</span>
        </a>
      </div>
  </aside>
  )
}

export default aside