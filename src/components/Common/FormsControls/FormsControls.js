import React from "react";
import c from "./FormsControls.module.css";


export const BaseForm = ({input, meta: {touched, error}, children}) => {

    let hasError = error && touched;

    return (
        <div className={c.formControl + " " + (hasError ? c.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <BaseForm {...props}><textarea {...input} {...restProps}/></BaseForm>
}
export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <BaseForm {...props}><input {...input} {...restProps}/></BaseForm>
}