import React from 'react'
import DashboardGeneral from './components/General'
import Tabs, { TabItem } from '../../components/navigation/tabs'

const TABS_ITEMS: TabItem[] = [
    {
        label: "In progress",
        key: "inProgress",
        children: "inProgress"
    },
    {
        label: "New assigned",
        key: "newAssigned",
        children: "newAssigned"
    },
    {
        label: "Completed",
        key: "completed",
        children: "completed"
    },
]

const Dashboard = () => {
    return (
        <div className='grid grid-cols-3 gap-10 h-full'>
            <div className="col-span-2 pl-10 py-5">
                <DashboardGeneral />
                <h2 className='font-medium text-[25px] mt-[50px] mb-4'>My Tasks</h2>
                <div>
                    <Tabs items={TABS_ITEMS} hasActiveEffect />
                </div>
            </div>

            <div className="col-span-1 border-l">
                <div className="px-10">
                    123
                </div>
            </div>
        </div>
    )
}

export default Dashboard