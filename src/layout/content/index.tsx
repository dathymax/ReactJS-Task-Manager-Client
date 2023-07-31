import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
    return (
        <section>
            <Outlet />
        </section>
    )
}

export default Content