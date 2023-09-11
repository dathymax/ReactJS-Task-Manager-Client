import React from 'react'
import Avatar from '../../../../components/data-display/avatar/Avatar'
import { BsFillCameraVideoFill, BsFillTelephoneFill, BsInfoCircleFill } from "react-icons/bs"
import { useThemeContext } from '../../../../contexts/theme'
import { genTextColor } from '../../../../helpers/theme'
import { useInboxPageContext } from '../../../../contexts/inbox'

const InboxContentHeader = () => {
    const { theme } = useThemeContext();
    const { inboxById } = useInboxPageContext();

    return (
        <div className='px-4 border-b border-gray-300 h-[70px] flex items-center'>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-center gap-3">
                    <Avatar />
                    <div className="name">
                        <p className='font-bold text-black'>{inboxById.senderName}</p>
                        <span className='text-gray-400'>Active 15 minutes ago</span>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <BsFillTelephoneFill className={`text-[20px] cursor-pointer hover:opacity-60 ${genTextColor(theme)}`} />
                    <BsFillCameraVideoFill className={`text-[20px] cursor-pointer hover:opacity-60 ${genTextColor(theme)}`} />
                    <BsInfoCircleFill className={`text-[20px] cursor-pointer hover:opacity-60 ${genTextColor(theme)}`} />
                </div>
            </div>
        </div>
    )
}

export default InboxContentHeader