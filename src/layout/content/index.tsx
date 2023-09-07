import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutContent = () => {
    return (
        <section
            style={{
                width: "100vw",
                maxWidth: "100vw",
                height: "100vh",
                maxHeight: "100vh",
            }}
        >
            <Outlet />
        </section>
    )
}

export default LayoutContent