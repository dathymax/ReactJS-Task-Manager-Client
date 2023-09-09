import React, { FC } from 'react'

interface DividerProps extends React.HTMLProps<HTMLDivElement> {

}

const Divider: FC<DividerProps> = ({ className }) => {
    return (
        <hr className={`my-10 ${className}`} />
    )
}

export default Divider