const errorHandler = (fn) => async (req, res) => {
  try {
    await fn(req, res);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = errorHandler;
