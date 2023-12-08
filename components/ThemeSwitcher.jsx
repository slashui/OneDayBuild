"use client";
import { useTheme } from "next-themes";
import React, { useState } from 'react';

const ThemeSwitcher = () => { 
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };
    return(
        <div>
            {theme === 'dark' ? (
                <button onClick={toggleTheme}><img src="/icon/sun.svg" width="25px" /></button>
            ) : (
                <button onClick={toggleTheme}><img src="/icon/moon.svg" width="25px" /></button>
            )}
        </div>
    );
};
export default ThemeSwitcher;