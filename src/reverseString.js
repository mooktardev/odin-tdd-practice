export const reverseString = (string) => {
    if (typeof string === 'string') return string.split('').reverse().join('');
    return 'Not a valid string'
}