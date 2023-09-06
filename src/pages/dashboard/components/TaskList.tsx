import React, { FC } from 'react'
import TaskItem from '../../../components/task/TaskItem'

interface TaskListProps {
    activeTab?: string
}

const TaskList: FC<TaskListProps> = ({ activeTab }) => {
    return (
        <div className='pt-5'>
            <TaskItem filterType={activeTab} />
            <TaskItem filterType={activeTab} />
            <TaskItem filterType={activeTab} />
        </div>
    )
}

export default TaskList