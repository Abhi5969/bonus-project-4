const express = require("express");
const router = express.Router();
const validationSchema = require("../validation/courses.Schema");
const validateWith = require("../middleware/validateWith");

const {
  createCourse,
  deleteCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
} = require("../controllers/coursesController");

router
  .route("/")
  .get(getAllCourse)
  .post(validateWith(validationSchema), createCourse);
router
  .route("/:id")
  .get(getSingleCourse)
  .patch(updateCourse)
  .delete(deleteCourse);

module.exports = router;
