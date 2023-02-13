import React, { ReactElement} from "react";
import {Stack, Typography, SxProps, Box} from "@mui/material";
import {theme} from "../../theme";
import {DeskLogo} from "../../imports"
import MiniGoldCard from "./MiniGoldCard";
type ComponentProps = {
 SectionRef: React.RefObject<HTMLDivElement>;
 sx?: SxProps;
};
const AComponent = ({
  SectionRef,
  sx
}: ComponentProps): ReactElement => {
  
  return (
   <Stack ref={SectionRef} sx={{
    justifyContent:"center",
    alignItems:"center",
    ...sx
   }}>
    <MiniGoldCard content="I" />
   </Stack>
  );
};

export default AComponent;
