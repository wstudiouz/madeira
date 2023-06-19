import {Stack} from "@mui/material";
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Home from "../components/home";
import {HomePageEndpoint} from "../ts/REST/endpoints/HomePageApi";
import {HomePageListResponseDataItem} from "../ts/REST/api/generated";
import ResponsiveImage from "@qubixstudio/sphere/sphere/components/ResponsiveImage";
import {
  AspectRatioMode,
  useAspectRatio,
  useIsMounted,
} from "@qubixstudio/sphere";

const HomePage = (): ReactElement => {
  const isMounted = useIsMounted();
  const [homepage, setHomepage] = useState<
    HomePageListResponseDataItem | undefined
  >();
  const imageRef = useRef(null);
  const size = useAspectRatio(1 / 1, AspectRatioMode.heightFromWidth, imageRef);
  const getHomepage = useCallback(async () => {
    try {
      const res = await HomePageEndpoint.getHomePage(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        {
          params: {
            "populate[0]": "AComp.cardText",
            "populate[1]": "AComp.image",
            "populate[2]": "AComp.button",
            "populate[3]": "AComp.rightText",
          },
        }
      );
      if (res.status === 200) {
        setHomepage(res.data.data as HomePageListResponseDataItem);
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);
  useEffect(() => {
    if (isMounted()) getHomepage();
  }, [getHomepage, isMounted]);
  console.log(homepage);
  return (
    <Stack>
      <Home />
      <ResponsiveImage
        formats={homepage?.attributes?.AComp?.image?.data?.attributes?.formats}
        src={homepage?.attributes?.AComp?.image?.data?.attributes?.url}
        width={"33%"}
        height={size.height}
        refs={imageRef}
      />
    </Stack>
  );
};
export default HomePage;
