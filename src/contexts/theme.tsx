import React, { FC, useContext, useEffect, useMemo, useState } from "react";

export interface IThemeContext {
    theme: string
    handleSetTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext | undefined>(undefined);

interface ThemeContextProviderProps {
    children?: React.ReactNode
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider');
    }

    return context;
};

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>("");

    useEffect(() => {
        setTheme(localStorage.getItem("theme") || "green");
    }, [localStorage.getItem("theme")])

    const handleSetTheme = (theme: string) => {
        localStorage.setItem("theme", theme);
    }

    const themeContext: IThemeContext = useMemo(() => {
        return {
            theme, handleSetTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={themeContext} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;