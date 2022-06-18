const userCreateService = require("../services/userCreateService");
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

module.exports = {
  store,
};
