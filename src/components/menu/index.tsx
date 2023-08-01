import React, { FC, useState } from 'react'
import { MenuItemType } from '../../types'
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { useLocation, useNavigate } from 'react-router-dom'

type MenuProps = {
    items?: MenuItemType[],
    onClickMenu?: (key: string) => void,
    className?: string
}

const Menu: FC<MenuProps> = ({ items, onClickMenu = () => { } }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [activeKey, setActiveKey] = useState<string>("");
    const [activeMenu, setActiveMenu] = useState<string>("");

    return (
        <div>
            <ul className='dark:text-white cursor-pointer transition-all text-gray-500'>
                {items?.map(item => {
                    return (
                        <div key={item.key}>
                            <li
                                onClick={() => {
                                    if ((item.children || []).length < 1) {
                                        onClickMenu(item.key);
                                        navigate(`/${item.key}`);
                                    }

                                    if (activeMenu === item.key) {
                                        setActiveMenu("");
                                    } else {
                                        setActiveMenu(item.key);
                                    }
                                }}
                                className={`${(item.children || []).length < 1 && pathname.includes(item.key) ? "bg-orange-400 dark:hover:bg-orange-300 hover:bg-orange-200 text-white p-3" : "py-2"} transition-all flex items-center justify-between rounded-lg`}
                            >
                                {item.label}
                                {(item.children || []).length > 1
                                    ? <>{activeMenu === item.key ? <BsChevronUp /> : <BsChevronDown />}</>
                                    : <></>}
                            </li>

                            {(item.children || []).length > 1
                                ? <ul className='transition-all'>
                                    {item.children?.map(child => {
                                        return (
                                            <li
                                                key={child.key}
                                                className={`${activeKey === child.key || pathname.includes(child.key) ? "bg-orange-400 dark:hover:bg-orange-300 hover:bg-orange-200 text-white" : "hover:bg-orange-200 dark:hover:bg-orange-400"} transition-all p-3 rounded-lg my-2 flex items-center gap-[10px]`}
                                                onClick={(e) => {
                                                    setActiveKey(child.key);
                                                    e.stopPropagation();
                                                    onClickMenu(child.key);
                                                    navigate(`/${child.key}`);
                                                }}
                                            >
                                                {child.icon}
                                                {child.label}
                                            </li>
                                        )
                                    })}
                                </ul>
                                : <></>}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Menu