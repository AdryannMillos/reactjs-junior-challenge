const customerRepository = require("../repositories/customerRepository");

async function execute(userId) {
  const userCustomers = await customerRepository.findAll({
    where: { userId: userId},
    include: ["user"],
  });

return userCustomers
}

module.exports = {
  execute,
};
