import React from 'react'
import {FormView} from "@/components/form/formStyles";

export type FormProps = {
    children?: React.ReactNode
    style?: object
}

const Form = ({ style, children }: FormProps) => {
    return (
        <FormView style={style}>
            {children}
        </FormView>
    )
}

export default Form;
