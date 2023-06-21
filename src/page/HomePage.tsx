import React, {ReactElement} from "react";
import Home from "../components/home";
import MainContainer from "../components/MainContainer";

const HomePage = (): ReactElement => {
  return (
    <MainContainer>
      <Home />
    </MainContainer>
  );
};
export default HomePage;
