import React from "react";
import {Stack} from "@mui/material";
import {Outlet} from "react-router-dom";


function MainContent(): JSX.Element {
  return (
    <Stack >
      <Stack>
        header
      </Stack>
      <Stack >
        <Outlet />
      </Stack>
      <Stack>
        footer
      </Stack>
    </Stack>
  );
}

export default MainContent;
