import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx"
import { TbBrandGoogleAnalytics } from "react-icons/tb"
import { GrTask } from "react-icons/gr"
import Theme from '../../components/interactions/theme'

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
        icon: <GrTask className="text-[20px]" />
    },
]

const LayoutSidebar = () => {
    const [active, setActive] = useState<number>(0);

    return (
        <aside className='p-3'>
            <ul>
                {MENU.map((item, index) => {
                    return (
                        <li
                            key={item.key}
                            className={`my-2 select-none p-3 flex items-center gap-4 cursor-pointer font-bold ${active === index && "text-green-500"}`}
                            onClick={() => setActive(index)}
                        >
                            {item.icon}
                            <span>
                                {item.label}
                            </span>
                        </li>
                    )
                })}

                <Theme />
            </ul>
        </aside>
    )
}

export default LayoutSidebar