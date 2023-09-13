import React, { PropsWithChildren, useContext, useMemo, useState } from "react";
import { IInboxSidebarUser } from "../pages/inbox/components/sidebar/users/Users";
import { useSearchParams } from "react-router-dom";
import Zoro from "../assets/images/zoro.jpg";
import Sanji from "../assets/images/sanji.png";

export interface IInboxPageContext {
    inboxData: IInboxSidebarUser[],
    inboxById: IInboxSidebarUser,
    openMore: boolean,
    setOpenMore: React.Dispatch<React.SetStateAction<boolean>>,
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
    const [openMore, setOpenMore] = useState<boolean>(false);
    const inboxUserId = searchParams.get("inboxUserId") || 0;
    const [inboxData, setInboxData] = useState<IInboxSidebarUser[]>([
        {
            id: 1,
            senderName: "Jtadd 1",
            senderSrc: Zoro,
            latestMessage: "Jtadd 1 recipient is a boy in a rich family",
            messages: [
                {
                    src: Zoro,
                    name: "Jtadd 1 sender",
                    message: "Jtadd 1 sender is a boy in a poor family",
                    type: "sender",
                },
                {
                    src: Sanji,
                    name: "Jtadd 1 recipient",
                    message: "Jtadd 1 recipient is a boy in a rich family",
                    type: "recipient",
                },
            ]
        },
        {
            id: 2,
            senderName: "Jtadd 2",
            senderSrc: Sanji,
            latestMessage: "Jtadd 2 sender is a boy in a poor family too",
            messages: [
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family",
                    type: "sender",
                },
                {
                    src: Zoro,
                    name: "Jtadd 2 recipient",
                    message: "Jtadd 2 recipient is a boy in a rich family",
                    type: "recipient",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family too",
                    type: "sender",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family",
                    type: "sender",
                },
                {
                    src: Zoro,
                    name: "Jtadd 2 recipient",
                    message: "Jtadd 2 recipient is a boy in a rich family",
                    type: "recipient",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family too",
                    type: "sender",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family",
                    type: "sender",
                },
                {
                    src: Zoro,
                    name: "Jtadd 2 recipient",
                    message: "Jtadd 2 recipient is a boy in a rich family",
                    type: "recipient",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family too",
                    type: "sender",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family",
                    type: "sender",
                },
                {
                    src: Zoro,
                    name: "Jtadd 2 recipient",
                    message: "Jtadd 2 recipient is a boy in a rich family",
                    type: "recipient",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family too",
                    type: "sender",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family",
                    type: "sender",
                },
                {
                    src: Zoro,
                    name: "Jtadd 2 recipient",
                    message: "Jtadd 2 recipient is a boy in a rich family",
                    type: "recipient",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family too",
                    type: "sender",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family",
                    type: "sender",
                },
                {
                    src: Zoro,
                    name: "Jtadd 2 recipient",
                    message: "Jtadd 2 recipient is a boy in a rich family",
                    type: "recipient",
                },
                {
                    src: Sanji,
                    name: "Jtadd 2 sender",
                    message: "Jtadd 2 sender is a boy in a poor family too",
                    type: "sender",
                },
            ]
        }
    ]);

    const inboxById = inboxData.filter(item => Number(item.id) === Number(inboxUserId))[0];

    const inboxPageContextValues = useMemo(() => ({
        inboxData, inboxById, openMore, setOpenMore
    }), [inboxData, inboxById, openMore])

    return (
        <InboxPageContext.Provider value={inboxPageContextValues}>
            {children}
        </InboxPageContext.Provider>
    )
}

export default InboxPageContextProvider;