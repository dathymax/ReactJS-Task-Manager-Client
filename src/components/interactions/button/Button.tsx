import React, { FC } from 'react'
import { useThemeContext } from '../../../contexts/theme'

interface ButtonProps extends React.HTMLProps<HTMLDivElement> {
    type?: "circle" | "rectangle",
}

const Button: FC<ButtonProps> = ({ type, className, children }) => {
    const { theme } = useThemeContext();

    const checkTypeButton = () => {
        switch (type) {
            case "circle":
                return (
                    <button className={`${className} p-2 bg-${theme} rounded-full`}>
                        {children}
                    </button>
                )

            default:
                return (
                    <button className={`${className} p-2 bg-${theme}`}>
                        {children}
                    </button>
                )
        }
    }

    return (
        <>
            {checkTypeButton()}
        </>
    )
}

export default Button