import React from 'react'
import { GoTasklist } from "react-icons/go"
import { LuMoreVertical } from "react-icons/lu"
import Card from '../../../components/data-display/card'

const DashboardGeneral = () => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            <Card
                className='col-span-1 bg-orange-400 shadow-lg shadow-orange-400/50 border-none text-white'
                bodyStyle={{
                    fontSize: 18
                }}
                width={"100%"}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-orange-300 rounded-lg">
                            <GoTasklist className="text-[30px]" />
                        </div>

                        <div className='font-medium'>
                            <p className='capitalize text-[16px]'>
                                Tasks
                            </p>
                            <p className='capitalize text-[16px]'>
                                in progress
                            </p>
                        </div>
                    </div>

                    <LuMoreVertical className='capitalize text-[20px]' />
                </div>

                <div className='mt-4 mb-2 flex items-center gap-2'>
                    <p className='font-bold text-[25px]'>17</p>
                    <p className='capitalize'>- 12% From Yesterday</p>
                </div>
            </Card>

            <Card
                className='col-span-1 bg-indigo-400 shadow-lg shadow-indigo-400/50 border-none text-white'
                bodyStyle={{
                    fontSize: 18
                }}
                width={"100%"}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-indigo-300 rounded-lg">
                            <GoTasklist className="text-[30px]" />
                        </div>

                        <div className='font-medium'>
                            <p className='capitalize text-[16px]'>
                                New
                            </p>
                            <p className='capitalize text-[16px]'>
                                assigned
                            </p>
                        </div>
                    </div>

                    <LuMoreVertical className='capitalize text-[20px]' />
                </div>

                <div className='mt-4 mb-2 flex items-center gap-2'>
                    <p className='font-bold text-[25px]'>17</p>
                    <p className='capitalize'>- 12% From Yesterday</p>
                </div>
            </Card>

            <Card
                className='col-span-1 bg-cyan-400 shadow-lg shadow-cyan-400/50 border-none text-white'
                bodyStyle={{
                    fontSize: 18
                }}
                width={"100%"}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-cyan-300 rounded-lg">
                            <GoTasklist className="text-[30px]" />
                        </div>

                        <div className='font-medium'>
                            <p className='capitalize text-[16px]'>
                                Project
                            </p>
                            <p className='capitalize text-[16px]'>
                                completed
                            </p>
                        </div>
                    </div>

                    <LuMoreVertical className='capitalize text-[20px]' />
                </div>

                <div className='mt-4 mb-2 flex items-center gap-2'>
                    <p className='font-bold text-[25px]'>17</p>
                    <p className='capitalize'>- 12% From Yesterday</p>
                </div>
            </Card>
        </div>
    )
}

export default DashboardGeneral