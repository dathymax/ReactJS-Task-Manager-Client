import React from 'react'
import LayoutSidebar from './sidebar'
import LayoutContent from './content'

const Layout = () => {
    return (
        <main className='flex items-center w-screen h-screen max-w-screen max-h-screen'>
            <LayoutSidebar />

            <div className="flex flex-col">
                <LayoutContent />
            </div>
        </main>
    )
}

export default Layout