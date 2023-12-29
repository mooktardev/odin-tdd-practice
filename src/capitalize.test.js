import { capitalize } from "./capitalize.js";

test('"hello world" should become "Hello world"', () => {
    expect(capitalize("hello world")).toBe("Hello world");
});

test('"Test" should become "Test"', () => {
    expect(capitalize("Test")).toBe("Test");
});
test('"90%8689)3" should become "Not a valid characters"', () => {
    expect(capitalize("90%8689)3")).toBe("Not a valid characters");
});
test('"7659" should become "Not a valid characters"', () => {
    expect(capitalize("7659")).toEqual("Not a valid characters");
});
