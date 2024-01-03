"use client"
import { FormEvent, useState } from 'react';
import EditUser from '@/components/EditUser';



export default function UserPage({params: {id}}) {

    return (
    
         <div className="w-full h-full  flex  justify-center py-32  bg-[#F5F6FB] dark:bg-black">
            <div className="max-w-[1200px] p-6 w-full flex flex-col justify-center"> 
            
                <h1 className="text-4xl font-bold">Settings</h1>
                <div className="w-full mt-4 pt-1 relative mb-32 bg-white border border-zinc-200 dark:border-zinc-800 rounded-xl p-8  dark:bg-[#1d1e20]">
                    <EditUser userData={id}/>
                </div>
            
            </div>
           
            </div>
   

    )

}