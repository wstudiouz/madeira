import React, {ReactElement, useRef} from "react";
import {Stack, Typography, SxProps, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {ASvg} from "../../imports";
import {theme} from "../../theme";
import {ScrollParallax} from "react-just-parallax";
import {useMediaQuery} from "@mui/material";
import {HomeACompComponent} from "../../ts/REST/api/generated";
import ResponsiveImage from "@qubixstudio/sphere/sphere/components/ResponsiveImage";
import {AspectRatioMode, useAspectRatio} from "@qubixstudio/sphere";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
  value: HomeACompComponent;
};
const AComponent = ({SectionRef, sx, value}: ComponentProps): ReactElement => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const imageRef = useRef(null);
  const size = useAspectRatio(1 / 2, AspectRatioMode.heightFromWidth, imageRef);
  return (
    <Grid
      ref={SectionRef}
      spacing={{md: "30px"}}
      container
      sx={{
        justifyContent: "center",
        alignItems: {md: "self-end", xs: "center"},
        ...sx,
      }}
    >
      <Grid item md={3}>
        {value &&
          value.cardText?.title &&
          value.cardText?.description &&
          value.button?.btnName && (
            <MiniCardTextAndBtn
              fisrtBtnText="I"
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
      <Grid
        item
        md={5}
        sx={{
          justifyContent: "left",
          alignItems: "flex-end",
          flexDirection: "row",
          margin: {xs: "50px 0", lg: "0"},
          position: "relative",
        }}
      >
        <SvgIcon
          component={ASvg}
          sx={{
            "width": "100%",
            "height": "auto",
            "& path": {
              fill: theme.palette.primary.main,
            },
          }}
          viewBox="0 0 600 575"
        />
        <Stack sx={{position: "absolute", right: "0", bottom: "0"}}>
          <ScrollParallax strength={isMobile ? 0.01 : 0.1}>
            {value && value.image?.data?.attributes?.url && (
              <ResponsiveImage
                src={`${process.env.REACT_APP_BACKEND_URL}${value.image.data.attributes.url}`}
                width="220px"
                height={size.height}
                refs={imageRef}
                sx={{
                  width: {xs: "115px", sm: "150px", md: "165px", lg: "190px"},
                  height: {xs: "230px", sm: "300px", md: "330px", lg: "380px"},
                  marginLeft: {xs: "-120px", md: "-160px", lg: "-190px"},
                }}
              />
            )}
          </ScrollParallax>
        </Stack>
      </Grid>

      <Grid item md={3}>
        <Stack sx={{marginBottom: {md: "-100%"}}}>
          <ScrollParallax strength={isMobile ? 0 : 0.2}>
            <Typography variant="h2">
              {value && value.rightText?.title}
            </Typography>
            <Typography
              variant="paragraph"
              sx={{marginTop: "30px", color: "#000", display: "block"}}
            >
              {value && value.rightText?.description}
            </Typography>
          </ScrollParallax>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AComponent;
