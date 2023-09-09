import React from 'react'
import InputSearch from '../../../../components/data-entry/input/Search'
import Divider from '../../../../components/layout/divider'
import InboxSidebarUsers from './Users'

const InboxSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-[25px]'>Chats</h2>
            <div className="my-4">
                <InputSearch />
            </div>
            <Divider />
            <InboxSidebarUsers />
        </div>
    )
}

export default InboxSidebar