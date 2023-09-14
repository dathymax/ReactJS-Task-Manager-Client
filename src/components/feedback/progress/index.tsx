import React, { FC } from 'react'
import { useThemeContext } from '../../../contexts/theme'
import { genBgColor, genBgColorLighter, genTextColor } from '../../../helpers/theme';

interface ProgressProps {
    progress: number,
    title?: string
}

const Progress: FC<ProgressProps> = ({ progress, title }) => {
    const { theme } = useThemeContext();

    return (
        <>
            <div className="flex items-center justify-between mb-2">
                <p className={genTextColor(theme)}>{title}</p>
                <p className={genTextColor(theme)}>{progress}%</p>
            </div>
            <div className={`progress relative rounded-xl w-full h-[7px] overflow-hidden ${genBgColorLighter(theme)}`}>
                <div
                    className={`absolute h-full rounded-xl left-0 ${genBgColor(theme)}`}
                    style={{
                        width: `${progress}%`
                    }}
                />
            </div>
        </>
    )
}

export default Progress