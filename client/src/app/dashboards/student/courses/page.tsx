"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {studentDashboardMenuItem} from "@/utils/constant";

const Courses = () => {

   return (
     <DashboardLayout menuItemList={studentDashboardMenuItem}>
       <>student course 123</>
     </DashboardLayout>
   );
 
};

export default Courses;