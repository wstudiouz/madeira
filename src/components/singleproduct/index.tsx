import React, {ReactElement, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Box, Stack} from "@mui/system";
import {Typography, Grid} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {theme} from "../../theme";
import MainContainer from "../MainContainer";

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
    <MainContainer>
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
          <Grid container sx={{margin: "30px 0"}} spacing={{xs:2,lg:1}}>
            {"1"
              .repeat(3)
              .split("")
              .map((_, index) => (
                <Grid key={index} item xs={4} lg={2} >
                  <Box
                    component="img"
                    src={`https://picsum.photos/20${index}`}
                    sx={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Grid>
              ))}
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={10} md={7} lg={4}>
              <Typography variant="h4">{data.data.title}</Typography>
              <Typography variant="paragraph">{data.data.overview}</Typography>
            </Grid>
          </Grid>
        </Stack>
        <Stack sx={{width: {xs: "100%", lg: "30%"}}}>
          <Box
            component="img"
            src="https://picsum.photos/200/400"
            sx={{width: "252px", height: "534px", margin: "0 auto"}}
          />
        </Stack>
      </Stack>
     <Grid container>
        <Grid item md={8} lg={7} sx={{display:{xs:"none",md:"block"}}}>
        <TableContainer
        component={Paper}
        sx={{
          background: "none",
          margin: "30px 0",
          width: "100%",
        }}
      >
        <Table sx={{minWidth: 300}} aria-label="simple table">
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
        </Grid>
     </Grid>
      <Typography
        variant="paragraph"
        sx={{display:{xs:"none",md:"block",color: theme.palette.secondary.main}}}
      >
        Non standard sizes are 2100, 2200, 2300 mm.
      </Typography>
    </MainContainer>
  );
};

export default SingleProduct;
