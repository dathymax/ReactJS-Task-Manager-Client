import React, { PropsWithChildren, useContext, useMemo, useState } from "react";
import { IInboxSidebarUser } from "../pages/inbox/components/sidebar/users/Users";
import { useSearchParams } from "react-router-dom";

export interface IInboxPageContext {
    inboxData: IInboxSidebarUser[],
    inboxById: IInboxSidebarUser
}

export const InboxPageContext = React.createContext<IInboxPageContext | undefined>(undefined);

export const useInboxPageContext = () => {
    const context = useContext(InboxPageContext);

    if (!context) {
        throw new Error('useInboxPageContext must be used within a InboxPageContextProvider');
    }

    return context;
};

const InboxPageContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [searchParams] = useSearchParams();
    const inboxUserId = searchParams.get("inboxUserId") || 0;
    const [inboxData, setInboxData] = useState<IInboxSidebarUser[]>([
        {
            id: 1,
            src: "",
            name: "Jtadd",
            message: "Jtadd is a boy in a poor family"
        }
    ]);

    const inboxById = inboxData.filter(item => Number(item.id) === Number(inboxUserId))[0];

    const inboxPageContextValues = useMemo(() => ({
        inboxData, inboxById
    }), [inboxData, inboxById])

    return (
        <InboxPageContext.Provider value={inboxPageContextValues}>
            {children}
        </InboxPageContext.Provider>
    )
}

export default InboxPageContextProvider;