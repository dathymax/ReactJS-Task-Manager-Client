import React, { CSSProperties, FC } from 'react'

interface CardProps extends React.HTMLProps<HTMLDivElement> {
    cardTitle?: string | React.ReactNode,
    width?: number | string,
    titleStyle?: CSSProperties,
    bodyStyle?: CSSProperties,
}

const Card: FC<CardProps> = ({ cardTitle, children, width = 300, className, titleStyle, bodyStyle }) => {

    return (
        <div style={{ width: width }} className={`border border-gray-300 ${className} rounded-xl`}>
            {cardTitle && <>
                <div className="p-3" style={{ ...titleStyle }}>{cardTitle}</div>
                <hr />
            </>}
            <div className="p-3" style={{ ...bodyStyle }}>
                {children}
            </div>
        </div>
    )
}

export default Card