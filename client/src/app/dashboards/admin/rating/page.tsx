"use client"
import React from 'react';
import DashboardLayout from "@/components/DashboardLayout";
import { adminDashboardMenuItem } from '@/utils/constant';

const Rating = () => {
  return (
    <DashboardLayout menuItemList={adminDashboardMenuItem}>
      Rating
    </DashboardLayout>
  );
}

export default Rating