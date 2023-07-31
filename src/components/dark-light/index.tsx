import React, { useContext, useState } from 'react'
import { CiLight, CiDark } from "react-icons/ci"
import { LayoutContext } from '../../contexts/LayoutContext'

const DarkLightToggle = () => {
    const { theme, setTheme } = useContext(LayoutContext);

    return (
        <div className="p-1 bg-gray-300 flex items-center justify-between rounded-xl gap-[5px]">
            <button
                onClick={() => setTheme("light")}
                className={`${theme === "light" ? "bg-white" : ""} transition-all flex w-[50%] items-center justify-center text-[15px] gap-[5px] block px-2 rounded-xl py-1`}
            >
                <CiLight className="text-[20px]" />Light
            </button>

            <button
                onClick={() => setTheme("dark")}
                className={`${theme === "dark" ? "bg-gray-500 text-white" : ""} transition-all flex w-[50%] items-center justify-center text-[15px] gap-[5px] block px-2 rounded-xl py-1`}
            >
                <CiDark className="text-[20px]" />Dark
            </button>
        </div>
    )
}

export default DarkLightToggle