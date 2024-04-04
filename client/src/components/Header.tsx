"use client";
import React,{ReactNode} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../public/images/smallLogo.jpeg";
import { appRoute } from "@/routes/index";
import Link from "next/link";
import {
  HeaderContainer,
  appBarStyle,
  LogoContainer,
  appNameStyle,
} from "../styles/header.style";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import useAppContext from "@/hooks/useAppContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { userRole } from "@/utils/constant";
import { toastErrMessage } from "@/utils/functions";

type MenuItemType = {
  id: number;
  title: string;
  route: string;
  icon: ReactNode;
};

type ListItemType = {
  id: number;
  title: string;
  handleOnClick: () => void;
};

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAppContext();

  const menuItem: MenuItemType[] = [
    {
      id: 1,
      title: "Home",
      route: appRoute.PUBLIC_ROUTES.HOME,
      icon: <HomeIcon />,
    },
    {
      id: 2,
      title: "About",
      route: appRoute.PUBLIC_ROUTES.ABOUT,
      icon: <InfoIcon />,
    },
    {
      id: 3,
      title: "Courses",
      route: appRoute.PUBLIC_ROUTES.COURSES,
      icon: <ListAltIcon />,
    },
    {
      id: 4,
      title: "Gigs",
      route: appRoute.PUBLIC_ROUTES.GIGS,
      icon: <ListAltIcon />,
    },
  ];
  const listItem: ListItemType[] = [
    {
      id: 1,
      title: "Home",
      handleOnClick: () => {
        router.push("/");
      },
    },
    {
      id: 2,
      title: "About",
      handleOnClick: () => {
        router.push("/about");
      },
    },
    {
      id: 3,
      title: "Courses",
      handleOnClick: () => {
        router.push("/courses");
      },
    },
    {
      id: 4,
      title: "Login",
      handleOnClick: () => {
        setOpen(true);
      },
    },
    {
      id: 5,
      title: "Sign Up",
      handleOnClick: () => {
        router.push("/signUp");
      },
    },
    {
      id: 6,
      title: "Gigs",
      handleOnClick: () => {
        router.push("/teachers");
      },
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleNavItemOnClick = (navItemOnClick: Function) => {
    handleCloseNavMenu();
    navItemOnClick();
  };
  const handleDashboard = () => {
    if (user?.role === userRole.admin) {
      router.push(appRoute.DASHBOARDS.ADMIN.COURSES);
    } else if (user?.role === userRole.student) {
      router.push(appRoute.DASHBOARDS.STUDENT.DASHBOARD);
    } else if (user?.role === userRole.teacher) {
      router.push(appRoute.DASHBOARDS.TEACHER.DASHBOARD);
    } else {
      toastErrMessage("Not authorized.");
    }
  };

  return (
    <HeaderContainer>
      <AppBar position="relative" sx={appBarStyle}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={LogoContainer}>
              <Image
                src={logo}
                width={50}
                height={50}
                className="rounded-full header-logo"
                alt="logo"
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{ display: { xs: "none", md: "flex" }, ...appNameStyle }}
            >
              Tutor Pedia
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {listItem.map((item: ListItemType) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => handleNavItemOnClick(item.handleOnClick)}
                  >
                    <Typography textAlign="center">{item.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <Image
                src={logo}
                width={50}
                height={50}
                className="rounded-full header-logo"
                alt="Picture of the author"
              />
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                ...appNameStyle,
              }}
            >
              Tutor Pedia
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {menuItem.map((item: MenuItemType) => (
                <Button
                  key={item.id}
                  sx={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0, // Adjust the gap between the icon and the text as needed
                  }}
                  startIcon={item.icon}
                >
                  <Link href={item.route} className="header-menu-item">
                    {" "}
                    {item.title}
                  </Link>
                </Button>
              ))}
            </Box>
            {isAuthenticated ? (
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <Button
                  variant="outlined"
                  onClick={handleDashboard}
                  startIcon={<DashboardIcon />}
                  className="login-btn"
                >
                  Dashboard
                </Button>
                <Button
                  variant="contained"
                  startIcon={<LogoutIcon />}
                  className="sign-up-btn"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <Button
                  variant="outlined"
                  onClick={handleOpen}
                  startIcon={<LoginIcon />}
                  className="login-btn"
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  startIcon={<PersonAddIcon />}
                  className="sign-up-btn"
                  onClick={() => router.push(appRoute.PUBLIC_ROUTES.SIGN_UP)}
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </Toolbar>
          {open && (
            <Modal open={open} setOpen={setOpen}>
              <LoginForm setOpen={setOpen} />
            </Modal>
          )}
        </Container>
      </AppBar>
    </HeaderContainer>
  );
};
export default Header;
