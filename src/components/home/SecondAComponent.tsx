import React, {ReactElement, useEffect, useState} from "react";
import {Stack, SxProps, Box, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {ASvg} from "../../imports";
import {theme} from "../../theme";
import {ScrollParallax} from "react-just-parallax";
import {getter} from "../../ts/utils/Fetcher";
import {SecondACompData} from "../../ts/REST/types/HomePageTypes";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const SeacondAComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  const [data, setData] = useState<SecondACompData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter(
        "home-page?populate=SecondAComp.cardText,SecondAComp.leftImg1,SecondAComp.leftImg2,SecondAComp.leftImg3"
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
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.SecondAComp.leftImg1.data.attributes.url}`}
                  sx={{
                    width: {xs: "100%"},
                  }}
                />
              </ScrollParallax>
              <ScrollParallax strength={0.05}>
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.SecondAComp.leftImg2.data.attributes.url}`}
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
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.SecondAComp.leftImg3.data.attributes.url}`}
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
              text={data.SecondAComp.cardText.title}
              textSx={{margin: "30px 0"}}
              desc={data.SecondAComp.cardText.description}
            />
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};

export default SeacondAComponent;
