import {Box, Stack} from "@mui/material";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import BigText from "./BigText";
import MiniTextCard from "./MiniTextCard";
import {LeonHandleSvg} from "../../imports/index"
const Complex = (): ReactElement => {  
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
      <BigText
        text="Complex solution of interior problems"
        textSx={{color: theme.palette.primary.contrastText}}
        sx={{width: {sm: "100%", md: "100%", lg: "60%", xl: "60%"}}}
      />
      <Stack
        sx={{
          width: {sm: "100%", md: "100%", lg: "60%", xl: "60%"},
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <MiniTextCard
          stackSx={{width: "300px"}}
          text="WIDE RANGE"
          desc="We produce a wide range of products, including interior doors, sliding partitions, decor mouldings for metal exterior doors, floors, base moldings and boiserie wainscotings."
        />

        <MiniTextCard
          stackSx={{
            width: "300px",
            padding: "7px 10px 50px 7px",
            border: `1px solid ${theme.palette.secondary.main}`,
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            marginTop:"50px"
          }}
          variantMy="heroText2"
          text="15 years"
          textSx={{marginTop: "-20px"}}
          desc="of excellent reputation"
        />
       <Box sx={{position:"absolute", width:"180px", height:"210px", margin:"15rem 0 0 10rem"}} component="img"  src={LeonHandleSvg} />
      </Stack>
    </Stack>
  );
};
export default Complex;
