import {Stack, SxProps} from "@mui/material";
import React, {ReactElement} from "react";
import MiniGoldCard from "./MiniGoldCard";
import MiniTextCard from "../about/MiniTextCard";
type ComponentProps = {
  text: string;
  textSx?: SxProps;
  desc: string;
  descSx?: SxProps;
  stackSx?: SxProps;
  fisrtBtnText?: string;
  secondBtntext?: string;
  secondBtnUrl?: string;
  secondBtnSx?: SxProps;
};
const MiniCardTextAndBtn = ({
  text,
  textSx,
  stackSx,
  desc,
  descSx,
  fisrtBtnText,
  secondBtntext,
  secondBtnUrl,
  secondBtnSx,
}: ComponentProps): ReactElement => {
  return (
    <Stack sx={stackSx}>
      {
        fisrtBtnText ? (
            <MiniGoldCard content={fisrtBtnText} />
        ):(
            <></>
        )
      }
      <MiniTextCard text={text} textSx={textSx} desc={desc} descSx={descSx} />
      {secondBtntext ? (
        <MiniGoldCard
          content={secondBtntext}
          url={secondBtnUrl}
          sx={secondBtnSx}
        />
      ) : (
        <></>
      )}
    </Stack>
  );
};
export default MiniCardTextAndBtn;
