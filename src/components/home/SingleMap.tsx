import React, {Dispatch, ReactElement, SetStateAction} from "react";
import {Stack, Typography, keyframes} from "@mui/material";
import {theme} from "../../theme";
type ComponentProps = {
  text: string;
  isSeen: boolean;
  setOrder: Dispatch<SetStateAction<number | undefined>>;
  index: number;
  myRef:React.RefObject<HTMLDivElement>;
};
const SingleMap = ({
  text,
  isSeen,
  setOrder,
  index,
  myRef
}: ComponentProps): ReactElement => {
  const textAnimation = keyframes`
  from {
    transform: scale(1) translate3d(0, 0, 0);
    transform-origin: 100% 50%;
  }
  to {
    transform: scale(1) translate3d(0, 0, 0);
    transform-origin: 0 50%;
  }
`;
console.log(myRef)
  return (
    <Stack
      onMouseEnter={() => setOrder(index)}
      onMouseLeave={() => setOrder(undefined)}
      onClick={() => myRef?.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}
      sx={{
        width: "100%",
        margin: "5px 0",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        
      }}
    >
      <hr
        style={{
          width: "100%",
          height: "4px",
          border: "none",
          background: theme.palette.secondary.main,
          position: "absolute",
          animation: `${textAnimation} 3.9s ease`,
        }}
      />
      {isSeen ? (
        <Typography
          variant="h5"
          sx={{zIndex: "2", animation: `${textAnimation} 3.9s ease`}}
        >
          {text}
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default SingleMap;