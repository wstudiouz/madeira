import React, {ReactElement} from "react";
import {Stack} from "@mui/system";
import {useMediaQuery} from "@mui/material";
import {theme} from "../theme";
import {useLocation} from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const MainContainer = (props: Props): ReactElement => {
  const maxScreenWidth = useMediaQuery(theme.breakpoints.up(1980));
  const location = useLocation();
  return (
    <Stack
      sx={{
        margin: {
          xs: "0 30px",
          md: "0 75px",
          xl: maxScreenWidth ? "0 auto" : undefined,
        },
        marginTop:
          location.pathname === "/" ? undefined : {xs: "48px", sm: "64px"},
        maxWidth: maxScreenWidth ? "1980px" : undefined,
        minWidth: maxScreenWidth ? "1980px" : undefined,
      }}
    >
      {props.children}
    </Stack>
  );
};

export default MainContainer;
