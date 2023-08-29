import React from 'react'
import LayoutSidebar from './sidebar'

const Layout = () => {
    return (
        <main className='flex items-center w-screen h-screen max-w-screen max-h-screen'>
            <LayoutSidebar />
        </main>
    )
}

export default Layout