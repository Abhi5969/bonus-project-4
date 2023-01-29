const express = require("express");
const router = express.Router();

const {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
} = require("../controllers/employeesController");

router.route("/").get(getAllEmployee).post(createEmployee);
router
  .route("/:id")
  .get(getSingleEmployee)
  .patch(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
