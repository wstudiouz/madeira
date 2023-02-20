import {Stack, useMediaQuery} from "@mui/material";
import React, {ReactElement} from "react";
import Complex from "../components/about/Complex";
import HandWork from "../components/about/HandWork";
import Hero from "../components/about/Hero";
import Production from "../components/about/Production";
import Warranty from "../components/about/Warranty";
import {Parallax} from "@react-spring/parallax";
import Footer from "../components/footer/Footer";
import {theme} from "../theme"
// import AboutHero from "../components/about/hero";
const AboutUsPage = (): ReactElement => {
  const xsWidth = useMediaQuery(theme.breakpoints.between(0,600));
  const smWidth = useMediaQuery(theme.breakpoints.between(600,900));
  const mdWidth = useMediaQuery(theme.breakpoints.between(900,1200));
  const lgWidth = useMediaQuery(theme.breakpoints.between(1200,1536));
  const xlWidth = useMediaQuery(theme.breakpoints.up(1536));
  
  console.log(xsWidth);

  const generatePageNUmber = () =>{
    return xsWidth ? 7 : smWidth ? 6.5 : 4.8
  }
  return (
    <Parallax pages={generatePageNUmber()} style={{top: "80", left: "0", height: "calc(100% - 80px)"}}>
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
        <Footer />
      </Stack>
    </Parallax>
  );
};
export default AboutUsPage;
