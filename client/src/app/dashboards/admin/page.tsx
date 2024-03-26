"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {adminDashboardMenuItem} from "@/utils/constant";

const AdminDashboard = () => {

   return (
    <DashboardLayout menuItemList={adminDashboardMenuItem}>
       <>admin dashboard</>
     </DashboardLayout>
   );
 
};

export default AdminDashboard;
