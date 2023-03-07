import {Stack} from "@mui/material";
import React, {ReactElement} from "react";
import {Box} from "@mui/material";
const Map = (): ReactElement => {
  return (
    <Stack sx={{margin:{xs:"30px 0",lg:"50px 0"}}}>
      <Box
      sx={{width:"100%", height:{xs:"200px",sm:"280px",md:"350px",lg:"424px",xl:"504px"}}}
        component="iframe"
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?q=Tashkent+City+Park,+Ташкент,+Узбекистан&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      ></Box>
    </Stack>
  );
};
export default Map;
