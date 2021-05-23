import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { isEmpty, validateNumber } from "./inputValidations/InputValidations";
import { useFormContext } from "../CustomForm/CustomForm";
import {
    lettersOnlyValidation,
    validateEmail,
} from "../../functions/utilFunctions/validations";
import Translate from "../../functions/translate";
import { ShowPasswordIcon } from "../../Icons/Icons";

export interface IHandleInputProps {
    value: string | number;
    errors: Array<string>;
}
interface ICustomInput {
    name: string;
    value?: string | number;
    placeholder?: string;
    type: "text" | "number" | "email" | "letters" | "password";
    handleInput?: (
        name: string,
        data: IHandleInputProps,
        index?: number
    ) => void;
    required?: boolean;
    errors?: Array<string>;
    className?: string;
    label?: string | JSX.Element;
    float?: boolean;
    preview?: boolean;
    edit?: boolean;
    labelClass?: string;
    errorClass?: string;
    index?: number;
    maxLength?: number;
    icon?: boolean;
}
const _csi = React.forwardRef<HTMLInputElement, ICustomInput>(
    (
        {
            name,
            value,
            handleInput,
            type,
            required,
            errors,
            className,
            label,
            float,
            preview,
            edit,
            labelClass,
            errorClass,
            index,
            maxLength,
            icon,
            placeholder,
        }: any,
        ref: any
    ) => {
        const isForm = useFormContext();
        if (!isForm) {
            throw Error(
                "You can't use CustomInput outside of CustomForm component!"
            );
        }
        const [showPassword, setShowPassword] = useState(false);
        const validateInput = () => {
            if (typeof value === "string") {
                handleInput(name, {
                    value: value.replace(/\s{2,}/g, " ").trim(),
                    errors: [],
                });
            }
            if (type === "email" && !validateEmail(value)) {
                handleInput(name, { value, errors: ["EMAIL_INVALID"] }, index);
            }
            if (type === "letters" && !lettersOnlyValidation(value)) {
                handleInput(name, { value, errors: ["ONLY_LETTERS"] });
            }
            if (required && isEmpty(value)) {
                handleInput(name, { value, errors: ["INPUT_REQUIRED"] }, index);
            }
        };
        const handleShowPassword = () => {
            setShowPassword((prevState: any) => !prevState);
        };
        const handleOnChange = (name: any, val: any) => {
            if (type !== "number") {
                handleInput(name, { value: val, errors: [] }, index);
            } else {
                if (validateNumber(val, float)) {
                    handleInput(name, { value: val, errors: [] }, index);
                }
            }
        };

        const { t } = useTranslation();

        return (
            <div className="inputComponent p-r">
                <div
                    className={`inputWrapper ${preview ? "preview" : ""} ${
                        edit ? "editable" : ""
                    }  ${value ? "hasText" : ""}`}
                >
                    <label className={`${labelClass ? labelClass : ""}`}>
                        <Translate text={label} />
                    </label>
                    <input
                        placeholder={placeholder ? t(placeholder) : ""}
                        className={`  ${className ? className : "f-s-16"}`}
                        value={value}
                        onChange={(e: { target: { value: any } }) =>
                            handleOnChange(name, e.target.value)
                        }
                        onBlur={validateInput}
                        maxLength={maxLength}
                        type={!showPassword ? type : "text"}
                        disabled={preview ? !edit : false}
                        ref={ref}
                    />
                    {type === "password" && (
                        <span onClick={handleShowPassword}>
                            <ShowPasswordIcon
                                width={20}
                                className={`showPassword ${
                                    showPassword ? "active" : ""
                                }`}
                            />
                        </span>
                    )}
                </div>
                {errors?.map((e: any, i: any) => (
                    <span
                        className={`error f-s-12 is-warning danger  ${
                            errorClass ? errorClass : ""
                        }`}
                        key={i}
                    >
                        <Translate text={e} />
                    </span>
                ))}
            </div>
        );
    }
);
export default _csi;
