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

type ObjectType = {
  text: string;
  over: string;
  id: string;
};

const Home = (): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<boolean>(true);
  const [order, setOrder] = useState<string | undefined>(undefined);
  const letters: ObjectType[] = [
    {text: "M", over: "Madeira M harfiniki", id: "M"},
    {text: "A", over: "Madeira A harfiniki", id: "A"},
    {text: "D", over: "Madeira D harfiniki", id: "D"},
    {text: "E", over: "Madeira E harfiniki", id: "E"},
    {text: "I", over: "Madeira I harfiniki", id: "I"},
    {text: "R", over: "Madeira R harfiniki", id: "R"},
    {text: "A", over: "Madeira A harfiniki", id: "A2"},
  ];
  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 4000);
  }, []);
  return (
    <Stack ref={containerRef} sx={{overflow: "hidden"}}>
      {animation ? (
        <IntroAnimation />
      ) : (
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
            {letters.map((letter) => (letter.id === order ? letter.over : ""))}
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
            {letters.map((letter, index) => (
              <SingleMap
                key={index}
                text={letter.text}
                active={letter.id === order}
                onClick={() =>
                  document?.getElementById(letter.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              />
            ))}
          </Stack>
        </Stack>
      )}
      <MainContainer>
        <LetterContainer
          sx={{marginTop: {xs: 0, md: 0, lg: 0}}}
          setOrder={setOrder}
          id={"M"}
        >
          <MComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} id={"A"}>
          <AComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} id={"D"}>
          <DComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} id={"E"}>
          <EComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} id={"I"}>
          <IComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} id={"R"}>
          <RComponent />
        </LetterContainer>
        <LetterContainer setOrder={setOrder} id={"A2"}>
          <SeacondAComponent />
        </LetterContainer>
      </MainContainer>
    </Stack>
  );
};

export default Home;
