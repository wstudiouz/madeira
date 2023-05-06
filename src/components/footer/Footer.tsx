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
      width: {xs: "85%", lg: "0"},
      margin: {xs: "7px", lg: "25px"},
      height: {xs: "1.5px", lg: "100%"},
      overflow: "hidden",
      border: `1px solid ${theme.palette.secondary.main}`,
      background: theme.palette.secondary.main,
    },
    bgImg: {
      height: 150,
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
        marginTop: "-120px",
      },
      "&:after": {
        position: "absolute",
        content: '""',
        width: "100%",
        overflowX: "hidden",
        border: `1.5px solid ${theme.palette.secondary.main}`,
        display: "block",
        marginTop: "120px",
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
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        ...styles.bgImg,
        ...styles.bgLine,
      }}
    >
      <Typography variant="h1" sx={{display: "flex", alignItems: "center"}}>
        <Box
          component="hr"
          sx={{
            display: {
              xs: "none",
              lg: "inline",
            },
            width: "7rem",
            marginRight: "15px",
            border: styles.line.border,
            background: styles.line.background,
          }}
        ></Box>
        <Link to="/contact" style={styles.href}>
          Contacts
        </Link>
      </Typography>
      <Box sx={styles.line} component="hr"></Box>
      <Typography variant="h1" sx={{display: "flex", alignItems: "center"}}>
        <Link to="/about" style={styles.href}>
          About us
        </Link>
        <Box
          component="hr"
          sx={{
            display: {
              xs: "none",
              lg: "inline",
            },
            width: "7rem",
            marginLeft: "15px",
            border: styles.line.border,
            background: styles.line.background,
          }}
        ></Box>
      </Typography>
    </Stack>
  );
};
export default Footer;
