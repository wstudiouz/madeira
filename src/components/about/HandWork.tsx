import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import {ScrollParallax} from "react-just-parallax";
type ComponentProps = {
  show: boolean;
};
const HandWork = ({show}: ComponentProps): ReactElement => {
 
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
        margin: {
          xs: "20px 0",
          sm: "30px 0",
          md: "40px 0",
          lg: "50px 0 10rem 0",
        },
      }}
    >
      <Stack
        sx={{
          display: {xs: "none", lg: "flex"},
          justifyContent: "right",
          alignItems: "flex-start",
          width: {lg: "60%", xl: "50%"},
          position: "relative",
        }}
      >
        <ScrollParallax strength={0.02}>
          <Typography
            variant="heroText1"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            With our own hands
          </Typography>
        </ScrollParallax>

        <ScrollParallax strength={0.1}>
          <Box
            component="img"
            alt="handworks"
            src="https://picsum.photos/300"
            sx={{
              width: "300px",
              height: "300px",
              position: "absolute",
              right: "0",
              top: "-50px",
            }}
          />
        </ScrollParallax>
      </Stack>

      <Box
        component="span"
        sx={{
         width: {xs: "100%", lg: "58%", xl: "48%"},
          "display": "block",
          "position": "relative",
          "overflow": "hidden",
          "&:after": {
            content: '""',
            width: "30%",
            height: "100%",
            display: "block",
            position: "absolute",
            top: "0",
            right: "0",
            transformOrigin: "100% 50%",
            transition: "all 1s ease",
            background: "#FFF",
            transform: show ?  "scale(0, 1)" : null,
          },
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            transition: "all 1s ease",
            transform: show
              ? "translate3d(-30px, 0, 0)"
              : "translate3d(0, 0, 0)",
          }}
          src="https://picsum.photos/500/300"
          alt="our group"
        />
      </Box>
    </Stack>
  );
};
export default HandWork;
