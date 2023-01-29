const { z } = require("zod");

const validationSchema = z.object({
  title: z.string().trim(),
  description: z.string(),
  videoUrl: z.string(),
  topics: z.array(z.string()),
  duration: z.string(),
  category: z.string(),
});

module.exports = validationSchema;
