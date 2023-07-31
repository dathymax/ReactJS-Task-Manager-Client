import React, { useMemo, useState } from 'react'
import SideBar from './sidebar'
import Content from './content'
import { LayoutContext } from '../contexts/LayoutContext'

const MainLayout = () => {
    const [theme, setTheme] = useState<string>("light");

    const getValuesContext = useMemo(() => {
        return {
            theme, setTheme
        }
    }, [theme])

    return (
        <LayoutContext.Provider value={getValuesContext}>
            <main className="flex">
                <SideBar />
                <Content />
            </main>
        </LayoutContext.Provider>
    )
}

export default MainLayout