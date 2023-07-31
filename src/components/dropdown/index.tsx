import React, { FC, useState } from 'react'
import "./style.css"
import { MenuItemType } from '../../types'
import { BsChevronDown } from "react-icons/bs"

type DropdownProps = {
    items?: MenuItemType[],
    children?: React.ReactNode,
    showArrow?: boolean,
    onClickMenu?: (key: string) => void,
}

const Dropdown: FC<DropdownProps> = ({ items, children, showArrow = true, onClickMenu = () => { } }) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div
            className='dropdown cursor-pointer'
            onClick={() => setShow(prev => !prev)}
        >
            <div className="flex items-center justify-between">
                {children}
                {!showArrow ? <></> : <BsChevronDown />}
            </div>

            {show ? <ul
                className='dropdown__menu shadow-lg'
            >
                {
                    (items || []).map(item => {
                        return (
                            <li
                                key={item.key}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onClickMenu(item.key)
                                }}
                                className='flex items-center justify-between'
                            >
                                {item.label}
                            </li>
                        )
                    })
                }
            </ul> : <></>}
        </div>
    )
}

export default Dropdown