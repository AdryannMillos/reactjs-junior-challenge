const customerRepository = require("../repositories/customerRepository");

async function execute(
  userId,
  name,
  company,
  email,
  phone,
  address,
  note,
  isActive
) {
  const findPhone = await customerRepository.getByFilters({
    where: { phone: phone },
  });
  const findEmail = await customerRepository.getByFilters({
    where: { email: email },
  });

  if (findPhone) {
    throw new Error("Phone already exists");
  }

  if (findEmail) {
    throw new Error("Email already exists");
  }

  const customer = {
    userId: userId,
    name: name,
    company: company,
    email: email,
    phone: phone,
    address: address,
    note: note,
    isActive: isActive,
  };

  return await customerRepository.create(customer);
}

module.exports = {
  execute,
};
