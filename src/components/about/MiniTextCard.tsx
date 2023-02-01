import {Stack, SxProps, Typography, TypographyTypeMap} from "@mui/material";
import { Box } from "@mui/system";
// import { Variant } from "@mui/material/styles/createTypography";
import React, {ReactElement} from "react";
type ComponentProps = {
    text: string,
    textSx?: SxProps,
    desc: string,
    descSx?: SxProps, 
    stackSx?: SxProps,
    variantMy?: TypographyTypeMap["props"]["variant"],
    textSup?: boolean
}
const MiniTextCard = ({text,textSx, stackSx, desc, descSx, variantMy, textSup}: ComponentProps): ReactElement => {
  return (
    <Stack sx={stackSx}>
      <Typography sx={{...textSx, marginBottom:"20px"}} variant={variantMy || "h2"}>
        {text}  
        {
          textSup ? (
            <Box component="sup">2</Box>
          ):(
            <></>
          )
        }
       </Typography>
      <Typography sx={descSx} variant="paragraph">{desc}</Typography>
    </Stack>
  );
};
export default MiniTextCard;
