import React, { FC } from 'react'

interface TaskItemProps {
    filterType?: string
}

const TaskItem: FC<TaskItemProps> = ({ filterType }) => {
    return (
        <div className='drop-shadow-md'>
            TaskItem {filterType}
        </div>
    )
}

export default TaskItem