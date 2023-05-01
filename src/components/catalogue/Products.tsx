import {Typography, Grid} from "@mui/material";
import {Box, Stack} from "@mui/system";
import React, {ReactElement, Dispatch, SetStateAction} from "react";
import {useNavigate} from "react-router-dom";
import {keyframes} from "@mui/material";
import { theme } from "../../theme";

interface ObjectTypes {
  [key: string]: string;
}

type StateTypes = {
  get?: boolean;
  data?: Array<ObjectTypes>;
  error?: boolean;
  page?: number;
  totalPages?: number;
};

type ComponentProps = {
  data: StateTypes;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
};

const Products = ({data, setPage, page}: ComponentProps): ReactElement => {
  const cardAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  const navigate = useNavigate();
  return (
    <Stack sx={{width: "100%", marginTop: "50px"}}>
      <Grid
        container spacing={3} 
      >
        {data.get && data.data ? (
          data.data.map((e, ind) => (
            <Grid item xs={12} md={6} lg={4}
              onClick={() => navigate(`/catalogue/${e.id}`)}
              key={ind}
              sx={{
                "width": "100%",
                "maxWidth": "410px",
                "minWidth": "200px",
                "paddingBottom": "30px",
                "opacity": 0,
                "animation": `${cardAnimation} 0.5s 0.3s ease forwards`,
                "&:hover": {
                  "& img": {
                    transition: "all 0.5s ease",
                    transform: "scale(1)",
                  },
                  "& div span:nth-of-type(1)": {
                    transform: "translate3d(-10px, 0, 0)",
                  },
                  "& div span:nth-of-type(3)": {
                    transform: "translate3d(-10px, 0, 0)",
                  },
                  "& div span:nth-of-type(2)": {
                    transform: "translate3d(10px, 0, 0)",
                  },
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  height: "360px",
                  display: "block",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={`https://image.tmdb.org/t/p/original${e.poster_path}`}
                  sx={{
                    marginTop: "-10px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "inline-block",
                    position: "relative",
                    zIndex: 2,
                    transition: "all 0.3s ease",
                    transformOrigin: "50% 100%",
                    verticalAlign: "middle",
                    transform: "scale(0.97)",
                  }}
                />
              </Box>
              <Stack
                sx={{
                  marginTop: "27px",
                  paddingLeft: "40px",
                  paddingRight: "100px",
                  position: "relative",
                }}
              >
                <Typography
                  variant="product"
                  sx={{
                    "display": "block",
                    "fontSize": "18px",
                    "lineHeight": "1.57em",
                    fontFamily: "'Libre Caslon Text'",
                    "textTransform": "uppercase",
                    "color": theme.palette.secondary.main,
                    "letterSpacing": "0.2em",
                    "transition": "all 0.3s ease",
                    "position": "relative",
                    "&::before": {
                      content: '""',
                      width: "30px",
                      height: "1px",
                      display: "block",
                      position: "absolute",
                      left: "-40px",
                      top: "8px",
                      transformOrigin: "100% 50%",
                      transition: "all 0.3s ease",
                      background: theme.palette.secondary.main,
                    },
                  }}
                >
                  {e.title.substring(0, 15)}
                </Typography>
                <Typography
                  variant="product"
                  sx={{
                    fontSize: "15px",
                    display: "block",
                    color: theme.palette.primary.main,
                    position: "absolute",
                    top: "5px",
                    right: "0",
                    whiteSpace: "nowrap",
                    lineHeight: 1,
                    transition: "all 0.3s ease",
                    fontFamily: "'Libre Caslon Text'",
                  }}
                >
                  {e.id} $
                </Typography>
                <Typography
                  variant="product"
                  sx={{
                    display: "block",
                    fontSize: "15px",
                    fontFamily: "'Roboto'",
                    fontWeight:400,
                    color: theme.palette.primary.contrastText,
                    transition: "all 0.3s ease",
                  }}
                >
                  solid ash
                </Typography>
              </Stack>
            </Grid>
          ))
        ) : data.error ? (
          <Typography sx={{textAlign:"center",margin:"0 auto"}}>error :(</Typography>
        ) : (
          <Typography sx={{textAlign:"center",margin:"0 auto"}}>Loading...</Typography>
        )}
      </Grid>
      {data.get && data.data ? (
        <Stack onClick={() => setPage(page + 1 - 0)}>more</Stack>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default Products;
