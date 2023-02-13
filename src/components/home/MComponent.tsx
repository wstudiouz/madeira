import React, { ReactElement} from "react";
import {Stack, Typography, SxProps, Box} from "@mui/material";
import {theme} from "../../theme";
import {DeskLogo} from "../../imports"
type ComponentProps = {
 SectionRef: React.RefObject<HTMLDivElement>;
 sx?: SxProps;
};
const MComponent = ({
  SectionRef,
  sx
}: ComponentProps): ReactElement => {
  
  return (
   <Stack ref={SectionRef} sx={{
    justifyContent:"center",
    alignItems:"center",
    marginBottom: {xs: "50px", md: "100px", lg: "150px"},
    ...sx
   }}>
    <Box component="img" src={DeskLogo} sx={{width:"280px", height:"auto", margin:"30px auto"}} />
    <Typography sx={{color: theme.palette.primary.main}} variant="heroText1">M A D E I R A</Typography>
    <Typography sx={{color: theme.palette.primary.main}}>Уникальность во всем!</Typography>
   </Stack>
  );
};

export default MComponent;
