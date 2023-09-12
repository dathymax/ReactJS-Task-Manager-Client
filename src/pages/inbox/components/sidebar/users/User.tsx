import React, { FC } from 'react'
import Avatar from '../../../../../components/data-display/avatar/Avatar'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IInboxSidebarUser } from './Users'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useThemeContext } from '../../../../../contexts/theme'
import { genTextColorHover } from '../../../../../helpers/theme'
import { useInboxPageContext } from '../../../../../contexts/inbox'

interface InboxSidebarUserProps {
    item: IInboxSidebarUser
}

const InboxSidebarUser: FC<InboxSidebarUserProps> = ({ item }) => {
    const { theme } = useThemeContext();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const inboxUserId = searchParams.get("inboxUserId");

    const handleOnClick = (id: number | string) => {
        searchParams.set("inboxUserId", id.toString());

        navigate(`?${searchParams.toString()}`);
    }

    return (
        <div
            key={item.id}
            className={`${inboxUserId === item.id.toString() && "bg-gray-100"} inbox-user relative gap-3 flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-xl transition-all`}
            onClick={() => handleOnClick(item.id)}
        >
            <Avatar src={item.senderSrc} />
            <div>
                <p className='font-bold text-black mb-1'>{item.senderName}</p>
                <span className='text-gray-400 line-clamp-1 text-[13px]'>{item.latestMessage}</span>
            </div>

            <div
                className={`${genTextColorHover(theme)} inbox-user__more hidden absolute p-1 right-2 rounded-full bg-gray-300`}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <FiMoreHorizontal className="text-[20px]" />
            </div>
        </div>
    )
}

export default InboxSidebarUser