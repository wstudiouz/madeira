import React, {ReactElement, useEffect, useState} from "react";
import {Stack, Typography, SxProps, Box, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {ASvg} from "../../imports";
import {theme} from "../../theme";
import {ScrollParallax} from "react-just-parallax";
import {useMediaQuery} from "@mui/material";
import {getter} from "../../ts/utils/Fetcher";
import {ACompData} from "../../ts/REST/types/HomePageTypes";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const AComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [data, setData] = useState<ACompData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter(
        "home-page?populate=AComp.cardText,AComp.image,AComp.button,AComp.rightText"
      );
      if (result.ok && result.data) {
        setData(result.data);
      }
    };

    getData();
  }, []);
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
        {data && (
          <MiniCardTextAndBtn
            fisrtBtnText="I"
            text={data.AComp.cardText.title}
            textSx={{margin: "30px auto"}}
            desc={data.AComp.cardText.description}
            secondBtntext={data.AComp.button.btnName}
            secondBtnUrl={data.AComp.button.btnLink}
            secondBtnSx={{width: "130px", marginTop: {md: "80px", xs: "30px"}}}
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
          viewBox="0 0 572 548"
        />
        <Stack sx={{position: "absolute", right: "0", bottom: "0"}}>
          <ScrollParallax strength={isMobile ? 0.01 : 0.1}>
            {data && (
              <Box
                component="img"
                src={`${process.env.REACT_APP_BACKEND_URL}${data.AComp.image.data.attributes.url}`}
                sx={{
                  width: {xs: "110px", sm: "150px", md: "180px", lg: "220px"},
                  height: {xs: "230px", sm: "300px", md: "370px", lg: "420px"},
                  marginLeft: {xs: "-120px", lg: "-190px"},
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
              {data && data.AComp.rightText.title}
            </Typography>
            <Typography
              variant="paragraph"
              sx={{marginTop: "30px", color: "#000", display: "block"}}
            >
              {data && data.AComp.rightText.description}
            </Typography>
          </ScrollParallax>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AComponent;
