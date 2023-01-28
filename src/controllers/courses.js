const errorHandler = require("../utils/errorHandler");

const getAllCourse = async (req, res) => {
  res.status(200).json({ msg: `All courses` });
};
const getSingleCourse = async (req, res) => {
  res.status(200).json({ msg: `Single course` });
};
const createCourse = async (req, res) => {
  res.status(200).json({ msg: `Create course` });
};
const updateCourse = async (req, res) => {
  res.status(200).json({ msg: `Update course` });
};
const deleteCourse = async (req, res) => {
  res.status(200).json({ msg: `delete course` });
};

module.exports = {
  getAllCourse: errorHandler(getAllCourse),
  getSingleCourse: errorHandler(getSingleCourse),
  createCourse: errorHandler(createCourse),
  updateCourse: errorHandler(updateCourse),
  deleteCourse: errorHandler(deleteCourse),
};
