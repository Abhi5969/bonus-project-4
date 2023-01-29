const { z } = require("zod");

const validationSchema = z.object({
  name: z
    .string()
    .max(20, `name should be within 20 letter`)
    .min(2, `name should be two letter`),
  email: z.string().email(`Please enter a valid email`),
  password: z.string().trim(),
  role: z.enum(["Admin", "Super Admin", "Employee"]).default("Employee"),
});

module.exports = validationSchema;
