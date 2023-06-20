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
import {getWithEndPoint} from "../../ts/utils/Fetcher";
import {HomePageEndpoint} from "../../ts/REST/endpoints/HomePageApi";
import {
  HomeACompComponent,
  HomePageListResponseDataItem,
} from "../../ts/REST/api/generated";
import {useIsMounted} from "@qubixstudio/sphere";

const Home = (): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState<string | undefined>(undefined);

  const isMounted = useIsMounted();
  const [homepage, setHomepage] = useState<
    HomePageListResponseDataItem | undefined
  >();

  const [populateProps] = useState<string[]>([
    "AComp.cardText",
    "AComp.image",
    "AComp.button",
    "AComp.rightText",
    "DComp.cardText",
    "DComp.letterImg",
    "DComp.button",
    "DComp.firstImg",
    "DComp.secondImg",
    "EComp.cardText",
    "EComp.letterImg",
    "EComp.button",
    "EComp.leftImg",
    "IComp.cardTextFirst",
    "IComp.cardTextSecond",
    "IComp.letterImgLeft",
    "IComp.letterImgRight",
    "IComp.bottomImg1",
    "IComp.bottomImg2",
    "IComp.bottomImg3",
    "RComp.cardText",
    "RComp.letterImg",
    "RComp.rightImg1",
    "RComp.rightImg2",
    "SecondAComp.cardText",
    "SecondAComp.leftImg1",
    "SecondAComp.leftImg2",
    "SecondAComp.leftImg3",
    "Letters",
  ]);

  useEffect(() => {
    const getValue = async () => {
      const result = await getWithEndPoint({
        endPoint: HomePageEndpoint,
        populate: populateProps,
      });
      if (result.ok && result.result) {
        setHomepage(result.result as HomeACompComponent);
      }
    };
    if (isMounted()) {
      getValue();
    }
  }, [isMounted, populateProps]);

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
          {homepage &&
            homepage.attributes?.Letters?.map((letter) =>
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
          {homepage &&
            homepage.attributes?.Letters?.map((letter, index) => {
              if (letter.text) {
                return (
                  <SingleMap
                    key={index}
                    text={letter.text}
                    active={letter.shortKey === order}
                    onClick={() =>
                      letter.shortKey &&
                      document
                        ?.getElementById(letter.shortKey)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                    }
                  />
                );
              }
              return null;
            })}
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
        {homepage && homepage.attributes?.AComp && (
          <LetterContainer setOrder={setOrder} shortKey={"A"}>
            <AComponent value={homepage.attributes.AComp} />
          </LetterContainer>
        )}
        {homepage && homepage.attributes?.DComp && (
          <LetterContainer setOrder={setOrder} shortKey={"D"}>
            <DComponent value={homepage.attributes.DComp} />
          </LetterContainer>
        )}
        {homepage && homepage.attributes?.EComp && (
          <LetterContainer setOrder={setOrder} shortKey={"E"}>
            <EComponent value={homepage.attributes.EComp} />
          </LetterContainer>
        )}
        {homepage && homepage.attributes?.IComp && (
          <LetterContainer setOrder={setOrder} shortKey={"I"}>
            <IComponent value={homepage.attributes.IComp} />
          </LetterContainer>
        )}
        {homepage && homepage.attributes?.RComp && (
          <LetterContainer setOrder={setOrder} shortKey={"R"}>
            <RComponent value={homepage.attributes.RComp} />
          </LetterContainer>
        )}
        {homepage && homepage.attributes?.SecondAComp && (
          <LetterContainer setOrder={setOrder} shortKey={"A2"}>
            <SeacondAComponent value={homepage.attributes.SecondAComp} />
          </LetterContainer>
        )}
      </MainContainer>
    </Stack>
  );
};

export default Home;
