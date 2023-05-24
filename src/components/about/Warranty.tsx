import {Stack, Grid} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement, useEffect, useRef, useState} from "react";
import {ScrollParallax} from "react-just-parallax";
import MiniTextCard from "./MiniTextCard";
import useIntersectionObserver from "../../ts/utils/Hooks";

const Warranty = (): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, {});
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (isVisible?.isIntersecting) {
      setActive(true);
    }
  }, [isVisible?.isIntersecting]);

  return (
    <Grid
      container
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {lg: "row"},
        marginTop: "100px",
      }}
    >
      <Grid
        item
        md={4}
        sx={{
          width: "100%",
          height: "auto",
          display: {xs: "none", md: "block"},
          position: "relative",
          border: "1px solid red",
        }}
      >
        <Box
          component="svg"
          viewBox="0 0 265 420"
          sx={{
            width: "100%",
            display: "block",
            position: "relative",
            zIndex: 3,
            transform: "scale(1.007)",
          }}
        >
          <Box
            component="path"
            sx={{fill: "#fff", transformOrigin: "0px 0px"}}
            d="M0,0v420h265V0H0z M213.8,377.8c-24.2,23.6-57.7,35.3-100.4,35.3c-35.3,0-62.6-7.8-82.1-23.4C11.7,374.2,2,352.6,2,325.2
              c0-16.3,4.4-29.4,13.2-39.4c8.8-10,20.7-15,35.6-15c13.9,0,25,4.5,33.3,13.5c8.3,9,12.5,20.4,12.5,34.3c0,14.6-4.7,26-14.2,34.3
              c-9.5,8.3-23.1,12.5-40.7,12.5c5.4,8.5,12.5,14.7,21.4,18.8c8.8,4.1,19.7,6.1,32.5,6.1c19.7,0,34.3-8.2,44-24.7
              c9.7-16.4,14.5-41.6,14.5-75.5c0-31.9-4.7-55.8-14-71.9c-9.3-16.1-23.5-24.2-42.5-24.2c-13.6,0-25.2,3.5-35.1,10.4
              c-9.8,7-16.6,16.7-20.3,29.2H22.3l20.3-180h134.2c12.5,0,21.8-2.2,27.7-6.6c5.9-4.4,9.9-13.9,11.9-28.5l2-13.2H241l-15.8,116.9H58.4
              l-8.1,69.2c8.8-8.1,19.4-14.2,31.8-18.1c12.4-3.9,26.5-5.8,42.5-5.8c37.3,0,67.5,11.5,90.8,34.6c23.2,23,34.8,51,34.8,83.9
              C250.1,323.7,238,354.3,213.8,377.8z"
          ></Box>
        </Box>

        <Box
          component="span"
          sx={{
            "width": "100%",
            "height": "100%",
            "display": "block",
            "position": "absolute",
            "top": "0",
            "left": "0",
            "zIndex": 1,
            "overflow": "hidden",
            "&:before": {
              content: '""',
              width: "100%",
              height: "100%",
              display: "block",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: 2,
              transition: "all 1s 0.5s ease",
              transform: active ? "translate3d(-100%, 0, 0)" : null, // manashu boshida translate3d(-100%, 0, 0) bo'lsa animatsiyasiyam o'xshar ekan
              background: "#ebe8e4",
            },
          }}
        >
          <ScrollParallax>
            <Box
              component="img"
              src="https://viporte.com/templates/vp/resources/images/five.jpg"
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
          </ScrollParallax>
        </Box>
      </Grid>

      <Grid
        item
        md={7.5}
        sx={{
          width: "100%",
          justifyContent: {xs: "center", md: "left"},
          alignItems: "flex-start",
        }}
      >
        <Grid
          item
          xs={10}
          sm={8}
          md={9}
          lg={7}
          xl={6}
          sx={{margin: {xs: "0 auto", md: "0"}}}
        >
          <MiniTextCard
            stackSx={{width: "100%"}}
            text="WARRANTY"
            desc="Time-proven technology, hardwood materials and high quality paint coatings guarantee you a long-term operation of our products, which is confirmed by a 5-year warranty!"
          />
        </Grid>

        <Stack
          sx={{
            flexDirection: {xs: "column", lg: "row"},
          }}
        >
          <MiniTextCard
            variantMy="heroText2"
            text="200 m"
            textSup={true}
            desc="Russia's largest branded showroom"
          />
          <MiniTextCard
            stackSx={{marginLeft: {sm: "0", lg: "30px", xl: "40px"}}}
            variantMy="heroText2"
            text="2000 m"
            textSup={true}
            desc="logistics center"
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
export default Warranty;
