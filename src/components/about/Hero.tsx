import {Stack, Typography, SxProps, Grid} from "@mui/material";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import Doors from "./DoorAnimation/Doors";
import {keyframes} from "@mui/material";
import MiniHrComponent from "../MiniHrComponent";
const Hero = (): ReactElement => {
  const textAnimation = keyframes`
  from {
    transform: translateY(30px);
  }
  to {
    transform: translate(0);
  }
`;
  const styles: SxProps = {
    width: "100%",
    color: theme.palette.secondary.main,
    margin: "15px 0",
    padding: "0",
    animation: `${textAnimation} 0.7s ease`,
  };

  return (
    <Stack sx={{marginTop: "100px"}}>
      <Typography variant="h3" color={theme.palette.primary.main}>
        ABOUT US
      </Typography>
      <Grid
        container
        spacing={"30px"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {xs: "column", lg: "row"},
          marginTop: "20px",
        }}
      >
        <Grid xs={12} lg={6} item sx={{width: "100%"}}>
          <Grid item xs={4} sm={3}>
            <MiniHrComponent
              sx={{
                width: "100%",
                height: "2px",
                animation: `${textAnimation} 0.7s ease`,
              }}
            />
          </Grid>
          <Typography sx={styles} variant="h3">
            We do what we love for over 15 years, and we are pleased to present
            Viporte doors — doors as a piece of art!
          </Typography>
          <Grid item xs={4} sm={3}>
            <MiniHrComponent
              sx={{
                width: "100%",
                height: "2px",
                animation: `${textAnimation} 0.7s ease`,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={8} xl={7}>
            <Typography
              sx={{
                display: "block",
                marginTop: "50px",
                width: "100%",
                animation: `${textAnimation} 0.7s ease`,
              }}
              variant="paragraph"
            >
              We combine best european technologies, the beauty of Caucasus
              finewood, the art of carving and guaranteed quality. Having
              studied secular traditions of italian masters we produce a truly
              high quality doors!
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Doors />
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </Stack>
  );
};
export default Hero;
