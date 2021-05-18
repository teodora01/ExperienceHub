export const isEmpty = (string: string | any[]) => {
    if (string.length === 0) return true;
};

export const validateNumber = (value: string, float: any) => {
    let re;
    if (!float) {
        re = /^[\d\b]+$/;
    } else {
        re = /^(\d*\.)?\d+$/;
    }
    return !!(value === "" || re.test(value));
};
