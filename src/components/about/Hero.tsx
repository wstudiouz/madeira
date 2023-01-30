import React, {ReactElement} from "react";
import {Stack, SxProps, Typography} from "@mui/material";
const heroStyle: SxProps = {
  padding: "0 10px",
  borderRadius: "10px",
  width: "100%",
};

const Hero = (): ReactElement => {
  return (
    <Stack>
      <Typography variant="h3">ABOUT US</Typography>
      <Stack
        sx={{
          ...heroStyle,
        }}
      >
        <Typography variant="h2">
          We do what we love for over 15 years, and we are pleased to present
          Viporte doors — doors as a piece of art!
        </Typography>
        <Typography variant="paragraph">
          We combine best european technologies, the beauty of Caucasus
          finewood, the art of carving and guaranteed quality. Having studied
          secular traditions of italian masters we produce a truly high quality
          doors!
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Hero;
