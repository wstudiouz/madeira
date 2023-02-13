import {SxProps} from "@mui/material";
import {Box} from "@mui/system";
import {theme} from "../theme";
import React, {ReactElement} from "react";
type ComponentProps = {
  sx?: SxProps;
};
const MiniHrComponent = ({sx}: ComponentProps): ReactElement => {
  return (
    <Box
      component="hr"
      sx={{
        color: theme.palette.secondary.main,
        background: theme.palette.secondary.main,
        border: "none",
        ...sx,
      }}
    />
  );
};
export default MiniHrComponent;
