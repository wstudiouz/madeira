import { Stack, Typography } from "@mui/material";
import React, { ReactElement } from "react";

const AboutUsPage = () : ReactElement =>{
    return <Stack>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
        <Typography variant="heroText1">HeroText1</Typography>
        <Typography variant="heroText2">HeroText2</Typography>
        <Typography variant="product">Product</Typography>
        <Typography variant="buttonText">buttonText</Typography>
    </Stack>
}
export default AboutUsPage
