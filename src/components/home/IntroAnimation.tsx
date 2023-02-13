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

type ComponentProps = {
  animation: boolean
};

const IntroAnimation = ({animation}: ComponentProps): ReactElement => {

  return (
    <Stack>
      {
        animation ? (
          <Stack
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: theme.palette.primary.main,
        transition: "all 0.5s linear",
        opacity: animation ? 1 : 0,
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
    </Stack>
        ):(
          <></>
        )
      }
    </Stack>
  );
};
export default IntroAnimation;
