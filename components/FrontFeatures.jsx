"use client"
import React from 'react'
import { useState } from 'react';

const FrontFeatures = () => {
const gridItems = [
    'Auth', 'Payment', 'Emails',
    'AI', '', 'AgentUI',
    'SEO', 'User', 'More',
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="container flex flex-col justify-center p-6 mx-auto  w-full max-w-7xl">
        <div className='w-full'>
            <h1 className='lg:text-4xl justify-center mx-auto flex font-inter font-bold'>What a Day's Build Yields with OneDayBuild</h1>
            <div className='w-full flex justify-center'><img src='/pic/Vectorline.svg' /></div>
            </div>
    <div className="flex mt-16">
    <div className="grid grid-cols-3 gap-2 w-2/5">
    
        {gridItems.map((text, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            className="w-40 h-40  bg-gray-200 dark:bg-black border-2 dark:border-zinc-800 dark:hover:border-primary rounded-lg  hover:bg-gray-400 cursor-pointer flex flex-col gap-2 justify-center items-center"
          >
            <img src={`/icon/index${index + 1}.svg`} alt={text} className=" max-w-full max-h-full" />
            <span className='font-inter text-2xl font-thin'>{text}</span>
          </div>
        ))}
      </div>
      <div className="pl-8 w-3/5">
      <div style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
          <h2 className='font-inter text-5xl '>Authentification</h2>
          <p className='text-primary text-xl font-inter'>saved 8 hours</p>
            <ul className='list-disc list-inside mt-8 space-y-4'>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Next-Auth's foundational code deployment completed.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />MetaMask login support enabled.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />User registration and login implemented with username/password.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Seamless integration of third-party logins (Google, GitHub, etc.).</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Password recovery and email verification features established.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Secure storage of user information in MongoDB.</li>
            </ul>
        </div>
        <div style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
        <h2 className='font-inter text-5xl '>Payments</h2>
          <p className='text-primary text-xl font-inter'>saved 6 hours</p>
            <ul className='list-disc list-inside mt-8 space-y-4'>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Next-Auth's foundational code deployment completed.</li>
                </ul>
        </div>
        <div style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
        <h2 className='font-inter text-5xl '>Emails</h2>
          <p className='text-primary text-xl font-inter'>saved 3 hours</p>
            <ul className='list-disc list-inside mt-8 space-y-4'>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Take advantage of Resend with up to 1000  emails per month.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Dispatch emails to users under your unique domain name.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Integrate seamlessly with APIs that connect to Resend.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Access straightforward tutorials for effortless API implementation.</li>

            </ul>
        </div>
        <div style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
        <h2 className='font-inter text-5xl '>AI</h2>
          <p className='text-primary text-xl font-inter'>saved 4 hours</p>
            <ul className='list-disc list-inside mt-8 space-y-4'>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Offers a chat template akin to ChatGPT for conversational interfaces.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Integration with GPT's API for seamless AI interactivity.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Utilizes AI methods to generate engaging content.</li>

            </ul>
        </div>
        <div style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
        <h2 className='font-inter text-7xl '>1Week</h2>
         
           
        </div>
        <div style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
        <h2 className='font-inter text-5xl '>agentUI</h2>
          <p className='text-primary text-xl font-inter'>saved 8 hours</p>
            <ul className='list-disc list-inside mt-8 space-y-4'>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Complete source code for the Landing Page.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Comprehensive codebase for the Dashboard interface.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />An extensive selection of UI components and AI-driven application modules available for use.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />All-encompassing code repository for Documentation purposes.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Dark/light theme switch</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />UI components will be incrementally introduced for seamless integration.</li>
            </ul>
        </div>
        <div style={{ display: activeIndex === 6 ? 'block' : 'none' }}>
        <h2 className='font-inter text-5xl '>SEO</h2>
          <p className='text-primary text-xl font-inter'>saved 4 hours</p>
            <ul className='list-disc list-inside mt-8 space-y-4'>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />All meta tags to rank on Google</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />OpenGraph tags to share on social media</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Automated sitemap generation to fasten Google indexing</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />GoogleAnaliyics</li>

            </ul>
        </div>
        <div style={{ display: activeIndex === 7 ? 'block' : 'none' }}>
        <h2 className='font-inter text-5xl '>User System</h2>
          <p className='text-primary text-xl font-inter'>saved 8 hours</p>
            <ul className='list-disc list-inside mt-8 space-y-4'>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Offers a user profile interface for personalized experiences."</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Includes user level differentiation to cater to varying privileges.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Features comprehensive personal information fields for detailed profiles.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Enables users to edit their own profiles for up-to-date information.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Secures personal data storage within MongoDB.</li>

            </ul>
        </div>
        <div style={{ display: activeIndex === 8 ? 'block' : 'none' }}>
        <h2 className='font-inter text-5xl '>more</h2>
          <p className='text-primary text-xl font-inter'>saved 4 hours</p>
            <ul className='list-disc list-inside mt-8 space-y-4'>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Access comprehensive development documentation, rich with detail.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Leverage AI-driven chatbots to assist in your website development process.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Utilize ready-to-use code templates for rapid development.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Automate the generation of TERMS and POLICIES with tailored GPT-3 prompts.</li>
                <li className='flex flex-row gap-3 text-xl'><img src='/icon/check-icon.svg' />Join our Discord community for support, collaboration, and networking.</li>

            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FrontFeatures