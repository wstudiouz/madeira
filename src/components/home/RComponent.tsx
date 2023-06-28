import React, {ReactElement, useRef} from "react";
import {Stack, SxProps, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {RSvg} from "../../imports";
import SvgIcon from "@mui/material/SvgIcon";
import {ScrollParallax} from "react-just-parallax";
import {HomeRCompComponent} from "../../ts/REST/api/generated";
import ResponsiveImage from "@qubixstudio/sphere/sphere/components/ResponsiveImage";
import {AspectRatioMode, useAspectRatio} from "@qubixstudio/sphere";

type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
  value: HomeRCompComponent;
};
const RComponent = ({SectionRef, sx, value}: ComponentProps): ReactElement => {
  const imageRef = useRef(null);
  const size = useAspectRatio(1 / 1, AspectRatioMode.heightFromWidth, imageRef);
  return (
    <Stack>
      {value && (
        <Grid
          container
          spacing={{md: "30px"}}
          ref={SectionRef}
          sx={{
            width: "100%",
            flexDirection: {md: "row", xs: "column-reverse"},
            justifyContent: "center",
            alignItems: {md: "self-end", xs: "center"},
            position: "relative",
            ...sx,
          }}
        >
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              position: "relative",
              height: "100%",
              zIndex: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: {xs: "space-around"},
              marginTop: {xs: "30px", md: 0},
            }}
          >
            <Stack>
              <ScrollParallax strength={0.01}>
                <ResponsiveImage
                  src={`${process.env.REACT_APP_BACKEND_URL}${value?.rightImg1?.data?.attributes?.url}`}
                  sx={{
                    width: {xs: "100px", sm: "170px", md: "240px", lg: "300px"},
                    height: {
                      xs: "100px",
                      sm: "160px",
                      md: "230px",
                      lg: "280px",
                    },
                  }}
                />
              </ScrollParallax>
            </Stack>
            <Stack sx={{position: "absolute", left: 0, bottom: 0}}>
              <ScrollParallax strength={0.03}>
                <ResponsiveImage
                  src={`${process.env.REACT_APP_BACKEND_URL}${value?.rightImg2?.data?.attributes?.url}`}
                  width="100%"
                  height={size.height}
                  refs={imageRef}
                  sx={{
                    width: {xs: "100px", sm: "170px", md: "240px", lg: "300px"},
                    height: {xs: "50px", sm: "90px", md: "130px", lg: "180px"},
                  }}
                />
              </ScrollParallax>
            </Stack>
            <SvgIcon
              component={RSvg}
              viewBox="0 0 535 534"
              sx={{
                width: {xs: "231px", sm: "315px", md: "390x", lg: "539px"},
                height: "auto",
              }}
            />
            <Stack
              sx={{
                position: "absolute",
                bottom: 0,
                right: {xs: 0, lg: "0"},
              }}
            >
              <ScrollParallax strength={0.04}>
                <ResponsiveImage
                  src={`${process.env.REACT_APP_BACKEND_URL}${value?.letterImg?.data?.attributes?.url}`}
                  sx={{
                    width: {xs: "160px", sm: "180px", md: "210px", lg: "270px"},
                    height: {xs: "80px", sm: "105px", md: "135px", lg: "170px"},
                  }}
                />
              </ScrollParallax>
            </Stack>
          </Grid>

          <Grid item md={3}>
            {value?.cardText?.title && value.cardText?.description && (
              <MiniCardTextAndBtn
                stackSx={{
                  width: {xs: "100%"},
                  marginTop: "50px",
                }}
                fisrtBtnText="V"
                text={value.cardText.title}
                textSx={{margin: "30px auto"}}
                desc={value.cardText.description}
              />
            )}
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};

export default RComponent;
