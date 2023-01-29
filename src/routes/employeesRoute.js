const express = require("express");
const router = express.Router();
const validateWith = require("../middleware/validateWith");
const {
  createEmployeeValidationSchema,
  updateEmployeeValidationSchema,
} = require("../validation/employee.Schema");

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
  .post(validateWith(createEmployeeValidationSchema), createEmployee);
router
  .route("/:id")
  .get(getSingleEmployee)
  .patch(validateWith(updateEmployeeValidationSchema), updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
