import React from 'react'
import { BiBell } from "react-icons/bi"
import { genTextColor } from '../../../helpers/theme'
import { useThemeContext } from '../../../contexts/theme';

const Notification = () => {
    const { theme } = useThemeContext();

    return (
        <BiBell className={`text-2xl ${genTextColor(theme)} cursor-pointer`} />
    )
}

export default Notification