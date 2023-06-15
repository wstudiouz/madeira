import {Stack, Typography, Grid} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement, useEffect, useState} from "react";
import {theme} from "../../theme";
import {getter} from "../../ts/utils/Fetcher";
type HeroData = {
  email: string;
  phone: string;
  phoneText: string;
  phoneLabel: string;
  title: string;
  moreText: string;
  moreDesc: string;
};
const Hero = (): ReactElement => {
  const [data, setData] = useState<HeroData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter("contact-page");
      if (result.ok && result.data) {
        setData(result.data);
      }
    };

    getData();
  }, []);
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
            {data.title}
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
                      (window.location.href = `mailto:${data.email}`)
                    }
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    {data.email}
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
                    onClick={() => (window.location.href = `tel:${data.phone}`)}
                    sx={{
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: "65px",
                      lineHeight: 1.2,
                      fontFamily: "'Libre Caslon Text'",
                      fontStyle: "normal",
                    }}
                  >
                    {data.phoneText}
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
                    {data.phoneLabel}
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
                  {data.moreText}
                </Typography>
                <Typography
                  variant="paragraph"
                  sx={{color: theme.palette.background.paper, margin: "20px 0"}}
                >
                  {data.moreDesc}
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
