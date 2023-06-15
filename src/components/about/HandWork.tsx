import {Stack, Typography, Grid} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement, useEffect, useRef, useState} from "react";
import {theme} from "../../theme";
import {ScrollParallax} from "react-just-parallax";
import useIntersectionObserver from "../../ts/utils/Hooks";
import {getter} from "../../ts/utils/Fetcher";
import {HandWorkData} from "../../ts/REST/types/AboutPageTypes";

const HandWork = (): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, {});
  const [active, setActive] = useState<boolean>(false);
  const [data, setData] = useState<HandWorkData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter(
        "about-page?populate=HandWork.topImg,HandWork.bottomImg"
      );
      if (result.ok && result.data) {
        setData(result.data);
      }
    };

    getData();
  }, []);
  useEffect(() => {
    if (isVisible?.isIntersecting) {
      setActive(true);
    }
  }, [isVisible?.isIntersecting]);
  return (
    <Stack
      ref={ref}
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: {xs: "column"},
        margin: {
          xs: "20px 0",
          sm: "30px 0",
          md: "40px 0",
          lg: "50px 0 10rem 0",
        },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: {xs: "column", lg: "row"},
          alignItems: {lg: "center"},
          justifyContent: {lg: "space-between"},
          width: "100%",
        }}
      >
        <Grid
          item
          xs={8}
          lg={7}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "flex-start",
            width: "100%",
            position: "relative",
          }}
        >
          <ScrollParallax strength={0.02}>
            <Typography
              variant="heroText1"
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              {data && data.HandWork.title}
            </Typography>
          </ScrollParallax>
        </Grid>

        <Grid
          item
          xs={12}
          lg={5}
          sx={{width: "100%", display: "flex", justifyContent: "right"}}
        >
          <Grid item xs={7} lg={12}>
            <Box
              component="span"
              sx={{
                "width": "100%",
                "display": "block",
                "position": "relative",
                "overflow": "hidden",
                "&:after": {
                  content: '""',
                  width: "30%",
                  height: "100%",
                  display: "block",
                  position: "absolute",
                  top: "0",
                  right: "0",
                  transformOrigin: "100% 50%",
                  transition: "all 1s ease",
                  background: "#FFF",
                  transform: active ? "scale(0, 1)" : null,
                },
              }}
            >
              {data && (
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                    transition: "all 1s ease",
                    transform: active
                      ? "translate3d(-5px, 0, 0)"
                      : "translate3d(0, 0, 0)",
                  }}
                  // src="https://picsum.photos/500/300"
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.HandWork.topImg.data.attributes.formats.large?.url}`}
                  alt="our group"
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{width: "100%", marginTop: {xs: "50px", lg: "0"}}}>
        <Grid
          item
          xs={6}
          sm={5}
          md={4}
          lg={3}
          sx={{
            marginLeft: {xs: "0", md: "22%", lg: "30%"},
            marginTop: {xs: "30px", md: "-22px", lg: "-50px"},
          }}
        >
          <ScrollParallax strength={0.1}>
            {data && (
              <Box
                component="img"
                alt="handworks"
                src={`${process.env.REACT_APP_BACKEND_URL}${data.HandWork.bottomImg.data.attributes.formats.large?.url}`}
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </ScrollParallax>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default HandWork;
