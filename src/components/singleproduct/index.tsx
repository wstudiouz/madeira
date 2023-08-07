import React, {ReactElement, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Stack} from "@mui/system";
import {Typography, Grid} from "@mui/material";
import {DoorListResponseDataItem} from "../../ts/REST/api/generated";
import {getter} from "../../ts/utils/Fetcher";
import ResponsiveImage from "@qubixstudio/sphere/sphere/components/ResponsiveImage";

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
                <ResponsiveImage
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
            <ResponsiveImage
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
    </Stack>
  );
};

export default SingleProduct;
