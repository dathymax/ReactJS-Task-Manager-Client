import React, { FC, useState } from 'react'

export interface TabItem {
    label?: string | number | React.ReactNode,
    icon?: React.ReactNode,
    key?: string | number,
    children?: React.ReactNode
}

interface TabsProps extends React.HTMLProps<HTMLDivElement> {
    items: TabItem[]
}

const Tabs: FC<TabsProps> = ({ items }) => {
    const [active, setActive] = useState<number>(0);

    return (
        <ul className='list-none flex items-center gap-10'>
            {items.map((item, index) => {
                return (
                    <li
                        key={item.key}
                        className={`text-[20px] cursor-pointer font-medium inline-flex items-center gap-3 text-gray-400 ${active === index && "text-black"}`}
                        onClick={() => setActive(index)}
                    >
                        {item.icon}
                        {item.label}
                    </li>
                )
            })}
        </ul>
    )
}

export default Tabs