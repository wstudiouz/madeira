import React, {ReactElement} from "react";
import {Stack, SxProps, Box, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {ASvg} from "../../imports";
import {theme} from "../../theme";
import {ScrollParallax} from "react-just-parallax";
import {HomeSecondACompComponent} from "../../ts/REST/api/generated";

type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
  value: HomeSecondACompComponent;
};
const SeacondAComponent = ({
  SectionRef,
  sx,
  value,
}: ComponentProps): ReactElement => {
  return (
    <Stack>
      {value && (
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
          <Grid item md={8}>
            <Stack sx={{flexDirection: "row", justifyContent: "space-around"}}>
              <Stack sx={{zIndex: 3, width: {xs: "30%", sm: "45%", md: "27%"}}}>
                <ScrollParallax strength={0.02}>
                  <Box
                    component="img"
                    src={`${process.env.REACT_APP_BACKEND_URL}${value?.leftImg1?.data?.attributes?.url}`}
                    sx={{
                      width: {
                        xs: "73px",
                        sm: "200px",
                        lg: "280px",
                        xl: "300px",
                      },
                      height: {
                        xs: "69px",
                        sm: "130px",
                        lg: "160px",
                        xl: "200px",
                      },
                    }}
                  />
                </ScrollParallax>
                <ScrollParallax strength={0.05}>
                  <Box
                    component="img"
                    src={`${process.env.REACT_APP_BACKEND_URL}${value?.leftImg2?.data?.attributes?.url}`}
                    sx={{
                      width: {
                        xs: "73px",
                        sm: "200px",
                        lg: "280px",
                        xl: "300px",
                      },
                      height: {
                        xs: "69px",
                        sm: "130px",
                        lg: "160px",
                        xl: "200px",
                      },
                      marginLeft: {md: "100px", xs: "30px"},
                      marginTop: "-50px",
                      zIndex: 4,
                    }}
                  />
                </ScrollParallax>
                <ScrollParallax strength={0.02}>
                  <Box
                    component="img"
                    src={`${process.env.REACT_APP_BACKEND_URL}${value?.leftImg3?.data?.attributes?.url}`}
                    sx={{
                      width: {
                        xs: "73px",
                        sm: "200px",
                        lg: "280px",
                        xl: "300px",
                      },
                      height: {
                        xs: "69px",
                        sm: "130px",
                        lg: "160px",
                        xl: "200px",
                      },
                      marginTop: "-20px",
                      zIndex: 5,
                    }}
                  />
                </ScrollParallax>
              </Stack>
              <Stack>
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
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={3}>
            {value?.cardText?.title && value?.cardText?.description && (
              <MiniCardTextAndBtn
                stackSx={{
                  width: {xs: "100%"},
                }}
                text={value.cardText.title}
                textSx={{margin: "30px 0"}}
                desc={value.cardText.description}
              />
            )}
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};

export default SeacondAComponent;
