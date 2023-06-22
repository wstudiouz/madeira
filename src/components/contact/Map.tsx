import {Stack} from "@mui/material";
import React, {ReactElement} from "react";
import {Box} from "@mui/material";

type Props = {
  src: string;
};

const Map = ({src}: Props): ReactElement => {
  return (
    <Stack sx={{margin: {xs: "30px 0", lg: "50px 0"}}}>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "200px",
            sm: "280px",
            md: "350px",
            lg: "424px",
            xl: "504px",
          },
        }}
        component="iframe"
        src={src}
      ></Box>
    </Stack>
  );
};
export default Map;
