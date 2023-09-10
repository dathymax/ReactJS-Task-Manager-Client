import React from 'react'
import Avatar from '../../../../../components/data-display/avatar/Avatar'
import { FiMoreVertical } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { FaShare } from 'react-icons/fa'

const InboxContentChatItem = () => {
    return (
        <div className='inbox-chat__item flex items-center gap-3'>
            <Avatar />
            <div className='bg-gray-300 rounded-2xl px-3 py-1.5'>
                123
            </div>
            <div className="inbox-chat__item--action hidden">
                <div className='p-1 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <HiOutlineEmojiHappy className="text-[17px]" />
                </div>
                <div className='p-1 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <FiMoreVertical className="text-[17px]" />
                </div>
                <div className='p-1 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <FaShare className="text-[17px]" />
                </div>
            </div>
        </div>
    )
}

export default InboxContentChatItem