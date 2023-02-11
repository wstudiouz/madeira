import {Typography} from "@mui/material";
import {Box, Stack} from "@mui/system";
import React, {ReactElement, Dispatch, SetStateAction} from "react";
import {useNavigate} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import {keyframes} from "@mui/material";

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
};

const Products = ({data, setPage}: ComponentProps): ReactElement => {
  const cardAnimation = keyframes`
  from {
    transform: translateY(30px);
  }
  to {
    transform: translate(0);
  }
`;
  const navigate = useNavigate();
  return (
    <Stack sx={{flexDirection: "row", flexWrap: "wrap", marginTop: "50px", animation: `${cardAnimation} 0.7s ease`,}}>
      {data.get && data.data ? (
        data.data.map((e, ind) => (
          <Stack
            onClick={() => navigate(`/catalogue/${e.id}`)}
            key={ind}
            sx={{
              width: {xs: "47%", sm: "42%", md: "38%", lg: "32%"},
              margin: "20px auto",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={`https://image.tmdb.org/t/p/original${e.poster_path}`}
              sx={{
                "width": "80%",
                "height": "auto",
                "margin": "2px auto",
                "maxWidth": "100%",
                "maxHeight": "100%",
                "display": "inline-block",
                "position": "relative",
                "zIndex": 2,
                "transition": "all 0.3s ease",
                "transformOrigin": "50% 100%",
                "verticalAlign": "middle",
                "transform": "scale(0.97)",
                "&:hover": {
                  transform: "scale(1)",
                },
              }}
            />
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <Typography variant="product">{e.title}</Typography>
              <Typography variant="product">{e.id} $</Typography>
            </Stack>
          </Stack>
        ))
      ) : data.error ? (
        <Typography>error :(</Typography>
      ) : (
        <Typography>Loading...</Typography>
      )}
      {data.data && data.data ? (
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Pagination
            sx={{width: "30%", margin: "0 auto"}}
            onChange={(_, val) => setPage(val)}
            count={data.totalPages}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default Products;
