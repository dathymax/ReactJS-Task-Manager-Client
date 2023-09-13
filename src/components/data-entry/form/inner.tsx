import React, { FC } from 'react'
import { useFormContext } from '../../../contexts/form'
import { FormProps } from '.';

const FormInner: FC<FormProps> = ({ children, onFinish, className, style }) => {
    const { formData } = useFormContext();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (onFinish) {
            onFinish(formData);
        }
    }

    return (
        <form onSubmit={onSubmit} className={className} style={{ ...style }}>{children}</form>
    )
}

export default FormInner