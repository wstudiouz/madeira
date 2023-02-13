import React, {ReactElement} from "react";
import {Stack, Typography, SxProps, Box} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
type ComponentProps = {
  SectionRef: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const DComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  return (
    <Stack
      ref={SectionRef}
      sx={{
        flexDirection: {lg: "row"},
        alignItems: {xs: "center", lg: "flex-end"},
        marginBottom: {xs: "50px", md: "100px", lg: "150px"},
        ...sx,
      }}
    >
      <MiniCardTextAndBtn
        stackSx={{
          width: {xs: "100%", sm: "400px", lg: "30%"},
          minWidth: "300px",
        }}
        fisrtBtnText="II"
        text="Kitchen Furniture"
        textSx={{margin: "30px auto"}}
        desc="We produce solid and engineered oak and ash planks. In the manufacture and floor finishing we aim to create unified interior compositions with natural materials. Viporte doors, floor coverings, wainscoting and base moldings perfectly fit each other, forming a luxurious interior design."
        secondBtntext="Catalogue"
        secondBtnUrl="/catalogue"
        secondBtnSx={{width: "130px", marginTop: "80px"}}
      />

      <Stack
        sx={{
          justifyContent: "left",
          alignItems: "center",
          flexDirection: "row",
          margin: {xs: "50px 0", lg: "0"},
        }}
      >
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
          D
        </Typography>
        <Box
          component="img"
          src="https://picsum.photos/300/300"
          sx={{
            width: {
              xs: "100px",
              md: "150px",
              sm: "200px",
              lg: "250px",
              xl: "300px",
            },
            height: {
              xs: "100px",
              md: "150px",
              sm: "200px",
              lg: "250px",
              xl: "300px",
            },
            marginLeft: "-100px",
          }}
        />
        <Box
          component="img"
          src="https://picsum.photos/230/230"
          sx={{
            width: {
              xs: "80px",
              md: "120px",
              sm: "160px",
              lg: "200px",
              xl: "230px",
            },
            height: {
              xs: "80px",
              md: "120px",
              sm: "160px",
              lg: "200px",
              xl: "230px",
            },
            marginLeft: "-110px",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default DComponent;
