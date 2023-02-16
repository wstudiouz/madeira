import {Stack} from "@mui/material";
import React, {ReactElement} from "react";
import Complex from "../components/about/Complex";
import HandWork from "../components/about/HandWork";
import Hero from "../components/about/Hero";
import Production from "../components/about/Production";
import Warranty from "../components/about/Warranty";
import {Parallax} from "@react-spring/parallax";
// import AboutHero from "../components/about/hero";
const AboutUsPage = (): ReactElement => {
  return (
    <Parallax pages={4} style={{top: "0", left: "0", height: "100%"}}>
      <Stack
        sx={{
          width: "100%",
          margin: "10px auto",
          gap: "100px",
          padding: {xs: "0 10px", sm: "0 50px", md: "0 100px", lg: "0 150px"},
          height: "100%",
        }}
      >
        <Hero />
        <Complex />
        <Warranty />
        <Production />
        <HandWork />
      </Stack>
    </Parallax>
  );
};
export default AboutUsPage;
