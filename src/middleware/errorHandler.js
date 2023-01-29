const errorHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    if (error?.code && error?.code === 11000) {
      const fields = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ msg: `${fields} already exist` });
    }
    res.status(500).json({ message: error?.message || `something went wrong` });
  }
};

module.exports = errorHandler;
