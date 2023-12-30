"use client";
import React, { useState } from "react";
import { LoginFormContainer } from "@/styles/loginForm.style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useFormik } from "formik";
import Image from "next/image";
import { validationSchema } from "@/validations/loginFormValidationSchema";
import { LoginFormType } from "@/typesAndInterfaces/loginForm.type";
import logo from "../../public/images/smallLogo.jpeg";

const LoginForm = () => {
  const [userData, setUserData] = useState<LoginFormType>({
    email: "",
    password: "",
  });

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
    onSubmit: (values: LoginFormType) => {
      console.log("submit:", values);
    },
  });
  console.log("errors:",errors)
  const handleGoogleResponse = (response: any) => {
    console.log("========", response?.credential);
  };
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

  return (
    <LoginFormContainer>
      <form onSubmit={handleSubmit}>
        <Image
          src={logo}
          width={80}
          height={80}
          className="rounded-full login-logo"
          alt="Picture of the author"
        />
        <h1 className="login-label">Sign In Here</h1>
        <TextField
          id="login-email"
          label="Email"
          variant="outlined"
          name="email"
          value={values.email}
          style={{ marginBottom: "10px" }}
          placeholder="Enter your email"
          fullWidth
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          size="small"
        />
        {touched.email && errors.email ? (
          <p className="errorMessage">{errors.email}</p>
        ) : null}
        <TextField
          id="outlined-basic-password"
          label="Password"
          type="password"
          name="password"
          value={values.password}
          variant="outlined"
          style={{ marginBottom: "10px" }}
          placeholder="Enter your password"
          fullWidth
          size="small"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
        />
        {touched.password && errors.password ? (
          <p className="errorMessage">{errors.password}</p>
        ) : null}
        <div className="forgot-password">
          <p>Forgot password?</p>
        </div>

        <Button variant="contained" className="login-btn" type="submit">
          Sign In
        </Button>
        <div style={{ marginTop: "8px", marginBottom: "20px" }}>
          <GoogleLogin
            onSuccess={handleGoogleResponse}
            size="medium"
            shape="circle"
            width="277px"
            theme="filled_blue"
          />
        </div>
        <Link href="#">
          {" "}
          <p className="create-new-account-link">Create new account</p>
        </Link>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
