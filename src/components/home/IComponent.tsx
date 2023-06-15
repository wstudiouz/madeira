import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Stack,
  Typography,
  SxProps,
  Box,
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {theme} from "../../theme";
import MiniTextCard from "../about/MiniTextCard";
import {ISvg} from "../../imports";
import {ScrollParallax} from "react-just-parallax";
import {getter} from "../../ts/utils/Fetcher";
import {ICompData} from "../../ts/REST/types/HomePageTypes";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const IComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  const svgRef = useRef<HTMLDivElement>();
  const [svgHeight, setSvgHeight] = useState<number>(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const resizeCalback = useCallback(() => {
    if (svgRef.current) setSvgHeight(svgRef.current.clientHeight + 100);
  }, []);

  const [data, setData] = useState<ICompData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter(
        "home-page?populate=IComp.cardTextFirst,IComp.cardTextSecond,IComp.letterImgLeft,IComp.letterImgRight,IComp.bottomImg1,IComp.bottomImg2,IComp.bottomImg3"
      );
      if (result.ok && result.data) {
        setData(result.data);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeCalback);
    resizeCalback();
    return () => {
      window.removeEventListener("resize", resizeCalback);
    };
  }, [resizeCalback]);
  return (
    <Stack
      ref={SectionRef}
      sx={{
        alignItems: {xs: "center"},
        justifyContent: "space-between",
        width: "100%",
        ...sx,
      }}
    >
      <Stack sx={{alignItems: "center", width: "30%"}}>
        {data && (
          <MiniCardTextAndBtn
            stackSx={{
              width: {xs: "100%"},
              minWidth: "300px",
            }}
            fisrtBtnText="IV"
            text={data.IComp.cardTextFirst.title}
            textSx={{marginY: "30px"}}
            desc={data.IComp.cardTextFirst.description}
          />
        )}
      </Stack>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: {xs: "50px", md: "100px"},
          marginTop: {xs: "50px", md: "100px"},
          position: "relative",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: svgHeight,
          }}
        >
          <Stack sx={{width: "50vw"}}>
            <ScrollParallax strength={isMobile ? 0.01 : 0.04}>
              {data && (
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.IComp.letterImgLeft.data.attributes.url}`}
                  sx={{
                    width: "100%",
                    height: svgHeight,
                    objectFit: "cover",
                  }}
                />
              )}
            </ScrollParallax>
          </Stack>
          <Stack sx={{width: "50vw"}}>
            <ScrollParallax strength={isMobile ? 0.02 : 0.08}>
              {data && (
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BACKEND_URL}${data.IComp.letterImgRight.data.attributes.url}`}
                  sx={{
                    width: "100%",
                    height: svgHeight,
                    objectFit: "cover",
                  }}
                />
              )}
            </ScrollParallax>
          </Stack>
        </Stack>
        <SvgIcon
          component={ISvg}
          viewBox="0 0 391 516"
          ref={svgRef}
          sx={{
            width: {xs: "80%", md: "29%"},
            fill: "#FFFFFF",
            height: "auto",
            position: "absolute",
            margin: "auto",
          }}
        />
      </Stack>
      <Stack sx={{textAlign: "center", width: "30%"}}>
        <Typography
          variant="heroText1"
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          Quality
        </Typography>
        {data && (
          <MiniTextCard
            stackSx={{
              width: {xs: "100%"},
              textAlign: "center",
              marginTop: "-40px",
            }}
            text={data.IComp.cardTextSecond.title}
            descSx={{textAlign: "justify"}}
            desc={data.IComp.cardTextSecond.description}
          />
        )}
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          margin: {xs: "30px 0", sm: "40px 0", lg: "80px 0"},
        }}
      >
        {data && (
          <>
            <Box
              component="img"
              src={`${process.env.REACT_APP_BACKEND_URL}${data.IComp.bottomImg1.data.attributes.url}`}
              sx={{width: {md: "33%", xs: "48%"}, height: "auto"}}
            />
            <Box
              component="img"
              src={`${process.env.REACT_APP_BACKEND_URL}${data.IComp.bottomImg2.data.attributes.url}`}
              sx={{width: {md: "33%", xs: "48%"}, height: "auto"}}
            />
            <Box
              component="img"
              src={`${process.env.REACT_APP_BACKEND_URL}${data.IComp.bottomImg3.data.attributes.url}`}
              sx={{
                width: "33%",
                height: "auto",
                display: {xs: "none", md: "block"},
              }}
            />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default IComponent;
