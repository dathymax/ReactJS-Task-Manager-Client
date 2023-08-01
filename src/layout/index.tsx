import React, { useEffect, useMemo, useState } from 'react'
import SideBar from './sidebar'
import Content from './content'
import { LayoutContext, LayoutContextType } from '../contexts/LayoutContext'

const MainLayout = () => {
    const element = document.documentElement;
    const [theme, setTheme] = useState<string | null>(localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : "system");
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function onWindowMatch() {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }

    onWindowMatch();

    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark");
                localStorage.setItem("theme", "dark");
                break;
            case "light":
                element.classList.remove("dark");
                localStorage.setItem("theme", "light");
                break;
            default:
                localStorage.removeItem("theme");
                onWindowMatch();
                break;
        }
    }, [theme])

    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                element.classList.add("dark");
            } else {
                element.classList.remove("dark");
            }
        }
    })

    const getValuesContext: LayoutContextType = useMemo(() => {
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