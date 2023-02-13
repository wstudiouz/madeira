import React, {ReactElement} from "react";
import {Stack, Typography, SxProps, Box} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
type ComponentProps = {
  SectionRef: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const RComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  return (
    <Stack
      ref={SectionRef}
      sx={{
        flexDirection: {lg: "row"},
        alignItems: {xs: "center", lg: "flex-start"},
        marginBottom: {xs: "50px", md: "100px", lg: "150px"},
        justifyContent: "space-between",
        position: "relative",
        ...sx,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          width: "65%",
          position: "relative",
          justifyContent: "right",
        }}
      >
        <Box
          component="img"
          src="https://picsum.photos/300/280"
          sx={{
            width: {xs: "100px", sm:"160px",md:"230px", lg: "300px"},
            position: "absolute",
            top: 30,
            left: "8%",
          }}
        />
        <Box
          component="img"
          src="https://picsum.photos/300/180"
          sx={{
            width: {xs: "100px", sm:"160px",md:"230px", lg: "300px"},
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        />
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Libre Caslon Text'",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: {xs: "500px", md: "700px"},
            lineHeight: {xs: "340px", md: "470px"},
          }}
        >
          R
        </Typography>
        <Box
          component="img"
          src="https://picsum.photos/300/200"
          sx={{
            width: {xs: "100px", sm:"160px",md:"230px", lg: "300px"},
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        />
      </Stack>
      <MiniCardTextAndBtn
        stackSx={{
          width: {xs: "100%", sm: "400px", lg: "30%"},
          minWidth: "300px",
          marginTop: "50px",
        }}
        fisrtBtnText="V"
        text="Service"
        textSx={{margin: "30px auto"}}
        desc="We provide visit for measurement, onsite consultations; products delivery and lifting; furniture insert with professional equipment; removal and installation of interior and exterior doors; solid and engineered wood paving."
      />
    </Stack>
  );
};

export default RComponent;
