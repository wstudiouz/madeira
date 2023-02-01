import React, {ReactElement} from "react";
import {Stack} from "@mui/system";
import {useMediaQuery} from "@mui/material";
import {theme} from "../theme";

type Props = {
  children: React.ReactNode;
};

const MainContainer = (props: Props): ReactElement => {
  const maxScreenWidth = useMediaQuery(theme.breakpoints.up(1980));
  return (
    <Stack
      sx={{
        margin: {
          xs: "0 30px",
          md: "0 75px",
          xl: maxScreenWidth ? "0 auto" : undefined,
        },
        maxWidth: maxScreenWidth ? "1980px" : undefined,
        minWidth: maxScreenWidth ? "1980px" : undefined,
      }}
    >
      {props.children}
    </Stack>
  );
};

export default MainContainer;
