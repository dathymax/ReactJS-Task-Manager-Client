import React, { useEffect, useRef } from 'react'
import InboxContentHeader from './Header'
import InboxContentChatBoard from './chat-board';
import { useInboxPageContext } from '../../../../contexts/inbox';
import { AiOutlineSend } from 'react-icons/ai';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { BsCardImage } from 'react-icons/bs';
import { useThemeContext } from '../../../../contexts/theme';
import { genTextColor } from '../../../../helpers/theme';

const InboxContent = () => {
    const { theme } = useThemeContext();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { inboxById } = useInboxPageContext();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef.current])

    if (!inboxById) {
        return <div className='h-screen'></div>;
    }

    return (
        <div className='h-screen'>
            <InboxContentHeader />

            <div className="p-3" style={{ height: "calc(100% - 150px)" }}>
                <InboxContentChatBoard />
            </div>

            <div className='h-[45px] p-3 border border-gray-300 rounded-2xl m-[20px] flex items-center gap-3'>
                <input ref={inputRef} type="text" placeholder='Type here...' className='outline-none w-full' />

                <div className='flex items-center gap-4'>
                    <AiOutlineSend className={`text-[18px] cursor-pointer ${genTextColor(theme)}`} />
                    <HiOutlineEmojiHappy className={`text-[18px] cursor-pointer ${genTextColor(theme)}`} />
                    <BsCardImage className={`text-[18px] cursor-pointer ${genTextColor(theme)}`} />
                </div>
            </div>
        </div>
    )
}

export default InboxContent