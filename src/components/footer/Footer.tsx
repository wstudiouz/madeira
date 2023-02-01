import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {theme} from "../../theme";
import React, {ReactElement} from "react";
import {FooterBg} from "../../imports";
const Footer = (): ReactElement => {
  const styles = {
    href: {
      textDecoration: "none",
      color: theme.palette.secondary.main,
      fontFamily: "'Libre Caslon Text'",
    },
    line: {
      width: {xs: "85%", sm: "85%", md: "85%", lg: "0", xl: "0"},
      margin: "10px",
      height: {xs: "1.5px", sm: "1.5px", md: "1.5px", lg: "100%", xl: "100%"},
      overflow: "hidden",
      border: `1px solid ${theme.palette.secondary.main}`,
      background:theme.palette.secondary.main
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
        margin: {
          xs: "30px 10px 30px 10px",
          sm: "50px 30px 30px 30px",
          md: "70px 50px 30px 50px",
          lg: "90px 60px 30px 60px",
          xl: "110px 70px 30px 70px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        ...styles.bgImg,
        ...styles.bgLine,
      }}
    >
      <Typography variant="h1" sx={{display: "flex", alignItems: "center"}}>
        <Box component="a" href="/contact" sx={styles.href}>
          Contacts
          <Box
            component="hr"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          ></Box>
        </Box>
      </Typography>
      <Box sx={styles.line} component="hr"></Box>
      <Typography variant="h1" sx={{display: "flex", alignItems: "center"}}>
        <Box component="a" href="/about" sx={{...styles.href}}>
          About us
          <Box
            component="hr"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          ></Box>
        </Box>
      </Typography>
    </Stack>
  );
};
export default Footer;
