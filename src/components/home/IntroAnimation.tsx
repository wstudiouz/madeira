import {keyframes, Stack, SvgIcon, Typography} from "@mui/material";
import React, {ReactElement, useEffect, useState} from "react";
import {LogoComponent} from "../../imports";
import {theme} from "../../theme";
import {zIndex} from "../../ts/utils/ZIndexs";

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
const logoTextEffect = keyframes`
  100% {
    color: "#fff";
  }
`;
const IntroAnimation = (): ReactElement => {
  const [animation, setAnimation] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 2800);
  }, []);
  return (
    <Stack
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: animation ? zIndex.introAnimation : 0,
        width: "100%",
        height: "100vh",
        opacity: animation ? 1 : 0,
        transition: "opacity 0.5s linear",
      }}
    >
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          background: theme.palette.primary.main,
          transition: "all 0.5s linear",
          opacity: 1,
        }}
      >
        <SvgIcon
          component={LogoComponent}
          sx={{
            "width": "35%",
            "height": "auto",
            "& path": {
              fill: theme.palette.primary.main,
              stroke: "#fff",
              strokeWidth: "3px",
              strokeDasharray: "11957",
              strokeDashoffset: "11957",
              animation: `${logoEffect} 2s linear forwards, ${fillEffect} 2.5s linear forwards`,
            },
          }}
          viewBox="0 0 941 831"
        />
        <Stack
          sx={{
            animation: `${logoTextEffect} .2s linear 2.4s`,
          }}
        >
          <Typography variant="heroText1">M A D E I R A</Typography>
          <Typography variant="h2">Уникальность во всем!</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default IntroAnimation;
