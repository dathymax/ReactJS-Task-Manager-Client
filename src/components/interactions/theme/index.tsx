import React from 'react'
import { useThemeContext } from '../../../contexts/theme'
import { AiOutlineCheck } from "react-icons/ai"

const COLORS = [
    {
        color: "red-500",
        key: "red-500"
    },
    {
        color: "green-500",
        key: "green-500"
    },
    {
        color: "blue-500",
        key: "blue-500"
    },
] as { color: string, key: string }[]

const ThemeSwitch = () => {
    const { theme, handleSetTheme } = useThemeContext();

    return (
        <div className='flex items-center justify-center gap-3'>
            {COLORS.map(color => {
                return (
                    <div
                        key={color.key}
                        className={`bg-${color.color} rounded-full w-[30px] h-[30px] cursor-pointer flex items-center justify-center font-bold`}
                        onClick={() => handleSetTheme(color.color)}
                    >
                        {theme === color.color && <AiOutlineCheck className="text-white" />}
                    </div>
                )
            })}
        </div>
    )
}

export default ThemeSwitch