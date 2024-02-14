"use client";
import logo from "../../public/images/smallLogo.jpeg";
import Image from "next/image";
import { Container } from "@/styles/dashboardLeftSideBar.style";
import MenuList from "@/components/MenuList";
import { usePathname } from 'next/navigation'
import { ElementType } from 'react';

export type MenuListType = {
  id: number;
  title: string;
  icon?: ElementType;
  route: string;
  isActive?: boolean;
};
type PropsType = {
  menuItems: MenuListType[];
};

const DashboardLeftSideBar: React.FC<PropsType> = ({ menuItems }) => {
  const pathname = usePathname()
  console.log("pathname:",pathname)

  return (
    <Container>
      <Image
        src={logo}
        className="rounded-full dashboard-side-bar-logo-desktop"
        alt="logo"
      />
      <p className="dashboard-side-bar-heading">Tutor Pedia</p>
      <div className="dashboard-menu-list">
        {menuItems.map((item) => (
          <MenuList
            key={item.id}
            item={{
              ...item,
              isActive:
                pathname === item.route,
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default DashboardLeftSideBar;
