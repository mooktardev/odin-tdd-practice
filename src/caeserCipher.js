import { isLowerCase, isUpperCase } from "./capitalize.js";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const generatedCipher = alphabet
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
const cipher = 'lharbmfjizeyucdosqktxpvwgn'
const singleCipher = (char) => cipher[alphabet.indexOf(char)];

export const caeserCipher = (string) => {
    let result = "";

    if (typeof string !== "string") return "Not a valid string";

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (isUpperCase(char) || isLowerCase(char)) {
            if (isLowerCase(char)) {
                result += singleCipher(char);
            } else if (isUpperCase(char)) {
                result += singleCipher(char.toLowerCase()).toUpperCase();
            }
        } else {
            result += char;
        }
    }
    return result;
};
