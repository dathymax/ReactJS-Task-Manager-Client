import React, { useContext, useMemo } from 'react'
import InboxSidebar from './components/sidebar/Sidebar'
import InboxContent from './components/content'
import { IInboxSidebarUser } from './components/sidebar/users/Users';
import { useSearchParams } from 'react-router-dom';

export interface IInboxPageContext {
    items: IInboxSidebarUser[],
    itemById: IInboxSidebarUser
}

export const InboxPageContext = React.createContext<IInboxPageContext | undefined>(undefined);

export const useInboxPageContext = () => {
    const context = useContext(InboxPageContext);

    if (!context) {
        throw new Error('useInboxPageContext must be used within a InboxPageContextProvider');
    }

    return context;
};

const InboxPage = () => {
    const [searchParams] = useSearchParams();
    const inboxUserId = searchParams.get("inboxUserId") || 0;

    const items: IInboxSidebarUser[] = [
        {
            id: 1,
            src: "",
            name: "Jtadd",
            message: "Jtadd is a boy in a poor family"
        }
    ]

    const itemById = items.filter(item => Number(item.id) === Number(inboxUserId))[0];

    const inboxPageContextValues = useMemo(() => ({
        items, itemById
    }), [items, itemById])

    return (
        <InboxPageContext.Provider value={inboxPageContextValues}>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-2 p-5'>
                    <InboxSidebar />
                </div>
                <div className="col-span-10 border-l border-gray-300">
                    <InboxContent />
                </div>
            </div>
        </InboxPageContext.Provider>
    )
}

export default InboxPage