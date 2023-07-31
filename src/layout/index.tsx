import React from 'react'
import SideBar from './sidebar'
import Content from './content'

const MainLayout = () => {
    return (
        <main className="flex">
            <SideBar />
            <Content />
        </main>
    )
}

export default MainLayout