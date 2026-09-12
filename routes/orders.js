const { orders } = require('../data');

function findOrder(id) {
  const order = orders[id];
  if (!order) {
    // Throws a raw Error with an internal-sounding message. If this
    // isn't caught, Express's default handler sends the message and
    // stack trace straight to the client.
    throw new Error(`Order ${id} not found in in-memory store`);
  }
  return order;
}

function getOrder(req, res) {
  const order = findOrder(req.params.id);
  res.json(order);
}

function createOrder(req, res) {
  if (!req.body || !req.body.item) {
    // A different failure style: caught, but with a generic,
    // uninformative error shape.
    return res.status(400).json({ error: 'failed' });
  }
  const id = Object.keys(orders).length + 1;
  orders[id] = { id, item: req.body.item, quantity: req.body.quantity || 1 };
  res.status(201).json(orders[id]);
}

module.exports = { getOrder, createOrder };
