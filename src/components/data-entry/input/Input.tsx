import React, { FC } from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    width?: string | number
}

const Input: FC<InputProps> = ({ onChange, placeholder, ...rest }) => {
    return (
        <input
            type="text"
            className='outline-none bg-gray-200 w-full p-3 rounded-xl'
            placeholder={placeholder || "Type here ..."}
            onChange={(e) => {
                if (onChange) {
                    onChange(e)
                }
            }}
            {...rest}
        />
    )
}

export default Input