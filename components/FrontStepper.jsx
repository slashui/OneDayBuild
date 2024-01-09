"use client"
import React from 'react'
import { useState } from 'react';

const FrontStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = 4; // 总步骤数
  
  const getContentStyle = (index) => {
    return {
      transform: `translateX(-${index * 100}%)`,
      transition: 'transform 0.5s ease-in-out'
    };
  };
  const stepTitles = ['Get APIs', 'Config', 'Testing', 'Finish.'];
 
  return (
    <div className="container flex flex-col justify-center p-6 mx-auto  w-full max-w-7xl">
    <div className='w-full'>
        <h1 className='lg:text-4xl justify-center mx-auto flex font-inter font-bold'>Can it really be built in one day?</h1>
        </div>
        

        <div className="container mx-auto p-4 ">
      {/* Stepper navigation */}
      <div className="flex items-center justify-center mb-4 w-2/3 mt-6 mx-auto">
        {/* Stepper dots and lines */}
        {[...Array(steps)].map((_, index) => (
          <React.Fragment key={index}>
            <div>
            <div 
              className={`w-16 h-16 flex relative justify-center font-inter items-center text-4xl rounded-full border mx-auto cursor-pointer ${index <= activeStep ? 'bg-primary text-black' : 'text-primary/50 border-primary/50'}`}
              onClick={() => setActiveStep(index)}
            >{index + 1}</div>
            <div className={`absolute flex justify-center items-center mt-2 ${index <= activeStep ? ' text-primary font-bold' : 'text-primary/50 border-primary/50'}`}>{stepTitles[index]}</div></div>
            {index < steps - 1 && (
              <div 
                className={`flex-grow h-1 bg-gray-300/50 relative`}>
                  <div 
                    className={`absolute top-0 left-0 w-full h-1 ${index < activeStep ? 'bg-primary' : 'bg-gray-300/50'} transition-width duration-500`}
                    style={{width: index < activeStep ? '100%' : '0%'}}
                  ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Content area */}
      <div className="overflow-hidden mt-12"> {/* This div forces the content area to only show the current step */}
        <div className="flex">
          
            <div key="0" style={getContentStyle(activeStep)} className="min-w-full p-8 bg-[#d9d9d9]/10 flex flex-row rounded-2xl ">
             <div className='w-1/2'>
              <h2 className='font-inter text-3xl text-primary mb-2'>Acquired APIs</h2>
              <p className='text-xl'>Before building the platform, it is necessary to register 
with and obtain API keys from third-party platforms that 
support the development process. These API keys will be 
used as environment variables for platform construction.
Please refer to the directory on the right for registration 
and obtaining the API keys. A detailed registration tutorial 
will be provided soon.</p>
             </div>
             <div className='w-1/2 pl-16 flex flex-row h-full'>
              <div>
              <div className='mr-16'>
                <h2 className='font-inter text-2xl my-2'>Auth</h2>
                <a className='px-4 py-1 text-black hover:bg-[#8F6CEF]/80 bg-[#8F6CEF] rounded-full inline-block max-w-min mr-2'>Github</a>
                <a className='px-4 py-1 text-black hover:bg-[#F75F8F]/80 bg-[#F75F8F] rounded-full inline-block max-w-min'>Google</a>
              </div>
              <div className='mt-8'>
                <h2 className='font-inter text-2xl my-2'>Email</h2>
                <a className='px-4 py-1 text-black hover:bg-[#92E3A9]/80 bg-[#92E3A9] rounded-full inline-block max-w-min mr-2'>Resend</a>
              </div>
              </div>
              <div><div >
                <h2 className='font-inter text-2xl my-2'>Database</h2>
                <a className='px-4 py-1 text-black hover:bg-[#EFD26C]/80 bg-[#EFD26C] rounded-full inline-block max-w-min mr-2'>MangoDB</a>
               
              </div>
              <div className='mt-8'>
                <h2 className='font-inter text-2xl my-2'>Payment</h2>
                <a className='px-4 py-1 text-white hover:bg-[#635BFF]/80 bg-[#635BFF] rounded-full inline-block max-w-min mr-2'>Stripe</a>
               
              </div></div>
             </div>
            </div>
            <div key="1" style={getContentStyle(activeStep)} className="min-w-full bg-[#d9d9d9]/10 p-8 flex flex-row ">
             <div className='w-1/2'>
             <h2 className='font-inter text-3xl text-primary mb-2'>Config</h2>
              <p className='text-xl'>You need to configure basic information for the application on the platform, such as the website name, theme color, etc. By doing so, you can quickly obtain an app platform that belongs to you.</p>
             </div>
             <div className='w-1/2 h-32 rounded-xl flex justify-center items-center relative'><img src='/pic/config.svg' className='rounded-2xl w-full absolute top-[-70px]'/></div>
            </div>
            <div key="2" style={getContentStyle(activeStep)} className="min-w-full bg-[#d9d9d9]/10 p-8 flex flex-row ">
              
            <div className='w-1/2'>
             <h2 className='font-inter text-3xl text-primary mb-2'>Testing</h2>
              <p className='text-xl'>Within the root directory of the program provided to you, there will be a file named Testing.md. It details the directory structure and functional points. You can follow the guidance of this file to test the features offered by the platform one by one. There may be some features that you do not need, please delete them as necessary.</p>
             </div>
             <div className='w-1/2 h-32 rounded-xl flex justify-center items-center relative'><img src='/pic/doctor.svg' className='rounded-2xl w-full absolute top-[-130px]'/></div>
            


            </div>
            <div key="3" style={getContentStyle(activeStep)} className="min-w-full bg-[#d9d9d9]/10 p-8 flex flex-row">
             
             
            <div className='w-1/2'>
             <h2 className='font-inter text-3xl text-primary mb-2'>Waiting for launch</h2>
              <p className='text-xl'>The basic platform setup can be completed in just one day, and should you encounter any issues, I am here to help you resolve them. You only need to focus on the application you want to build itself, rather than wasting time on the underlying platform. <span className='font-bold font-inter text-primary'>Good luck.</span></p>
             </div>
             <div className='w-1/2 h-32 rounded-xl flex justify-center items-center relative'><img src='/pic/lunch.svg' className='rounded-2xl w-full absolute top-[-150px]'/></div>
            

            </div>
         
        </div>
      </div>
      
    </div>


        </div>
  )
}

export default FrontStepper