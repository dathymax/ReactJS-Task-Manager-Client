import * as React from "react";

export interface LayoutContextType {
    theme: string | null,
    setTheme: (theme: string) => void | undefined
}

export const LayoutContext = React.createContext<LayoutContextType>({
    theme: "",
    setTheme: () => { }
});