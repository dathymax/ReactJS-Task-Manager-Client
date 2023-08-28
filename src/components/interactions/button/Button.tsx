import React, { FC } from 'react'

interface ButtonProps extends React.HTMLProps<HTMLDivElement> {
    type?: "circle" | "rectangle",
}

const Button: FC<ButtonProps> = ({ type, className, children }): React.ReactNode => {
    const checkTypeButton = () => {
        switch (type) {
            case "circle":
                return (
                    <button className={`${className} rounded-full`}>
                        {children}
                    </button>
                )

            default:
                return (
                    <button className={`${className}`}>
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