import {Stack, Typography, SxProps, Grid} from "@mui/material";
import React, {ReactElement, useEffect, useState} from "react";
import {theme} from "../../theme";
import Doors from "./DoorAnimation/Doors";
import {keyframes} from "@mui/material";
import MiniHrComponent from "../MiniHrComponent";
import {getter} from "../../ts/utils/Fetcher";
import {HeroData, ImageData} from "../../ts/REST/types/AboutPageTypes";
const Hero = (): ReactElement => {
  const textAnimation = keyframes`
  from {
    transform: translateY(30px);
  }
  to {
    transform: translate(0);
  }
`;
  const styles: SxProps = {
    width: "100%",
    color: theme.palette.secondary.main,
    margin: "15px 0",
    padding: "0",
    animation: `${textAnimation} 0.7s ease`,
  };

  const [data, setData] = useState<HeroData>();
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const getData = async () => {
      const result = await getter(
        "about-page?populate=Hero.img1,Hero.img2,Hero.img3,Hero.img4,Hero.img5"
      );
      if (result.ok && result.data) {
        setData(result.data);
      }
    };

    getData();
  }, []);

  const setImagesFunction = (arr: HeroData) => {
    const array: string[] = [];
    for (let i = 1; i <= 5; i++) {
      const imgKey = `img${i}` as keyof HeroData["Hero"];
      const img = arr.Hero[imgKey] as ImageData;
      const imgUrl = img.data.attributes.formats?.large?.url;
      const fullUrl = `${process.env.REACT_APP_BACKEND_URL}${imgUrl}`;
      array.push(fullUrl);
    }
    setImages(array);
  };

  useEffect(() => {
    if (data?.Hero) {
      setImagesFunction(data);
    }
  }, [data]);

  return (
    <Stack sx={{marginTop: "100px"}}>
      <Typography variant="h3" color={theme.palette.primary.main}>
        {data && data.Hero.title}
      </Typography>
      <Grid
        container
        spacing={"30px"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {xs: "column", lg: "row"},
          marginTop: "20px",
        }}
      >
        <Grid xs={12} lg={6} item sx={{width: "100%"}}>
          <Grid item xs={4} sm={3}>
            <MiniHrComponent
              sx={{
                width: "100%",
                height: "2px",
                animation: `${textAnimation} 0.7s ease`,
              }}
            />
          </Grid>
          <Typography sx={styles} variant="h3">
            {data && data.Hero.text}
          </Typography>
          <Grid item xs={4} sm={3}>
            <MiniHrComponent
              sx={{
                width: "100%",
                height: "2px",
                animation: `${textAnimation} 0.7s ease`,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={8} xl={7}>
            <Typography
              sx={{
                display: "block",
                marginTop: "50px",
                width: "100%",
                animation: `${textAnimation} 0.7s ease`,
              }}
              variant="paragraph"
            >
              {data && data.Hero.desc}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>{images && images.length && <Doors images={images} />}</Grid>
        {/* <Grid item md={1}></Grid> */}
      </Grid>
    </Stack>
  );
};
export default Hero;
