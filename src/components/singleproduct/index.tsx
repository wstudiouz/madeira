import React, {ReactElement, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Box, Stack} from "@mui/system";
import {Typography} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {theme} from "../../theme";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return {name, calories, fat, carbs, protein};
}

const rows = [
  createData("Plank", 159, 6.0, 24, 4.0),
  createData("Case", 237, 9.0, 37, 4.3),
  createData("Aperture", 262, 16.0, 24, 6.0),
];

const SingleProduct = (): ReactElement => {
  const {id} = useParams();
  interface ObjectTypes {
    [key: string]: string;
  }

  type StateTypes = {
    get?: boolean;
    data: ObjectTypes;
    error?: boolean;
  };
  const [data, setData] = useState<StateTypes>({
    get: false,
    data: {},
    error: false,
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=16bebfc50341cc543211465e5af7fc48`
    )
      .then((res) => res.json())
      .then((result) => setData({data: result, get: true}))
      .catch(() => setData({error: true, data: {}}));
  }, [id]);
  return (
    <Stack
      sx={{
        margin: {
          xs: "30px 10px 30px 10px",
          sm: "30px 30px 30px 30px",
          md: "30px 50px 30px 50px",
          lg: "30px 60px 30px 60px",
          xl: "30px 70px 30px 70px",
        },
      }}
    >
      <Stack sx={{marginBottom: {xs: "30px", lg: "-50px"}}}>
        <Typography variant="h3">Madeira</Typography>
        <Typography variant="paragraph">solid ash</Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: {xs: "column-reverse", lg: "row"},
          alignItems: "center",
        }}
      >
        <Stack sx={{width: {xs: "100%", lg: "65%"}}}>
          <Typography variant="product">{data.data.id} $</Typography>
          <Stack
            sx={{flexDirection: "row", flexWrap: "wrap", margin: "30px 0"}}
          >
            {"1"
              .repeat(3)
              .split("")
              .map((_, index) => (
                <Box
                  key={index}
                  component="img"
                  src={`https://picsum.photos/20${index}`}
                  sx={{
                    width: "200px",
                    height: "auto",
                    margin: "5px 15px",
                  }}
                />
              ))}
          </Stack>
          <Typography variant="h4">{data.data.title}</Typography>
          <Typography variant="paragraph">{data.data.overview}</Typography>
        </Stack>
        <Stack sx={{width: {xs: "100%", lg: "30%"}}}>
          <Box
            component="img"
            src="https://picsum.photos/200/400"
            sx={{width: "252px", height: "534px", margin: "0 auto"}}
          />
        </Stack>
      </Stack>
      <TableContainer
        component={Paper}
        sx={{
          background: "none",
          margin: "30px 0",
          width: {xs: "100%", lg: "70%", xl: "60%"},
        }}
      >
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>type</TableCell>
              <TableCell align="right">width</TableCell>
              <TableCell align="right">height</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant="paragraph"
        sx={{color: theme.palette.secondary.main}}
      >
        Non standard sizes are 2100, 2200, 2300 mm.
      </Typography>
    </Stack>
  );
};

export default SingleProduct;
