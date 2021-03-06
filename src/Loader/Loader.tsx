import React from "react";
import { IIcon } from "../Icons/Icons";

export const Loader = ({ className, width, height }: IIcon) => {
    let color1 = "#adff2f";
    let color2 = "#ffff00";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "auto" }}
            width={width}
            height={height}
            className={className}
            display="block"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
            id="loader"
        >
            <circle
                cx="50"
                cy="50"
                r="32"
                fill="none"
                stroke={color1}
                strokeDasharray="50.26548245743669 50.26548245743669"
                strokeLinecap="round"
                strokeWidth="4"
                id="ringLoader-1"
            />
            <circle
                cx="50"
                cy="50"
                r="23"
                fill="none"
                stroke={color2}
                strokeDasharray="36.12831551628262 36.12831551628262"
                strokeDashoffset="36.128"
                strokeLinecap="round"
                strokeWidth="4"
                id="ringLoader-2"
            />
        </svg>
    );
};
