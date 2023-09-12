import React from 'react'
import Tabs, { TabItem } from '../../../components/navigation/tabs'
import Avatar from '../../../components/data-display/avatar/Avatar'
import Zoro from "../../../assets/images/zoro.jpg"
import Notification from '../../../components/feedback/notification'
import InputSearch from '../../../components/data-entry/input/Search'

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

const DashboardHeader = () => {
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

                <InputSearch width={350} />
            </div>

            <div className="col-span-3 flex items-center justify-between px-10">
                <div className="flex items-center justify-center gap-3">
                    <Avatar src={Zoro} shape='square' />
                    <div className="account">
                        <p className='font-bold'>Jtadd</p>
                        <span className="text-gray-400 text-[13px]">Project manager</span>
                    </div>
                </div>
                <Notification />
            </div>
        </header>
    )
}

export default DashboardHeader