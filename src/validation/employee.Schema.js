const yup = require("yup");

const createEmployeeValidationSchema = yup.object({
  name: yup
    .string()
    .required("Employee name required")
    .trim()
    .max(20, `name should be within 20 letter`)
    .min(2, `name should be atleast two letters long`)
    .strict(true),
  email: yup
    .string()
    .required("Please provide an email")
    .email(`Please enter a valid email`)
    .strict(true),
  password: yup
    .string()
    .required("Please provide a password")
    .trim()
    .min(6, `Password should be atleast 6 letters long`)
    .strict(true),
  role: yup
    .string()
    .oneOf(["Admin", "Super Admin", "Employee"])
    .default("Employee"),
});
const updateEmployeeValidationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .max(20, `name should be within 20 letter`)
    .min(2, `name should be atleast two letters long`)
    .strict(true),
  email: yup.string().email(`Please enter a valid email`).strict(true),
  password: yup
    .string()
    .trim()
    .min(6, `Password should be atleast 6 letters long`)
    .strict(true),
});

module.exports = {
  createEmployeeValidationSchema,
  updateEmployeeValidationSchema,
};
