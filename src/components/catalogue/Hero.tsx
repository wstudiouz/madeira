import {Typography, Grid} from "@mui/material";
import {Stack} from "@mui/system";
import React, {Dispatch, ReactElement, SetStateAction, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {theme} from "../../theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

type ComponentProps = {
  setState: Dispatch<
    SetStateAction<{id: number | boolean; type: number | boolean}>
  >;
};

const Hero = ({setState}: ComponentProps): ReactElement => {
  const [collection, setCollection] = useState<boolean>(false); // manashu stateni yopilishini qande qiley app jsdan state ochib props bilan obkeleymi context ochamizmi ili boshqa yo'li bormi
  const [material, setMaterial] = useState<boolean>(false);
  const handleChange = (id: number, type: number) => {
    setState({id, type});
  };

  const style = {
    title: {
      "flexDirection": "row",
      "justifyContent": "space-between",
      "alignItems": "center",
      "color": theme.palette.secondary.main,
      "border": `1px solid ${
        collection ? theme.palette.secondary.main : "white"
      }`,
      "padding": "10px 20px",
      "&:hover": {
        border: `1px solid ${theme.palette.secondary.main}`,
        transitionDelay: "0.2s",
      },
    },
    content: {
      display: collection ? "block" : "none",
      width: "100%",
      zIndex: "3",
      background: "white",
      border: `1px solid ${theme.palette.secondary.main}`,
      borderBottom: "none",
      position: "absolute",
      top: "50px",
      padding: "0",
      color: theme.palette.secondary.main,
    },
  };

  const [collections] = useState<string[]>([
    "first collect",
    "second collect",
    "third collect",
    "fourth collect",
  ]);

  const [materials] = useState<string[]>([
    "first material",
    "second material",
    "third material",
    "fourth material",
  ]);

  const closeFn = () => {
    if (collection) {
      setCollection(false);
    }
    if (material) {
      setMaterial(false);
    }
  };

  return (
    <Stack onClick={closeFn}>
      <Typography variant="paragraph" sx={{marginBottom: "80px"}}>
        СATALOGUE
      </Typography>
      <hr />
      <Grid container>
        <Grid item xs={12} sm={10} sx={{display:"flex", flexDirection: {xs: "column", sm: "row"}}}>
          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                width: "100%",
                position: "relative",
              }}
            >
              <Stack
                sx={style.title}
                onClick={() => setCollection(!collection)}
              >
                <Typography
                  variant="h3"
                  sx={{fontSize: "16px", lineHeight: "20px"}}
                >
                  Select Collection
                </Typography>
                <ExpandMoreIcon />
              </Stack>
              <List sx={style.content}>
                {collections.map((e, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      borderBottom: `1px solid ${theme.palette.secondary.main}`,
                    }}
                    onClick={() => handleChange(index, 1)}
                  >
                    {e}
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Grid>
          <hr style={{marginTop: "1px"}} />
          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                width: "100%",
                position: "relative",
              }}
            >
              <Stack
                sx={{
                  ...style.title,
                  border: `1px solid ${
                    material ? theme.palette.secondary.main : "white"
                  }`,
                }}
                onClick={() => setMaterial(!material)}
              >
                <Typography
                  variant="h3"
                  sx={{fontSize: "16px", lineHeight: "20px"}}
                >
                  Select material
                </Typography>
                <ExpandMoreIcon />
              </Stack>
              <List
                sx={{...style.content, display: material ? "block" : "none"}}
              >
                {materials.map((e, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      borderBottom: `1px solid ${theme.palette.secondary.main}`,
                    }}
                    onClick={() => handleChange(index, 2)}
                  >
                    {e}
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <hr style={{marginTop: "1px"}} />
      <Stack></Stack>
    </Stack>
  );
};

export default Hero;
