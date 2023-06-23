import React, {ReactElement, useCallback, useEffect, useState} from "react";
import MainContainer from "../MainContainer";
import Hero from "./Hero";
import Products from "./Products";
import {
  CategoryListResponseDataItem,
  DoorListResponse,
  DoorListResponseDataItem,
} from "../../ts/REST/api/generated";
import {getter} from "../../ts/utils/Fetcher";

export type StateTypes = {
  get?: boolean;
  data: DoorListResponseDataItem[];
  error?: boolean;
  page?: number;
  totalPages?: number;
};

const Catalogue = (): ReactElement => {
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

  const concater = useCallback(
    (arr: DoorListResponse) => {
      try {
        if (arr.data && arr.meta) {
          const newValues = data.data.concat(arr.data);
          return {newValues, total: arr.meta.pagination?.total};
        }
        return {newValues: data.data, total: data.totalPages};
      } catch {
        return {newValues: data.data, total: data.totalPages};
      }
    },
    [data.data, data.totalPages]
  );

  const selector = (arr: DoorListResponse) => {
    try {
      if (arr.data && arr.meta) {
        return {newValues: arr.data, total: arr.meta.pagination?.total};
      }
      return {newValues: [], total: 1};
    } catch {
      return {newValues: [], total: 1};
    }
  };

  useEffect(() => {
    const getValues = async () => {
      const categories = await getter(
        `doors?filters[category]=${select.id}&populate=images,mainImg`,
        true
      );
      if (categories.ok && categories.data) {
        const {newValues, total} = selector(categories.data);
        setData({
          data: newValues,
          get: true,
          page: page,
          totalPages: total,
        });
      }
    };

    if (select.id && select.type == 1) {
      getValues();
    }
  }, [select, page]);

  useEffect(() => {
    const getValues = async () => {
      const doors = await getter(
        `doors?pagination[page]=${page}&pagination[pageSize]=20&populate=images,mainImg`,
        true
      );
      if (doors.ok && doors.data && doors.data) {
        const {newValues, total} = concater(doors.data);
        setData({
          data: newValues,
          get: true,
          page: page,
          totalPages: total,
        });
      } else {
        setData({
          error: true,
          data: [],
        });
      }
    };
    getValues();
  }, [concater, page]); //funksiyani depend listga qandey beraman :(

  const [category, setCategory] = useState<CategoryListResponseDataItem[]>();

  useEffect(() => {
    const getValues = async () => {
      const categories = await getter("categories?fields=title");
      if (categories.ok && categories.data) {
        setCategory(categories.data);
      }
    };
    getValues();
  }, []);

  return (
    <MainContainer>
      {category && <Hero category={category} setState={setSelect} />}
      <Products data={data} setPage={setPage} page={page} />
    </MainContainer>
  );
};

export default Catalogue;
