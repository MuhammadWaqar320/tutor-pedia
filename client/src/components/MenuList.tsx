import React from "react";
import { Container } from "@/styles/menuList.style";
import { MenuListType } from "./DashboardLeftSideBar";
import Link from "next/link";

type MenuListPropsType = {
  item: MenuListType;
};

const MenuList: React.FC<MenuListPropsType> = ({ item }) => {
  const { title, icon: Icon, isActive, route, id } = item;

  return (
    <Container isActive={isActive??false} title={title}>
      <div className="menu-element">
        <Link href={route} className="dashboard-menu-list-element">
          {Icon && <Icon className="dashboard-menu-list-icon" />}
          <div className="list-item">{item.title}</div>
        </Link>
      </div>
    </Container>
  );
};

export default MenuList;
