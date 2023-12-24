"use client"
import { FormEvent, useState } from 'react';
import EditUser from '@/components/EditUser';


export default function UserPage({params: {id}}) {

    return (
        <>
         <div className="w-full h-full  flex  justify-center  bg-[#F5F6FB] dark:bg-black">
            <div className="max-w-[1200px] p-6 w-full flex flex-col justify-center"> 
            
                <h1 className="text-4xl font-bold">Settings</h1>
                <div className="w-full mt-4 pt-1 relative ">
                    <EditUser userData={id}/>
                </div>
            
            </div>
            </div>
        </>

    )

}