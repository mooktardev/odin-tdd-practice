export const analyzeArray = (array) => {
    if (!isValidArray(array))  return "Not a valid array";

    const sum = array.reduce((current, previous) => current + previous);
    const average = sum / array.length;
    const min = array.reduce((current, previous) => Math.min(current, previous));
    const max = array.reduce((current, previous) => Math.max(current, previous));
    const length = array.length;

    return { average, min, max, length };
};

const isValidArray = (array) => {
    if (Array.isArray(array)) {
        for (let item of array) if (typeof item !== "number") return false;
    } else {
        return false;
    }
    return true;
};
