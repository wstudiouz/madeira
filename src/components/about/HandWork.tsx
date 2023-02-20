import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import {ParallaxLayer} from "@react-spring/parallax";
const HandWork = (): ReactElement => {
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        position:"relative"
      }}
    >
      <Stack
        sx={{
          display: {xs: "none", lg: "flex"},
          alignItems: "center",
          justifyContent:"space-between",
          width: {lg: "60%", xl: "50%"},
          height:"60vh",
          position:"relative",
          paddingTop:"200px"
        }}
      >
        <Stack sx={{position: "absolute", width:"90%",left:"0"}}>
          <ParallaxLayer speed={0.1}>
            <Typography
              variant="heroText1"
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              With our own hands
            </Typography>
          </ParallaxLayer>
        </Stack>

        <Stack sx={{position: "absolute",width:"50%",right:"0",float:"right",bottom:"0"}}>
          <ParallaxLayer speed={0.1}>
            <Box
              component="img"
              alt="handworks"
              src="https://picsum.photos/300"
              sx={{width: "300px", height: "300px"}}
            />
          </ParallaxLayer>
        </Stack>
      </Stack>

      <Box
        component="img"
        sx={{width: {xs: "100%", lg: "38%", xl: "48%"}}}
        src="https://picsum.photos/500/300"
        alt="our group"
      />
    </Stack>
  );
};
export default HandWork;
