import React, {ReactElement, useEffect, useRef, useState} from "react";
import IntroAnimation from "./IntroAnimation";
import SingleMap from "./SingleMap";
import {Stack, Typography} from "@mui/material";
import MComponent from "./MComponent";
import AComponent from "./AComponent";
import DComponent from "./DComponent";
import EComponent from "./EComponent";
import IComponent from "./IComponent";
import RComponent from "./RComponent";
import SeacondAComponent from "./SecondAComponent";
import MainContainer from "../MainContainer";
import LetterContainer from "./LetterContainer";
import {getter} from "../../ts/utils/Fetcher";
import {LettersData} from "../../ts/REST/types/HomePageTypes";

const Home = (): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState<string | undefined>(undefined);

  const [data, setData] = useState<LettersData>();
  useEffect(() => {
    const getData = async () => {
      const result = await getter("home-page?populate=Letters");
      if (result.ok && result.data) {
        setData(result.data);
      }
    };

    getData();
  }, []);
  return (
    <Stack ref={containerRef} sx={{overflow: "hidden"}}>
      <IntroAnimation />
      <Stack
        sx={{
          width: "25px",
          height: "100%",
          minHeight: "580px",
          display: {xs: "none", md: "block"},
          position: "fixed",
          top: "0",
          left: "26px",
          zIndex: 98,
        }}
      >
        <Typography
          variant="paragraph"
          sx={{
            height: "12px",
            display: "block",
            position: "absolute",
            bottom: "50%",
            left: "18px",
            marginBottom: "57px",
            transformOrigin: "0 100%",
            fontFamily: '"PFBulletinSansPro", sans-serif',
            fontSize: "12px",
            lineHeight: "12px",
            textTransform: "uppercase",
            color: "#d3bd8e",
            letterSpacing: "0.2em",
            whiteSpace: "nowrap",
            opacity: 1,
            transition: "all 0.3s 0.3s ease",
            transform: "translate3d(0, 0, 0) rotate(-90deg)",
          }}
        >
          {data &&
            data.Letters.map((letter) =>
              letter.shortKey === order ? letter.over : ""
            )}
        </Typography>
        <Stack
          sx={{
            width: "100%",
            position: "absolute",
            right: "0",
            top: "50%",
            marginTop: "-30px",
          }}
        >
          {data &&
            data.Letters.map((letter, index) => (
              <SingleMap
                key={index}
                text={letter.text}
                active={letter.shortKey == order}
                onClick={() =>
                  document?.getElementById(letter.shortKey)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              />
            ))}
        </Stack>
      </Stack>
      <MainContainer>
        <LetterContainer
          sx={{marginTop: {xs: 0, md: 0, lg: 0}}}
          setOrder={setOrder}
          shortKey={"M"}
        >
          <MComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} shortKey={"A"}>
          <AComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} shortKey={"D"}>
          <DComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} shortKey={"E"}>
          <EComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} shortKey={"I"}>
          <IComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} shortKey={"R"}>
          <RComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} shortKey={"A2"}>
          <SeacondAComponent />
        </LetterContainer>
      </MainContainer>
    </Stack>
  );
};

export default Home;
