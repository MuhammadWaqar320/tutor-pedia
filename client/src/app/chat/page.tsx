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
import { Container } from "@/styles/chat.style";
import DashboardLayout from "@/components/DashboardLayout";
import { TeacherType, getAllTeachers } from "@/api/teacher";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { uploadFileToFBStorageAndGetURL } from "@/api/common";
import useAppContext from "@/hooks/useAppContext";
import { MenuListType } from "@/components/DashboardLeftSideBar";

const Chat = () => {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAppContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        sdfdsf
    </Container>
    </DashboardLayout>
  );
};

export default Chat;
