const jwt = require("jsonwebtoken");
const errorHandler = require("../middleware/errorHandler");

const authentication = async (req, res, next) => {
  let token = req.headers["x-auth-key"];
  if (!token) res.status(400).send({ msg: `authentication failure` });

  const employee = jwt.verify(token, process.env.JWT_SECRET);
  req.user = employee;
  return next();
};

const hasPermission = (...roles) =>
  errorHandler(async (req, res, next) => {
    if (roles.includes(req.user.role)) {
      return next();
    }
    res.status(403).json({ msg: `Permission Denied` });
  });

module.exports = {
  authentication: errorHandler(authentication),
  hasPermission,
};
