import React, { FC } from 'react'
import Avatar from '../../../../../components/data-display/avatar/Avatar'
import { FiMoreVertical } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { FaShare } from 'react-icons/fa'
import { genTextColorHover } from '../../../../../helpers/theme'
import { useThemeContext } from '../../../../../contexts/theme'
import { IInboxUser } from '../../sidebar/users/Users'

interface InboxContentChatItemProps {
    message: IInboxUser
}

const InboxContentChatItem: FC<InboxContentChatItemProps> = ({ message }) => {
    const { theme } = useThemeContext();

    return (

        <div className={`inbox-chat__item w-full flex items-center gap-3 mb-5 ${message.type === "sender" ? "" : "flex-row-reverse text-right"}`}>
            {message.type === "sender" && <Avatar src={message.src} />}
            <div className='bg-gray-200 rounded-2xl px-3 py-1.5'>
                {message.message}
            </div>
            <div className="inbox-chat__item--action hidden">
                <div className={`${genTextColorHover(theme)} transition-all p-1 rounded-full hover:bg-gray-200 cursor-pointer`}>
                    <HiOutlineEmojiHappy className="text-[17px]" />
                </div>
                <div className={`${genTextColorHover(theme)} transition-all p-1 rounded-full hover:bg-gray-200 cursor-pointer`}>
                    <FiMoreVertical className="text-[17px]" />
                </div>
                <div className={`${genTextColorHover(theme)} transition-all p-1 rounded-full hover:bg-gray-200 cursor-pointer`}>
                    <FaShare className="text-[17px]" />
                </div>
            </div>
        </div>
    )
}

export default InboxContentChatItem