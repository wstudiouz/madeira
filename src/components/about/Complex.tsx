import {Box, Stack, Typography, Grid} from "@mui/material";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import MiniTextCard from "./MiniTextCard";
import {LeonHandleSvg} from "../../imports/index";
import {ScrollParallax} from "react-just-parallax";
import {AboutComplexComponent} from "../../ts/REST/api/generated";

type Props = {
  data: AboutComplexComponent;
};
const Complex = ({data}: Props): ReactElement => {
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
            {data && data.title}
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
          {data &&
            data?.rightTopCard?.title &&
            data.rightTopCard?.description && (
              <MiniTextCard
                stackSx={{width: "300px", maxWidth: "100%"}}
                text={data.rightTopCard.title}
                desc={data.rightTopCard.description}
              />
            )}

          {data &&
            data?.rightBottomCard?.title &&
            data?.rightBottomCard?.description && (
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
                text={data.rightBottomCard.title}
                textSx={{marginTop: "-20px"}}
                desc={data.rightBottomCard.description}
              />
            )}
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
