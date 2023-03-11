import React, {ReactElement} from "react";
import {Stack, Typography, Box} from "@mui/material";
import {theme} from "../../theme";
type ComponentProps = {
  text: string;
  active: boolean;
  onClick: () => void;
};
const SingleMap = ({text, active, onClick}: ComponentProps): ReactElement => {
  return (
    <Stack
      onClick={onClick}
      sx={{
        "width": "100%",
        "margin": "5px 0",
        "height": "30px",
        "justifyContent": "center",
        "alignItems": "center",
        "position": "relative",
        "cursor": "pointer",
        "overflow": "hidden",
        "&:hover h5": {
          marginBottom: "0",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "2px",
          border: "none",
          top: "50%",
          background: theme.palette.secondary.main,
          position: "absolute",
          transform: "scale(1) translate3d(0, 0, 0)",
          transition: "all 0.3s ease",
        }}
      />
      <Typography
        variant="h5"
        sx={{
          zIndex: "2",
          marginBottom: active ? "0" : "-50px",
          height: "30px",
          transform: "scale(1) translate3d(0, 0, 0)",
          transition: "all 0.3s ease",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default SingleMap;
