const { checkEmail } = require("../../../validation/userValidation");

test("should return empty error", () => {
  expect(() => {
    checkEmail("");
  }).toThrow("Email can not be empty!");
});

test("should return invalid email", () => {
  expect(() => {
    checkEmail("adryanngmail.com");
  }).toThrow("Invalid Email!");
  expect(() => {
    checkEmail("adryann@gmaicom");
  }).toThrow("Invalid Email!");
});

test("should return validated email", () => {
    expect(checkEmail("adryann312@gmail.com")).toBe("adryann312@gmail.com");
});
