const customerReadService = require("../services/customerReadService");
const customerCreateService = require("../services/customerCreateService");
const customerUpdateService = require("../services/customerUpdateService");
const customerDeleteService = require("../services/customerDeleteService");
const customerValidation = require("../validation/customerValidation");

async function index(req, res) {
  try {
    const userId = req.user.id;

    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 5;
    }

    const limit = parseInt(size);
    const skip = (page - 1) * size;

    const customers = await customerReadService.execute(userId, limit, skip);
    const numberOfPages = Math.ceil(customers[1] / size);
    return res
      .status(200)
      .json({
        actualPage: page,
        size: size,
        numberOfPages: numberOfPages,
        customers: customers[0],
      });
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
