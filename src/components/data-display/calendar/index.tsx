import React from 'react'

const Calendar = () => {
    const DAYS_OF_WEEK = [
        {
            label: "Mon",
            key: "mon"
        },
        {
            label: "Tue",
            key: "tue"
        },
        {
            label: "Wed",
            key: "wed"
        },
        {
            label: "Thu",
            key: "thu"
        },
        {
            label: "Fri",
            key: "fri"
        },
        {
            label: "Sat",
            key: "sat"
        },
        {
            label: "Sun",
            key: "sun"
        },
    ]

    return (
        <>
            <p className='text-gray-400 text-[20px]'>Calendar</p>
            <div className="flex items-center justify-between mb-5">
                <p className="text-black font-medium text-[20px]">
                    February, 2023
                </p>
            </div>
            <div className="flex items-center justify-between gap-2">
                {DAYS_OF_WEEK.map(day => {
                    return <span key={day.key}>{day.label}</span>
                })}
            </div>
        </>
    )
}

export default Calendar