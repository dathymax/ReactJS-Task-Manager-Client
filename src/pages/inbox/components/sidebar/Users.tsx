import React, { FC } from 'react'
import Avatar from '../../../../components/data-display/avatar/Avatar'
import { FiMoreHorizontal } from "react-icons/fi"
import "./index.css"

interface InboxSidebarUser {
    src?: string,
    name?: string | React.ReactNode,
    message?: string | React.ReactNode,
}

interface InboxSidebarUsersProps {
    items?: InboxSidebarUser[]
}

const InboxSidebarUsers: FC<InboxSidebarUsersProps> = ({ items = [] }) => {
    const ITEMS: InboxSidebarUser[] = [
        {
            src: "",
            name: "Jtadd",
            message: "Jtadd is a boy in a poor family"
        }
    ]

    return (
        <div className='-mt-4'>
            {ITEMS.map((item, index) => {
                return (
                    <div
                        key={index}
                        className='inbox-user relative gap-3 flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-xl transition-all'
                    >
                        <Avatar src={item.src} />
                        <div>
                            <p className='font-bold text-black mb-1'>{item.name}</p>
                            <span className='text-gray-400 line-clamp-1 text-[13px]'>{item.message}</span>
                        </div>

                        <div
                            className="inbox-user__more hidden absolute p-1 right-2 rounded-full hover:bg-gray-400 bg-gray-300"
                            onClick={(e) => {
                                e.stopPropagation()
                                console.log("jtadd");
                            }}
                        >
                            <FiMoreHorizontal className="text-[20px]" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InboxSidebarUsers