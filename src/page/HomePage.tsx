import React, {ReactElement} from "react";
import IntroAnimation from "../components/home/IntroAnimation";
import MainContainer from "../components/MainContainer";

const HomePage = (): ReactElement => {
  return (
    <MainContainer>
      <IntroAnimation />
    </MainContainer>
  );
};
export default HomePage;
