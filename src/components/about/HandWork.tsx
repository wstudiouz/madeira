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
      }}
    >
      <Stack
        sx={{
          display: {xs: "none", lg: "flex"},
          alignItems: "flex-end",
          width: {lg: "60%", xl: "50%"},
        }}
      >
        <Stack sx={{position: "relative", height: "100%"}}>
          <ParallaxLayer speed={0.5}>
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

        <Stack sx={{position: "relative"}}>
          <ParallaxLayer speed={0.5}>
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
