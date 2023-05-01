import {Box, Stack, Typography, Grid} from "@mui/material";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import MiniTextCard from "./MiniTextCard";
import {LeonHandleSvg} from "../../imports/index";
import {ScrollParallax} from "react-just-parallax";
const Complex = (): ReactElement => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: {xs: "column", lg: "row"},
        position: "relative",
        marginTop: "100px",
      }}
    >
      <Grid item xs={10} md={8} lg={7} xl={5}>
        <ScrollParallax strength={0.03}>
          <Typography
            variant="heroText1"
            sx={{
              width: {xs: "100%", lg: "60%"},
              color: theme.palette.primary.contrastText,
            }}
          >
            Complex solution of interior problems
          </Typography>
        </ScrollParallax>
      </Grid>

      <Grid item xs={12} md={6} lg={5} sx={{width: "100%"}}>
        <Stack
          sx={{
            width: "100%",
            justifyContent: "left",
            alignItems: "center",
            margin: {xs: "6rem auto", lg: "4rem auto"},
            position: "relative",
          }}
        >
          <MiniTextCard
            stackSx={{width: "300px", maxWidth: "100%"}}
            text="WIDE RANGE"
            desc="We produce a wide range of products, including interior doors, sliding partitions, decor mouldings for metal exterior doors, floors, base moldings and boiserie wainscotings."
          />

          <MiniTextCard
            stackSx={{
              width: "300px",
              maxWidth: "100%",
              padding: "7px 10px 50px 7px",
              border: `1px solid ${theme.palette.secondary.main}`,
              alignItems: "flex-start",
              flexDirection: "column",
              marginTop: "50px",
              position: "relative",
            }}
            variantMy="heroText2"
            text="15 years"
            textSx={{marginTop: "-20px"}}
            desc="of excellent reputation"
          />
          <ScrollParallax strength={0.02}>
            <Box
              sx={{
                width: "150px",
                height: "190px",
                position: "absolute",
                right: {xs: "30%", md: "25px", lg: "30px", xl: "70px"},
                bottom: {xs: "-110px", md: "-90px"},
              }}
              component="img"
              src={LeonHandleSvg}
            />
          </ScrollParallax>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default Complex;
