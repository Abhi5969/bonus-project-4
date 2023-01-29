const yup = require("yup");

const createCourseValidationSchema = yup.object({
  title: yup.string().required("Title is required").trim().strict(true),
  description: yup.string().required("Description is required").strict(true),
  videoUrl: yup.string().required("VideoUrl is required").strict(true),
  topics: yup.array(yup.string()).strict(true),
  duration: yup.string().required("Please specify duration").strict(true),
  category: yup.string().required("Please add category").strict(true),
});

const updateCourseValidationSchema = yup.object({
  title: yup.string().trim().strict(true),
  description: yup.string().strict(true),
  videoUrl: yup.string().strict(true),
  topics: yup.array(yup.string()).strict(true),
  duration: yup.string().strict(true),
  category: yup.string().strict(true),
});

module.exports = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
};
