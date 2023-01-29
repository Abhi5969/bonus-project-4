const yup = require("yup");

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Employee name required")
    .trim()
    .max(20, `name should be within 20 letter`)
    .min(2, `name should be atleast two letters long`),
  email: yup
    .string()
    .required("Please provide an email")
    .email(`Please enter a valid email`),
  password: yup
    .string()
    .required("Please provide a password")
    .trim()
    .min(6, `Password should be atleast 6 letters long`),
  role: yup
    .string()
    .oneOf(["Admin", "Super Admin", "Employee"])
    .default("Employee"),
});

module.exports = validationSchema;
