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
        <MiniCardTextAndBtn
          stackSx={{
            width: {xs: "100%"},
            minWidth: "300px",
          }}
          fisrtBtnText="IV"
          text="Designers projects"
          textSx={{marginY: "30px"}}
          desc="We’re thankful to interior designers who use Viporte doors in their projects. We’re proud to present you our works!"
        />
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
              <Box
                component="img"
                src="https://picsum.photos/796/700"
                sx={{
                  width: "100%",
                  height: svgHeight,
                  objectFit: "cover",
                }}
              />
            </ScrollParallax>
          </Stack>
          <Stack sx={{width: "50vw"}}>
            <ScrollParallax strength={isMobile ? 0.02 : 0.08}>
              <Box
                component="img"
                src="https://picsum.photos/795/700"
                sx={{
                  width: "100%",
                  height: svgHeight,
                  objectFit: "cover",
                }}
              />
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
        <MiniTextCard
          stackSx={{
            width: {xs: "100%"},
            textAlign: "center",
            marginTop: "-40px",
          }}
          text="Warranty"
          descSx={{textAlign: "justify"}}
          desc="The company’s service department does mechanical works and warranty handling of Viporte products. Experts long-term experience and only professional equipment guarantees perfect quality and work exactitude."
        />
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          margin: {xs: "30px 0", sm: "40px 0", lg: "80px 0"},
        }}
      >
        <Box
          component="img"
          src="https://picsum.photos/280/350"
          sx={{width: {md: "33%", xs: "48%"}, height: "auto"}}
        />
        <Box
          component="img"
          src="https://picsum.photos/281/350"
          sx={{width: {md: "33%", xs: "48%"}, height: "auto"}}
        />
        <Box
          component="img"
          src="https://picsum.photos/282/350"
          sx={{
            width: "33%",
            height: "auto",
            display: {xs: "none", md: "block"},
          }}
        />
      </Stack>
    </Stack>
  );
};

export default IComponent;
