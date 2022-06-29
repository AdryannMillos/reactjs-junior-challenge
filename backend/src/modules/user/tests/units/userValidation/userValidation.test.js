const { validate } = require("../../../validation/userValidation");

const data = {
  userName: "adryann",
  email: "adryann@gmail.com",
  password: "abc12D!",
  confirmPassword: "abc12D!",
};

test("should return validated data", async () => {
  expect(await validate(data)).toMatchObject({
    userName: "adryann",
    email: "adryann@gmail.com",
    password: "abc12D!"
  });
});
