import React from 'react'
import { useInboxPageContext } from '../../../../contexts/inbox';
import Avatar from '../../../../components/data-display/avatar/Avatar';
import { BiSearch, BiSolidBell, BiUserCircle } from 'react-icons/bi';

const InboxPageContentMore = () => {
    const { openMore, inboxById } = useInboxPageContext();

    if (!inboxById) {
        return <div className='h-screen'></div>;
    }

    return (
        <div className={`${!openMore ? "col-span-0" : "col-span-3"} border-l border-gray-300 h-screen p-5`}>
            <div className="flex items-center justify-center flex-col gap-2">
                <Avatar src={inboxById?.senderSrc} width={80} />
                <div>
                    <p className='font-medium text-[16px] text-center'>{inboxById?.senderName}</p>
                    <p className='text-center text-[14px] text-gray-500'>Active</p>
                </div>

                <div className="flex items-center justify-center gap-7 mt-3">
                    <div className='text-center'>
                        <div className="w-[35px] flex items-center justify-center h-[35px] bg-gray-300 hover:bg-gray-200 rounded-full cursor-pointer">
                            <BiUserCircle className="text-[22px]" />
                        </div>
                        <p className='text-[12px] mt-1'>Profile</p>
                    </div>
                    <div className="text-center">
                        <div className="w-[35px] flex items-center justify-center h-[35px] bg-gray-300 hover:bg-gray-200 rounded-full cursor-pointer">
                            <BiSolidBell className="text-[22px]" />
                        </div>
                        <p className='text-[12px] mt-1'>Mute</p>
                    </div>
                    <div className="text-center">
                        <div className="w-[35px] flex items-center justify-center h-[35px] bg-gray-300 hover:bg-gray-200 rounded-full cursor-pointer">
                            <BiSearch className="text-[22px]" />
                        </div>
                        <p className='text-[12px] mt-1'>Search</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InboxPageContentMore