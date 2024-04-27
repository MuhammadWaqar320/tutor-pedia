"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "@/styles/courseDetail.style";
import { CourseType, getCourseById } from "@/api/course";
import { toastErrMessage, toastSuccessMessage } from "@/utils/functions";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";
import useAppContext from "@/hooks/useAppContext";
import { AddNewPayment } from "@/api/payment";
import { useRouter } from "next/navigation";
import { userRole } from "@/utils/constant";
import { TestContainer } from "@/styles/test.style";
import Quiz from "@/components/Quiz";
import {
  dataScienceAIQuestions,
  informationSecurityQuestions,
  softwareDevelopmentQuestions,
} from "@/utils/constant";

const CourseDetail = ({ params }: { params: { courseId: string } }) => {
  const [course, setCourse] = useState<CourseType | null | undefined>(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isQuizPassed, setIsQuizPassted] = useState<boolean>(false);
  const [isTestMode, setIsTestMode] = useState<boolean>(false);
  const { user } = useAppContext();
  const route = useRouter();

  const { courseId } = params;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getCourseById(courseId);
      if (res) {
        setCourse(res);
      } else {
        toastErrMessage("Something is went wrong.");
      }
    } catch (error) {
      toastErrMessage("Something is went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (courseId) {
      fetchData();
    }
  }, [courseId]);
  const handlePayment = async (token: any) => {
    try {
      if (user?.id && course?.id) {
        const res = await AddNewPayment({
          user: user?.id ?? "",
          course: course?.id ?? "",
          amount: course?.price,
          verified: true,
        });
        if (res.success) {
          route.push("/courses");
          toastSuccessMessage("You have successfully enrolled in this course.");
        }
      } else {
        toastErrMessage("Something is went wrong.");
      }
    } catch (error) {
      toastErrMessage("Something is went wrong.");
    }
  };
  const handleStates = () => {
    setIsQuizPassted(true);
    setIsTestMode(false);
  };
  const handleQuiz = () => {
    if (course?.category === "Information Security") {
      return (
        <Quiz
          category={course?.category ?? ""}
          questions={informationSecurityQuestions}
          handleStates={handleStates}
        />
      );
    } else if (course?.category === "AI & Data Science") {
      return (
        <Quiz
          category={course?.category ?? ""}
          questions={dataScienceAIQuestions}
          handleStates={handleStates}
        />
      );
    }
    return (
      <Quiz
        category={course?.category ?? ""}
        questions={softwareDevelopmentQuestions}
        handleStates={handleStates}
      />
    );
  };
  return (
    <>
      <Header />
      {!isLoading ? (
        isTestMode ? (
          <TestContainer>{handleQuiz()}</TestContainer>
        ) : (
          <Container>
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              Course Detail
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={6} style={{ padding: "20px" }}>
                  <Image
                    src={course?.coverPhotoUrl ?? ""}
                    alt="course-cover"
                    width={700}
                    height={600}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p style={{ padding: "5px 10px" }}>
                      <span style={{ fontWeight: "bold" }}>Course Name:</span>{" "}
                      {course?.name}
                    </p>
                    <hr />
                    <p style={{ padding: "5px 10px" }}>
                      <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
                      {course?.category}
                    </p>
                    <hr />
                    <p style={{ padding: "5px 10px" }}>
                      <span style={{ fontWeight: "bold" }}>Price:</span> $ $
                      {course?.price}
                    </p>
                    <hr />
                    <p style={{ padding: "5px 10px" }}>
                      <span style={{ fontWeight: "bold" }}>Duration:</span>{" "}
                      {course?.duration}
                    </p>
                    <hr />
                    <p style={{ padding: "5px 10px" }}>
                      <span style={{ fontWeight: "bold" }}>Course level:</span>{" "}
                      {course?.level}
                    </p>
                    <hr />
                    <p style={{ padding: "5px 10px" }}>
                      <span style={{ fontWeight: "bold" }}>Language:</span>{" "}
                      {course?.language}
                    </p>
                    <hr />
                    <p style={{ padding: "5px 10px" }}>
                      <span style={{ fontWeight: "bold" }}>Certification:</span>{" "}
                      {course?.isCertified ? "Yes" : "No"}
                    </p>
                    <hr />
                    <p style={{ padding: "5px 10px" }}>
                      <span style={{ fontWeight: "bold" }}>Start Date:</span>{" "}
                      {course?.startDate}
                    </p>
                    <hr />
                    <p style={{ padding: "5px 10px", marginBottom: "20px" }}>
                      <span style={{ fontWeight: "bold" }}>End Date:</span>{" "}
                      {course?.endDate}
                    </p>
                    <div style={{ paddingLeft: "10px" }}>
                      {user && user.email && user.role === userRole.student ? (
                        isQuizPassed ? (
                          <StripeCheckout
                            name="Pay Online Using Stripe"
                            currency="USD"
                            amount={
                              typeof course?.price === "string"
                                ? parseFloat(course?.price) * 100
                                : 0 * 100
                            }
                            email={user?.email}
                            token={handlePayment}
                            label="Enroll Now"
                            stripeKey="pk_test_51P588vJUZT5A9ZqNN4kAAkTqtUfifiFZ5XBygkDaymE2ol8ZM3YiMxVkVG1tWV6zwBSs9YCJZ1zGygTbxQC0gLaC00apliaWZn"
                          />
                        ) : (
                          <Button
                            variant="contained"
                            style={{
                              background: "#1976d2",
                              textTransform: "capitalize",
                            }}
                            onClick={() => setIsTestMode(true)}
                          >
                            Take a test
                          </Button>
                        )
                      ) : (
                        <div>
                          <span style={{ fontWeight: "bold" }}>Note:</span>{" "}
                          Please login as a student to enroll in this course
                        </div>
                      )}
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ padding: "20px 0px" }}>
                <Grid item xs={6}>
                  <p
                    style={{
                      textAlign: "justify",
                      paddingRight: "10px",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Course Description:
                    </span>{" "}
                    {course?.description}
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <p
                    style={{
                      textAlign: "justify",
                      height: "210px",
                      paddingRight: "10px",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Teacher's Information:
                    </span>{" "}
                    {course?.teacher && typeof course?.teacher !== "string" && (
                      <div>{course.teacher.bio}</div>
                    )}
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Container>
        )
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </>
  );
};

export default CourseDetail;
