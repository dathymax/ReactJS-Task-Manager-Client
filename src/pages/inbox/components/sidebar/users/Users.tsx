import React, { FC } from 'react'
import "./index.css"
import InboxSidebarUser from './User'

export interface IInboxUser {
    src: string,
    name: string | React.ReactNode,
    message: string | React.ReactNode,
    type: "sender" | "recipient"
}

export interface IInboxSidebarUser {
    id: number | string,
    senderName: string | React.ReactNode,
    senderSrc: string,
    latestMessage: string,
    messages: IInboxUser[]
}

interface InboxSidebarUsersProps {
    items?: IInboxSidebarUser[]
}

const InboxSidebarUsers: FC<InboxSidebarUsersProps> = ({ items = [] }) => {
    return (
        <div className='-mt-4'>
            {items.map((item) => {
                return (
                    <InboxSidebarUser key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default InboxSidebarUsers