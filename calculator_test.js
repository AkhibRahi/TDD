const add = require("./calculator");

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number itself when a single number is provided", () => {
    expect(add("1")).toBe(1);
});

test("returns sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
});

test("returns sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
});

test("handles new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiter format", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test("throws error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
});



