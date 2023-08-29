import React from 'react'
import Tabs, { TabItem } from '../../components/navigation/tabs'
import { CiSearch } from "react-icons/ci"

const TABS__ITEMS: TabItem[] = [
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
    return (
        <header
            style={{
                width: "calc(100vw - 200px)",
                height: "80px",
                maxHeight: "80px"
            }}
            className='flex items-center px-5 rounded-bl-xl'
        >
            <div className="flex items-center gap-10">
                <Tabs
                    items={TABS__ITEMS}
                />

                <div className='bg-gray-200 p-3 rounded-xl flex items-center gap-2 w-[350px]'>
                    <CiSearch className="text-xl" />
                    <input type="text" className='outline-none bg-gray-200 w-full' placeholder='Search' />
                </div>
            </div>
        </header>
    )
}

export default LayoutHeader