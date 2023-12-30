"use client";
import React from "react";
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
import { MenuItemType, ListItemType } from "@/typesAndInterfaces/header.type";


const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const menuItem: MenuItemType[] = [
    { id: 1, title: "Home", route: appRoute.PUBLIC_ROUTES.HOME },
    { id: 2, title: "About", route: appRoute.PUBLIC_ROUTES.ABOUT },
    { id: 3, title: "Courses", route: appRoute.PUBLIC_ROUTES.COURSES },
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
      handleOnClick: () => { router.push("/signUp");},
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

  return (
    <HeaderContainer>
      <AppBar position="relative" sx={appBarStyle}>
        <Container maxWidth="xl">
          <Toolbar disableGutters >
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
                  sx={{ my: 2, color: "white", display: "block"}}
                >
                  <Link href={item.route} className="header-menu-item"> {item.title}</Link>
                </Button>
              ))}
            </Box>

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
                onClick={()=>router.push(appRoute.PUBLIC_ROUTES.SIGN_UP)}
              >
                Sign Up 
              </Button>
            </Box>
          </Toolbar>
          {open && (
            <Modal open={open} setOpen={setOpen}>
              <LoginForm />
            </Modal>
          )}
        </Container>
      </AppBar>
    </HeaderContainer>
  );
};
export default Header;
