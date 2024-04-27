"use client";
import React from "react";
import Link from "next/link";
import Lottie from "react-lottie";
import { Hidden, Paper, Grid } from "@mui/material";
import * as animationData from "../../public/lottie/lf30_editor_6zlfydhi.json";
import {
  SliderSectionContainer,
  SliderContainer,
} from "@/styles/sliderSection.style";
import { appRoute } from "@/routes";

const SliderSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <SliderSectionContainer>
      <Grid container direction="row">
        <Grid item md={8}>
          <div className="feature">
            <h2 className="slider-heading">
              TutorPedia Is An Online Learning Platform
            </h2>
            <p className="slider-info">
              Our platform is dedicated to empowering global learners through
              personalized, high-quality education. We foster an interactive
              environment, encouraging exploration and achievement in every
              field.
            </p>

            <Link
              href={appRoute.PUBLIC_ROUTES.COURSES}
              className="btn register-btn"
            >
              Apply Now
            </Link>
            <Link
              href={appRoute.PUBLIC_ROUTES.ABOUT}
              className="btn about-us-btn"
            >
              About Us
            </Link>
          </div>
        </Grid>
        <Grid item md={4}>
          <div className="lottie">
            <Lottie
              options={defaultOptions}
              style={{ height: "550px", width: "500px" }}
            />
          </div>
        </Grid>
      </Grid>
    </SliderSectionContainer>
  );
};
export default SliderSection;
