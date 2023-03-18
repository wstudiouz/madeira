import {Stack} from "@mui/system";
import React, {ReactElement, useEffect, useState} from "react";
import MainContainer from "../MainContainer";
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
    totalPages: 1,
  });
  const [select, setSelect] = useState<{
    id: number | boolean;
    type: number | boolean;
  }>({id: false, type: false});
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=16bebfc50341cc543211465e5af7fc48&page=${page}`
    )
      .then((res) => res.json())
      .then((result) => {
        const value = data.data?.concat(result.results);
        setData({
          data: value,
          get: true,
          page: result.page,
          totalPages: result.total_pages > 500 ? 500 : result.total_pages,
        });
      })
      .catch(() => setData({error: true}));
  }, [page]); // nima deb warning chiqaryabdi chunmadim shunga

  return (
    <MainContainer>
      <Hero setState={setSelect} />
      <Products data={data} setPage={setPage} page={page} />
    </MainContainer>
  );
};

export default Catalogue;
