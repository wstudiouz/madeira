import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement} from "react";
import MiniTextCard from "./MiniTextCard";
const Production = (): ReactElement => {
  return (
    <Stack
      sx={{
        margin: {
          xs: "2rem 0 0 0",
          sm: "4rem 0 0 0",
          md: "5rem 0 0 0",
          lg: "15rem 0 0 0",
        },
      }}
    >
      <Typography variant="h3">Own production</Typography>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "center",
          },
          margin: "50px 0",
          flexDirection: {
            xs: "column-reverse",
            sm: "row",
            md: "row",
            lg: "row",
          },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: {
              xs: "center",
              sm: "flex-start",
              md: "flex-start",
              lg: "flex-start",
            },
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
            width: {xs: "100%", sm: "35%", md: "39%", lg: "56%", xl: "50"},
          }}
        >
          <Box
            component="img"
            alt="own production"
            sx={{
              width: {sm: "170px", md: "250px", lg: "270px", xs: "300px"},
              height: "auto",
              margin: {
                xs: "60px auto 0 auto",
                sm: "0 auto",
                md: "0 auto",
                lg: "0",
              },
            }}
            src="https://picsum.photos/201"
          />
          <Box
            component="img"
            alt="own production"
            sx={{
              width: {sm: "170px", md: "250px", lg: "270px", xs: "300px"},
              height: "auto",
              margin: {
                xs: "40px auto 0 auto",
                sm: "25px auto 0 auto",
                md: "30px auto 0 auto",
                lg: "0 0 0 2%",
              },
            }}
            src="https://picsum.photos/200"
          />
        </Stack>
        <MiniTextCard
          stackSx={{width: {xs: "100%", sm: "60%", md: "58%", lg: "40%"}}}
          text="FACTORY LEADER PLUS"
          desc="Interior doors Viporte are manufactured in a factory Leader Plus, located in the foothills of the Caucasus and specialized in premium class products production. The factory has modern equipment and ideal conditions for finishing products. Only professionals work on the factory. Own production allows us to take complete control of the end products output process. That also ensures high quality and maintain competitive prices."
        />
      </Stack>
    </Stack>
  );
};
export default Production;
