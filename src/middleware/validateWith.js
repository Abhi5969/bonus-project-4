const errorHandler = require("./errorHandler");

const validateWith = (validationSchema) =>
  errorHandler(async (req, res, next) => {
    await validationSchema.validate(req.body);
    next();
  });

module.exports = validateWith;
