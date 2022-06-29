const userCreateService = require("../services/userCreateService");
const userLoginService = require("../services/userLoginService");
const userValidation = require("../validation/userValidation");

async function store(req, res) {
  try {
    const validated = await userValidation.validate(req.body);

    await userCreateService.execute(
      validated.userName,
      validated.email,
      validated.password
    );

    return res.status(201).json({ message: "User Created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const token = await userLoginService.execute(req.body.userNameOrEmail, req.body.password);

    return res.status(200).json(token);
  } catch (error) {
    if (error.message == "Email, User Name or password not found") {
      res.status(401).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = {
  store,
  login,
};
