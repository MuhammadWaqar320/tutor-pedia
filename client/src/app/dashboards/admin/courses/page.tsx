"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {adminDashboardMenuItem} from "@/utils/constant";

const Courses = () => {

   return (
     <DashboardLayout menuItemList={adminDashboardMenuItem}>
       <>admin course </>
     </DashboardLayout>
   );
 
};

export default Courses;