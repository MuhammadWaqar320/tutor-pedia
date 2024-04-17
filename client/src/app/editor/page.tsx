"use client";
import { useState, useEffect } from "react";
import {
  adminDashboardMenuItem,
  gqlErrorCodes,
  studentDashboardMenuItem,
  teacherDashboardMenuItem,
} from "@/utils/constant";
import DashboardLayout from "@/components/DashboardLayout";
import { Container } from "@/styles/codeEditor.style";
import useAppContext from "@/hooks/useAppContext";
import { userRole } from "@/utils/constant";
import { MenuListType } from "@/components/DashboardLeftSideBar";

const CodeEditor = () => {
  const { user, isAuthenticated, logout } = useAppContext();
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
        <iframe
          src="https://www.programiz.com/javascript/online-compiler/"
          title="Embedded Web App"
          className="code-editor"
        />
      </Container>
    </DashboardLayout>
  );
};

export default CodeEditor;
