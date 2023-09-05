import React, { FC } from 'react'
import Zoro from "../../../assets/images/zoro.jpg"

export interface AvatarProps extends React.HTMLProps<HTMLDivElement> {
    src?: string,
    shape?: "circle" | "square",
    width?: number
}

const Avatar: FC<AvatarProps> = ({ src = "", children, className, shape = "circle", width = 40 }) => {

    const checkRender = () => {
        if ((children && !src) || (children && src)) {
            return (
                <div
                    className={`${className} ${shape === "circle" ? "rounded-full" : "rounded-xl"} bg-gray-300 object-cover flex items-center justiy-center`}
                    style={{
                        width: width,
                        height: width
                    }}
                >
                    {children}
                </div>
            )
        } else {
            return (
                <img
                    src={src || Zoro}
                    alt="Avatar"
                    className={`${className} ${shape === "circle" ? "rounded-full" : "rounded-xl"} object-cover flex items-center justiy-center`}
                    style={{
                        width: width,
                        height: width
                    }} />
            )
        }
    }

    return (
        <>{checkRender()}</>
    )
}

export default Avatar