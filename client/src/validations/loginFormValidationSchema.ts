import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be valid"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters")
      .max(16, "Password must be maximum 16 characters"),
});