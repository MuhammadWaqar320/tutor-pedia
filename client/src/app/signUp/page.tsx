"use client";
import React, { useState } from "react";
import { SignUpContainer } from "@/styles/signUp.style";
import Grid from "@mui/material/Grid";
import SignUpForm from "@/components/SignUpForm";
import Image from "next/image";
import Header from "@/components/Header";
import { style } from "@/styles/modal.style";

const SignUp = () => {

  return (
    <>
     <Header />
    <SignUpContainer>
      <Grid container className="sign-up-content-container">
        <Grid
          item
          xs={3}
        ></Grid>
        <Grid item xs={12} md={6} className="sign-up-form-side">
          <SignUpForm />
        </Grid>
        <Grid item xs={12} md={3}>
        </Grid>
      </Grid>
    </SignUpContainer>
    </>
  );
};

export default SignUp
