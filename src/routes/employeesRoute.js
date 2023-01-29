const express = require("express");
const router = express.Router();
const validationSchema = require("../validation/employee.Schema");
const validate = require("../middleware/validate");

const {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
} = require("../controllers/employeesController");

router
  .route("/")
  .get(getAllEmployee)
  .post(validate(validationSchema), createEmployee);
router
  .route("/:id")
  .get(getSingleEmployee)
  .patch(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
