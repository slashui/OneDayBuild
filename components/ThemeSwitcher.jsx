"use client";
import { useTheme } from "next-themes";
import React, { useState } from 'react';

const ThemeSwitcher = () => { 
    const { theme, setTheme } = useTheme();

    return(
        <div className="mt-1 p-2 pb-1 rounded-full bg-slate-300/20 hover:bg-slate-300/40">
            {/* The current theme is: {theme} */}
            {theme === "light" ? (
                <button onClick={() => setTheme("dark")}><img src="/icon/sun.svg" width="25px"  /></button>
            ) : (
                <button onClick={() => setTheme("light")}><img src="/icon/moon.svg" className="fill-red-800" width="25px" /></button>
            )}
            
        </div>
    );
};
export default ThemeSwitcher;