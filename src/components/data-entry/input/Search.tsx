import React, { FC } from 'react'
import { CiSearch } from "react-icons/ci"

interface InputSearchProps {
    width?: string | number
}

const InputSearch: FC<InputSearchProps> = ({ width = "100%" }) => {
    return (
        <div className='bg-gray-200 p-3 rounded-xl flex items-center gap-2' style={{ width: width }}>
            <CiSearch className="text-xl" />
            <input type="text" className='outline-none bg-gray-200 w-full' placeholder='Search' />
        </div>
    )
}

export default InputSearch