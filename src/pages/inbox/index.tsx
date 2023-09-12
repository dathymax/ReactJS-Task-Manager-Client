import React from 'react'
import InboxSidebar from './components/sidebar/Sidebar'
import InboxContent from './components/content'
import InboxPageContextProvider from '../../contexts/inbox';
import InboxPageContentMore from './components/more';

const InboxPage = () => {
    return (
        <InboxPageContextProvider>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-2 p-5'>
                    <InboxSidebar />
                </div>

                <InboxContent />

                <InboxPageContentMore />
            </div>
        </InboxPageContextProvider>
    )
}

export default InboxPage