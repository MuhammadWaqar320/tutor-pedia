import React from "react";
import {
  Container,
  Content,
} from "@/styles/dashboardLayout.style";
import DashboardHeader from "./DashboardHeader";
import DashboardLeftSideBar from "./DashboardLeftSideBar";
import { MenuListType } from "./DashboardLeftSideBar";

type DashboardLayoutProps = {
  children?: React.ReactNode;
  menuItemList?: MenuListType[];
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  menuItemList=[],
}) => {
  return (
    <Container>
      <DashboardLeftSideBar menuItems={menuItemList} />
      <div>
        <DashboardHeader/>
        <Content>{children}</Content>
      </div>
    </Container>
  );
};

export default DashboardLayout;
