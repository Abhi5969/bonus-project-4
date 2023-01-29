const errorHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error?.message || `something went wrong` });
  }
};

module.exports = errorHandler;
