import {Stack} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import BigText from "./BigText";
const HandWork = (): ReactElement => {
  return (
    <Stack
      sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection:"row",
          marginTop:"50px",
      }}
    >
      <Stack
        sx={{
          display: {xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex"},
          alignItems: "flex-end",
          flexDirection: "column",
          width: {lg: "60%", xl: "50%"},
        }}
      >
            <BigText
            text="With our own hands"
            textSx={{color: theme.palette.primary.contrastText}}
            />
       
        <Box
          component="img"
          alt="handworks"
          src="https://picsum.photos/300"
          sx={{width: "300px", height: "300px"}}
        />
      </Stack>

      <Box
        component="img"
        sx={{width: {xs: "100%", sm: "100%", md: "100%", lg: "38%", xl: "48%"}}}
        src="https://picsum.photos/500/300"
        alt="our group"
      />
    </Stack>
  );
};
export default HandWork;
