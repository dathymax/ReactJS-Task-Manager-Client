import React, { FC } from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../../contexts/theme'
import { genBgColor, genTextColor } from '../../../helpers/theme';
import Avatar from '../avatar/Avatar';

export interface RecentActivityItem {
    name?: string | React.ReactNode,
    avatar?: string,
    time?: string,
    task?: string | React.ReactNode,
    description?: string | React.ReactNode
}

interface RecentActivityProps {
    items?: RecentActivityItem[]
}

const RecentActivity: FC<RecentActivityProps> = ({ items = [] }) => {
    const { theme } = useThemeContext();

    return (
        <>
            <div className="flex items-center justify-between">
                <p className='font-bold text-[20px] text-black'>Recent Activity</p>
                <Link to={"/dashboard"} className={`${genTextColor(theme)}`}>View all</Link>
            </div>

            <div className="grid grid-cols-10 gap-5 h-full mt-5">
                <div className='col-span-1 flex items-end justify-end'>
                    <div className="recent-activity__border" />
                </div>
                <div className='col-span-9'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='relative mb-14 bg-gray-100 rounded-xl p-3 min-h-[100px] w-full flex items-start gap-3'>
                                <Avatar src={item?.avatar} />

                                <div>
                                    <p className='font-bold'>{item.name}</p>
                                    <span className='text-gray-400'>{item.time}</span>

                                    <p className='mt-3 font-bold'>{item.task}</p>
                                    <p>{item.description}</p>
                                </div>

                                <div className={`absolute -left-8 w-[20px] h-[20px] ${genBgColor(theme)} rounded-full`}>
                                    <div
                                        className="absolute bg-white w-[19px] h-[19px] rounded-full left-0 top-0"
                                        style={{ transform: "translate(3%, 3%)" }}
                                    ></div>
                                    <div
                                        className={`${genBgColor(theme)} absolute w-[13px] h-[13px] rounded-full left-0 top-0`}
                                        style={{ transform: "translate(27%, 27%)" }}
                                    ></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default RecentActivity