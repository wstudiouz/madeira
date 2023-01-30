import { Stack, Typography } from "@mui/material";
import {Theme} from "@mui/material/styles" 
import React, { ReactElement } from "react";
import { styled } from '@mui/system';

const AboutHeroWrapper = styled("div")<any>(() => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "100%"
}));

const AboutHero = () : ReactElement => {
    return <Stack>
            <Typography sx={styles.title} variant="h2">ABOUT US</Typography>
                <AboutHeroWrapper >
                    <Typography sx={styles.title} variant="h3">We do what we love for over 15 years, and we are pleased to present Viporte doors — doors as a piece of art!</Typography>
                    <Typography sx={styles.desc} variant="h4">We combine best european technologies, the beauty of Caucasus finewood, the art of carving and guaranteed quality. Having studied secular traditions of italian masters we produce a truly high quality doors!</Typography>
                </AboutHeroWrapper>
    </Stack>
}

const styles = {
   title : {
        fontFamily: "'Libre Caslon Text'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: "49px",
        color: "#3D1212"
    },
    text:{
        fontFamily: "'Libre Caslon Text'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: "37px",
        color: "#CCA041"
    },
    desc : {
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "18px",
        color: "#000000"
      }
}

export default AboutHero;