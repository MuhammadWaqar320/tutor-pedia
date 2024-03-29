"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import logo from "../../public/images/smallLogo.jpeg";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";
import { useFormik } from "formik";
import { validationSchema } from "@/validations/signUpFormValidationSchema";
import { UserType, UserRole } from "@/api/user";
import { createNewUser } from "@/api/user";
import { toastSuccessMessage, toastErrMessage } from "@/utils/functions";
import { gqlErrorCodes, userRole } from "@/utils/constant";
import CircularProgress from "@mui/material/CircularProgress";
import { uploadFileToFBStorageAndGetURL } from "@/api/common";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserType>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    role: UserRole.Student,
    password: "",
    profileUrl: "",
    bio: "",
    qualification: "",
    specialization: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const {
    errors,
    values,
    touched,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: userData,
    validationSchema: validationSchema,
    onSubmit: async (values: UserType) => {
      try {
        setIsLoading(true);
        const { url, success } = await uploadFileToFBStorageAndGetURL(
          `userProfile/${Date.now()}${file?.name}`,
          file
        );

        if (success) {
          const response = await createNewUser({ ...values, profileUrl: url });

          if (response?.success) {
            setIsLoading(false);
            setUserData({
              firstName: "",
              lastName: "",
              email: "",
              phoneNo: "",
              role: UserRole.Student,
              password: "",
              profileUrl: "",
              bio: "",
              specialization: "",
              qualification:""
            });
            toastSuccessMessage("You have been registered successfully.");
            router.push("/");
          } else if (
            response?.code === gqlErrorCodes.alreadyExist &&
            !response?.success
          ) {
            setIsLoading(false);
            toastErrMessage("User is already exist.");
          }
        } else {
          setIsLoading(false);
          toastErrMessage(
            "An error occurred while uploading your profile picture."
          );
        }
      } catch (error) {
        setIsLoading(false);
        toastErrMessage("An error occurred while processing your request.");
      }
    },
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldValue(name, value.trim());
    setFieldTouched(name, true, false);
  };
  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFieldValue(name, value.trim());
    setFieldTouched(name, true, false);
  };
  const handleOnSelect = (e: React.FocusEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFieldValue(name, value);
    setFieldTouched(name, true, false);
  };
  const onChangeFile = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file = target?.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <Form className="sign-up-form-class" onSubmit={handleSubmit}>
      <div style={{ marginBottom: "30px" }}>
        <Image
          src={logo}
          width={80}
          height={80}
          className="rounded-full"
          alt="logo"
          style={{ margin: "auto" }}
        />
        <p className="sign-up-label">Create your an account</p>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          Let&apos;s get started
        </p>
      </div>
      <Form.Group controlId="formGridFirstName" className="mb-1.5">
        <Form.Label className="mb-0.5">First Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          name="firstName"
          onBlur={handleOnBlur}
          value={values.firstName}
          onChange={handleOnChange}
          required
        />
        {touched.firstName && errors.firstName ? (
          <p className="errorMessage">{errors.firstName}</p>
        ) : null}
      </Form.Group>
      <Form.Group controlId="formGridLName" className="mb-1.5">
        <Form.Label className="mb-0.5">Last Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          onBlur={handleOnBlur}
          value={values.lastName}
          onChange={handleOnChange}
          required
        />
        {touched.lastName && errors.lastName ? (
          <p className="errorMessage">{errors.lastName}</p>
        ) : null}
      </Form.Group>
      <Form.Group controlId="formGridEmail" className="mb-1.5">
        <Form.Label className="mb-0.5">Email:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your email"
          name="email"
          onBlur={handleOnBlur}
          value={values.email}
          onChange={handleOnChange}
          required
        />
        {touched.email && errors.email ? (
          <p className="errorMessage">{errors.email}</p>
        ) : null}
      </Form.Group>
      <Form.Group controlId="formGridPhoneNo" className="mb-1.5">
        <Form.Label className="mb-0.5">Phone Number:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your phone number"
          name="phoneNo"
          onBlur={handleOnBlur}
          value={values.phoneNo}
          onChange={handleOnChange}
          required
        />
        {touched.phoneNo && errors.phoneNo ? (
          <p className="errorMessage">{errors.phoneNo}</p>
        ) : null}
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword" className="mb-1.5">
        <Form.Label className="mb-0.5">Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name="password"
          onBlur={handleOnBlur}
          value={values.password}
          onChange={handleOnChange}
          required
        />
        {touched.password && errors.password ? (
          <p className="errorMessage">{errors.password}</p>
        ) : null}
      </Form.Group>
      <Form.Group as={Col} controlId="formGridType" className="mb-1.5">
        <Form.Label className="mb-0.5">Sign Up As:</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={values.role}
          name="role"
          onChange={handleOnSelect}
        >
          <option value={UserRole.Teacher}>Teacher</option>
          <option value={UserRole.Student}>Student</option>
        </Form.Select>
      </Form.Group>
      {values.role === userRole.teacher ? (
        <>
          {" "}
          <Form.Group controlId="formGridBio" className="mb-1.5">
            <Form.Label className="mb-0.5">BIO:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your information"
              name="bio"
              onBlur={handleOnBlur}
              value={values.bio}
              onChange={handleOnChange}
              required
            />
            {touched.bio && errors.bio ? (
              <p className="errorMessage">{errors.bio}</p>
            ) : null}
          </Form.Group>
          <Form.Group controlId="formGridQualification" className="mb-1.5">
            <Form.Label className="mb-0.5">Qualification:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your  qualification"
              name="qualification"
              onBlur={handleOnBlur}
              value={values.qualification}
              onChange={handleOnChange}
              required
            />
            {touched.qualification && errors.qualification ? (
              <p className="errorMessage">{errors.qualification}</p>
            ) : null}
          </Form.Group>
          <Form.Group controlId="formGridSpecialization" className="mb-1.5">
            <Form.Label className="mb-0.5">Specialization:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your  specialization"
              name="specialization"
              onBlur={handleOnBlur}
              value={values.specialization}
              onChange={handleOnChange}
              required
            />
            {touched.specialization && errors.specialization ? (
              <p className="errorMessage">{errors.specialization}</p>
            ) : null}
          </Form.Group>
        </>
      ) : null}

      <Form.Group as={Col} controlId="formGridPic" className="mb-1.5">
        <Form.Label className="mb-0.5">Upload profile picture:</Form.Label>
        <Form.Control
          type="file"
          onChange={onChangeFile}
          accept=".jpeg,.png,.jpg"
          required
        />
      </Form.Group>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
      >
        <Button
          variant="contained"
          type="submit"
          startIcon={
            isLoading ? (
              <CircularProgress size={22} color="warning" />
            ) : (
              <HowToRegIcon />
            )
          }
          style={{
            background: "#002D5F",
            width: "300px",
            borderRadius: "20px",
          }}
        >
          Create my account
        </Button>
      </div>
      <div style={{ textAlign: "center", marginTop: "5px", fontSize: "14px" }}>
        Already have an account?{" "}
        <Link href="" style={{ color: "blue", fontWeight: "bold" }}>
          Login{" "}
        </Link>
      </div>
    </Form>
  );
};

export default SignUpForm;
