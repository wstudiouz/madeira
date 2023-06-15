import {Stack, Typography, Grid} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement, useEffect, useState} from "react";
import MiniTextCard from "./MiniTextCard";
import {theme} from "../../theme";
import {getter} from "../../ts/utils/Fetcher";
import {ProductionData} from "../../ts/REST/types/AboutPageTypes";
const Production = (): ReactElement => {
  const [data, setData] = useState<ProductionData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter(
        "about-page?populate=Production.img1,Production.img2,Production.factory"
      );
      if (result.ok && result.data) {
        setData(result.data);
      }
    };

    getData();
  }, []);
  return (
    <Stack
      sx={{
        marginTop: "100px",
      }}
    >
      <Typography variant="h3" color={theme.palette.primary.main}>
        {data && data.Production.title}
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            sm: "flex-start",
            lg: "center",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          lg={7}
          sx={{
            alignItems: {
              xs: "center",
              sm: "flex-start",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
            },
            width: "100%",
          }}
        >
          <Grid item xs={6}>
            {data && (
              <Box
                component="img"
                alt="own production"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
                src={`${process.env.REACT_APP_BACKEND_URL}${data.Production.img1.data.attributes.formats.large?.url}`}
              />
            )}
          </Grid>
          <Grid item xs={6} sx={{marginLeft: {xs: "20px", lg: "30px"}}}>
            {data && (
              <Box
                component="img"
                alt="own production"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
                src={`${process.env.REACT_APP_BACKEND_URL}${data.Production.img2.data.attributes.formats.large?.url}`}
              />
            )}
          </Grid>
        </Grid>
        <Grid item md={6} lg={5}>
          {data && (
            <MiniTextCard
              stackSx={{width: "100%"}}
              text={data.Production.factory.title}
              desc={data.Production.factory.description}
            />
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Production;
