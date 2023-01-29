const express = require("express");
const router = express.Router();

const {
  createCourse,
  deleteCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
} = require("../controllers/coursesController");

router.route("/").get(getAllCourse).post(createCourse);
router
  .route("/:id")
  .get(getSingleCourse)
  .patch(updateCourse)
  .delete(deleteCourse);

module.exports = router;
