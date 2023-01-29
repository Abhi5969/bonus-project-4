const errorHandler = require("../middleware/errorHandler");
const courseModel = require("../models/courseModel");
const getAllCourse = async (req, res) => {
  const getAllCourse = await courseModel
    .find({ isDeleted: false })
    .select({ _id: 0, __v: 0, caeatedAt: 0, updataedAt: 0 });
  res.status(200).json({ msg: `All courses`, data: getAllCourse });
};
const getSingleCourse = async (req, res) => {
  const id = req.params.id;
  const getSingleCourse = await courseModel
    .findById(id)
    .select({ _id: 0, __v: 0, caeatedAt: 0, updataedAt: 0 });

  res.status(200).json({ msg: `Single course`, data: getSingleCourse });
};
const createCourse = async (req, res) => {
  let data = req.body;
  let { title, description, videoUrl, topics, duration, category } = data;
  if (!title) res.status(400).send({ message: `title is require !` });
  if (!description)
    res.status(400).send({ message: `description is require !` });
  if (!videoUrl) res.status(400).send({ message: `videoUrl is require !` });
  if (!topics) res.status(400).send({ message: `topics is require !` });
  if (!duration) res.status(400).send({ message: `duration is require !` });
  if (!category) res.status(400).send({ message: `category is require !` });
  const createCourse = await courseModel.create(data);
  res.status(200).json({ msg: `Create course`, data: createCourse });
};
const updateCourse = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  let updateCourse = await courseModel.findOneAndUpdate(
    { _id: id, isDeleted: false },
    data,
    { new: true }
  );
  res.status(200).json({ msg: `Update course`, data: updateCourse });
};
const deleteCourse = async (req, res) => {
  const id = req.params.id;
  let deleteCourse = await courseModel.findByIdAndUpdate(id, {
    $set: { isDeleted: true },
  });
  res.status(200).json({ msg: `delete course` });
};

module.exports = {
  getAllCourse: errorHandler(getAllCourse),
  getSingleCourse: errorHandler(getSingleCourse),
  createCourse: errorHandler(createCourse),
  updateCourse: errorHandler(updateCourse),
  deleteCourse: errorHandler(deleteCourse),
};
