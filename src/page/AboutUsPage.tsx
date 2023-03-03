import {Stack} from "@mui/material";
import React, {ReactElement, useEffect, useState} from "react";
import Complex from "../components/about/Complex";
import HandWork from "../components/about/HandWork";
import Hero from "../components/about/Hero";
import Production from "../components/about/Production";
import Warranty from "../components/about/Warranty";
import MainContainer from "../components/MainContainer";
const AboutUsPage = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);
  return (
    <MainContainer>
      <Stack>
        <Hero />
        <Complex />
        <Warranty show={show} />
        <Production />
        <HandWork show={show} />
      </Stack>
    </MainContainer>
  );
};
export default AboutUsPage;
