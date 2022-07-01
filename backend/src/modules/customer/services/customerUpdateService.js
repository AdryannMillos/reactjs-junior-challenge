const customerRepository = require("../repositories/customerRepository");

async function execute(
  id,
  name,
  company,
  email,
  phone,
  address,
  note,
  isActive
) {
  const findCustomer = await customerRepository.findByPk(id);

  if (!findCustomer) {
    throw new Error("Customer not found!");
  }

  const customer = {
    name: name,
    company: company,
    email: email,
    phone: phone,
    address: address,
    note: note,
    isActive: isActive,
  };

  return await customerRepository.update(customer, id);
}

module.exports = {
  execute,
};
