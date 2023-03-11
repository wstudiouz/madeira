import React from "react";
import {Stack} from "@mui/material";
import {Outlet} from "react-router-dom";
import Header from "./components/header/Header";

function MainContent(): JSX.Element {
  return (
    <Stack>
      <Header />
      <Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
}

export default MainContent;
