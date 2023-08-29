import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx"
import { TbBrandGoogleAnalytics } from "react-icons/tb"
import { GoTasklist } from "react-icons/go"
import { BsPlusLg } from "react-icons/bs"
import ThemeSwitch from '../../components/interactions/theme'
import Button from '../../components/interactions/button/Button'
import { genTextColor } from '../../helpers/theme'
import { useThemeContext } from '../../contexts/theme'

interface MenuItem {
    icon?: React.ReactNode,
    label?: string | number | React.ReactNode,
    key?: string | number
}

const MENU: MenuItem[] = [
    {
        key: "dashboard",
        label: "Dashboard",
        icon: <RxDashboard className="text-[20px]" />
    },
    {
        key: "analytics",
        label: "Analytics",
        icon: <TbBrandGoogleAnalytics className="text-[20px]" />
    },
    {
        key: "taskList",
        label: "Task List",
        icon: <GoTasklist className="text-[20px]" />
    },
]

const LayoutSidebar = () => {
    const { theme } = useThemeContext();
    const [active, setActive] = useState<number>(0);

    return (
        <aside className='bg-gray-100 p-5 w-[200px] h-full text-center flex flex-col items-center justify-between'>
            <div>
                <div className="logo mb-10 text-lg font-medium">
                    <span className={`${genTextColor(theme)} text-2xl font-bold`}>Task </span>
                    Manager
                </div>

                <div className="w-[150px] mb-5 rounded-2xl flex items-center justify-center gap-3 bg-white p-3 text-gray-600 font-medium cursor-pointer">
                    Create task
                    <Button type='circle' className='hover:scale-125 transition-all drop-shadow-lg'>
                        <BsPlusLg className="text-white" />
                    </Button>
                </div>

                <ul>
                    {MENU.map((item, index) => {
                        return (
                            <li
                                key={item.key}
                                className={`my-2 select-none p-3 flex items-center gap-4 cursor-pointer font-bold ${active === index ? genTextColor(theme) : ""}`}
                                onClick={() => setActive(index)}
                            >
                                {item.icon}
                                <span>
                                    {item.label}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <ThemeSwitch />
        </aside>
    )
}

export default LayoutSidebar