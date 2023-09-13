import React, { FC } from 'react'
import FormContextProvider from '../../../contexts/form'
import FormInner from './inner'

export interface FormProps {
    children?: React.ReactNode
    onFinish: (values: any) => void,
    className?: string,
    style?: React.CSSProperties
}

const Form: FC<FormProps> = ({ children, onFinish, className, style }) => {
    return (
        <FormContextProvider>
            <FormInner onFinish={onFinish} className={className} style={style} >
                {children}
            </FormInner>
        </FormContextProvider>
    )
}

export default Form