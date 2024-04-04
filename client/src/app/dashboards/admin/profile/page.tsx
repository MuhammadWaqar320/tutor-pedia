"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { adminDashboardMenuItem } from "@/utils/constant";

const Profile = () => {
  return (
    <DashboardLayout menuItemList={adminDashboardMenuItem}>
      profile
    </DashboardLayout>
  );
};

export default Profile;
