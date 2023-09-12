import React from 'react'
import Avatar from '../../../../../components/data-display/avatar/Avatar'
import { FiMoreVertical } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { FaShare } from 'react-icons/fa'
import { genTextColorHover } from '../../../../../helpers/theme'
import { useThemeContext } from '../../../../../contexts/theme'
import { useInboxPageContext } from '../../../../../contexts/inbox'
import { IInboxUser } from '../../sidebar/users/Users'

const InboxContentChatItem = () => {
    const { theme } = useThemeContext();
    const { inboxById } = useInboxPageContext();
    const messages: IInboxUser[] = inboxById.messages || [];

    return (
        messages.map(item => {
            return (
                <div className={`inbox-chat__item w-full flex items-center gap-3 mb-5 ${item.type === "sender" ? "" : "flex-row-reverse text-right"}`}>
                    <Avatar src={item.src} />
                    <div className='bg-gray-200 rounded-2xl px-3 py-1.5'>
                        {item.message}
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
        })
    )
}

export default InboxContentChatItem