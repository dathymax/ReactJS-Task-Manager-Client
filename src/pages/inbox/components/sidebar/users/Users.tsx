import React, { FC } from 'react'
import "./index.css"
import InboxSidebarUser from './User'

export interface IInboxSidebarUser {
    id: number | string,
    src?: string,
    name?: string | React.ReactNode,
    message?: string | React.ReactNode,
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