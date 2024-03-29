import React from "react";
import {Stack} from "@mui/material";
import {Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function MainContent(): JSX.Element {
  return (
    <Stack>
      <Header />
      <Stack>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default MainContent;
