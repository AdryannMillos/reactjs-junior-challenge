const { execute } = require("../../../services/userLoginService");
const userRepository = require("../../../repositories/userRepository");

describe("Post login a user", () => {
  const previousEmail = "adrynn@123.com";

//   test("should return a jwt token", async () => {
//     user = await userRepository.create({
//         userName: "adaryab",
//         email: previousEmail,
//         password: "$2b$10$1MzAliE1/L/dFzNJfdaVQupGJkPD19O.2Wkro1Mn6QjGK1.3oSDh2",
//     });

//     await expect(execute(previousEmail, "123Ab!")).resolves.toBe('string');
//   });

    test("should return a Email, User Name or password not found", async () => {
      await expect(
        execute("adryab", "123Ab!")
      ).rejects.toThrow("Email, User Name or password not found");
      await expect(
          execute("previousEmail@gmail.com", "123Ab!")
        ).rejects.toThrow("Email, User Name or password not found");
        await expect(
          execute("previousEmail@gmail.com", "123Ab!!")
        ).rejects.toThrow("Email, User Name or password not found");
    });

  afterAll(async () => {
    await userRepository.destroyByFilters({ where: { email: previousEmail } });
  });
});
