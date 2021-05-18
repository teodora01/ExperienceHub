import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { isEmpty, validateNumber } from "./inputValidations/InputValidations";
// import {
//     AtSignIcon,
//     AwardIcon,
//     PhoneIcon,
//     ShowPasswordIcon,
// } from "../../../components/Icons/Icons";
// import Translate from "../../functions/utilFunctions/translate";
// import { useFormContext } from "../CustomForm/CustomForm";
import { validateEmail } from "../../functions/utilFunctions/validations";

export interface IHandleInputProps {
    value: string | number;
    errors: Array<string>;
}
interface ICustomInput {
    name: string;
    value: string | number;
    placeholder?: string;
    type: "text" | "number" | "email" | "radio" | "password";
    handleInput: (
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
        // const generateIcon = () => {
        //     if (icon) {
        //         switch (name) {
        //             case "email":
        //                 return (
        //                     <span>
        //                         <AtSignIcon width={20} className={"icon"} />
        //                     </span>
        //                 );
        //             case "phone":
        //                 return (
        //                     <span>
        //                         <PhoneIcon width={20} className={"icon"} />
        //                     </span>
        //                 );
        //             case "points_scored":
        //                 return (
        //                     <span>
        //                         <AwardIcon width={15} className="iconPoints" />
        //                     </span>
        //                 );
        //             case "points":
        //                 return (
        //                     <span>
        //                         <AwardIcon width={15} className="iconPoints" />
        //                     </span>
        //                 );
        //             default:
        //                 break;
        //         }
        //     }
        // };
        const { t } = useTranslation();

        return (
            <div className="inputComponent p-r">
                <div
                    className={`inputWrapper ${preview ? "preview" : ""} ${
                        edit ? "editable" : ""
                    }  ${value ? "hasText" : ""}`}
                >
                    <label className={`${labelClass ? labelClass : ""}`}>
                        {/* <Translate text={label} /> */}
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
                            {/* <ShowPasswordIcon
                                width={20}
                                className={`showPassword ${
                                    showPassword ? "active" : ""
                                }`}
                            /> */}
                        </span>
                    )}
                    {
                        // console.log(icon)
                        // generateIcon()
                    }
                </div>
                {errors?.map((e: any, i: any) => (
                    <span
                        className={`error f-s-12 is-warning danger  ${
                            errorClass ? errorClass : ""
                        }`}
                        key={i}
                    >
                        {/* <Translate text={e} /> */}
                    </span>
                ))}
            </div>
        );
    }
);
export default _csi;
