import React, { useContext } from 'react'
import Dropdown from '../../components/dropdown'
import Menu from '../../components/menu'
import { CiGrid42 } from "react-icons/ci"
import { BsListTask } from "react-icons/bs"
import DarkLightToggle from '../../components/dark-light/index'
import { LayoutContext } from '../../contexts/LayoutContext'

const SideBar = () => {
    const { theme } = useContext(LayoutContext);

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
        <aside className={`${theme === "light" ? "bg-white" : "bg-gray-800"} p-4 border-r border-gray-300 h-screen w-[250px] flex items-center flex-col justify-between`}>
            <div className="w-full">
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
            </div>

            <div className="w-full">
                <DarkLightToggle />
            </div>
        </aside>
    )
}

export default SideBar