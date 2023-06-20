import {HomePageApi} from "../REST/api/generated";

type Props = {
  endPoint: HomePageApi; //altype yoziladi
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

export const getWithEndPoint = async ({endPoint, populate}: Props) => {
  const fetchData = async () => {
    try {
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
      return {
        ok: true,
        msg: "",
        result: data?.data,
      };
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

export const getter = async (url: string) => {
  const result = {ok: false, data: null, msg: ""};

  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/${url}`
    );
    const data = await response.json();

    if (data.data) {
      result.ok = true;
      result.data = data.data.attributes;
      result.msg = "ok";
    } else {
      result.ok = false;
      result.data = null;
      result.msg = data.error.message;
    }
  } catch (error) {
    result.ok = false;
    result.data = null;
    result.msg = String(error);
  }

  return result;
};
type fetchHeader = {
  user_id: number;
  user_role: number;
};
// export const poster = async (
//   url: string,
//   body: any,
//   user?: fetchHeader | null
// ) => {
//   const result = {ok: false, data: null, msg: ""};

//   try {
//     const headers: Record<string, string> = {
//       "Content-Type": "application/json",
//     };

//     if (user) {
//       // Add user_id and user_role headers if user is true
//       headers["user_id"] = String(user.user_id);
//       headers["user_role"] = String(user.user_role);
//     }
//     const response = await fetch(
//       `${process.env.REACT_APP_BACKEND_URL}/${url}`,
//       {
//         method: "POST",
//         headers,
//         body: JSON.stringify(body),
//       }
//     );
//     const data = await response.json();

//     if (data.ok) {
//       result.ok = true;
//       result.data = data.data;
//       result.msg = data.message;
//     } else {
//       result.ok = false;
//       result.data = null;
//       result.msg = data.message;
//     }
//   } catch (error) {
//     result.ok = false;
//     result.data = null;
//     result.msg = String(error);
//   }

//   return result;
// };

export const destroyer = async (
  url: string,
  id: number | string,
  user?: fetchHeader | null
) => {
  const result = {ok: false, data: null, msg: ""};

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (user) {
      // Add user_id and user_role headers if user is true
      headers["user_id"] = String(user.user_id);
      headers["user_role"] = String(user.user_role);
    }
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/${url}/delete/${id}`,
      {
        method: "delete",
        headers,
      }
    );

    const data = await response.json();

    if (data.ok) {
      result.ok = true;
      result.data = data.data;
      result.msg = data.message;
    } else {
      result.ok = false;
      result.data = null;
      result.msg = data.message;
    }
  } catch (error) {
    result.ok = false;
    result.data = null;
    result.msg = String(error);
  }

  return result;
};

// export const putter = async (
//   url: string,
//   body: any,
//   id: number | string | undefined,
//   user?: fetchHeader | null
// ) => {
//   const result = {ok: false, data: null, msg: ""};

//   try {
//     const headers: Record<string, string> = {
//       "Content-Type": "application/json",
//     };

//     if (user) {
//       // Add user_id and user_role headers if user is true
//       headers["user_id"] = String(user.user_id);
//       headers["user_role"] = String(user.user_role);
//     }
//     const response = await fetch(
//       `${process.env.REACT_APP_BACKEND_URL}/${url}/update/${id}`,
//       {
//         method: "PUT",
//         headers,
//         body: JSON.stringify(body),
//       }
//     );
//     const data = await response.json();

//     if (data.ok) {
//       result.ok = true;
//       result.data = data.data;
//       result.msg = data.message;
//     } else {
//       result.ok = false;
//       result.data = null;
//       result.msg = data.message;
//     }
//   } catch (error) {
//     result.ok = false;
//     result.data = null;
//     result.msg = String(error);
//   }

//   return result;
// };
