const { users } = require('../data');

function getUser(req, res) {
  const user = users[req.params.id];
  if (!user) {
    // A third failure style: plain text, not JSON, and no error code
    // in the body at all -- inconsistent with both orders.js styles.
    return res.status(404).send('User not found');
  }
  res.json(user);
}

module.exports = { getUser };
