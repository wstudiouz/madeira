import React, {ReactElement, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
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
import {DoorListResponseDataItem} from "../../ts/REST/api/generated";
import {getter} from "../../ts/utils/Fetcher";

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
  const [data, setData] = useState<DoorListResponseDataItem>();
  const navigate = useNavigate();
  useEffect(() => {
    const getValues = async () => {
      const doors = await getter(`doors/${id}?populate=mainImg,images`);
      if (doors.ok && doors.data) {
        setData(doors.data);
      } else {
        navigate("/catalogue");
      }
    };
    if (!isNaN(Number(id))) {
      getValues();
    }
  }, [id, navigate]);
  return (
    <Stack sx={{marginTop: {xs: "50px", sm: "70px", md: "100px"}}}>
      <Stack>
        <Typography variant="h3">Madeira</Typography>
        <Typography sx={{marginTop: "10px"}} variant="paragraph">
          {data?.attributes?.shortDescription}
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: {xs: "column-reverse", lg: "row"},
          alignItems: "center",
        }}
      >
        <Stack sx={{width: {xs: "100%", lg: "65%"}, marginTop: "30px"}}>
          <Typography variant="product" sx={{marginBottom: "15px"}}>
            {data?.attributes?.price} $
          </Typography>
          <Grid
            container
            sx={{
              margin: "30px 0",
              display: "flex",
              alignItems: "flex-start",
              overflow: "auto",
            }}
            spacing={{xs: 2, lg: 1}}
          >
            {data?.attributes?.images?.data?.map((e, index) => (
              <Grid key={index} item xs={4} lg={3}>
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BACKEND_URL}${e.attributes?.url}`}
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
              <Typography variant="h4">{data?.attributes?.title}</Typography>
              <Typography variant="paragraph">
                {data?.attributes?.description}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        <Stack sx={{width: {xs: "100%", lg: "30%"}}}>
          {data?.attributes?.mainImg?.data?.attributes?.url && (
            <Box
              component="img"
              src={`${process.env.REACT_APP_BACKEND_URL}${data.attributes.mainImg.data.attributes.url}`}
              sx={{
                width: {xs: "200px", sm: "220px", md: "240px", lg: "252px"},
                height: {xs: "500px", sm: "515px", md: "525px", lg: "534px"},
                margin: {xs: "35px auto", lg: "0 auto"},
              }}
            />
          )}
        </Stack>
      </Stack>
      <Grid container>
        <Grid item md={8} lg={7} sx={{display: {xs: "none", md: "block"}}}>
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
        sx={{
          display: {
            xs: "none",
            md: "block",
            color: theme.palette.secondary.main,
          },
        }}
      >
        Non standard sizes are 2100, 2200, 2300 mm.
      </Typography>
    </Stack>
  );
};

export default SingleProduct;
