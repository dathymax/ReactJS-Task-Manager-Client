import React, { useState } from 'react'
import DashboardGeneral from './components/General'
import Tabs, { TabItem } from '../../components/navigation/tabs'
import TaskList from './components/TaskList'
import DashboardTeams from './components/Teams'
import Divider from '../../components/layout/divider'
import Calendar from '../../components/data-display/calendar'

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>("inProgress");

    const TABS_ITEMS: TabItem[] = [
        {
            label: "In progress",
            key: "inProgress",
            children: <TaskList activeTab={activeTab} />
        },
        {
            label: "New assigned",
            key: "newAssigned",
            children: <TaskList activeTab={activeTab} />
        },
        {
            label: "Completed",
            key: "completed",
            children: <TaskList activeTab={activeTab} />
        },
    ]

    const onTabChange = (key?: string) => {
        setActiveTab(key);
    }

    return (
        <div className='grid grid-cols-12 gap-10 h-full'>
            <div className="col-span-9 pl-10 py-10">
                <DashboardGeneral />
                <h2 className='font-medium text-[25px] mt-[50px] mb-4'>My Tasks</h2>
                <div>
                    <Tabs items={TABS_ITEMS} hasActiveEffect onTabChange={onTabChange} />
                </div>
            </div>

            <div className="col-span-3 border-l">
                <div className="p-10">
                    <DashboardTeams />
                    <Divider />
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage