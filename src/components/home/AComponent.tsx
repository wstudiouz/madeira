import React, {ReactElement} from "react";
import {Stack, Typography, SxProps, Box} from "@mui/material";
import MiniCardTextAndBtn from "./MiniCardTextAndBtn";
type ComponentProps = {
  SectionRef: React.RefObject<HTMLDivElement>;
  sx?: SxProps;
};
const AComponent = ({SectionRef, sx}: ComponentProps): ReactElement => {
  return (
    <Stack
      ref={SectionRef}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: {xs: "50px", md: "100px", lg: "150px"},
        ...sx,
      }}
    >
      <Stack
        sx={{
          flexDirection: {lg: "row"},
          alignItems: {xs: "center", lg: "flex-end"},
        }}
      >
        <MiniCardTextAndBtn
          stackSx={{
            width: {xs: "100%", sm: "400px", lg: "30%"},
            minWidth: "300px",
          }}
          fisrtBtnText="I"
          text="Interior Doors"
          textSx={{margin: "30px auto"}}
          desc="Viporte doors is a traditional collection of natural solid wood. We
          produce our doors using traditional templates, used by Italian
          designers for centuries. Our factory is designed in accordance with
          european standards, and our experts regularly practise in Germany
          and Italy. We carefully select all the materials and components,
          introduce the newest equipment to create an exclusive product:
          interior doors Viporte!"
          secondBtntext="Catalogue"
          secondBtnUrl="/catalogue"
          secondBtnSx={{width: "130px", marginTop: "80px"}}
        />

        <Stack
          sx={{
            justifyContent: "left",
            alignItems: "flex-end",
            flexDirection: "row",
            margin: {xs: "50px 0", lg: "0"},
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Libre Caslon Text'",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: {xs: "500px", md: "700px"},
              lineHeight: {xs: "340px", md: "470px"},
            }}
          >
            A
          </Typography>
          <Box
            component="img"
            src="https://picsum.photos/200/400"
            sx={{
              width: {xs: "150px", md: "200px"},
              height: {xs: "300px", md: "400px"},
              marginLeft: "-150px",
            }}
          />
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: {xs: "100%", sm: "400px", lg: "25%"},
          margin: {xs: "20px auto", lg: "10px 30px 0 auto"},
        }}
      >
        <Typography variant="h2">MADEIRA</Typography>
        <Typography variant="paragraph" sx={{marginTop: "20px"}}>
          We offer you to appreciate rich decoration of our products: white
          enamel combined with golden patina, aged wood, all shades of tobacco
          and tender Provence. Game of contrasts or soft combination: we will
          find you what decorates your interior!
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AComponent;
