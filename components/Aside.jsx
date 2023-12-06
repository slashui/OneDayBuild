import React from 'react'
import Link from 'next/link';
import { useTranslations } from "next-intl";

const aside = () => {
    const t = useTranslations("Index");
  return (
    <aside className="flex fixed top-0 left-0 p-4 border-1 border-zinc-700  bg-zinc-200 dark:bg-zinc-800 z-40 w-[310px] h-screen transition-transform -translate-x-full lg:translate-x-0" aria-label="Sidebar">
     <Link href="./dashboard">dashboard</Link><br />
     <br />
    <Link href="./setting">setting</Link>
  </aside>
  )
}

export default aside