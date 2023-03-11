import React, {ReactElement} from "react";
import {Stack, SxProps, Box, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {ASvg} from "../../imports";
import {theme} from "../../theme";
import {ScrollParallax} from "react-just-parallax";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const SeacondAComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  return (
    <Grid
      container
      spacing={"30px"}
      ref={SectionRef}
      sx={{
        width: "100%",
        flexDirection: {md: "row", xs: "column-reverse"},
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        ...sx,
      }}
    >
      <Grid item md={3}>
        <Stack sx={{zIndex: 3}}>
          <ScrollParallax strength={0.02}>
            <Box
              component="img"
              src="https://picsum.photos/302/200"
              sx={{
                width: {xs: "100%"},
              }}
            />
          </ScrollParallax>
          <ScrollParallax strength={0.05}>
            <Box
              component="img"
              src="https://picsum.photos/300/200"
              sx={{
                width: {xs: "100%"},
                marginLeft: {md: "100px", xs: "30px"},
                marginTop: "-50px",
                zIndex: 4,
              }}
            />
          </ScrollParallax>
          <ScrollParallax strength={0.02}>
            <Box
              component="img"
              src="https://picsum.photos/301/200"
              sx={{
                width: {xs: "100%"},
                marginTop: "-20px",
                zIndex: 5,
              }}
            />
          </ScrollParallax>
        </Stack>
      </Grid>
      <Grid
        item
        md={5}
        sx={{
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          justifyContent: "left",
          alignSelf: "self-end",
        }}
      >
        <SvgIcon
          component={ASvg}
          sx={{
            "width": {xs: "100%"},
            "height": {xs: "auto"},
            "right": "0",
            "zIndex": 2,
            "& path": {
              fill: theme.palette.primary.main,
            },
          }}
          viewBox="0 0 572 548"
        />
      </Grid>
      <Grid item md={3}>
        <MiniCardTextAndBtn
          stackSx={{
            width: {xs: "100%"},
          }}
          text="Branded Furniture"
          textSx={{margin: "30px 0"}}
          desc="We provide visit for measurement, onsite consultations; products delivery and lifting; furniture insert with professional equipment; removal and installation of interior and exterior doors; solid and engineered wood paving."
        />
      </Grid>
    </Grid>
  );
};

export default SeacondAComponent;
