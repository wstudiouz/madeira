import {Stack, Typography} from "@mui/material";
import React, {ReactElement} from "react";
import Complex from "../components/about/Complex";
import Hero from "../components/about/Hero";
// import AboutHero from "../components/about/hero";
const AboutUsPage = (): ReactElement => {
  return (
    <Stack sx={{width:"100%", margin:"10px auto", padding:{xs:"0 10px",sm:"0 50px",md:"0 100px",lg:"0 150px"}}}>
        <Hero />
        <Complex />
    </Stack>
  );
};
export default AboutUsPage;
