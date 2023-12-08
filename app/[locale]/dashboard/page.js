import Image from 'next/image'
import { useTranslations } from "next-intl";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


export default function Home() {
  const t = useTranslations("Index");
  const session = getServerSession(authOptions);

  return (
    <div>
      <div className="text-red-800 dark:text-green-800">Hello world!</div>
      {/* <pre>{JSON.stringify(session)}</pre> */}
    <div>
      <p>{t("title")}</p>
      <p>{t("subtitle")}</p>
    </div>

  </div>
  )
}
