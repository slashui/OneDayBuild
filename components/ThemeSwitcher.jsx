"use client";
import { useTheme } from "next-themes";
import React, { useState } from 'react';
import config from "@/config";

const ThemeSwitcher = () => { 
    const { theme, setTheme } = useTheme(config.colors.theme);

    return(
        <div className="mt-2 p-2 pb-1 w-10 m-2 h-10 rounded-full border dark:border-zinc-700 border-zinc-200 bg-white dark:bg-zinc-600/20 hover:dark:bg-zinc-600/40 hover:bg-zinc-100">
            {/* The current theme is: {theme} */}
            {theme === "light" ? (
                <button onClick={() => setTheme("dark")}><img src="/icon/sun.svg" width="32px"  /></button>
            ) : (
                <button onClick={() => setTheme("light")}><img src="/icon/moon.svg" className="fill-red-800" width="32px" /></button>
            )}
            
        </div>
    );
};
export default ThemeSwitcher;