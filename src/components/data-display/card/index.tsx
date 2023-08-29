import React, { FC } from 'react'

interface CardProps extends React.HTMLProps<HTMLDivElement> {
    cardTitle?: string | React.ReactNode,
    width?: number | string
}

const Card: FC<CardProps> = ({ cardTitle, children, width }) => {

    return (
        <div style={{ width: width || 300 }} className='border border-gray-300 rounded-xl'>
            {cardTitle && <>
                <div className="p-3">{cardTitle}</div>
                <hr />
            </>}
            <div className="p-3">
                {children}
            </div>
        </div>
    )
}

export default Card