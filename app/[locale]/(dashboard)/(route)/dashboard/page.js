import Image from 'next/image'
import { useTranslations } from "next-intl";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


export default function Home() {
  const t = useTranslations("Index");
  const session = getServerSession(authOptions);
  
  return (
    <div className="w-full h-full  flex  justify-center t-2 bg-[#F5F6FB] dark:bg-black">
    <div className="max-w-[1200px] w-full flex flex-row justify-center"> 
      <div className="w-2/3 px-4">
        <h1 className="text-4xl mt-6 font-bold">Dashboard</h1>
        <div className="w-full pt-1 relative ">
          <div className="absolute right-2 top-0"><img src="/pic/lego.png" /></div>
          <div className="w-full h-[240px] text-black p-6  bg-primary rounded-3xl mt-4">
              <div className="text-lg"><span className="text-4xl mr-2 font-bold">🎉 Hi,Builder</span>Thanks for your choice.</div>
              <div className="w-3/4 mt-4"> 
                I sincerely hope my software proves beneficial for you.<br />
                I've granted you access to the platform's source code on Github; <br />feel free to click the button below to explore the repository.
              </div>
              <div className="flex flex-row">
                <div className=" bg-black my-4 p-2 rounded-full flex flex-row px-4 items-center text-white"><img className="mr-2" src="/icon/github.svg" /> Github</div>
                <div className=" bg-black my-4 p-2 rounded-full flex flex-row px-4 items-center ml-4 text-white"><img className="mr-2" src="/icon/discord.svg" /> Discord</div>
              </div>

          </div>
        </div>
      </div>
      <div className="w-1/3 pt-8">
        <div className="w-full p-4 bg-white dark:bg-[#1f1f1f]  rounded-3xl ml-4">
          ddd <br />ddd <br />ddd <br />ddd <br />ddd <br />ddd <br />
        </div>
      </div>
      </div>
   
  </div>
  )
}
