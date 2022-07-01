const customerRepository = require("../repositories/customerRepository");

async function execute(id) {
  const findCustomer = await customerRepository.findByPk(id);

  if (!findCustomer) {
    throw new Error("Customer not found!");
  }
  return await customerRepository.destroy(id);
}

module.exports = {
  execute,
};
