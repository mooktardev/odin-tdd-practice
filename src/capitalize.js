const capitalize = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (isUpperCase(string[i])) return string
        if (isLowerCase(string[i])) {
            return string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1, string.length + 1)
        }
    }
    return 'Not a valid characters'
}

const isLowerCase = (c) => {
    return (c == c.toLowerCase() && c != c.toUpperCase()) ? true : false
}
const isUpperCase = (c) => {
    return (c == c.toUpperCase() && c != c.toLowerCase()) ? true : false
}

module.exports = { capitalize, isLowerCase, isUpperCase }