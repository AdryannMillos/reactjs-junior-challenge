const customerReadService = require("../services/customerReadService");
const customerCreateService = require("../services/customerCreateService");
const customerUpdateService = require("../services/customerUpdateService");
const customerDeleteService = require("../services/customerDeleteService");
const customerValidation = require("../validation/customerValidation");

async function index(req, res) {
  try {
    const userId = req.user.id;

    const users = await customerReadService.execute(userId);

    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function store(req, res) {
  try {
    const validated = await customerValidation.validate(req.body);
    const userId = req.user.id;

    await customerCreateService.execute(
      userId,
      validated.name,
      validated.company,
      validated.email,
      validated.phone,
      validated.address,
      validated.note,
      validated.isActive
    );

    return res.status(201).json({ message: "Customer Created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req, res) {
  try {
    const validated = await customerValidation.validate(req.body);
    const customerId = req.params.id;

    await customerUpdateService.execute(
      customerId,
      validated.name,
      validated.company,
      validated.email,
      validated.phone,
      validated.address,
      validated.note,
      validated.isActive
    );

    return res.status(200).json({ message: "Customer Updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function destroy(req, res) {
  try {
    const customerId = req.params.id;

    await customerDeleteService.execute(customerId);

    return res.status(200).json({ message: "Customer Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  store,
  index,
  update,
  destroy,
};
