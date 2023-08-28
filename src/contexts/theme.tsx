import React, { FC, useMemo } from "react";

export interface IThemeContext {
    setTheme?: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext | null>(null);

interface ThemeContextProviderProps {
    children?: React.ReactNode
}

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
    const setTheme = (theme: string) => {
        localStorage.setItem("theme", theme);
    }

    const themeContext = useMemo(() => {
        return {
            setTheme
        }
    }, [setTheme])

    return (
        <ThemeContext.Provider value={themeContext} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;