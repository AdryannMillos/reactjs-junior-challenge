const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");

async function execute(userName, email, password) {
  const findUser = await userRepository.getByFilters({
    where: { userName: userName },
  });
  const findEmail = await userRepository.getByFilters({
    where: { email: email },
  });

  if (findUser) {
    throw new Error("User Name already exists");
  }

  if (findEmail) {
    throw new Error("Email already exists");
  }
  const user = {
    userName: userName,
    email: email,
    password: password,
  };

  user.password = bcrypt.hashSync(password, 10);

  return await userRepository.create(user);
}

module.exports = {
  execute,
};
