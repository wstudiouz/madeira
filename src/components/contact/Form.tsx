import {Box, Stack, SxProps, Grid} from "@mui/material";
import React, {ReactElement} from "react";
import {theme} from "../../theme";
import MiniGoldCard from "../home/MiniGoldCard";
import {sendMessage} from "../../ts/utils/sendMessage";

const Form = (): ReactElement => {
  const inputsStyle: SxProps = {
    "color": theme.palette.secondary.main,
    "width": "100%",
    "border": `1px solid ${theme.palette.secondary.main}`,
    "outline": "none",
    "padding": {xs: "19px", lg: "22px"},
    "fontFamily": "'Libre Caslon Text'",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "16px",
    "lineHeight": "15px",
    "marginBottom": {xs: "25px", lg: 0},
    "::placeholder": {
      color: theme.palette.secondary.main,
    },
  };
  interface FormValues {
    name: string;
    phone: string;
    email: string;
    msg: string;
  }
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: {value: string};
      phone: {value: string};
      email: {value: string};
      msg: {value: string};
    };
    const fvalue: FormValues = {
      name: target.name.value,
      phone: target.phone.value,
      email: target.email.value,
      msg: target.msg.value,
    };

    sendMessage(
      `New message! \n\nName: ${fvalue.name}\nPhone Number: ${fvalue.phone}\nEmail: ${fvalue.email}\nMessage: ${fvalue.msg}`
    );
  };
  return (
    <Stack sx={{width: {xs: "100%", md: "80%", lg: "70%"}}}>
      <Box component="form" sx={{width: "100%"}} onSubmit={HandleSubmit}>
        <Grid
          container
          spacing={3}
          sx={{
            flexDirection: {
              xs: "column",
              lg: "row",
            },
          }}
        >
          <Grid item md={3}>
            <Box
              component="input"
              type="text"
              placeholder="Name"
              name="name"
              required
              sx={inputsStyle}
            />
          </Grid>
          <Grid item md={3}>
            <Box
              component="input"
              type="text"
              placeholder="Phone"
              name="phone"
              required
              sx={inputsStyle}
            />
          </Grid>
          <Grid item md={3}>
            <Box
              component="input"
              type="email"
              placeholder="Email"
              name="email"
              required
              sx={inputsStyle}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                ...inputsStyle,
                width: "100%",
                resize: "none",
                margin: {xs: 0, lg: "25px 0 15px 0"},
              }}
              component="textarea"
              name="msg"
              placeholder="Message"
              required
            />
          </Grid>
        </Grid>
        <Box
          component="button"
          type="submit"
          sx={{
            width: "auto",
            border: "none",
            outline: "none",
            padding: 0,
            background: "none",
            margin: {xs: "15px 0 0 0", lg: 0},
          }}
        >
          <MiniGoldCard
            content="Send message"
            btn={true}
            sx={{
              width: "100%",
              padding: {xs: "20px", lg: "20px 50px"},
              margin: "0 auto 0 0",
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
};
export default Form;
