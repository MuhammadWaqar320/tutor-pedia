import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be maximum 50 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description must be maximum 200 characters"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be a positive number"),
  category: Yup.string()
    .required("Category is required"),
  level: Yup.number()
    .typeError("Level must be a number")
    .required("Level is required")
    .positive("Level must be a positive number"),
  duration: Yup.number()
    .typeError("Duration must be a number")
    .required("Duration is required")
    .positive("Duration must be a positive number"),
  preRequisites: Yup.string()
    .required("Pre-requisites are required")
    .min(10, "Pre-requisites must be at least 10 characters")
    .max(200, "Pre-requisites must be maximum 200 characters"),
  language: Yup.string()
    .required("Language is required"),
  isCertified: Yup.boolean()
    .required("Certification status is required"),
  // Assuming you have validation for the file upload as well
});
