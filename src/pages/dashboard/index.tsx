import React from 'react'
import DashboardGeneral from './components/General'

const Dashboard = () => {
    return (
        <div className='grid grid-cols-3 gap-10 h-full'>
            <div className="col-span-2 pl-10 py-5">
                <DashboardGeneral />
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