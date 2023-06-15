import React, {ReactElement, useEffect, useRef} from "react";
import {Stack, SxProps} from "@mui/system";
import useIntersectionObserver from "../../ts/utils/Hooks";

type Props = {
  children: React.ReactNode;
  shortKey: string;
  sx?: SxProps;
  setOrder: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const LetterContainer = ({
  children,
  shortKey,
  setOrder,
  sx,
}: Props): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, {});

  useEffect(() => {
    if (isVisible?.isIntersecting) {
      setOrder(shortKey);
    }
  }, [shortKey, isVisible?.isIntersecting, setOrder]);

  return (
    <Stack
      id={shortKey}
      ref={ref}
      sx={{
        minHeight: "100vh",
        paddingY: {xs: "25px", md: "50px", lg: "75px"},
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};

export default LetterContainer;
