import React from 'react'
import Dropdown from '../../components/dropdown'
import Menu from '../../components/menu'
import { CiGrid42 } from "react-icons/ci"
import { BsListTask } from "react-icons/bs"

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
                    key: "taskList",
                    label: "Task List",
                    icon: <BsListTask className="text-[20px]" />
                },
            ]
        },
    ]

    return (
        <aside className='p-4 bg-white border-r border-gray-300 h-screen w-[250px]'>
            <p className='text-[1.7rem] font-[600] m-0 leading-[2.2rem]'>
                <span className='text-orange-400'>Task</span>
                manager
            </p>
            <span className='text-[12px]'>
                Focus, Working and Learning
            </span>

            <hr className='my-5' />

            <Dropdown
                items={dropdownItems}
                onClickMenu={(key) => {
                    console.log(key)
                }}
            >
                Dropdown
            </Dropdown>

            <hr className='my-5' />

            <Menu
                items={menuItems}
            />
        </aside>
    )
}

export default SideBar