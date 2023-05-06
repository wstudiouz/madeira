import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {theme} from "../../theme";
import React, {ReactElement} from "react";
import {FooterBg} from "../../imports";
import {Link} from "react-router-dom";
const Footer = (): ReactElement => {
  const styles = {
    href: {
      textDecoration: "none",
      color: theme.palette.secondary.main,
      fontFamily: "'Libre Caslon Text'",
    },
    line: {
      width: "0",
      margin: {xs: "0 15px", lg: "0 29px"},
      height: "100%",
      overflow: "hidden",
      border: `1px solid ${theme.palette.secondary.main}`,
      background: theme.palette.secondary.main,
    },
    bgImg: {
      height: {xs: "50px", sm: "75px", md: "100px", lg: "125px", xl: "150px"},
      backgroundImage: `url(${FooterBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    bgLine: {
      "&:before": {
        position: "absolute",
        content: '""',
        width: "100%",
        overflowX: "hidden",
        display: "block",
        border: `1.5px solid ${theme.palette.secondary.main}`,
        marginTop: {
          xs: "-40px",
          sm: "-60px",
          md: "-80px",
          lg: "-100px",
          xl: "-120px",
        },
      },
      "&:after": {
        position: "absolute",
        content: '""',
        width: "100%",
        overflowX: "hidden",
        border: `1.5px solid ${theme.palette.secondary.main}`,
        display: "block",
        marginTop: {
          xs: "40px",
          sm: "60px",
          md: "80px",
          lg: "100px",
          xl: "120px",
        },
      },
    },
  };
  return (
    <Stack
      sx={{
        width: "auto",
        overflow: "hidden",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        ...styles.bgImg,
        ...styles.bgLine,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: {xs: "12px", sm: "20px", md: "25px", lg: "30px"},
          fontWeight: 400,
        }}
      >
        <Box
          component="hr"
          sx={{
            display: "inline",
            width: {xs: "3rem", sm: "6rem", md: "8rem", lg: "10rem"},
            marginRight: {xs: "9px", lg: "15px"},
            border: styles.line.border,
            background: styles.line.background,
          }}
        ></Box>
        <Link to="/contact" style={styles.href}>
          Contacts
        </Link>
      </Typography>
      <Box sx={styles.line} component="hr"></Box>
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: {xs: "12px", sm: "20px", md: "25px", lg: "30px"},
          fontWeight: 400,
        }}
      >
        <Link to="/about" style={styles.href}>
          About us
        </Link>
        <Box
          component="hr"
          sx={{
            display: "inline",
            width: {xs: "3rem", sm: "6rem", md: "8rem", lg: "10rem"},
            marginLeft: {xs: "9px", lg: "15px"},
            border: styles.line.border,
            background: styles.line.background,
          }}
        ></Box>
      </Typography>
    </Stack>
  );
};
export default Footer;
