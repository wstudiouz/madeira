import React from "react";
import {Stack} from "@mui/material";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function MainContent(): JSX.Element {
  return (
    <Stack>
      <Header />
      <Stack sx={{marginTop: "80px"}}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default MainContent;
