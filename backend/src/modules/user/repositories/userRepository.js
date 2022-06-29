const Models = require("../../../models/index");

const findAll = async () => await Models.User.findAll();

const findByPk = async (userId) => await Models.User.findByPk(userId);

const create = async (user) => await Models.User.create(user);

const update = async (user, userId) =>
  await Models.User.update(user, { where: { id: userId } });

const destroy = async (userId) =>
  await Models.User.destroy({ where: { id: userId } });

const getByFilters = async (user) => await Models.User.findOne(user);

const destroyByFilters = async (user) => await Models.User.destroy(user);

module.exports = {
  findByPk,
  create,
  findAll,
  destroy,
  update,
  getByFilters,
  destroyByFilters
};
