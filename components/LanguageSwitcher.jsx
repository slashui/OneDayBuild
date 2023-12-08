"use client"
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const LanguageSwitcher = () => {
  const [lang, setLang] = useState("");
  const [imageSrc, setImageSrc] = useState('');
  const [linkPath, setLinkPath] = useState('');

  useEffect(() => {
    const langValue = document.documentElement.getAttribute('lang');
    let src, path;

    switch (langValue) {
      case 'cn':
        src = '/icon/en.svg';
        path = '/en/dashboard';
        break;
      case 'en':
        src = '/icon/cn.svg';
        path = '/cn/dashboard';
        break;
      default:
        src = 'default.svg'; // Just an example, replace with actual default image if necessary
        path = '/';
    }

    setImageSrc(src);
    setLinkPath(path);
  }, []);
  return (
    <div> 
       <a href={linkPath}>
      <img src={imageSrc} width="25px" />
    </a>
     </div>
  )
}

export default LanguageSwitcher