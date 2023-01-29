const express = require("express");
const router = express.Router();
const registervalidationSchema = require("../validation/register.Schema");
const loginvalidationSchema = require("../validation/login.Schema");
const validateWith = require("../middleware/validateWith");

const { login, register } = require("../controllers/authController");

router
  .route("/register")
  .post(validateWith(registervalidationSchema), register);
router.route("/login").post(validateWith(loginvalidationSchema), login);

module.exports = router;
