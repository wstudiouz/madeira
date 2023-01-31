import {Box, Stack, Typography} from "@mui/material";
import React, {ReactElement} from "react";
const Hero = (): ReactElement => {
  const styles = {
    heroText1: {
      "color": "#CCA041",
      "margin": "15px 0",
      "&:before": {
        position: "absolute",
        content: '""',
        width: "15%",
        display: "block",
        border: "1.5px solid #CCA041",
        marginTop: "-18px",
      },
      "&:after": {
        position: "absolute",
        content: '""',
        width: "15%",
        border: "1.5px solid #CCA041",
        display: "block",
        marginTop: "18px",
      },
    },
  };

  return (
    <Stack>
      <Typography variant="h3">ABOUT US</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
          flexDirection: {xs: "column", sm: "column", md: "column", lg: "row"},
        }}
        component="div"
      >
        <Box
          sx={{width: {sm: "100%", md: "100%", lg: "50%", xl: "50%"}}}
          component="div"
        >
          <Typography sx={styles.heroText1} variant="h3">
            We do what we love for over 15 years, and we are pleased to present
            Viporte doors — doors as a piece of art!
          </Typography>
          <Typography
            sx={{display: "block", marginTop: "50px", width: {sm: "100%", md: "100%", lg: "55%", xl: "60%"}}}
            variant="paragraph"
          >
            We combine best european technologies, the beauty of Caucasus
            finewood, the art of carving and guaranteed quality. Having studied
            secular traditions of italian masters we produce a truly high
            quality doors!
          </Typography>
        </Box>
        <Box
          src="https://picsum.photos/230/450"
          sx={{
            margin: {
              xs: "40px auto 0 auto",
              sm: "60px auto 0 auto",
              md: "80px auto 0 auto",
              lg: "0 auto",
            },
            width: {
              xs: "150px",
              sm: "180px",
              md: "230px",
              lg: "300px",
              xl: "350px",
            },
            height: {
                xs: "270px",
                sm: "360px",
                md: "400px",
                lg: "500px",
                xl: "580px",
            }
          }}
          component="img"
          alt="Door img"
        />
      </Box>
    </Stack>
  );
};
export default Hero;
