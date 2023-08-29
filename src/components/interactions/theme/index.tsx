import React from 'react'
import { useThemeContext } from '../../../contexts/theme'
import { AiOutlineCheck } from "react-icons/ai"

const COLORS = [
    {
        color: "red",
        key: "red"
    },
    {
        color: "green",
        key: "green"
    },
    {
        color: "blue",
        key: "blue"
    },
] as { color: string, key: string }[]

const Theme = () => {
    const { theme, handleSetTheme } = useThemeContext();

    return (
        <div className='flex items-center justify-center gap-3'>
            {COLORS.map(color => {
                return (
                    <div
                        key={color.key}
                        className={`rounded-full w-[30px] h-[30px] cursor-pointer flex items-center justify-center font-bold`}
                        style={{ background: color.color }}
                        onClick={() => handleSetTheme(color.color)}
                    >
                        {theme === color.color && <AiOutlineCheck className="text-white" />}
                    </div>
                )
            })}
        </div>
    )
}

export default Theme