import {Grid} from "@mui/material";
import React, {ReactElement} from "react";
import Complex from "../components/about/Complex";
import HandWork from "../components/about/HandWork";
import Hero from "../components/about/Hero";
import Production from "../components/about/Production";
import Warranty from "../components/about/Warranty";
import MainContainer from "../components/MainContainer";
const AboutUsPage = (): ReactElement => {
  
  return (
    <MainContainer>
      <Grid container sx={{alignItems: "center", justifyContent: "center"}}>
        <Grid item md={10}>
          <Hero />
          <Complex />
          <Warranty />
          <Production />
          <HandWork />
        </Grid>
      </Grid>
    </MainContainer>
  );
};
export default AboutUsPage;
