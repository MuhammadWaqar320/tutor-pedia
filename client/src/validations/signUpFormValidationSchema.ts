import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters")
    .max(16, "First name must be maximum 20 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(16, "Last name must be maximum 20 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Email must be valid"),
  phoneNo: Yup.string()
      .matches(/^[+0-9]{8,15}$/, "Phone number is not valid") // Example: Country code with 8 to 15 digits
      .required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters")
      .max(16, "Password must be maximum 16 characters"),
});