import {Stack, Typography, Grid} from "@mui/material";
import React, {ReactElement} from "react";
import MiniTextCard from "./MiniTextCard";
import {theme} from "../../theme";
import {AboutProductionComponent} from "../../ts/REST/api/generated";
import ResponsiveImage from "@qubixstudio/sphere/sphere/components/ResponsiveImage";
type Props = {
  data: AboutProductionComponent;
};
const Production = ({data}: Props): ReactElement => {
  return (
    <Stack
      sx={{
        marginTop: "100px",
      }}
    >
      <Typography variant="h3" color={theme.palette.primary.main}>
        {data && data.title}
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
            {data && data?.img1?.data?.attributes?.url && (
              <ResponsiveImage
                alt="own production"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
                src={`${process.env.REACT_APP_BACKEND_URL}${data.img1.data.attributes.url}`}
              />
            )}
          </Grid>
          <Grid item xs={6} sx={{marginLeft: {xs: "20px", lg: "30px"}}}>
            {data && data?.img2?.data?.attributes?.url && (
              <ResponsiveImage
                alt="own production"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
                src={`${process.env.REACT_APP_BACKEND_URL}${data.img2.data.attributes.url}`}
              />
            )}
          </Grid>
        </Grid>
        <Grid item md={6} lg={5}>
          {data && data?.factory?.title && data?.factory?.description && (
            <MiniTextCard
              stackSx={{width: "100%"}}
              text={data.factory.title}
              desc={data.factory.description}
            />
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Production;
