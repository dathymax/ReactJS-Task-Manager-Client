import React from 'react'
import Avatar from '../../../../components/data-display/avatar/Avatar'
import { BsFillCameraVideoFill, BsFillTelephoneFill, BsInfoCircleFill } from "react-icons/bs"
import { useThemeContext } from '../../../../contexts/theme'
import { genTextColor } from '../../../../helpers/theme'

const InboxContentHeader = () => {
    const { theme } = useThemeContext();

    return (
        <div className='p-4 border-b border-gray-300'>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                    <Avatar />
                    <div className="name">
                        <p className='font-bold text-black'>Jtadd</p>
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