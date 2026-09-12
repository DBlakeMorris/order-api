const express = require('express');
const { getOrder, createOrder } = require('./routes/orders');
const { getUser } = require('./routes/users');

const app = express();
app.use(express.json());

app.get('/orders/:id', getOrder);
app.post('/orders', createOrder);
app.get('/users/:id', getUser);

// NOTE: there is no centralized error-handling middleware here.
// Uncaught errors (like the one thrown in getOrder) fall through to
// Express's default handler, which leaks the stack trace to clients.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Order API listening on port ${PORT}`));

module.exports = app;
