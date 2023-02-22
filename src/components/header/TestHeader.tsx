import React, {useState} from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {MobileLogo} from "../../imports";
import {Link, useNavigate} from "react-router-dom";
import {theme} from "../../theme";
import {Box} from "@mui/system";
import MiniHrComponent from "../MiniHrComponent";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import HeaderIcon from "./HeaderIcon";

const HeaderTs = () => {
  const navigate = useNavigate();
  const drawerWidth = {xs: "100%", md: "75%", lg: "50%"};
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);
  const [navItems] = useState<{url: string; text: string}[]>([
    {url: "about", text: "ABOUT US"},
    {url: "catalogue", text: "CATALOGUE"},
    {url: "contact", text: "CONTACTS"},
  ]);
  const navIcons = [
    {icon: FacebookIcon, url: "#facebook-link"},
    {icon: InstagramIcon, url: "#insta-link"},
    {icon: TwitterIcon, url: "#twitter=link"},
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen((prevOpen) => !prevOpen);
    setShowNavItems(false);
    setTimeout(() => setShowNavItems(true), 500); // Show nav items after a delay to trigger fade-in animation
  };

  return (
    <AppBar position="sticky" sx={{background: "white", border: "none"}}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            "flexGrow": 1,
            "& a": {
              textDecoration: "none",
              color: theme.palette.secondary.main,
            },
          }}
        >
          <Link to="/">Madeira</Link>
        </Typography>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerToggle}
          edge="end"
          sx={{mr: 2, color: theme.palette.secondary.main}}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "display": "block",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "white",
          },
        }}
      >
        <Box
          onClick={handleDrawerToggle}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            height: "100vh",
            minHeight: "650px",
          }}
        >
          <IconButton
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: "15px",
              top: "10px",
            }}
          >
            <CloseIcon />
          </IconButton>

          <List
            sx={{
              padding: "0",
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {showNavItems && (
              <>
                <Fade in={true} timeout={600}>
                  <Box
                    component="img"
                    src={MobileLogo}
                    onClick={() => navigate("/")}
                    sx={{
                      width: "130px",
                      height: "114px",
                      margin: "70px auto 30px auto",
                    }}
                  />
                </Fade>

                {navItems.map((e, ind) => (
                  <Fade in={showNavItems} key={ind} timeout={700 + ind * 100}>
                    <Typography
                      variant="h1"
                      sx={{
                        margin: "20px auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        to={e.url}
                        style={{textDecoration: "none", color: "inherit"}}
                      >
                        {e.text}
                      </Link>
                      <Typography
                        variant="paragraph"
                        sx={{
                          fontSize: {
                            sx: "18px",
                            sm: "23px",
                            md: "28px",
                            lg: "34px",
                            xl: "40px",
                          },
                          color: theme.palette.secondary.main,
                        }}
                      >
                        =
                      </Typography>
                    </Typography>
                  </Fade>
                ))}
              </>
            )}
          </List>

          {showNavItems && (
            <Fade in={true} timeout={1200}>
              <List
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  padding: "0",
                  position: "absolute",
                  bottom: 30,
                }}
              >
                <MiniHrComponent sx={{width: "20%", height: "2px"}} />
                <List
                  sx={{
                    width: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {navIcons.map((item, index) => (
                    <HeaderIcon
                      url={item.url}
                      key={index}
                      MyIcon={<item.icon />}
                    />
                  ))}
                </List>
                <MiniHrComponent sx={{width: "20%", height: "2px"}} />
              </List>
            </Fade>
          )}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default HeaderTs;
