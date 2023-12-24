import Image from 'next/image'
import { useTranslations } from "next-intl";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import User from '../../components/User';





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
    <div>
      <div id='sessionInfo'></div>
    <div>
      <p>{t("title")}</p>
      <p>{t("subtitle")}</p>
    </div>
    <User />

  </div>
  )
}
