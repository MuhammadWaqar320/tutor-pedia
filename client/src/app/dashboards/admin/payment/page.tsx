"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { adminDashboardMenuItem } from "@/utils/constant";

const Payment = () => {
  return (
    <DashboardLayout menuItemList={adminDashboardMenuItem}>
      Payment
    </DashboardLayout>
  );
};

export default Payment;
