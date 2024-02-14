"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { MenuListType } from "@/components/DashboardLeftSideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const StudentDashboard = () => {
   const menuItem:MenuListType[]=[
      {
 id: 1,
  title: "Dashboard",
  icon: DashboardIcon,
  route: "",
      },
       {
 id: 2,
  title: "Courses",
  icon: FormatListBulletedIcon,
  route: "",
      }
   ]
   return (
     <DashboardLayout menuItemList={menuItem}>
       <>student123</>
     </DashboardLayout>
   );
 
};

export default StudentDashboard;
