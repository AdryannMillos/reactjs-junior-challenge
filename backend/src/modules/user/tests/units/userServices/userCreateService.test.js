const { execute } = require("../../../services/userCreateService");
const userRepository = require("../../../repositories/userRepository");

describe("Post Create a user", () => {
  const previousEmail = "adryn@123.com";

  test("should return a user instance", async () => {
    const createdUser = await execute("adryab", previousEmail, "123Ab!");

    const expectedResponse = {
      userName: "adryab",
      email: "adryn@123.com",
    };

    expect(createdUser).toMatchObject(expectedResponse);
  });

  test("should return a email already exists error", async () => {
    await expect(execute("ariyab", previousEmail, "123Ab!")).rejects.toThrow(
      "Email already exists"
    );
  });

  test("should return a user already exists error", async () => {
    await expect(
      execute("adryab", "previousEmail@gmail.com", "123Ab!")
    ).rejects.toThrow("User Name already exists");
  });

  afterAll(async () => {
    await userRepository.destroyByFilters({ where: { email: previousEmail } });
  });
});
