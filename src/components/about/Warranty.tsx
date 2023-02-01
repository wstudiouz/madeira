import {Box, Stack, Typography} from "@mui/material";
import React, {ReactElement} from "react";
import MiniTextCard from "./MiniTextCard";
const Warranty = (): ReactElement => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "50px 0",
        flexDirection: {xs: "column", sm: "column", md: "column", lg: "row"},
      }}
    >
      <Stack
        sx={{
          width: "40%",
          display: {xs: "none", sm: "none", md: "colblock", lg: "block"},
        }}
      >
        <Typography
          sx={{fontSize: "40rem", textAlign: "center"}}
          variant="heroText1"
        >
          5
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: {sm: "100%", md: "100%", lg: "60%", xl: "60%"},
          display: "flex",
          justifyContent: "left",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <MiniTextCard
          stackSx={{width: "300px"}}
          text="WARRANTY"
          desc="Time-proven technology, hardwood materials and high quality paint coatings guarantee you a long-term operation of our products, which is confirmed by a 5-year warranty!"
        />

        <Box
          sx={{
            display:{sm: "block", md: "block", lg: "flex", xl: "flex"}
          }}
        >
          <MiniTextCard
            variantMy="heroText2"
            text="200 m"
            textSup={true}
            desc="Russia's largest branded showroom"
          />
          <MiniTextCard
            stackSx={{marginLeft:{sm: "0", md: "0", lg: "30px", xl: "40px"}}}
            variantMy="heroText2"
            text="2000 m"
            textSup={true}
            desc="logistics center"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
export default Warranty;
