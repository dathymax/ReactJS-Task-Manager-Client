import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutContent = () => {
    return (
        <section
            style={{
                width: "calc(100vw - 200px)",
                height: "calc(100vh - 82px)",
                maxHeight: "calc(100vh - 82px)",
            }}
        >
            <Outlet />
        </section>
    )
}

export default LayoutContent