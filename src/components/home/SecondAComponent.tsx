import React, {ReactElement} from "react";
import {Stack, Typography, SxProps, Box} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
type ComponentProps = {
  SectionRef: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const SeacondAComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  return (
    <Stack
      ref={SectionRef}
      sx={{
        flexDirection: {lg: "row"},
        alignItems: {xs: "center", lg: "flex-start"},
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
          src="https://picsum.photos/302/200"
          sx={{
            width: {xs: "100px", sm:"160px",md:"230px", lg: "300px"},
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <Box
          component="img"
          src="https://picsum.photos/300/200"
          sx={{
            width: {xs: "100px", sm:"160px",md:"230px", lg: "300px"},
            position: "absolute",
            top: "30%",
            left: "15%",
          }}
        />
         <Box
          component="img"
          src="https://picsum.photos/301/200"
          sx={{
            width: {xs: "100px", sm:"160px",md:"230px", lg: "300px"},
            position: "absolute",
            left: 0,
            bottom: 0,
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
          A
        </Typography>
       
      </Stack>
      <MiniCardTextAndBtn
        stackSx={{
          width: {xs: "100%", sm: "400px", lg: "30%"},
          minWidth: "300px",
          marginTop: "50px",
        }}
        text="Branded Furniture"
        textSx={{margin: "30px 0"}}
        desc="We provide visit for measurement, onsite consultations; products delivery and lifting; furniture insert with professional equipment; removal and installation of interior and exterior doors; solid and engineered wood paving."
      />
    </Stack>
  );
};

export default SeacondAComponent;
