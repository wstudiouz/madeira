import {keyframes, Stack, SvgIcon} from "@mui/material";
import React, {ReactElement} from "react";
import {LogoComponent} from "../../imports";
import {theme} from "../../theme";

const logoEffect = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;
const fillEffect = keyframes`
  80% {
    fill: ${theme.palette.primary.main};
  }
  100% {
    fill: #fff;
  }
`;
const circleEffect = keyframes`
0% {
  width: 0px;
  height: 0px;
  border-radius:50%;
  left:50%;
  right:50%;
  transform: translate(-50%, -50%),
}
80% {
  width: 0px;
  height: 0px;
  border-radius:50%;
  left:50%;
  right:50%;
  transform: translate(-50%, -50%),
}
100% {
  width: 100%;
  height: 100%;
  border-radius: 0;
  left:0;
  right:0;
}
`;

const IntroAnimation = (): ReactElement => {
  return (
    <Stack
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: theme.palette.primary.main,
      }}
    >
      <SvgIcon
        component={LogoComponent}
        sx={{
          "width": "50%",
          "height": "auto",
          "& path": {
            fill: theme.palette.primary.main,
            stroke: "#fff",
            strokeWidth: "3px",
            strokeDasharray: "11957",
            strokeDashoffset: "11957",
            animation: `${logoEffect} 3s linear forwards, ${fillEffect} .4s 3.1s ease-out forwards`,
          },
        }}
        viewBox="0 0 941 831"
      />
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "0%",
          backgroundColor: "white",
          position: "absolute",

          animation: `${circleEffect} 5s ease-in-out`,
        }}
      />
    </Stack>
  );
};
export default IntroAnimation;
