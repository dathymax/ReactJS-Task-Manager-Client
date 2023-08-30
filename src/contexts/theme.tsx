import React, { PropsWithChildren, useContext, useMemo, useState } from "react";

export interface IThemeContext {
    theme: string
    handleSetTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider');
    }

    return context;
};

const ThemeContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [theme, setTheme] = useState<string>(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : "green-500";
    });

    const handleSetTheme = (theme: string) => {
        localStorage.setItem("theme", theme);
        setTheme(theme);
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