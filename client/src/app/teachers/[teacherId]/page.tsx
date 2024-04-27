"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "@/styles/courseDetail.style";
import { TeacherType, getTeacherById } from "@/api/teacher";
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
import useAppContext from "@/hooks/useAppContext";
import { AddNewPayment } from "@/api/payment";
import { useRouter } from "next/navigation";
import { userRole } from "@/utils/constant";
import { getWorkshopById } from "@/api/workshop";
import { AddRequest } from "@/api/workshopRequest";
import StripeCheckout from "react-stripe-checkout";

const TeacherDetail = ({ params }: { params: { teacherId: string } }) => {
  const [teacher, setTeacher] = useState<TeacherType | null | undefined>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [ws, setWS] = useState<any>(null);
  const { user } = useAppContext();
  const route = useRouter();

  const { teacherId } = params;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res: any = await getTeacherById(teacherId);
      if (res) {
        setTeacher(res);
        const ws = await getWorkshopById(res.user.id);
        if (ws) {
          setWS(ws);
        } else {
          setWS(null);
        }
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
    if (teacherId) {
      fetchData();
    }
  }, [teacherId]);

  const handleSendRequest = async () => {
    if (user?.role === userRole.student && ws?.id && user?.id) {
      const req = {
        workShopId: ws.id,
        userId: user.id,
        status: "Created",
      };
      try {
        const res = await AddRequest(req);
        if (res?.success) {
          toastSuccessMessage("Updates will be available on your dashboard.");
          setIsSent(true);
        } else {
          setIsSent(true);
        }
      } catch (error) {
        toastErrMessage("Something is went wrong.");
        setIsSent(true);
      }
    } else {
      toastErrMessage("Please login as a student to send request");
    }
  };

  return (
    <>
      <Header />
      {!isLoading ? (
        <Container>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            Teacher Detail
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} style={{ padding: "20px" }}>
                <Image
                  src={teacher?.user.profileUrl ?? ""}
                  alt="teacher-cover"
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
                  <p style={{ padding: "0px 10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Teacher First Name:
                    </span>{" "}
                    {teacher?.user.firstName}
                  </p>
                  <hr />
                  <p style={{ padding: "5px 10px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Teacher Last Name:
                    </span>{" "}
                    {teacher?.user.lastName}
                  </p>
                  <hr />
                  <p style={{ padding: "5px 10px" }}>
                    <span style={{ fontWeight: "bold" }}>Email:</span>
                    {teacher?.user.email}
                  </p>
                  <hr />
                  <p style={{ padding: "5px 10px" }}>
                    <span style={{ fontWeight: "bold" }}>Phone number:</span>{" "}
                    {teacher?.user.phoneNo}
                  </p>
                  <hr />
                  <p style={{ padding: "5px 10px" }}>
                    <span style={{ fontWeight: "bold" }}>Specialization:</span>{" "}
                    {teacher?.specialization}
                  </p>
                  <hr />
                  <p style={{ padding: "5px 10px" }}>
                    <span style={{ fontWeight: "bold" }}>Qualification:</span>{" "}
                    {teacher?.qualification}
                  </p>
                  {ws?.date ? (
                    <>
                      <p
                        style={{
                          padding: "10px 10px",
                          color: "#6a9dfc",
                          fontWeight: "bold",
                        }}
                      >
                        Upcoming Workshop Detail
                      </p>
                      <p style={{ padding: "5px 10px" }}>
                        <span style={{ fontWeight: "bold" }}>
                          Workshop Type:
                        </span>{" "}
                        {ws.type}
                      </p>
                      <hr />
                      <p style={{ padding: "5px 10px" }}>
                        <span style={{ fontWeight: "bold" }}>
                          Scheduled Date:
                        </span>{" "}
                        {ws.date + " " + "11:00 AM"}
                      </p>
                      <hr />
                      <p style={{ padding: "5px 10px" }}>
                        <span style={{ fontWeight: "bold" }}>
                          No. of students allowed:
                        </span>{" "}
                        {ws.type === "Paid Workshop"
                          ? "Unlimited students"
                          : ws.noOfStudents}
                      </p>
                      <hr />
                      <p style={{ padding: "5px 10px" }}>
                        <span style={{ fontWeight: "bold" }}>
                          Session duration:
                        </span>{" "}
                        {ws.duration}
                      </p>
                      <hr />
                      <p style={{ padding: "5px 10px" }}>
                        <span style={{ fontWeight: "bold" }}>Detail:</span> It
                        is
                        {ws.detail}
                      </p>
                      {ws.type === "Paid Workshop" &&
                      user?.role === userRole.student ? (
                        <StripeCheckout
                          name="Pay Online Using Stripe"
                          currency="USD"
                          amount={200 * 100}
                          email={user?.email}
                          allowRememberMe={true}
                          token={() => !isSent && handleSendRequest()}
                          label={
                            isSent ? "Request Sent" : "  Request for workshop "
                          }
                          stripeKey="pk_test_51P588vJUZT5A9ZqNN4kAAkTqtUfifiFZ5XBygkDaymE2ol8ZM3YiMxVkVG1tWV6zwBSs9YCJZ1zGygTbxQC0gLaC00apliaWZn"
                        />
                      ) : (
                        <Button
                          variant="contained"
                          style={{
                            background: isSent ? "green" : "#1976d2",
                            textTransform: "capitalize",
                          }}
                          onClick={() => !isSent && handleSendRequest()}
                        >
                          {isSent ? "Request Sent" : "  Request for workshop "}
                        </Button>
                      )}
                    </>
                  ) : (
                    <p>There are currently no upcoming workshops scheduled.</p>
                  )}
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ padding: "20px 0px" }}>
              <Grid item xs={12}>
                <p
                  style={{
                    textAlign: "justify",
                    paddingRight: "10px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Teacher bio:</span>{" "}
                  {teacher?.bio}
                </p>
              </Grid>
            </Grid>
          </Box>
        </Container>
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </>
  );
};

export default TeacherDetail;
