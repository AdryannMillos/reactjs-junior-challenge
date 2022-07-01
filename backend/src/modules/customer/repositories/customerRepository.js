const Models = require("../../../models/index");

const findAll = async (where) => await Models.Customer.findAll(where);

const findByPk = async (id) => await Models.Customer.findByPk(id);

const create = async (customer) => await Models.Customer.create(customer);

const update = async (customer, id) =>
  await Models.Customer.update(customer, { where: { id: id } });

const destroy = async (id) =>
  await Models.Customer.destroy({ where: { id: id } });

const getByFilters = async (customer) =>
  await Models.Customer.findOne(customer);

const destroyByFilters = async (customer) =>
  await Models.Customer.destroy(customer);

module.exports = {
  findByPk,
  create,
  findAll,
  destroy,
  update,
  getByFilters,
  destroyByFilters,
};
