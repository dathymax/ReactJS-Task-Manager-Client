import React, { PropsWithChildren, useContext, useMemo, useState } from "react";

export interface IFormContext<T> {
    formData?: T,
    handleInputChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

export const FormContext = React.createContext<IFormContext<any>>({ formData: {} });

export function useFormContext<T>(): IFormContext<T> {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error("useFormContext must be used within FormContextProvider!");
    }

    return context as IFormContext<T>;
}

function FormContextProvider({ children }: PropsWithChildren<{}>) {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormData({ ...formData, [name]: value });
    };

    const contextValues = useMemo(() => ({
        formData, handleInputChange
    }), [formData])

    return (
        <FormContext.Provider value={contextValues}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;