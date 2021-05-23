import React from "react";
import { CheckmarkIcon } from "../../Icons/Icons";

interface ICheckbox {
    name: string;
    // checked: boolean;
    handleChange: (checked: any, index: any) => void;
    index?: number;
    checkMarkWidth?: number;
}

const _ccb = ({
    handleChange,
    name,
    index,
    checkMarkWidth = 20,
}: ICheckbox) => {
    return (
        <div className="checkboxWrapper">
            <input
                id={`${name}${index ? `-${index}` : ""}`}
                type="checkbox"
                // checked={checked}
                onChange={(e) => handleChange(e.currentTarget.checked, index)}
            />
            <label
                htmlFor={`${name}${index ? `-${index}` : ""}`}
                className="checkBox br-r-4 d-flex justify-content-center align-items-center"
            >
                <CheckmarkIcon width={checkMarkWidth} />
            </label>
        </div>
    );
};

export default _ccb;
