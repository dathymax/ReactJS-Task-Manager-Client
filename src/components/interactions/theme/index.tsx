import React, { useContext } from 'react'
import { IThemeContext, ThemeContext } from '../../../contexts/theme'

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
] as { color?: string, key?: string }[]

const Theme = () => {
    const { handleSetTheme } = useContext<IThemeContext | null>(ThemeContext);

    return (
        <div className='flex items-center justify-center gap-3'>
            {COLORS.map(color => {
                return (
                    <div
                        className={`rounded-full w-[20px] h-[20px] cursor-pointer`}
                        style={{ background: color.color }}
                        onClick={() => handleSetTheme(color.color)}
                    />
                )
            })}
        </div>
    )
}

export default Theme