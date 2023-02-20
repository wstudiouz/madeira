import {Box, Stack, Typography} from "@mui/material";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import MiniTextCard from "./MiniTextCard";
import {LeonHandleSvg} from "../../imports/index";
import {ParallaxLayer} from "@react-spring/parallax";
const Complex = (): ReactElement => {
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: {lg: "row"},
        position:"relative"
      }}
    >
      <Stack sx={{position: "relative",  width: {xs: "100%", lg: "60%"}, height:"40vh",minHeight:"300px"}}>
        <ParallaxLayer speed={0.1}>
          <Typography
            variant="heroText1"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            Complex solution of interior problems
          </Typography>
        </ParallaxLayer>
      </Stack>

      <Stack
        sx={{
          width: {lg: "60%"},
          justifyContent: "left",
          alignItems: "center",
          margin: {xs: "10rem auto", lg: "0 auto"},
        }}
      >
        <MiniTextCard
          stackSx={{width: "300px"}}
          text="WIDE RANGE"
          desc="We produce a wide range of products, including interior doors, sliding partitions, decor mouldings for metal exterior doors, floors, base moldings and boiserie wainscotings."
        />

        <MiniTextCard
          stackSx={{
            width: "300px",
            padding: "7px 10px 50px 7px",
            border: `1px solid ${theme.palette.secondary.main}`,
            alignItems: "flex-start",
            flexDirection: "column",
            marginTop: "50px",
            position: "relative",
          }}
          variantMy="heroText2"
          text="15 years"
          textSx={{marginTop: "-20px"}}
          desc="of excellent reputation"
        />
        <Stack sx={{position: "relative"}}>
          <ParallaxLayer speed={0.1}>
            <Box
              sx={{width: "150px", height: "190px"}}
              component="img"
              src={LeonHandleSvg}
            />
          </ParallaxLayer>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Complex;
