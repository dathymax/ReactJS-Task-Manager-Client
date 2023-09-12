import React from 'react'
import InboxSidebar from './components/sidebar/Sidebar'
import InboxContent from './components/content'
import InboxPageContextProvider from '../../contexts/inbox';

const InboxPage = () => {
    return (
        <InboxPageContextProvider>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-2 p-5'>
                    <InboxSidebar />
                </div>
                <div className="col-span-10 border-l border-gray-300">
                    <InboxContent />
                </div>
            </div>
        </InboxPageContextProvider>
    )
}

export default InboxPage