import React from 'react'
import { useThemeContext } from '../../../contexts/theme'
import { genTextColor } from '../../../helpers/theme';
import { Link } from 'react-router-dom';
import Avatar, { AvatarProps } from '../../../components/data-display/avatar/Avatar';

const DashboardTeams = () => {
    const { theme } = useThemeContext();

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
        <>
            <div className="flex items-center justify-between mb-5">
                <p className='font-medium text-[20px]'>Team <span className={`${genTextColor(theme)} text-[20px]`}>(25)</span></p>
                <Link to={"/dashboard"} className={`${genTextColor(theme)}`}>View all</Link>
            </div>

            <div className="flex items-center justify-start gap-4 flex-wrap">
                {AVATAR_ITEMS.map((item, index) => {
                    return (
                        <Avatar key={index} src={item.src} shape={item.shape} />
                    )
                })}
            </div>
        </>
    )
}

export default DashboardTeams