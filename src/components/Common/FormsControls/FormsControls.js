import React from "react";
import c from "./FormsControls.module.css";


export const BaseForm = ({input, meta, ...props}) => {

    let hasError = meta.error && meta.touched;

    return (
        <div className={c.formControl + " " + (hasError ? c.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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