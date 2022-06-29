const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function execute(userNameOrEmail, password) {
  const userWithEmail = await userRepository.getByFilters({
    where: { email: userNameOrEmail },
  });

  const userWithUserName = await userRepository.getByFilters({
    where: { userName: userNameOrEmail },
  });

  let userFound = "";

  if (userWithEmail) {
    userFound = userWithEmail;
  } else if (userWithUserName) {
    userFound = userWithUserName;
  } else {
    userFound = false;
  }

  if (userFound == false || !bcrypt.compareSync(password, userFound.password)) {
    throw new Error("Email, User Name or password not found");
  }

  const jwtToken = jwt.sign(
    {
      id: userFound.id,
      userName: userFound.userName,
      email: userFound.email,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "1h",
    }
  );
  return jwtToken;
}

module.exports = {
  execute,
};
