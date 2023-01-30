import { Stack, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import AboutHero from "../components/about/hero";
const AboutUsPage = () : ReactElement =>{
    return <Stack>
        <Typography sx={{width:"100%", padding:"10px 150px"}} variant="paragraph">
           <AboutHero />
        </Typography>
    </Stack>
}
export default AboutUsPage
