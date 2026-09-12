const { orders } = require('../data');
const { AppError } = require('../errors');

function findOrder(id) {
  const order = orders[id];
  if (!order) {
    throw new AppError(404, 'ORDER_NOT_FOUND', 'Order not found');
  }
  return order;
}

function getOrder(req, res) {
  const order = findOrder(req.params.id);
  res.json(order);
}

function createOrder(req, res) {
  if (!req.body || !req.body.item) {
    throw new AppError(400, 'VALIDATION_ERROR', 'Field "item" is required');
  }
  const id = Object.keys(orders).length + 1;
  orders[id] = { id, item: req.body.item, quantity: req.body.quantity || 1 };
  res.status(201).json(orders[id]);
}

module.exports = { getOrder, createOrder };
