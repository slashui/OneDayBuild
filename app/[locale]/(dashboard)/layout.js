import { Inter } from 'next/font/google'
import '../globals.css'
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Aside from '@/components/Aside';
import Header from '@/components/Header'
import Providers from '@/libs/themes/providers';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, params }) {
  const locale = useLocale();
  console.log('locale', locale);
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
      <Providers> 
      <div className="flex flex-row w-full h-screen">
      <div className="w-[250px] md:block hidden flex-none">
          <Aside />
      </div>
          <div className="flex-1 overflow-auto h-screen w-full bg-zinc-200 dark:bg-black">
            <Header /> 
            {/* <ThemeSwitcher /> */}
            <div className="bg-slate-100 " >
            {children}         
            </div>
          </div>
        </div>
        </Providers>
      </body>
    </html>
  )
}
