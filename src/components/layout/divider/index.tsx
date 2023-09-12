import React, { FC } from 'react'

interface DividerProps extends React.HTMLProps<HTMLDivElement> {

}

const Divider: FC<DividerProps> = ({ className, style }) => {
    return (
        <hr className={`my-10 ${className}`} style={{ ...style }} />
    )
}

export default Divider