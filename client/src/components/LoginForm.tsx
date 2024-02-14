"use client";
import React, { useState } from "react";
import { LoginFormContainer } from "@/styles/loginForm.style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useFormik } from "formik";
import Image from "next/image";
import { validationSchema } from "@/validations/loginFormValidationSchema";
import logo from "../../public/images/smallLogo.jpeg";
import { signIn } from "@/api/auth";
import useAppContext from "@/hooks/useAppContext";
import { toastErrMessage,toastSuccessMessage } from "@/utils/functions";
import CircularProgress from '@mui/material/CircularProgress';

type LoginFormType = {
    email: string;
    password: string;
}
interface LoginFormProps {
  setOpen: (isOpen: boolean) => void;
}
const LoginForm:React.FC<LoginFormProps> = ({setOpen}) => {
  const [userData, setUserData] = useState<LoginFormType>({
    email: "",
    password: "",
  });
  const [isLoading,setIsLoading]=useState<boolean>(false);
  const { login } = useAppContext();

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
    onSubmit: async(values: LoginFormType) => {
      setIsLoading(true);
      const {success,token,message}= await signIn(values);

      if (success && token) {
        login(token);
        setOpen(false);
        toastSuccessMessage("Logged In successfully");
      } else {
        toastErrMessage(message);
      }
      setIsLoading(false);
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

        <Button variant="contained" className="login-btn" type="submit" startIcon={isLoading? <CircularProgress size={20} sx={{color:"white"}} />:null}>
          Sign In
        </Button>
        <Link href="#">
          {" "}
          <p className="create-new-account-link">Create new account</p>
        </Link>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
