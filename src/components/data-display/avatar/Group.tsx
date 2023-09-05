import React, { FC } from 'react'
import Avatar, { AvatarProps } from './Avatar'

interface AvatarGroupProps {
    items: AvatarProps[],
    maxCount?: number
}

const AvatarGroup: FC<AvatarGroupProps> = ({ items = [], maxCount = 3 }) => {
    const lastItem = items[items.length - 1];
    const sliceItems = items.slice(0, maxCount - 1);
    const otherItemsLength = items.length - maxCount;

    return (
        <div className='flex items-center justify-center'>
            {sliceItems.map((item, index) => {
                return (
                    <Avatar key={index} src={item.src} shape={item.shape} className='-ml-4' />
                )
            })}
            <Avatar src={lastItem?.src || ""} shape={lastItem?.shape} className='-ml-4'>
                <div className="font-bold backdrop-grayscale-0 bg-white/30 w-full h-full flex items-center justify-center rounded-full" >
                    +{otherItemsLength}
                </div>
            </Avatar>
        </div>
    )
}

export default AvatarGroup