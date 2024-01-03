"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const showpath = () => {
    const router = useRouter();
    let currentURL = '';
    currentURL = window ? `${window.location.origin}${router.asPath}` : router.asPath;
    console.log(currentURL)
    
//     const lastPart = pathname.split('/').pop();
//     return lastPart;
}

export default showpath