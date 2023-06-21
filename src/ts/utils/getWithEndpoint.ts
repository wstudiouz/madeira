import {
  AboutPageApi,
  AboutPageListResponseDataItem,
  HomePageApi,
  HomePageListResponseDataItem,
} from "../REST/api/generated";

type Props = {
  endPoint: HomePageApi | AboutPageApi; //altype yoziladi
  populate: string[];
};

type objKeys = {
  [key: string]: string;
};

const populateparams = (arr: string[]) => {
  const result: objKeys = {};
  arr.map((i, index) => {
    result[`populate[${index}]`] = i;
  });
  return result;
};

type result = {
  ok: boolean;
  msg: string;
  result:
    | HomePageListResponseDataItem[]
    | AboutPageListResponseDataItem[]
    | undefined;
};

export const getWithEndPoint = async ({endPoint, populate}: Props) => {
  const fetchData = async () => {
    try {
      const result: result = {
        ok: false,
        msg: "",
        result: undefined,
      };
      if ("getHomePage" in endPoint) {
        const {data} = await endPoint.getHomePage(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          {
            params: populateparams(populate),
          }
        );
        result.ok = true;
        result.result = data.data;
      }
      if ("getAboutPage" in endPoint) {
        const {data} = await endPoint.getAboutPage(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          {
            params: populateparams(populate),
          }
        );
        result.ok = true;
        result.result = data.data;
      }
      return result;
    } catch (e) {
      return {
        ok: false,
        msg: String(e),
        result: null,
      };
    }
  };

  const data = await fetchData();

  return data;
};
