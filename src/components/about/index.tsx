import React, {ReactElement, useEffect, useState} from "react";

import {Grid} from "@mui/material";

import {AboutPageListResponseDataItem} from "../../ts/REST/api/generated";
import {useIsMounted} from "@qubixstudio/sphere";
import {getter} from "../../ts/utils/Fetcher";
import Hero from "./Hero";
import Complex from "./Complex";
import Warranty from "./Warranty";
import Production from "./Production";
import HandWork from "./HandWork";

const About = (): ReactElement => {
  const isMounted = useIsMounted();
  const [aboutPage, setAboutPage] = useState<
    AboutPageListResponseDataItem | undefined
  >();

  const [populateProps] = useState<string[]>([
    "Hero.img1",
    "Hero.img2",
    "Hero.img3",
    "Hero.img4",
    "Hero.img5",
    "Complex.rightTopCard",
    "Complex.rightBottomCard",
    "Warranty.warranty",
    "Warranty.supCard",
    "Warranty.supCard2",
    "Warranty.warrantyYearBg",
    "Production.img1",
    "Production.img2",
    "Production.factory",
    "HandWork.topImg",
    "HandWork.bottomImg",
  ]);

  useEffect(() => {
    const getValue = async () => {
      const result = await getter(
        `about-page?populate=${populateProps.join()}`
      );

      if (result.ok && result.data) {
        setAboutPage(result.data as AboutPageListResponseDataItem);
      }
    };

    if (isMounted()) {
      getValue();
    }
  }, [isMounted, populateProps]);

  return (
    <Grid container sx={{alignItems: "center", justifyContent: "center"}}>
      <Grid item md={10}>
        {aboutPage?.attributes?.Hero && (
          <Hero data={aboutPage.attributes.Hero} />
        )}

        {aboutPage?.attributes?.Complex && (
          <Complex data={aboutPage.attributes.Complex} />
        )}

        {aboutPage?.attributes?.Warranty && (
          <Warranty data={aboutPage.attributes.Warranty} />
        )}
        {aboutPage?.attributes?.Production && (
          <Production data={aboutPage.attributes.Production} />
        )}

        {aboutPage?.attributes?.HandWork && (
          <HandWork data={aboutPage.attributes.HandWork} />
        )}
      </Grid>
    </Grid>
  );
};

export default About;
