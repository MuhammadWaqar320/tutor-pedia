"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { MenuListType } from "@/components/DashboardLeftSideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {studentDashboardMenuItem} from "@/utils/constant";


const StudentDashboard = () => {

   return (
    <DashboardLayout menuItemList={studentDashboardMenuItem}>
       <>student123</>
     </DashboardLayout>
   );
 
};

export default StudentDashboard;
