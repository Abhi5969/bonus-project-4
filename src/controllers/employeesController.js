const errorHandler = require("../utils/errorHandler");
const employeeModel = require('../models/employeeModel')
const getAllEmployee = async (req, res) => {
  res.status(200).json({ msg: `All Employees` });
};
const getSingleEmployee = async (req, res) => {
  res.status(200).json({ msg: `Single Employee` });
};
const createEmployee = async (req, res) => {
  res.status(200).json({ msg: `Create Employee` });
};
const updateEmployee = async (req, res) => {
  res.status(200).json({ msg: `Update Employee` });
};
const deleteEmployee = async (req, res) => {
  res.status(200).json({ msg: `delete Employee` });
};

module.exports = {
  getAllEmployee: errorHandler(getAllEmployee),
  getSingleEmployee: errorHandler(getSingleEmployee),
  createEmployee: errorHandler(createEmployee),
  updateEmployee: errorHandler(updateEmployee),
  deleteEmployee: errorHandler(deleteEmployee),
};
