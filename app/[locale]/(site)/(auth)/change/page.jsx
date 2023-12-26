"use client"
import React from 'react'
import ChangeM from '@/components/Change';
import OTPinput from '@/components/OTPinput';
import Reset from '@/components/Reset';
import { createContext } from 'react';
import { useState } from 'react';

export const RecoveryContext = createContext(); 

const Change = () => {

  const [page, setPage] = useState("ChangeM");
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState();

  function NavigateComponents(){
    if (page === "ChangeM") return <ChangeM />;
    if (page === "otp") return <OTPinput />;
    if (page === "reset") return <Reset />;
    return <Recovered />;
  }
  

  return (
    <RecoveryContext.Provider value={{ page, setPage, otp, setOTP,setEmail, email }}>
    <NavigateComponents />


   </RecoveryContext.Provider>

  )
}

export default Change