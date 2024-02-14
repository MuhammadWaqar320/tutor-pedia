import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import {Container} from "@/styles/dashboardHeader.style";
import DropDownMenu from './DropDownMenu';
import Image from "next/image";
import useAppContext from "@/hooks/useAppContext";
import { useRouter } from "next/navigation";

export type MenuItemType = {
  id: number;
  title: string;
  onClick: () => void;
};

const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user, isAuthenticated, logout } = useAppContext();
  const router = useRouter();
  const open = Boolean(anchorEl);

  const menuList: MenuItemType[] = [
    {
      id: 1,
      title: 'Profile',
      onClick: () => null,
    },
    {
      id: 3,
      title: 'Logout',
      onClick: () =>{ 
         router.push("/");
            logout();
      },
    },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Container>
      <div className="dashboard-header-left">{user?.role ?? ""} Dashboard</div>

      <div className="dashboard-header-right">
        {user && user?.profileUrl && (
          <Image
            src={user.profileUrl}
            width={50}
            height={50}
            className="rounded-full dashboard-profile-pic"
            alt="picture"
          />
        )}
        <p>{`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}</p>
        <IconButton
          className="menu-icon"
          onClick={handleMenuClick}
          id="dashboard-profile-fade-menu-btn"
          data-cy="dashboard-menu-btn"
        >
          <MenuIcon />
        </IconButton>
        {open && (
          <DropDownMenu
            menu={menuList}
            menuId="dashboard-profile-fade-menu"
            ariaLabelledId="dashboard-profile-fade-menu-btn"
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            isOpen={open}
          />
        )}
      </div>
    </Container>
  );
};

export default DashboardHeader;
