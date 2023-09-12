import React from 'react'
import InboxContentChatItem from './ChatItem'
import "./index.css"

const InboxContentChatBoard = () => {
    return (
        <div className="p-3 relative" style={{ height: "calc(100% - 150px)", overflow: "hidden auto" }}>
            <InboxContentChatItem />
        </div>
    )
}

export default InboxContentChatBoard