const express = require('express');
const { getOrder, createOrder } = require('./routes/orders');
const { getUser } = require('./routes/users');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

app.get('/orders/:id', getOrder);
app.post('/orders', createOrder);
app.get('/users/:id', getUser);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Order API listening on port ${PORT}`));

module.exports = app;
