import React, {ReactElement} from "react";
import {Stack, Typography, SxProps, Box} from "@mui/material";
import {theme} from "../../theme";
import {DeskLogo} from "../../imports";
import {MouseParallax} from "react-just-parallax";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const MComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  return (
    <Stack
      ref={SectionRef}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      <MouseParallax strength={0.05}>
        <Stack sx={{alignItems: "center"}}>
          <Box
            component="img"
            src={DeskLogo}
            sx={{
              width: {md: "90%", xs: "100%"},
              height: "auto",
              marginX: "auto",
            }}
          />
          <Typography
            sx={{color: theme.palette.primary.main}}
            variant="heroText1"
          >
            M A D E I R A
          </Typography>
          <Typography variant="h2" sx={{color: theme.palette.primary.main}}>
            Уникальность во всем!
          </Typography>
        </Stack>
      </MouseParallax>
    </Stack>
  );
};

export default MComponent;
