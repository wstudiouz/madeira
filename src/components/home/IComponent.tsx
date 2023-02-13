import React, {ReactElement} from "react";
import {Stack, Typography, SxProps, Box} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {theme} from "../../theme";
import MiniTextCard from "../about/MiniTextCard";
type ComponentProps = {
  SectionRef: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const IComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  return (
    <Stack
      ref={SectionRef}
      sx={{
        alignItems: "center",
        marginBottom: {xs: "50px", md: "100px", lg: "150px"},
        justifyContent: "space-between",
        ...sx,
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          marginBottom: {xs: "30px", lg: "70px"},
          position: "relative",
        }}
      >
        <Stack sx={{flexDirection: "row"}}>
          <Box
            component="img"
            src="https://picsum.photos/796/600"
            sx={{
              width: "50%",
              height: "auto",
            }}
          />
          <Box
            component="img"
            src="https://picsum.photos/795/600"
            sx={{
              width: "50%",
              height: "auto",
            }}
          />
        </Stack>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Libre Caslon Text'",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: {xs: "500px", lg: "650px", xl: "700px"},
            lineHeight: {xs: "340px", lg: "410px", xl: "470px"},
            color: "white",
            position: "absolute",
          }}
        >
          I
        </Typography>
      </Stack>
      <MiniCardTextAndBtn
        stackSx={{
          width: {xs: "100%", sm: "400px", lg: "30%"},
          minWidth: "300px",
        }}
        fisrtBtnText="IV"
        text="Designers projects"
        textSx={{margin: "30px auto"}}
        desc="We’re thankful to interior designers who use Viporte doors in their projects. We’re proud to present you our works!"
      />
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
          sx={{width: "33%", height: "auto"}}
        />
        <Box
          component="img"
          src="https://picsum.photos/281/350"
          sx={{width: "33%", height: "auto"}}
        />
        <Box
          component="img"
          src="https://picsum.photos/282/350"
          sx={{width: "33%", height: "auto"}}
        />
      </Stack>
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
            width: {xs: "100%", sm: "400px", lg: "43%"},
            textAlign:"center",
            marginTop:"-40px"
        }}
        text="Warranty"
        descSx={{textAlign:"justify"}}
        desc="The company’s service department does mechanical works and warranty handling of Viporte products. Experts long-term experience and only professional equipment guarantees perfect quality and work exactitude."
      />
    </Stack>
  );
};

export default IComponent;
