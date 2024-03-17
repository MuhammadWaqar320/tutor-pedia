"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {studentDashboardMenuItem} from "@/utils/constant";

const StudentDashboard = () => {

   return (
     <DashboardLayout menuItemList={studentDashboardMenuItem}>
       <>student dashboards 123</>
     </DashboardLayout>
   );
 
};

export default StudentDashboard;
