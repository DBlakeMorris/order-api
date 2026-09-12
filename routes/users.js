const { users } = require('../data');
const { AppError } = require('../errors');

function getUser(req, res) {
  const user = users[req.params.id];
  if (!user) {
    throw new AppError(404, 'USER_NOT_FOUND', 'User not found');
  }
  res.json(user);
}

module.exports = { getUser };
