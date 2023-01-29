const yup = require("yup");
// const Regexp = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6}$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .strict()
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
  // .matches(
  //   Regexp,
  //   "password  should contain Min 6 character and 1 Special Symbol"
  // ),
});

module.exports = validationSchema;
