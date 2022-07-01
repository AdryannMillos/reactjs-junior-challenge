const customerRepository = require("../repositories/customerRepository");

async function execute(userId, limit, skip) {
  const userCustomers = await customerRepository.findAll({
    where: { userId: userId },
    include: ["user"],
    limit: limit,
    offset: skip,
    order: [["id", "ASC"]],
  });

  const AllCustomers = await customerRepository.findAll({
    where: { userId: userId },
    include: ["user"],
  });

  return [userCustomers, AllCustomers.length];
}

module.exports = {
  execute,
};
