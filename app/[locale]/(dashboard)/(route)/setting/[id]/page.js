
import { FormEvent } from 'react';
import EditUser from '@/components/EditUser';
import { NextIntlClientProvider } from 'next-intl';
import { useTranslations } from "next-intl";


export default function UserPage({params: {id}}) {
    const t = useTranslations('Setting');
    const settingsTexts = {
        settingsTitle: t('Settings'),
        usernameLabel: t('Username'),
        saveButton: t('Save'),
        emailLabel: t('Email'),
        homePageLabel: t('HomePage'),
        homePageDescription: t('HomePageD'),
        aboutYouLabel: t('AboutYou'),
        aboutYouDescription: t('AboutYouD'),
        githubNameLabel: t('GithubName'),
        twitterNameLabel: t('TwitterName'),
      };
     
    return (
        
    
         <div className="w-full h-full  flex  justify-center items-start  bg-[#F5F6FB] dark:bg-black">
            <div className="max-w-[1200px] p-6 w-full flex flex-col justify-center"> 
            
                <h1 className="text-4xl font-bold">{t('Settings')}</h1>
                <div className="w-full mt-4 pt-1 relative mb-32 bg-white border border-zinc-200 dark:border-zinc-800 rounded-xl p-8  dark:bg-[#1d1e20]">
                
                    <EditUser userData={id} texts={settingsTexts} />
                   
                </div>
            
            </div>
           
            </div>
   

    )

}