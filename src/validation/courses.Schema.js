const yup = require("yup");

const validationSchema = yup.object({
  title: yup.string().required("Title is required").trim(),
  description: yup.string().required("Description is required"),
  videoUrl: yup.string().required("VideoUrl is required"),
  topics: yup.array(yup.string()),
  duration: yup.string().required("Please specify duration"),
  category: yup.string().required("Please add category"),
});

module.exports = validationSchema;
