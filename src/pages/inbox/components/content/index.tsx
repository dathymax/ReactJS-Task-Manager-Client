import React from 'react'
import InboxContentHeader from './Header'
import { useInboxPageContext } from '../..';
import InboxContentChatBoard from './chat-board';

const InboxContent = () => {
    const { itemById } = useInboxPageContext();

    if (!itemById) {
        return null;
    }

    return (
        <div className='h-screen'>
            <InboxContentHeader />

            <div className="p-3" style={{ height: "calc(100% - 150px)" }}>
                <InboxContentChatBoard />
            </div>

            <div className='h-[45px] p-3 border border-gray-300 rounded-2xl m-[20px]'>
                <input type="text" placeholder='Type here...' className='outline-none w-full' />
            </div>
        </div>
    )
}

export default InboxContent