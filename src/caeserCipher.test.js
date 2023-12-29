import { caeserCipher } from "./caeserCipher.js";

test('cipher "abcdefghi" should return "lharbmfji"', () => {
    expect(caeserCipher("abcdefghi")).toBe("lharbmfji");
});

test('cipher "aAbBcCdDeE" should return "lLhHaArRbB"', () => {
    expect(caeserCipher("aAbBcCdDeE")).toBe("lLhHaArRbB");
});

test('cipher "123" should return "Not a valid string"', () => {
    expect(caeserCipher(123)).toBe("Not a valid string");
});
