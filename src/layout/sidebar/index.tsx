import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx"
import { TbBrandGoogleAnalytics } from "react-icons/tb"
import { GoTasklist } from "react-icons/go"
import { BsPlusLg } from "react-icons/bs"
import { useThemeContext } from '../../contexts/theme'
import ThemeSwitch from '../../components/interactions/theme'
import Button from '../../components/interactions/button/Button'

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
        <aside className='p-5 w-[200px] h-full text-center flex flex-col items-center justify-between'>
            <div>
                <div className="w-[150px] rounded-lg flex items-center justify-center gap-3 bg-gray-200 p-3 text-gray-600 font-medium cursor-pointer">
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
                                className={`my-2 select-none p-3 flex items-center gap-4 cursor-pointer font-bold ${active === index ? `text-${theme}` : ""}`}
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