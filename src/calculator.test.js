import { add, substract, divide, multiply } from "./calculator.js";

test("should add 2 to 5", () => {
    expect(add(2, 5)).toBe(7);
});

test("should subsctract 10 to 22", () => {
    expect(substract(22, 10)).toBe(12);
});

test("should divide 22 by 3", () => {
    expect(divide(22, 3)).toBe(7.333333333333333);
});

test("should multiply 8 by 7", () => {
    expect(multiply(8, 7)).toBe(56);
});

test("should not divide 10 by 0", () => {
    expect(divide(10, 0)).toBe(Infinity);
});

test('should not subcribe "23" to "56"', () => {
    expect(substract("23", "56")).toBe("Arguments contain a non-number");
});

test('should not add 56 to "23"', () => {
    expect(add("23", 56)).not.toBe(79);
});
