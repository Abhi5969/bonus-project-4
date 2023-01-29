const express = require("express");
const router = express.Router();
const validationSchema = require("../validation/employee.Schema");
const validateWith = require("../middleware/validateWith");

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
  .post(validateWith(validationSchema), createEmployee);
router
  .route("/:id")
  .get(getSingleEmployee)
  .patch(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
