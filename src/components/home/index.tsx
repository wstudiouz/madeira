import React, {ReactElement, useEffect, useRef, useState} from "react";
import IntroAnimation from "./IntroAnimation";
import SingleMap from "./SingleMap";
import { Stack,  Typography} from "@mui/material";
import MComponent from "./MComponent";
import AComponent from "./AComponent";
import DComponent from "./DComponent";
import EComponent from "./EComponent";
import IComponent from "./IComponent";
import RComponent from "./RComponent";
import SeacondAComponent from "./SecondAComponent";

type ObjectType = {
  text: string;
  over: string;
  ref: React.Ref<HTMLElement>;
};

const Home = (): ReactElement => {
  const el1 = useRef<HTMLDivElement>(null);
  const el2 = useRef<HTMLDivElement>(null);
  const el3 = useRef<HTMLDivElement>(null);
  const el4 = useRef<HTMLDivElement>(null);
  const el5 = useRef<HTMLDivElement>(null);
  const el6 = useRef<HTMLDivElement>(null);
  const el7 = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<boolean>(true);
  const [order, setOrder] = useState<number | undefined>(undefined);
  const [active] = useState<number>(0); // qaysi sectiondaligi ya'ni M harfidami yoki A harfidami padesgi map arrayini indexiga qarab set qilinadi
  const [map] = useState<Array<ObjectType>>([
    {text: "M", over: "Madeira M harfiniki", ref: el1},
    {text: "A", over: "Madeira A harfiniki", ref: el2},
    {text: "D", over: "Madeira D harfiniki", ref: el3},
    {text: "E", over: "Madeira E harfiniki", ref: el4},
    {text: "I", over: "Madeira I harfiniki", ref: el5},
    {text: "R", over: "Madeira R harfiniki", ref: el6},
    {text: "A", over: "Madeira A harfiniki", ref: el7},
  ]);
  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 4000);
  }, []);

  return (
    <Stack
      sx={{
        margin: {
          xs: "30px 10px 30px 10px",
          sm: "30px 30px 30px 30px",
          md: "30px 50px 30px 50px",
          lg: "30px 60px 30px 60px",
          xl: "30px 70px 30px 70px",
        },
      }}
    >
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
            {map[active].over}
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
            {map.map((e, index) => (
              <SingleMap
                key={index}
                text={e.text}
                isSeen={index === order || index === active}
                index={index}
                setOrder={setOrder}
                myRef={el5} // e.ref desam error beryabdi polniy childga berishga rosa urundim o'xshamadi bir ko'rsez bo'larkan
              />
            ))}
          </Stack>
        </Stack>
      )}

      <MComponent SectionRef={el1} />
      <AComponent SectionRef={el2} />
      <DComponent SectionRef={el3} />
      <EComponent SectionRef={el4} />
      <IComponent SectionRef={el5} />
      <RComponent SectionRef={el6} /> 
      <SeacondAComponent SectionRef={el7} />
    </Stack>
  );
};

export default Home;
