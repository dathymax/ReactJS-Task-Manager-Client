import React, { FC, JSXElementConstructor, ReactElement, useContext } from 'react'
import { FormContext } from '../../../../contexts/form';

interface FormItemProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactElement<any, string | JSXElementConstructor<any>>
}

const FormItem: FC<FormItemProps> = ({ label, name, children, ...rest }) => {
    const { handleInputChange } = useContext(FormContext);

    if (!children) {
        return null;
    }

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            {React.cloneElement(children, { ...rest, name: name, onChange: handleInputChange })}
        </div>
    )
}

export default FormItem