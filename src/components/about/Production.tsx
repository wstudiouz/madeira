import {Stack, Typography, Grid} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement} from "react";
import MiniTextCard from "./MiniTextCard";
import {theme} from "../../theme";
const Production = (): ReactElement => {
  return (
    <Stack
      sx={{
        marginTop: "100px",
      }}
    >
      <Typography variant="h3" color={theme.palette.primary.main}>
        Own production
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
            <Box
              component="img"
              alt="own production"
              sx={{
                width: "100%",
                height: "auto",
              }}
              src="https://picsum.photos/201"
            />
          </Grid>
          <Grid item xs={6} sx={{marginLeft: {xs: "20px", lg: "30px"}}}>
            <Box
              component="img"
              alt="own production"
              sx={{
                width: "100%",
                height: "auto",
              }}
              src="https://picsum.photos/200"
            />
          </Grid>
        </Grid>
        <Grid item md={6} lg={5}>
          <MiniTextCard
            stackSx={{width: "100%"}}
            text="FACTORY LEADER PLUS"
            desc="Interior doors Viporte are manufactured in a factory Leader Plus, located in the foothills of the Caucasus and specialized in premium class products production. The factory has modern equipment and ideal conditions for finishing products. Only professionals work on the factory. Own production allows us to take complete control of the end products output process. That also ensures high quality and maintain competitive prices."
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Production;
