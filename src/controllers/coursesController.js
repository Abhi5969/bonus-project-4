const errorHandler = require("../middleware/errorHandler");
const courseModel = require("../models/courseModel");
const getAllCourse = async (req, res) => {
  res.status(200).json({ msg: `All courses` });
};
const getSingleCourse = async (req, res) => {
  res.status(200).json({ msg: `Single course` });
};
const createCourse = async (req, res) => {
  let data = req.body;
  let { title, description, videoUrl, topics, duration, category } = data;
  const caeateCourse = await courseModel.create(data);
  res.status(200).json({ msg: `Create course`, data: caeateCourse });
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
