import {Box, Stack, Typography} from "@mui/material";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import MiniTextCard from "./MiniTextCard";
import {LeonHandleSvg} from "../../imports/index";
import {Parallax} from "react-scroll-parallax";
const Complex = (): ReactElement => {
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        margin: "50px 0",
        flexDirection: {lg: "row"},
      }}
    >
      <Parallax style={{width: "100%"}} speed={10}>
        <Typography
          variant="heroText1"
          sx={{
            width: {xs: "100%", lg: "60%"},
            color: theme.palette.primary.contrastText,
          }}
        >
          Complex solution of interior problems
        </Typography>
      </Parallax>

      <Stack
        sx={{
          width: {lg: "60%"},
          justifyContent: "left",
          alignItems: "center",
          margin: {xs: "10rem", lg: "0"},
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
        <Parallax
          style={{
            position: "absolute",
            margin: "16rem 0 0 10rem",
          }}
          speed={2}
        >
          <Box
            sx={{width: "150px", height: "190px"}}
            component="img"
            src={LeonHandleSvg}
          />
        </Parallax>
      </Stack>
    </Stack>
  );
};
export default Complex;
