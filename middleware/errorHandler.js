const { AppError } = require('../utils/errors');

module.exports = (err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
