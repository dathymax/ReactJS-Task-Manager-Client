import React from 'react'
import LayoutSidebar from './sidebar'
import LayoutContent from './content'
import LayoutHeader from './header'

const Layout = () => {
    return (
        <main className='flex items-center w-screen h-screen max-w-screen max-h-screen'>
            <LayoutSidebar />

            <div className="flex flex-col">
                <LayoutHeader />

                <div className="h-[2px] bg-gray-100"></div>

                <LayoutContent />
            </div>
        </main>
    )
}

export default Layout