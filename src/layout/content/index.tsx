import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
    return (
        <section className='dark:bg-gray-400 dark:text-white'>
            <Outlet />
        </section>
    );
}

export default Content