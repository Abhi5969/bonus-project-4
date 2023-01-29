const yup = require("yup");

const validationSchema = yup.object({
  email: yup
    .string()
    .strict(true)
    .required("Please provide an email")
    .email(`Please enter a valid email`),
  password: yup
    .string()
    .strict(true)
    .required("Please provide a password")
    .trim()
    .min(6, `Password should be atleast 6 letters long`),
});

module.exports = validationSchema;
