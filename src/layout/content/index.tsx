import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutContent = () => {
    return (
        <section
            style={{
                width: "calc(100vw - 200px)",
                maxWidth: "calc(100vw - 200px)",
                height: "100vh",
                maxHeight: "100vh",
            }}
        >
            <Outlet />
        </section>
    )
}

export default LayoutContent