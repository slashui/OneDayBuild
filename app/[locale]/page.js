import Image from 'next/image'
import { useTranslations } from "next-intl";



export default function Home() {
  const t = useTranslations("Index");
  return (
    <div>
    <div>
     
      <br />
      <br />
    </div>
    <div>
      <p>{t("title")}</p>
      <p>{t("subtitle")}</p>
    </div>

  </div>
  )
}
