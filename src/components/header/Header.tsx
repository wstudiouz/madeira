import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  keyframes
} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {Link} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {theme} from "../../theme";
import {MobileLogo} from "../../imports";
import HeaderIcon from "./HeaderIcon";
import CloseIcon from "@mui/icons-material/Close";
import MiniHrComponent from "../MiniHrComponent";

interface Props {
  window?: () => Window;
}

const drawerWidth = {xs: "100%", md: "75%", lg: "50%"};
const navItems = [
  {url: "about", text: "ABOUT US"},
  {url: "catalogue", text: "CATALOGUE"},
  {url: "contact", text: "CONTACTS"},
];
const navIcons = [
  {icon: FacebookIcon, url: "#facebook-link"},
  {icon: InstagramIcon, url: "#insta-link"},
  {icon: TwitterIcon, url: "#twitter=link"},
];

export default function DrawerAppBar(props: Props) {
  // manashu animatsiya chota ishlamayabdi negadur aboutda ishlovdi buni drawerida ishlamadi
  const textAnimation = keyframes` 
  from {
    transform: translateX(-70px);
  }
  to {
    transform: translate(0);
  }
`;
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
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
      <Box
        component="img"
        src={MobileLogo}
        sx={{
          width: "130px",
          height: "114px",
          margin: "70px auto 30px auto",
          animation: `${textAnimation} 0.7s ease`,
        }}
      />
      <List>
        {navItems.map((item, index) => (
          <Typography
            key={index}
            variant="h1"
            sx={{
              margin: "20px auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: `${textAnimation} 0.7s ease`
            }}
          >
            <Link
              to={item.url}
              style={{textDecoration: "none", color: "inherit"}}
            >
              {item.text}
            </Link>
            <Typography
              variant="paragraph"
              sx={{
                fontSize: "40px",
                color: theme.palette.secondary.main,
              }}
            >
              =
            </Typography>
          </Typography>
        ))}
      </List>
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
            <HeaderIcon url={item.url} key={index} MyIcon={<item.icon />} />
          ))}
        </List>
        <MiniHrComponent sx={{width: "20%", height: "2px"}} />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <AppBar component="nav" sx={{background:"white",border:"none"}}>
        <Toolbar >
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            <Link style={{textDecoration: "none", color: theme.palette.secondary.main}} to="/">
              Medeira
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, color: theme.palette.secondary.main}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
