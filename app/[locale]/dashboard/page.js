import Image from 'next/image'
import { useTranslations } from "next-intl";



export default function Home() {
  const t = useTranslations("Index");
  
  return (
    <div>
      <div className="text-red-800 dark:text-green-800">Hello world!</div>
    <div>
      <a href="/en" locale="en">
        In english
      </a>{" "}
      |{" "}
      <a href="/fi" locale="fi">
        In Finnish
      </a>
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
