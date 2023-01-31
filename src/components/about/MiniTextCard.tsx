import {Stack, SxProps, Typography} from "@mui/material";
import React, {ReactElement} from "react";
type ComponentProps = {
    text: string,
    textSx?: SxProps,
    desc: string,
    descSx?: SxProps, 
    stackSx?: SxProps,
    variantMy?: any
}
const MiniTextCard = ({text,textSx, stackSx, desc, descSx, variantMy}: ComponentProps): ReactElement => {
  return (
    <Stack sx={stackSx}>
      <Typography sx={{...textSx, marginBottom:"20px"}} variant={variantMy || "h2"}>{text}</Typography>
      <Typography sx={descSx} variant="paragraph">{desc}</Typography>
    </Stack>
  );
};
export default MiniTextCard;
