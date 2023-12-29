import { reverseString } from "./reverseString.js";

test('should reverse "How are you doing"', () => {
    expect(reverseString("How are you doing")).toBe("gniod uoy era woH");
});

test('should revsere "homophobia123"', () => {
    expect(reverseString("homophobia123")).toBe("321aibohpomoh");
});
test('should reverse "123 hello world"', () => {
    expect(reverseString("123 hello world")).toBe("dlrow olleh 321");
});
test('should not reverse 123678', () => {
    expect(reverseString(123678)).toBe("Not a valid string");
});
test('should not reverse true', () => {
    expect(reverseString(true)).toBe("Not a valid string");
});
