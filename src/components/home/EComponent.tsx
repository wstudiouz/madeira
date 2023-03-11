import React, {ReactElement} from "react";
import {Stack, SxProps, Box, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {ESvg} from "../../imports";
import {ScrollParallax} from "react-just-parallax";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const EComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  return (
    <Grid
      container
      ref={SectionRef}
      spacing={{md: "30px"}}
      sx={{
        justifyContent: "center",
        alignItems: {md: "self-end", xs: "center"},
        flexDirection: {md: "row", xs: "column-reverse"},
        ...sx,
      }}
    >
      <Grid item md={3}>
        <ScrollParallax strength={0.08}>
          <Box
            component="img"
            src="https://picsum.photos/330/370"
            sx={{
              width: {
                xs: "100%",
              },
              height: {
                xs: "auto",
              },
            }}
          />
        </ScrollParallax>
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          justifyContent: {xs: "left", lg: "right"},
          alignItems: "center",
          flexDirection: "row",
          margin: {xs: "50px 0", lg: "0"},
          position: "relative",
        }}
      >
        <Stack
          sx={{
            position: "relative",
            width: {xs: "100%"},
            height: {xs: "100%", sm: "auto"},
          }}
        >
          <SvgIcon
            component={ESvg}
            viewBox="0 0 391 516"
            sx={{
              "width": "100%",
              "height": "auto",
              "display": "block",
              "zIndex": 2,
              "transform": "scale(1.005)",
              "& path": {
                transformOrigin: "0px 0px",
                fill: "#fff",
              },
            }}
          />
          <Box
            component="span"
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <ScrollParallax>
              <Box
                component="img"
                src="https://viporte.com/templates/vp/resources/images/block_7_img.jpg"
                sx={{
                  height: "calc(100% + 100px)",
                  minWidth: "100%",
                  minHeight: "100%",
                  display: "block",
                  overflowClipMargin: "content-box",
                  overflow: "clip",
                }}
              />
            </ScrollParallax>
          </Box>
        </Stack>
      </Grid>
      <Grid item md={3}>
        <MiniCardTextAndBtn
          stackSx={{
            width: {xs: "100%", md: "100%"},
          }}
          fisrtBtnText="III"
          text="Kitchen Furniture"
          textSx={{margin: "30px auto"}}
          desc="We produce solid and engineered oak and ash planks. In the manufacture and floor finishing we aim to create unified interior compositions with natural materials. Viporte doors, floor coverings, wainscoting and base moldings perfectly fit each other, forming a luxurious interior design."
          secondBtntext="Catalogue"
          secondBtnUrl="/catalogue"
          secondBtnSx={{width: "130px", marginTop: {md: "80px", xs: "30px"}}}
        />
      </Grid>
      <Grid item md={1} />
    </Grid>
  );
};

export default EComponent;
