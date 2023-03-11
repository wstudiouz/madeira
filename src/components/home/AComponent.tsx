import React, {ReactElement} from "react";
import {Stack, Typography, SxProps, Box, SvgIcon, Grid} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
import {ASvg} from "../../imports";
import {theme} from "../../theme";
import {ScrollParallax} from "react-just-parallax";
import {useMediaQuery} from "@mui/material";
type ComponentProps = {
  SectionRef?: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const AComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      ref={SectionRef}
      spacing={{md: "30px"}}
      container
      sx={{
        justifyContent: "center",
        alignItems: {md: "self-end", xs: "center"},
        ...sx,
      }}
    >
      <Grid item md={3}>
        <MiniCardTextAndBtn
          fisrtBtnText="I"
          text="Interior Doors"
          textSx={{margin: "30px auto"}}
          desc="Viporte doors is a traditional collection of natural solid wood. We
          produce our doors using traditional templates, used by Italian
          designers for centuries. Our factory is designed in accordance with
          european standards, and our experts regularly practise in Germany
          and Italy. We carefully select all the materials and components,
          introduce the newest equipment to create an exclusive product:
          interior doors Viporte!"
          secondBtntext="Catalogue"
          secondBtnUrl="/catalogue"
          secondBtnSx={{width: "130px", marginTop: {md: "80px", xs: "30px"}}}
        />
      </Grid>
      <Grid
        item
        md={5}
        sx={{
          justifyContent: "left",
          alignItems: "flex-end",
          flexDirection: "row",
          margin: {xs: "50px 0", lg: "0"},
          position: "relative",
        }}
      >
        <SvgIcon
          component={ASvg}
          sx={{
            "width": "100%",
            "height": "auto",
            "& path": {
              fill: theme.palette.primary.main,
            },
          }}
          viewBox="0 0 572 548"
        />
        <Stack sx={{position: "absolute", right: "0", bottom: "0"}}>
          <ScrollParallax strength={isMobile ? 0.01 : 0.1}>
            <Box
              component="img"
              src="https://picsum.photos/200/400"
              sx={{
                width: {xs: "110px", sm: "150px", md: "180px", lg: "220px"},
                height: {xs: "230px", sm: "300px", md: "370px", lg: "420px"},
                marginLeft: {xs: "-120px", lg: "-190px"},
              }}
            />
          </ScrollParallax>
        </Stack>
      </Grid>

      <Grid item md={3}>
        <Stack sx={{marginBottom: {md: "-100%"}}}>
          <ScrollParallax strength={isMobile ? 0 : 0.2}>
            <Typography variant="h2">MADEIRA</Typography>
            <Typography
              variant="paragraph"
              sx={{marginTop: "30px", color: "#000", display: "block"}}
            >
              We offer you to appreciate rich decoration of our products: white
              enamel combined with golden patina, aged wood, all shades of
              tobacco and tender Provence. Game of contrasts or soft
              combination: we will find you what decorates your interior!
            </Typography>
          </ScrollParallax>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AComponent;
