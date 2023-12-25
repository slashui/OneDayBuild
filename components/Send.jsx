"use client"
import React from 'react'
import { useState } from 'react'

const send = () => {

    const [data, setData] = useState({
        
        email: "slashui@Live.cn",
        OTP:"3456"
    });

    const sendEmail = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.status === 200) {
            alert("Message Sent.");
            
        }
    }
  return (
    <div>
        <button onClick={sendEmail}>send</button>
    </div>
  )
}

export default send