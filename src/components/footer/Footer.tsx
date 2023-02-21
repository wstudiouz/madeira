import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {theme} from "../../theme";
import React, {ReactElement} from "react";
import {FooterBg} from "../../imports";
import { Link } from "react-router-dom";
import MiniHrComponent from "../MiniHrComponent";
const Footer = (): ReactElement => {
  const styles = {
    href: {
      textDecoration: "none",
      color: theme.palette.secondary.main,
      fontFamily: "'Libre Caslon Text'",
    },
    line: {
      width: 0,
      margin: "25px",
      height: "100%",
      overflow: "hidden",
      border: `1px solid ${theme.palette.secondary.main}`,
      background: theme.palette.secondary.main,
    },
    bgImg: {
      height: {xs:"50px",sm:"70px",md:"100px",lg:"130px",xl:"150px"},
      backgroundImage: `url(${FooterBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    bgLine: {
      position: "absolute",
      content: '""',
      width: "100%",
      overflowX: "hidden",
      display: "block",
      border: `1.5px solid ${theme.palette.secondary.main}`,
      marginTop: {xs:"-40px",sm:"-55px",md:"-75px",lg:"-105px",xl:"-120px"},
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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        ...styles.bgImg,
        "&:after":{
          ...styles.bgLine,
          marginTop:{xs:"40px",sm:"55px",md:"75px",lg:"105px",xl:"120px"}
        },
        "&:before":{
          ...styles.bgLine
        }
      }}
    >
      <Typography variant="h1" sx={{display: "flex", alignItems: "center"}}>
          <MiniHrComponent sx={{width:{xs:"4rem", sm:"6rem", md:"7rem",lg:"8rem"},height:"1px",marginRight:"10px"}} />
        <Link  to="/contact" style={styles.href}>
          Contacts
        </Link>
      </Typography>
      <Box sx={styles.line} component="hr"></Box>
      <Typography variant="h1" sx={{display: "flex", alignItems: "center"}}>
        <Link  to="/about" style={styles.href}>
          About us
        </Link>
        <MiniHrComponent sx={{width:{xs:"4rem", sm:"6rem", md:"7rem",lg:"8rem"},height:"1px",marginLeft:"10px"}} />
      </Typography>
    </Stack>
  );
};
export default Footer;
