import {Stack, SxProps, Box} from "@mui/material";
import React, {Dispatch, ReactElement, SetStateAction} from "react";

type ComponentProps = {
  sx?: SxProps;
  image: string;
  index: number;
  childCount: number;
  setOrder: Dispatch<SetStateAction<number | undefined>>;
  isVisible?: boolean;
};

type ComponentProps2 = {
  sx?: SxProps;
  image: string;
  index: number;
  spanIndex: number;
  setOrder: Dispatch<SetStateAction<number | undefined>>;
  isVisible?: boolean;
  count: number;
};

const GenerateCssTopProperty = (starter: number, index: number) =>
  `${starter - index * 100}%`;

const GenerateCssTransitionProperty = (
  order: number,
  index: number,
  count: number
) =>
  `0.${Math.abs(
    order === 0 ? index : order + 1 === count ? count - index : order - index
  )}s`;

const ChildComponent = ({
  image,
  index,
  spanIndex,
  sx,
  isVisible,
  setOrder,
  count,
}: ComponentProps2): ReactElement => {
  const defaultStyle: SxProps = {
    width: "100%",
    height: "inherit",
    display: "block",
    position: "absolute",
    left: "0",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.5s ease",
    backgroundSize: "100% auto",
    cursor: "pointer",
    zIndex: isVisible ? 4 : 3,
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${image})`,
    transitionDelay: "0.2s",
    ...sx,
  };
  return (
    <Box
      component="span"
      onMouseEnter={() => setOrder(spanIndex)}
      onMouseLeave={() => setOrder(undefined)}
      sx={{
        ...defaultStyle,
        opacity: spanIndex == index ? 1 : isVisible ? 1 : 0,
        top: GenerateCssTopProperty(spanIndex * 100, index),
        backgroundPosition: `center ${spanIndex * 25}%`,
        transitionDelay: GenerateCssTransitionProperty(index, spanIndex, count),
        visibility:
          spanIndex == index ? "visible" : isVisible ? "visible" : "hidden",
      }}
    ></Box>
  );
};

const Door = ({
  sx,
  image,
  index,
  childCount,
  isVisible,
  setOrder,
}: ComponentProps): ReactElement => {
  return (
    <Stack
      sx={{
        ...sx,
        position: "relative",

        width: "100%",
        height: "100px",
        display: "block",
      }}
    >
      {"1"
        .repeat(childCount)
        .split("")
        .map((_, ind) => (
          <ChildComponent
            isVisible={isVisible}
            image={image}
            index={index}
            spanIndex={ind}
            key={ind}
            setOrder={setOrder}
            count={childCount}
          />
        ))}
    </Stack>
  );
};
export default Door;
