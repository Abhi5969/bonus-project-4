const jwt = require("jsonwebtoken");
const employeeModel = require("../models/employeeModel");
const errorHandler = require("../middleware/errorHandler");
const prepareJwtPayload = require("../utils/prepareJwtPayload");

const register = async (req, res) => {
  const { role, ...data } = req.body;
  const employee = await employeeModel.create(data);
  res.status(200).json(employee);
};

const login = async (req, res) => {
  let data = req.body;
  let { email, password } = data;

  let getEmployee = await employeeModel.findOne({
    email: email,
  });

  if (!getEmployee) {
    res.status(404).json({ msg: `employee not found` });
    return;
  }

  const isMatch = getEmployee.comparePassword(password);
  if (!isMatch) {
    res.status(400).json({ msg: `invalid credentials` });
    return;
  }
  const employeePayload = prepareJwtPayload(getEmployee);

  let token = jwt.sign(employeePayload, process.env.JWT_SECRET, {
    expiresIn: "4h",
  });

  res.set({ "x-auth-key": token });
  res.status(200).json({ Token: token });
};

module.exports = {
  login: errorHandler(login),
  register: errorHandler(register),
};
