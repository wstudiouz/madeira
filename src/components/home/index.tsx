import React, {ReactElement, useEffect, useState} from "react"
import IntroAnimation from "./IntroAnimation";
import SingleMap from "./SingleMap";
import {keyframes, Stack, SvgIcon} from "@mui/material";

type ObjectType = {
    text: string;
    over: string;
}

const Home = (): ReactElement =>{
    const [animation, setAnimation] = useState<boolean>(true);
    const [order, setOrder] = useState<number | undefined>(undefined)
    const [map] = useState<Array<ObjectType>>([
        {text: "M", over:"Madeira M harfiniki"},
        {text: "A", over:"Madeira A harfiniki"},
        {text: "D", over:"Madeira D harfiniki"},
        {text: "E", over:"Madeira E harfiniki"},
        {text: "I", over:"Madeira I harfiniki"},
        {text: "R", over:"Madeira R harfiniki"},
        {text: "A", over:"Madeira A harfiniki"},
    ])
  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 4000);
  }, []);
    return(
        <Stack >
            <IntroAnimation animation={animation} />
            {
                 map.map((e,index) => (
                    <SingleMap key={index} text={e.text} isSeen={index ===order} index={index} setOrder={setOrder} /> 
                 ))
            }
        </Stack>
    )
} 

export default Home;