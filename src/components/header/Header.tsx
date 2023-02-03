import {
  AppBar,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {theme} from "../../theme";
import {MobileLogo} from "../../imports";
import HeaderIcon from "./HeaderIcon";

interface Props {
  window?: () => Window;
}

const drawerWidth = 450;
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
  const styles = {
    position: "absolute",
    content: '""',
    width: "20%",
    overflowX: "hidden",
    display: "block",
    border: `1px solid ${theme.palette.secondary.main}`,
  };
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <Box
        component="img"
        src={MobileLogo}
        sx={{width: "130px", height: "114px", margin: "50px auto 20px auto"}}
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
          "width": "100%",
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "padding": "0",
          "&:before": {
            ...styles,
            marginLeft: "-60%",
          },
          "&:after": {
            ...styles,
            marginLeft: "60%",
          },
        }}
      >
        {navIcons.map((item, index) => (
          <HeaderIcon url={item.url} key={index} MyIcon={<item.icon />} />
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const GoToLink = (url: string) => navigate(url);

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: "none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, display: {xs: "none", sm: "block"}}}
          >
            Madeira
          </Typography>
          <Box sx={{display: {xs: "none", sm: "block"}}}>
            {navItems.map((item, index) => (
              <Button
                onClick={() => GoToLink(item.url)}
                key={index}
                sx={{color: "#fff"}}
              >
                {item.text}
              </Button>
            ))}
          </Box>
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
            "display": {xs: "block", sm: "none"},
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