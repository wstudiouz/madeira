import {Stack} from "@mui/system";
import React, {ReactElement, useEffect, useState} from "react";
import Hero from "./Hero";
import Products from "./Products";

const Catalogue = (): ReactElement => {
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
  const [data, setData] = useState<StateTypes>({
    get: false,
    data: [],
    error: false,
    page: 1,
    totalPages: 1
  });
  const [select, setSelect] = useState<{id:number | boolean,type: number | boolean}>({id:false, type: false});
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=16bebfc50341cc543211465e5af7fc48&page=${page}`
    )
      .then((res) => res.json())
      .then((result) => setData({data: result.results, get: true, page: result.page, totalPages: result.total_pages >500 ? 500 : result.total_pages}))
      .catch(() => setData({error: true}));
  }, [page]);
  
  console.log(select)

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
      <Hero setState={setSelect} />
      <Products data={data} setPage={setPage} />
    </Stack>
  );
};

export default Catalogue;
