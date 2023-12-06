import React from 'react'
import Link from 'next/link';
import { useTranslations } from "next-intl";
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const t = useTranslations("Index");
  return (
    <div className="fixed p-4 lg:pl-[310px] top-0 w-full right-0 h-18 bg-zinc-800 h-[70px]">
              <div className="h-full p-2 border-2 border-zinc-700 border-dashed text-zinc-100 rounded-lg align-middle text-center">Navbar</div>
              <div><ThemeSwitcher /></div>
              <div><LanguageSwitcher /></div>
            </div>
  )
}

export default Header