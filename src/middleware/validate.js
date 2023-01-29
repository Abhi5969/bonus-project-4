const errorHandler = require("./errorHandler");

const validate = (validationSchema) =>
  errorHandler(async (req, res, next) => {
    validationSchema.parse(req.body);
    next();
  });

module.exports = validate;
