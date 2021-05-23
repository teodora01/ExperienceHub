// import { parseDate } from "functions/utilFunctions/parsingFunctions";
// import {
//     handleDebouncing,
//     handleThrottle,
// } from "../functions/utilFunctions/debounceAndThrottle";

export const UtilService = {
    loopThroughItems: (
        items: { [x: string]: any },
        callback: (arg0: any, arg1: string) => void
    ) => {
        for (const itemKey in items) {
            callback(items[itemKey], itemKey);
        }
    },
    clone: (
        obj: {
            [x: string]: any;
            getTime: () => string | number | Date;
            forEach: (arg0: (element: any) => void) => void;
            constructor: new () => any;
            hasOwnProperty: (arg0: string) => any;
        } | null
    ) => {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }
        if (obj instanceof Date) {
            return new Date(obj.getTime());
        }
        if (Array.isArray(obj)) {
            const clonedArr: any[] = [];
            obj.forEach(function (element) {
                // @ts-ignore
                clonedArr.push(UtilService.clone(element));
            });
            return clonedArr;
        }
        const clonedObj = new obj.constructor();

        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                clonedObj[prop] = UtilService.clone(obj[prop]);
            }
        }

        return clonedObj;
    },
    replaceSerbianChars: (string: string) => {
        if (!string) return "";

        return string
            .replace(/ć/g, "c")
            .replace(/č/g, "c")
            .replace(/đ/g, "dj")
            .replace(/š/g, "s")
            .replace(/\\n/g, " ")
            .replace(/\\r/g, " ")
            .replace(/ž/g, "z");
    },
    // handleDebouncing: (callbackKey: any, callback: any, period: any) => {
    //     return handleDebouncing(callbackKey, callback, period);
    // },
    // handleThrottle: (callbackKey: any, callback: any, period: any) => {
    //     return handleThrottle(callbackKey, callback, period);
    // },
    truncateString: (string: string, limit: number) => {
        if (!string || !limit) return "";
        string = String(string);

        return string.length > limit
            ? string.substr(0, limit - 1) + "..."
            : string;
    },
    sortArray: (
        sortItems: any[],
        sortableName: any,
        direction: any,
        type: string
    ) => {
        if (type === "string") {
            if (direction) {
                return sortItems.sort((a: any, b: any) =>
                    UtilService.sortStringArray(a, b, sortableName)
                );
            } else {
                return sortItems
                    .sort((a: any, b: any) =>
                        UtilService.sortStringArray(a, b, sortableName)
                    )
                    .reverse();
            }
        }
        if (type === "date") {
            if (direction) {
                return sortItems.sort((a: any, b: any) =>
                    UtilService.sortDateArray(a, b, sortableName)
                );
            } else {
                return sortItems
                    .sort((a: any, b: any) =>
                        UtilService.sortDateArray(a, b, sortableName)
                    )
                    .reverse();
            }
        }
        if (type === "number") {
            if (direction) {
                return sortItems.sort((a: any, b: any) =>
                    UtilService.sortNumberArray(a, b, sortableName)
                );
            } else {
                return sortItems
                    .sort((a: any, b: any) =>
                        UtilService.sortNumberArray(a, b, sortableName)
                    )
                    .reverse();
            }
        }
    },
    sortStringArray: (
        curr: { [x: string]: any },
        prev: { [x: string]: any },
        name: string | number
    ) => {
        const a = (curr[name] || "").toLowerCase();
        const b = (prev[name] || "").toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
    },
    sortDateArray: (
        curr: { [x: string]: string | number | Date },
        prev: { [x: string]: string | number | Date },
        name: string | number
    ) => {
        // @ts-ignore
        return new Date(prev[name]) - new Date(curr[name]);
    },
    sortNumberArray: (
        curr: { [x: string]: string },
        prev: { [x: string]: string },
        name: string | number
    ) => {
        const a = parseInt(curr[name]);
        const b = parseInt(prev[name]);
        return a > b ? -1 : b > a ? 1 : 0;
    },
    handleAddFile: (
        name: any,
        e: {
            preventDefault: () => void;
            dataTransfer: { files: string | any[] };
            value: any[];
        },
        drop?: any
    ) => {
        if (drop) {
            e.preventDefault();
            if (e.dataTransfer.files.length > 1) {
                alert("only one file allowed");
            } else {
                return { value: e.dataTransfer.files[0], errors: [] };
            }
        } else {
            return { value: e.value[0], errors: [] };
        }
    },
    isNumber: (n: any) => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    isString: (s: any) => {
        return typeof s === "string";
    },
    areObjectsEqual: (
        object1: { [x: string]: any },
        object2: { [x: string]: any }
    ) => {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if ((keys1 && !keys2) || (!keys1 && keys2) || (!keys1 && !keys2))
            return false;

        if (keys1.length !== keys2.length) {
            return false;
        }

        let equals = true;

        for (let key of keys1) {
            if (typeof object1[key] === "object") {
                const propertyEqual = UtilService.areObjectsEqual(
                    object1[key],
                    object2[key]
                );

                if (!propertyEqual) equals = false;
            } else if (object1[key] !== object2[key]) {
                equals = false;
            }
        }

        return equals;
    },
    getFilenameFromPath: (filename: string) => {
        return filename.substring(filename.lastIndexOf("/") + 1);
    },
};
