import {Stack, SxProps, Typography, TypographyTypeMap} from "@mui/material";
import {Box} from "@mui/system";
import {theme} from "../../theme";
import React, {ReactElement} from "react";
type ComponentProps = {
  text: string;
  textSx?: SxProps;
  desc: string;
  descSx?: SxProps;
  stackSx?: SxProps;
  variantMy?: TypographyTypeMap["props"]["variant"];
  textSup?: number;
};
const MiniTextCard = ({
  text,
  textSx,
  stackSx,
  desc,
  descSx,
  variantMy,
  textSup,
}: ComponentProps): ReactElement => {
  return (
    <Stack sx={stackSx}>
      <Typography
        sx={{
          ...textSx,
          marginBottom: "30px",
          color: theme.palette.primary.main,
        }}
        variant={variantMy || "h2"}
      >
        {text}
        {textSup && <Box component="sup">{textSup}</Box>}
      </Typography>
      <Typography sx={descSx} variant="paragraph" color={"#000"}>
        {desc}
      </Typography>
    </Stack>
  );
};
export default MiniTextCard;
