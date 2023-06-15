import React, {ReactElement, useState, useEffect} from "react";
import {Stack, SxProps, Box, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {DSvg} from "../../imports";
import {ScrollParallax} from "react-just-parallax";
import {getter} from "../../ts/utils/Fetcher";
import {DCompData} from "../../ts/REST/types/HomePageTypes";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const DComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  const [data, setData] = useState<DCompData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter(
        "home-page?populate=DComp.cardText,DComp.letterImg,DComp.button,DComp.firstImg,DComp.secondImg"
      );
      if (result.ok && result.data) {
        setData(result.data);
      }
    };

    getData();
  }, []);
  return (
    <Grid
      container
      spacing={{md: "30px"}}
      ref={SectionRef}
      sx={{
        justifyContent: "center",
        alignItems: {md: "self-end", xs: "center"},
        ...sx,
      }}
    >
      <Grid item md={3}>
        {data && (
          <MiniCardTextAndBtn
            fisrtBtnText="II"
            text={data.DComp.cardText.title}
            textSx={{margin: "30px auto"}}
            desc={data.DComp.cardText.description}
            secondBtntext={data.DComp.button.btnName}
            secondBtnUrl={data.DComp.button.btnLink}
            secondBtnSx={{width: "130px", marginTop: {md: "80px", xs: "30px"}}}
          />
        )}
      </Grid>

      <Grid
        item
        md={5}
        sx={{
          justifyContent: "left",
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
            height: {xs: "100%"},
          }}
        >
          <SvgIcon
            component={DSvg}
            viewBox="0 0 460 516"
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
              {data && (
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.DComp.letterImg.data.attributes.url}`}
                  sx={{
                    height: "calc(100% + 100px)",
                    marginTop: "-50px",
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
        <Stack
          sx={{
            zIndex: 3,
            width: "auto",
            position: "absolute",
            top: "20%",
            right: "-40%",
            display: {xs: "none", md: "block"},
          }}
        >
          <ScrollParallax strength={0.01}>
            {data && (
              <Box
                component="img"
                src={`${process.env.REACT_APP_BACKEND_URL}${data.DComp.firstImg.data.attributes.url}`}
                sx={{
                  width: {
                    md: "210px",
                    lg: "270px",
                    xl: "350px",
                  },
                  height: {
                    md: "210px",
                    lg: "270px",
                    xl: "350px",
                  },
                  marginLeft: {xs: "-120px"},
                }}
              />
            )}
          </ScrollParallax>
          <ScrollParallax strength={0.03}>
            {data && (
              <Box
                component="img"
                src={`${process.env.REACT_APP_BACKEND_URL}${data.DComp.secondImg.data.attributes.url}`}
                sx={{
                  zIndex: 4,
                  position: "absolute",
                  width: {
                    md: "180px",
                    lg: "210px",
                    xl: "250px",
                  },
                  height: {
                    md: "180px",
                    lg: "210px",
                    xl: "250px",
                  },
                  marginLeft: {
                    md: "-30px",
                    lg: "0",
                    xl: "40px",
                  },
                  marginTop: {xs: "-100px", lg: "-130px"},
                }}
              />
            )}
          </ScrollParallax>
        </Stack>
      </Grid>
      <Grid item md={3} />
    </Grid>
  );
};

export default DComponent;
