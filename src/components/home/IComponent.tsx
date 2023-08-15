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
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {theme} from "../../theme";
import MiniTextCard from "../about/MiniTextCard";
import {ISvg} from "../../imports";
import {ScrollParallax} from "react-just-parallax";
import {HomeICompComponent} from "../../ts/REST/api/generated";
import ResponsiveImage from "@qubixstudio/sphere/sphere/components/ResponsiveImage";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
  value: HomeICompComponent;
};
const IComponent = ({SectionRef, sx, value}: ComponentProps): ReactElement => {
  const svgRef = useRef<HTMLDivElement>();
  const [svgHeight, setSvgHeight] = useState<number>(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const resizeCalback = useCallback(() => {
    if (svgRef.current) setSvgHeight(svgRef.current.clientHeight + 100);
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
        {value &&
          value?.cardTextFirst?.title &&
          value.cardTextFirst?.description && (
            <MiniCardTextAndBtn
              stackSx={{
                width: {xs: "100%"},
                minWidth: "300px",
              }}
              fisrtBtnText="IV"
              text={value.cardTextFirst.title}
              textSx={{marginY: "30px"}}
              desc={value.cardTextFirst.description}
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
              {value && value?.letterImgLeft?.data?.attributes?.url && (
                <ResponsiveImage
                  src={`${process.env.REACT_APP_BACKEND_URL}${value.letterImgLeft.data.attributes.url}`}
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
              {value && value?.letterImgRight?.data?.attributes?.url && (
                <ResponsiveImage
                  src={`${process.env.REACT_APP_BACKEND_URL}${value.letterImgRight.data.attributes.url}`}
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
      <Stack sx={{textAlign: "center", width: {xs: "100%", lg: "30%"}}}>
        <Typography
          variant="heroText1"
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          Quality
        </Typography>
        {value &&
          value?.cardTextSecond?.title &&
          value?.cardTextSecond?.description && (
            <MiniTextCard
              stackSx={{
                width: {xs: "100%"},
                textAlign: "center",
                marginTop: "-40px",
              }}
              text={value.cardTextSecond.title}
              descSx={{textAlign: "justify"}}
              desc={value.cardTextSecond.description}
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
        {value &&
          value?.bottomImg1?.data?.attributes?.url &&
          value?.bottomImg2?.data?.attributes?.url &&
          value?.bottomImg3?.data?.attributes?.url && (
            <>
              <ResponsiveImage
                src={`${process.env.REACT_APP_BACKEND_URL}${value.bottomImg1.data.attributes.url}`}
                sx={{
                  width: "33%",
                  height: {
                    xs: "100px",
                    sm: "185px",
                    md: "250px",
                    lg: "330px",
                    xl: "380px",
                  },
                }}
              />
              <ResponsiveImage
                src={`${process.env.REACT_APP_BACKEND_URL}${value.bottomImg2.data.attributes.url}`}
                sx={{
                  width: "33%",
                  height: {
                    xs: "100px",
                    sm: "185px",
                    md: "250px",
                    lg: "330px",
                    xl: "380px",
                  },
                }}
              />
              <ResponsiveImage
                src={`${process.env.REACT_APP_BACKEND_URL}${value.bottomImg3.data.attributes.url}`}
                sx={{
                  width: "33%",
                  height: {
                    xs: "100px",
                    sm: "185px",
                    md: "250px",
                    lg: "330px",
                    xl: "380px",
                  },
                }}
              />
            </>
          )}
      </Stack>
    </Stack>
  );
};

export default IComponent;
