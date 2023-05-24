import {keyframes, Stack, SvgIcon, Typography} from "@mui/material";
import React, {ReactElement, useEffect, useState} from "react";
import {LogoComponent} from "../../imports";
import {theme} from "../../theme";

const logoEffect = keyframes`
  95% {
    stroke-dashoffset: 0;
  }
  100%{
    display:none
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

const textEffect = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const IntroAnimation = (): ReactElement => {
  const [animation, setAnimation] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 3600);
  }, []);
  return (
    <Stack
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: animation ? "1101" : 0,
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
            "width": "33%",
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
            opacity: 0,
            animation: `${textEffect} .2s linear 2.4s forwards`,
            color: "white",
          }}
        >
          <Typography variant="heroText1">M A D E I R A</Typography>
          <Typography variant="h2" sx={{textAlign: "center"}}>
            Уникальность во всем!
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default IntroAnimation;
