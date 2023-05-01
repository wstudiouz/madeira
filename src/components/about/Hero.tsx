import {Stack, Typography} from "@mui/material";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import Doors from "./DoorAnimation/Doors";
import {keyframes} from "@mui/material";
const Hero = (): ReactElement => {
  const textAnimation = keyframes`
  from {
    transform: translateY(30px);
  }
  to {
    transform: translate(0);
  }
`;
  const styles = {
    heroText1: {
      color: theme.palette.secondary.main,
      margin: "15px 0",
      padding: "0",
      animation: `${textAnimation} 0.7s ease`,
    },
    lines: {
      position: "absolute",
      content: '""',
      width: "15%",
      border: `1.5px solid ${theme.palette.secondary.main}`,
      display: "block",
      marginTop: "18px",
    },
  };

  return (
    <Stack sx={{marginTop:"100px"}}>
      <Typography variant="h3" color={theme.palette.primary.main}>
        ABOUT US
      </Typography>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {xs: "column", lg: "row"},
        }}
      >
        <Stack sx={{width: {xs: "100%", lg: "50%"}}}>
          <Typography
            sx={{
              ...styles.heroText1,
              "&:after": {...styles.lines},
              "&:before": {...styles.lines, marginTop: "-18px"},
            }}
            variant="h3"
          >
            We do what we love for over 15 years, and we are pleased to present
            Viporte doors — doors as a piece of art!
          </Typography>

          <Typography
            sx={{
              display: "block",
              marginTop: "50px",
              width: {xs: "100%", lg: "55%", xl: "60%"},
              animation: `${textAnimation} 0.7s ease`,
            }}
            variant="paragraph"
          >
            We combine best european technologies, the beauty of Caucasus
            finewood, the art of carving and guaranteed quality. Having studied
            secular traditions of italian masters we produce a truly high
            quality doors!
          </Typography>
        </Stack>
        <Doors />
      </Stack>
    </Stack>
  );
};
export default Hero;
