import React, { FC } from 'react'
import Progress from '../feedback/progress'
import AvatarGroup from '../data-display/avatar/Group'
import { AvatarProps } from '../data-display/avatar/Avatar'

interface TaskItemProps {
    filterType?: string
}

const TaskItem: FC<TaskItemProps> = ({ filterType }) => {
    const AVATAR_ITEMS: AvatarProps[] = [
        {
            src: "",
        },
        {
            src: "",
        },
        {
            src: "",
        },
        {
            src: "",
        }
    ]

    return (
        <div className="grid grid-cols-12 gap-4 px-5 py-7 shadow-md rounded-xl mb-5">
            <div className="col-span-5">
                TaskItem {filterType}
            </div>
            <div className="col-span-3">
                <AvatarGroup items={AVATAR_ITEMS} />
            </div>
            <div className="col-span-4">
                <Progress progress={50} title={`TaskItem ${filterType}`} />
            </div>
        </div>
    )
}

export default TaskItem