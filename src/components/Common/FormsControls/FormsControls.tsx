import React from "react";
import c from "./FormsControls.module.css";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type BaseFormPropsType = {
    meta: WrappedFieldMetaProps
}

export const BaseForm: React.FC<BaseFormPropsType> = ({meta: {touched, error}, children}) => {

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

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <BaseForm {...props}><textarea {...input} {...restProps}/></BaseForm>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <BaseForm {...props}><input {...input} {...restProps}/></BaseForm>
}