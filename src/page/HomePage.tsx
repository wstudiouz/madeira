import React, {ReactElement} from "react";
import {Stack} from "@mui/material";
import Home from "../components/home";

const HomePage = (): ReactElement => {
  // const imageRef = useRef(null);
  // const size = useAspectRatio(1 / 1, AspectRatioMode.heightFromWidth, imageRef);

  return (
    <Stack>
      <Home />
      {/* <ResponsiveImage
        formats={homepage?.attributes?.AComp?.image?.data?.attributes?.formats}
        src={homepage?.attributes?.AComp?.image?.data?.attributes?.url}
        width={"33%"}
        height={size.height}
        refs={imageRef}
      /> */}
    </Stack>
  );
};
export default HomePage;
