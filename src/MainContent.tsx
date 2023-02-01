import React from "react";
import {Stack} from "@mui/material";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";


function MainContent(): JSX.Element {
  return (
    <Stack >
      <Stack>
        header
      </Stack>
      <Stack >
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default MainContent;
