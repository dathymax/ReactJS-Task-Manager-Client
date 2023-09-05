import React, { FC, useState } from 'react'
import { useThemeContext } from '../../../contexts/theme'
import { genBorderColor, genTextColor } from '../../../helpers/theme'

export interface TabItem {
    label?: string | number | React.ReactNode,
    icon?: React.ReactNode,
    key?: string,
    children?: React.ReactNode
}

interface TabsProps extends React.HTMLProps<HTMLDivElement> {
    items: TabItem[],
    hasActiveEffect?: boolean,
    onTabChange?: (key?: string) => void
}

const Tabs: FC<TabsProps> = ({ items, hasActiveEffect = false, onTabChange = (key?: string) => { } }) => {
    const { theme } = useThemeContext();
    const [active, setActive] = useState<number>(0);

    return (
        <>
            <ul className={`list-none flex items-center gap-10 h-full ${hasActiveEffect ? "border-b" : ""}`}>
                {items.map((item, index) => {
                    return (
                        <li
                            key={item.key}
                            className={`${hasActiveEffect && "pb-4"} h-full transition-all text-[20px] cursor-pointer font-medium inline-flex items-center gap-3 border-b-2 ${active === index ? `${genTextColor(theme)} ${genBorderColor(theme)}` : "text-gray-400 border-transparent"}`}
                            onClick={() => {
                                setActive(index)
                                if (onTabChange) {
                                    onTabChange(item.key)
                                }
                            }}
                        >
                            {item.icon}
                            {item.label}
                        </li>
                    )
                })}
            </ul>

            <div className="my-5">
                {items[active].children}
            </div>
        </>
    )
}

export default Tabs