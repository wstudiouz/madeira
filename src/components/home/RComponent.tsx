import React, {ReactElement, useEffect, useState} from "react";
import {Stack, SxProps, Box, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {RSvg} from "../../imports";
import SvgIcon from "@mui/material/SvgIcon";
import {ScrollParallax} from "react-just-parallax";
import {getter} from "../../ts/utils/Fetcher";
import {RCompData} from "../../ts/REST/types/HomePageTypes";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const RComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  const [data, setData] = useState<RCompData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter(
        "home-page?populate=RComp.cardText,RComp.letterImg,RComp.rightImg1,RComp.rightImg2"
      );
      if (result.ok && result.data) {
        setData(result.data);
      }
    };

    getData();
  }, []);
  return (
    <Stack>
      {data && (
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
            md={3}
            sx={{position: "relative", height: "100%", zIndex: 2}}
          >
            <Stack
              sx={{
                position: {xs: "absolute"},
                right: "-45%",
                top: "-90%",
                display: {md: "block", xs: "none"},
              }}
            >
              <ScrollParallax strength={0.01}>
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.RComp.rightImg1.data.attributes.url}`}
                  sx={{
                    width: {xs: "80%"},
                    height: {xs: "auto"},
                  }}
                />
              </ScrollParallax>
            </Stack>
            <Stack>
              <ScrollParallax strength={0.03}>
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.RComp.rightImg2.data.attributes.url}`}
                  sx={{
                    width: {xs: "100%"},
                    height: {xs: "auto"},
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
              width: {xs: "100%", lg: "65%"},
              position: "relative",
              justifyContent: {xs: "center", lg: "right"},
              my: {xs: "50px", md: 0},
            }}
          >
            <SvgIcon
              component={RSvg}
              viewBox="0 0 535 534"
              sx={{
                width: {xs: "100%"},
                height: "auto",
              }}
            />
            <Stack
              sx={{
                position: "absolute",
                display: {md: "block", xs: "none"},
                bottom: 0,
                right: {xs: 0, lg: "0"},
              }}
            >
              <ScrollParallax strength={0.04}>
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.RComp.letterImg.data.attributes.url}`}
                  sx={{
                    width: {md: "210px", lg: "270px"},
                    height: {md: "135px", lg: "170px"},
                  }}
                />
              </ScrollParallax>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <MiniCardTextAndBtn
              stackSx={{
                width: {xs: "100%"},
                marginTop: "50px",
              }}
              fisrtBtnText="V"
              text={data.RComp.cardText.title}
              textSx={{margin: "30px auto"}}
              desc={data.RComp.cardText.description}
            />
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};

export default RComponent;
