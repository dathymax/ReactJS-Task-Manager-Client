import React from 'react'
import InboxContentChatItem from './ChatItem'
import "./index.css"
import { useInboxPageContext } from '../../../../../contexts/inbox';
import { IInboxUser } from '../../sidebar/users/Users';

const InboxContentChatBoard = () => {
    let prevSender: any = null;
    const { inboxById } = useInboxPageContext();
    const messages: IInboxUser[] = inboxById.messages || [];

    return (
        <div className="p-3 relative" style={{ height: "calc(100% - 150px)", overflow: "hidden auto" }}>
            {messages.map((message) => {
                const isSameSender = prevSender && prevSender.id === message.name;

                prevSender = message;

                return (<InboxContentChatItem message={message} />)
            })}
        </div>
    )
}

export default InboxContentChatBoard