"use client";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import logo from "../../../public/images/smallLogo.jpeg";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Link from "next/link";
import { useFormik } from "formik";
import { UserType, UserRole, updateUser } from "@/api/user";
import { createNewUser } from "@/api/user";
import { toastSuccessMessage, toastErrMessage } from "@/utils/functions";
import {
  adminDashboardMenuItem,
  gqlErrorCodes,
  studentDashboardMenuItem,
  teacherDashboardMenuItem,
  userRole,
} from "@/utils/constant";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import { Container } from "@/styles/profile.style";
import DashboardLayout from "@/components/DashboardLayout";
import { TeacherType, getAllTeachers } from "@/api/teacher";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { uploadFileToFBStorageAndGetURL } from "@/api/common";
import useAppContext from "@/hooks/useAppContext";
import { MenuListType } from "@/components/DashboardLeftSideBar";

const Newprofile = () => {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAppContext();
  const [profileData, setProfileData] = useState<UserType>({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    phoneNo: user?.phoneNo ?? "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await updateUser({ ...profileData, id: user?.id ?? "" });
      if (res?.success) {
        toastSuccessMessage("Profile Updated");
      } else {
        toastErrMessage("Something is went wrong.");
      }
    } catch (error) {
      toastErrMessage("Something is went wrong.");
      console.error("Error occurred while submitting form: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const menuList = (): MenuListType[] => {
    if (user?.role === userRole.student) {
      return studentDashboardMenuItem;
    } else if (user?.role === userRole.teacher) {
      return teacherDashboardMenuItem;
    }

    return adminDashboardMenuItem;
  };
  return (
    <DashboardLayout menuItemList={menuList()}>
      <Container>
        <Form
          className="sign-up-form-class"
          style={{ backgroundColor: "#FFFFFF" }}
          onSubmit={handleSubmit}
        >
          <div style={{ marginBottom: "30px", textAlign: "center" }}>
            <Image
              src={logo}
              width={80}
              height={80}
              className="rounded-full"
              alt="logo"
              style={{ margin: "auto" }}
            />
            <p className="sign-up-label" style={{ fontWeight: "bold" }}>
              Manage profile{" "}
            </p>
          </div>
          <Form.Group controlId="formGridFirstName" className="mb-1.5">
            <Form.Label className="mb-0.5">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the first name"
              name="firstName"
              value={profileData.firstName}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGridFatherName" className="mb-1.5">
            <Form.Label className="mb-0.5">Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the last name"
              name="lastName"
              value={profileData.lastName}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the email"
              name="email"
              value={profileData.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName" className="mb-1.5">
            <Form.Label className="mb-0.5">Phone Number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the phone number"
              name="phoneNo"
              value={profileData.phoneNo}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
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
              Update profile
            </Button>
          </div>
        </Form>
      </Container>
    </DashboardLayout>
  );
};

export default Newprofile;
