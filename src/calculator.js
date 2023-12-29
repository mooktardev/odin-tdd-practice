const isValidArgs = (x, y) => {
    return typeof x !== "number" || typeof y !== "number" ? false : true;
};

const errorMsg = "Arguments contain a non-number";

export const add = (x, y) => {
    return isValidArgs(x, y) ? x + y : errorMsg;
};

export const substract = (x, y) => {
    return isValidArgs(x, y) ? x - y : errorMsg;
};

export const divide = (x, y) => {
    return isValidArgs(x, y) ? x / y : errorMsg;
};

export const multiply = (x, y) => {
    return isValidArgs(x, y) ? x * y : errorMsg;
};
