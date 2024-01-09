import Image from 'next/image'
import { useTranslations } from "next-intl";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import User from '../../components/User';
import Send from '@/components/Send';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Pricelist from '@/components/Pricelist';
import FrontHero from '@/components/FrontHero';
import FrontFeatures from '@/components/FrontFeatures';
import FrontStepper from '@/components/FrontStepper';
import FrontAboutme from '@/components/FrontAboutme';
import FrontPrice from '@/components/FrontPrice';


export default function Home() {
  const t = useTranslations("Index");
  const session = getServerSession(authOptions);
  // console.log(JSON.stringify(session))

  async function fetchAndPrintSession() {
    try {
      const session = await getServerSession(authOptions); 
      const sessionInfoElement = document.getElementById('sessionInfo');
      sessionInfoElement.innerHTML = JSON.stringify(session);
      console.log(JSON.stringify(session))
    } catch (error) {
      console.error('Error fetching session:', error);
    }
  }
  

  fetchAndPrintSession();
  return (
    <>
    <div className='w-full bg-primary dark:bg-black'><FrontHero /></div>
    
    <FrontFeatures />
    <div className='w-full bg-[#e8cde5] dark:bg-black'><FrontStepper /></div>
    <FrontAboutme />
    <FrontPrice />
    <ThemeSwitcher />

    <div className='hidden'>
      
      
      <Send />
      <div id='sessionInfo'></div>
    <div>
      <p>{t("title")}</p>
      <p>{t("subtitle")}</p>
    </div>
    <User />
    <Pricelist />
  </div>

  </>
  )
}
