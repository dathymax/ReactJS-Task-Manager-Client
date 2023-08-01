import React from 'react'
import Dropdown from '../../components/dropdown'
import Menu from '../../components/menu'
import { HiOutlineCalendarDays } from "react-icons/hi2"
import { CiGrid42 } from "react-icons/ci"
import { BsListTask } from "react-icons/bs"
import DarkLightToggle from '../../components/dark-light/index'

const SideBar = () => {
    const dropdownItems = [
        {
            key: "1",
            label: "1",
        },
        {
            key: "2",
            label: "2",
        },
        {
            key: "3",
            label: "3",
        },
    ]

    const menuItems = [
        {
            key: "menu",
            label: "Menu",
            children: [
                {
                    key: "overview",
                    label: "Overview",
                    icon: <CiGrid42 className="text-[20px]" />
                },
                {
                    key: "task-list",
                    label: "Task List",
                    icon: <BsListTask className="text-[20px]" />
                },
                {
                    key: "calendar",
                    label: "Calendar",
                    icon: <HiOutlineCalendarDays className="text-[20px]" />
                },
            ]
        },
    ]

    return (
        <aside className={`dark:bg-gray-500 dark:text-white p-4 border-r border-gray-300 h-screen w-[250px] flex items-center flex-col justify-between`}>
            <div className="w-full">
                <p className='text-[1.7rem] font-[600] m-0 leading-[2.2rem]'>
                    <span className='text-orange-400 text-[1.7rem]'>Task</span>
                    manager
                </p>
                <span className='text-[12px]'>
                    Focus, Working and Learning
                </span>

                <hr className='my-5' />

                <div className="border border-gray-300 p-3 rounded-xl">

                    <div className="flex items-center justify-center gap-[10px]">
                        <img src="https://beebom.com/wp-content/uploads/2023/05/zoro-family-mother-and-father-name-one-piece.jpg" alt="Avatar" className='w-[35px] h-[35px] rounded-full object-cover' />
                        <div className='text-[14px] m-0 font-medium'>
                            <Dropdown
                                items={dropdownItems}
                                onClickMenu={(key) => {
                                    console.log(key)
                                }}
                            >
                                Do Tuan Dat
                            </Dropdown>
                            <p className='text-[11px] dark:text-white text-gray-500 m-0' title='dathymax@gmail.com'>
                                dathymax@gmail.com
                            </p>
                        </div>
                    </div>

                </div>

                <hr className='my-5' />

                <Menu
                    items={menuItems}
                />
            </div>

            <div className="w-full">
                <DarkLightToggle />
            </div>
        </aside >
    )
}

export default SideBar