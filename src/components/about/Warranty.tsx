import {Stack, Typography} from "@mui/material";
import React, {ReactElement} from "react";
import MiniTextCard from "./MiniTextCard";
const Warranty = (): ReactElement => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: {lg: "row"},
      }}
    >
      <Stack
        sx={{
          width: "40%",
          height: "auto",
          display: {xs: "none", md: "block"},
        }}
      >
        <Typography
          sx={{
            fontSize: "50rem",
            textAlign: "center",
          }}
          variant="heroText1"
        >
          5
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: {lg: "60%"},
          justifyContent: "left",
          alignItems: "flex-start",
        }}
      >
        <MiniTextCard
          stackSx={{width: "300px"}}
          text="WARRANTY"
          desc="Time-proven technology, hardwood materials and high quality paint coatings guarantee you a long-term operation of our products, which is confirmed by a 5-year warranty!"
        />

        <Stack
          sx={{
            flexDirection: {xs: "column", lg: "row"},
          }}
        >
          <MiniTextCard
            variantMy="heroText2"
            text="200 m"
            textSup={true}
            desc="Russia's largest branded showroom"
          />
          <MiniTextCard
            stackSx={{marginLeft: {sm: "0", lg: "30px", xl: "40px"}}}
            variantMy="heroText2"
            text="2000 m"
            textSup={true}
            desc="logistics center"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Warranty;
