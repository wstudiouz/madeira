import React, {ReactElement, useEffect, useState} from "react";
import {Stack, SxProps, Box, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {ESvg} from "../../imports";
import {ScrollParallax} from "react-just-parallax";
import {getter} from "../../ts/utils/Fetcher";
import {ECompData} from "../../ts/REST/types/HomePageTypes";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const EComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  const [data, setData] = useState<ECompData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter(
        "home-page?populate=EComp.cardText,EComp.letterImg,EComp.button,EComp.leftImg"
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
          {data && (
            <Box
              component="img"
              src={`${process.env.REACT_APP_BACKEND_URL}${data.EComp.leftImg.data.attributes.url}`}
              sx={{
                width: {
                  xs: "100%",
                },
                height: {
                  xs: "auto",
                },
              }}
            />
          )}
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
              {data && (
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.EComp.letterImg.data.attributes.url}`}
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
        {data && (
          <MiniCardTextAndBtn
            stackSx={{
              width: {xs: "100%", md: "100%"},
            }}
            fisrtBtnText="III"
            text={data.EComp.cardText.title}
            textSx={{margin: "30px auto"}}
            desc={data.EComp.cardText.description}
            secondBtntext={data.EComp.button.btnName}
            secondBtnUrl={data.EComp.button.btnLink}
            secondBtnSx={{width: "130px", marginTop: {md: "80px", xs: "30px"}}}
          />
        )}
      </Grid>
      <Grid item md={1} />
    </Grid>
  );
};

export default EComponent;
