import React from 'react'
import Tabs, { TabItem } from '../../components/navigation/tabs'
import { CiSearch } from "react-icons/ci"
import Avatar from '../../components/data-display/avatar/Avatar'
import Zoro from "../../assets/images/zoro.jpg"
import { BiBell } from "react-icons/bi"
import { useThemeContext } from '../../contexts/theme'
import { genTextColor } from '../../helpers/theme'

const TABS_ITEMS: TabItem[] = [
    {
        label: "My project",
        key: "myProject"
    },
    {
        label: "Planning",
        key: "planning"
    },
    {
        label: "Team",
        key: "team"
    },
]

const LayoutHeader = () => {
    const { theme } = useThemeContext();

    return (
        <header
            style={{
                width: "calc(100vw - 200px)",
                height: "80px",
                maxHeight: "80px"
            }}
            className='grid grid-cols-12 gap-10 rounded-bl-xl'
        >
            <div className="col-span-9 flex items-center justify-between">
                <div className="pl-10 h-full">
                    <Tabs
                        items={TABS_ITEMS}
                    />
                </div>

                <div className='bg-gray-200 p-3 rounded-xl flex items-center gap-2 w-[350px]'>
                    <CiSearch className="text-xl" />
                    <input type="text" className='outline-none bg-gray-200 w-full' placeholder='Search' />
                </div>
            </div>

            <div className="col-span-3 flex items-center justify-between px-10">
                <div className="flex items-center justify-center gap-3">
                    <Avatar src={Zoro} shape='square' />
                    <div className="account">
                        <p className='font-bold'>Jtadd</p>
                        <span className="text-gray-400 text-[13px]">Project manager</span>
                    </div>
                </div>
                <BiBell className={`text-2xl ${genTextColor(theme)}`} />
            </div>
        </header>
    )
}

export default LayoutHeader