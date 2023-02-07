import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement} from "react";
import {Parallax} from "react-scroll-parallax";
import {theme} from "../../theme";
const HandWork = (): ReactElement => {
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "50px",
      }}
    >
      <Stack
        sx={{
          display: {xs: "none", lg: "flex"},
          alignItems: "flex-end",
          width: {lg: "60%", xl: "50%"},
        }}
      >
        <Parallax speed={5}>
          <Typography
            variant="heroText1"
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            With our own hands
          </Typography>
        </Parallax>

        <Parallax speed={-8}>
          <Box
            component="img"
            alt="handworks"
            src="https://picsum.photos/300"
            sx={{width: "300px", height: "300px"}}
          />
        </Parallax>
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
