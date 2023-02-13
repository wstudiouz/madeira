import {Stack} from "@mui/material";
import {Box} from "@mui/system";
import React, {ReactElement, useEffect, useState} from "react";
import Door from "./Door";

const Doors = (): ReactElement => {
  const [images] = useState<string[]>([
    "https://picsum.photos/350/501",
    "https://picsum.photos/350/502",
    "https://picsum.photos/350/503",
    "https://picsum.photos/350/504",
    "https://picsum.photos/350/505",
  ]);
  const [order, setOrder] = useState<number | undefined>(undefined);
  const [trigger, setTrigger] = useState<boolean>(false);
  useEffect(() => {
    if (order !== undefined) setTrigger(false);
    else setTrigger(true);
  }, [order]);
  return (
    <Stack
      sx={{
        margin: {
          xs: "40px auto 0 auto",
          sm: "60px auto 0 auto",
          md: "80px auto 0 auto",
          lg: "0 auto",
        },
        width: "350px",
        height: `${images.length * 100}px`,
        position: "relative",
        zIndex: "2",
        display: "block",
      }}
    >
      <Box component="span" sx={{pointerEvents: "none"}}>
        {"1"
          .repeat(images.length - 1)
          .split("")
          .map((_, index) => (
            <Box
              key={index}
              component="i"
              sx={{
                width: "100%",
                height: trigger ? "2px" : "0px",
                display: "block",
                position: "absolute",
                left: "0",
                top: `${((index + 1) * 100) / images.length}%`,
                zIndex: 10,
                transition: "all 0.5s linear",
                background: "#FFF",
                opacity: trigger ? 1 : 0,
              }}
            ></Box>
          ))}
      </Box>
      {images.map((e, index) => (
        <Door
          childCount={images.length}
          key={index}
          image={e}
          index={index}
          isVisible={index === order}
          setOrder={setOrder}
        />
      ))}
    </Stack>
  );
};
export default Doors;
