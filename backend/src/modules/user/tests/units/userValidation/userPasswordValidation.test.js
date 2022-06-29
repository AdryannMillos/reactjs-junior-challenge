const { checkPassword } = require("../../../validation/userValidation");

test("should return match error", () => {
  expect(() => {
    checkPassword("123", "567");
  }).toThrow("Password and Confirm Password must match!");
});

test("should return length error", () => {
  expect(() => {
    checkPassword("123", "123");
  }).toThrow("Password must be between 4 and 8 characters!");
  expect(() => {
    checkPassword("123456789", "123456789");
  }).toThrow("Password must be between 4 and 8 characters!");
});

test("should return characters error", () => {
  expect(() => {
    checkPassword("12345678", "12345678");
  }).toThrow(
    "Password must contain at least a number, a uppercase and a lowercase letter and a special character"
  );
  expect(() => {
    checkPassword("1234567a", "1234567a");
  }).toThrow(
    "Password must contain at least a number, a uppercase and a lowercase letter and a special character"
  );
  expect(() => {
    checkPassword("123456Ba", "123456Ba");
  }).toThrow(
    "Password must contain at least a number, a uppercase and a lowercase letter and a special character"
  );
  expect(() => {
    checkPassword("12345B@", "12345B@");
  }).toThrow(
    "Password must contain at least a number, a uppercase and a lowercase letter and a special character"
  );
  expect(() => {
    checkPassword("AAAaB@", "AAAaB@");
  }).toThrow(
    "Password must contain at least a number, a uppercase and a lowercase letter and a special character"
  );
});

test("should return validated password", () => {
    expect(
      checkPassword("123Ab!", "123Ab!")).toBe("123Ab!");
  });