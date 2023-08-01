import React, { useContext } from 'react'
import { CiLight, CiDark } from "react-icons/ci"
import { AiOutlineDesktop } from "react-icons/ai"
import { LayoutContext } from '../../contexts/LayoutContext'

const themeOptions = [
    {
        icon: <CiLight className="text-[20px]" />,
        type: "light",
    },
    {
        icon: <CiDark className="text-[20px]" />,
        type: "dark",
    },
    {
        icon: <AiOutlineDesktop className="text-[20px]" />,
        type: "system",
    },
]

const DarkLightToggle = () => {
    const { theme, setTheme } = useContext(LayoutContext);

    return (
        <div className="p-1 bg-gray-300 flex items-center justify-between rounded-xl gap-[5px]">
            {themeOptions.map(opt => {
                return (
                    <button
                        key={opt.type}
                        onClick={() => setTheme(opt.type)}
                        className={`${theme === opt.type && "bg-gray-500 text-white"} transition-all flex w-[30%] items-center justify-center text-[11px] gap-[5px] px-2 rounded-xl py-1`}
                    >
                        {opt.icon}
                    </button>
                )
            })}
        </div>
    )
}

export default DarkLightToggle