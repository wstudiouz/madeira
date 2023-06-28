import React, {ReactElement, useRef} from "react";
import {Stack, SxProps, Box, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {ESvg} from "../../imports";
import {ScrollParallax} from "react-just-parallax";
import {HomeECompComponent} from "../../ts/REST/api/generated";
import ResponsiveImage from "@qubixstudio/sphere/sphere/components/ResponsiveImage";
import {useAspectRatio, AspectRatioMode} from "@qubixstudio/sphere";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
  value: HomeECompComponent;
};
const EComponent = ({SectionRef, sx, value}: ComponentProps): ReactElement => {
  const imageRef = useRef(null);
  const size = useAspectRatio(
    1 / 1.5,
    AspectRatioMode.heightFromWidth,
    imageRef
  );
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
      <Grid item md={3} xs={8}>
        <Stack
          sx={{width: {xs: "100%", sm: "70%", md: "100%"}, margin: "0 auto"}}
        >
          <ScrollParallax strength={0.08}>
            {value && value?.leftImg?.data?.attributes?.url && (
              <ResponsiveImage
                src={`${process.env.REACT_APP_BACKEND_URL}${value.leftImg.data.attributes.url}`}
                width="100%"
                height={size.height}
                refs={imageRef}
                sx={{
                  width: "100%",
                }}
              />
            )}
          </ScrollParallax>
        </Stack>
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
              {value && value?.letterImg?.data?.attributes?.url && (
                <ResponsiveImage
                  src={`${process.env.REACT_APP_BACKEND_URL}${value.letterImg.data.attributes.url}`}
                  sx={{
                    height: "calc(100% + 100px)",
                    minWidth: "100%",
                    minHeight: "100%",
                    display: "block",
                    overflowClipMargin: "content-box",
                    overflow: "clip",
                  }}
                />
              )}
            </ScrollParallax>
          </Box>
        </Stack>
      </Grid>
      <Grid item md={3}>
        {value &&
          value?.cardText?.title &&
          value?.cardText?.description &&
          value?.button?.btnName && (
            <MiniCardTextAndBtn
              stackSx={{
                width: {xs: "100%", md: "100%"},
              }}
              fisrtBtnText="III"
              text={value.cardText.title}
              textSx={{margin: "30px auto"}}
              desc={value.cardText.description}
              secondBtntext={value.button.btnName}
              secondBtnUrl={value.button.btnLink}
              secondBtnSx={{
                width: "130px",
                marginTop: {md: "80px", xs: "30px"},
              }}
            />
          )}
      </Grid>
      <Grid item md={1} />
    </Grid>
  );
};

export default EComponent;
