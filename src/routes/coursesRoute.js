const express = require("express");
const router = express.Router();
const {
  createCourseValidationSchema,
  updateCourseValidationSchema,
} = require("../validation/courses.Schema");
const validateWith = require("../middleware/validateWith");
const { authentication, hasPermission } = require("../middleware/authMW");

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
  .post(
    validateWith(createCourseValidationSchema),
    authentication,
    hasPermission("Admin", "Super Admin"),
    createCourse
  );
router
  .route("/:id")
  .get(getSingleCourse)
  .patch(
    validateWith(updateCourseValidationSchema),
    authentication,
    hasPermission("Admin", "Super Admin"),
    updateCourse
  )
  .delete(deleteCourse);

module.exports = router;
