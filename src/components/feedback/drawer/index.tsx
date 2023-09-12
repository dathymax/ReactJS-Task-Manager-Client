import React, { FC } from 'react'
import Divider from '../../layout/divider'
import { AiOutlineClose } from 'react-icons/ai'

interface DrawerProps {
    open: boolean,
    children: React.ReactNode,
    title?: string,
    bodyStyle?: React.CSSProperties,
    headerStyle?: React.CSSProperties,
    bodyClassName?: string,
    headerClassName?: string,
    onCancel: () => void,
    onOk?: () => void,
    closeOnMask?: boolean,
    width?: number | string
}

const Drawer: FC<DrawerProps> = ({ open = false, children, title,
    bodyStyle, headerStyle, bodyClassName,
    headerClassName, onCancel, onOk,
    closeOnMask = true, width = 400 }) => {

    if (!open) {
        return null
    }

    return (
        <>
            <div
                className='z-30 rounded-lg fixed top-[15%] m-auto left-0 right-0 bg-white'
                style={{ width: width, height: 400 }}
            >
                <div className={`p-3 flex items-center justify-between ${headerClassName}`} style={{ ...headerStyle }}>
                    <span className='font-medium text-[17px]'>{title}</span>
                    <AiOutlineClose className="text-[20px]" onClick={() => {
                        if (onCancel) {
                            onCancel();
                        }
                    }} />
                </div>
                <Divider style={{ margin: 0 }} />
                <div className={`p-3 ${bodyClassName}`} style={{ ...bodyStyle }}>
                    {children}
                </div>
            </div>

            <div
                onClick={() => {
                    if (closeOnMask) {
                        if (onCancel) {
                            onCancel()
                        }
                    }
                }}
                className="drawer__overlay fixed bg-gray-700 opacity-40 left-0 right-0 top-0 w-screen h-screen z-20"
            />
        </>
    )
}

export default Drawer