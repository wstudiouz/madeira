import { Stack, SxProps, Typography} from "@mui/material";
import React, {ReactElement} from "react";
type ComponentProps = {
    text: string,
    textSx?: SxProps,
    sx?: SxProps
}
const BigText = ({text,textSx, sx}: ComponentProps): ReactElement => {
  return (
    <Stack sx={sx}>
      <Typography sx={textSx} variant="heroText1">{text}</Typography>
    </Stack>
  );
};
export default BigText;
