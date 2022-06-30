const { execute } = require("../../../services/userLoginService");
const userCreate = require("../../../services/userCreateService");
const userRepository = require("../../../repositories/userRepository");

describe("Post login a user", () => {
  const previousEmail = "adrynn@123.com";

  test("should return a jwt token", async () => {
    user = await userCreate.execute("adaryab", previousEmail, "123Ab!");

    await expect(execute(previousEmail, "123Ab!")).resolves;
  });

  test("should return a Email, User Name or password not found", async () => {
    await expect(execute("adryab", "123Ab!")).rejects.toThrow(
      "Email, User Name or password not found"
    );
    await expect(execute("previousEmail@gmail.com", "123Ab!")).rejects.toThrow(
      "Email, User Name or password not found"
    );
    await expect(execute("previousEmail@gmail.com", "123Ab!!")).rejects.toThrow(
      "Email, User Name or password not found"
    );
  });

  afterAll(async () => {
    await userRepository.destroyByFilters({ where: { email: previousEmail } });
  });
});
