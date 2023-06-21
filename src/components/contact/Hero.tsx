import {Stack, Typography, Grid} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import {ContactPageListResponseDataItem} from "../../ts/REST/api/generated";
type Props = {
  data: ContactPageListResponseDataItem;
};
const Hero = ({data}: Props): ReactElement => {
  return (
    <>
      {data && (
        <Stack sx={{marginTop: "100px"}}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Libre Caslon Text'",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "49px",
              color: theme.palette.primary.main,
            }}
          >
            {data.attributes?.title}
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              <Stack
                sx={{
                  width: "100%",
                  margin: "30px auto",
                  background: "#F5F5F5",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: {xs: "column", lg: "row"},
                  padding: "25px",
                }}
              >
                <Stack
                  sx={{
                    width: {xs: "100%", lg: "48%"},
                    textAlign: {xs: "center", lg: "right"},
                  }}
                >
                  <Typography
                    variant="h2"
                    onClick={() =>
                      (window.location.href = `mailto:${data.attributes?.email}`)
                    }
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    {data.attributes?.email}
                  </Typography>
                </Stack>
                <Box
                  component="hr"
                  sx={{
                    width: {xs: "70%", lg: "2px"},
                    height: {xs: "2px", lg: "150px"},
                    background: theme.palette.secondary.main,
                    margin: {xs: "20px 0", lg: "0 30px"},
                  }}
                />
                <Stack
                  sx={{
                    width: {xs: "100%", lg: "48%"},
                    textAlign: {xs: "center", lg: "left"},
                  }}
                >
                  <Typography
                    variant="heroText1"
                    onClick={() =>
                      (window.location.href = `tel:${data.attributes?.phone}`)
                    }
                    sx={{
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: "65px",
                      lineHeight: 1.2,
                      fontFamily: "'Libre Caslon Text'",
                      fontStyle: "normal",
                    }}
                  >
                    {data.attributes?.phoneText}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    sx={{
                      fontFamily: "'Libre Caslon Text'",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "15px",
                      lineHeight: "18px",
                      textTransform: "uppercase",
                    }}
                  >
                    {data.attributes?.phoneLabel}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <Stack sx={{margin: "50px 0", width: "100%"}}>
                <Typography
                  variant="h2"
                  sx={{color: theme.palette.primary.main}}
                >
                  {data.attributes?.moreText}
                </Typography>
                <Typography
                  variant="paragraph"
                  sx={{color: theme.palette.background.paper, margin: "20px 0"}}
                >
                  {data.attributes?.moreDesc}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      )}
    </>
  );
};
export default Hero;
