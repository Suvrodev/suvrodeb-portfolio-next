import config from "@/components/utils/configFile/myConfig";
import errotToast from "@/components/utils/Toast/errorToast";
import { RootState } from "@/redux/store";
// import { baseApiVar } from "@/components/utils/Variable/baseApiVar";
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: config.baseApi,
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const user = (getState() as RootState).auth.user;
    console.log("User in base api: ", user);
    const token = (getState() as RootState).auth.token;
    console.log("*****************Token: ", token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = async (args, api, extraOptions): Promise<any> => {
  // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
  let result: any = await baseQuery(args, api, extraOptions);
  console.log("Result in In Custom Base Query: ", result);

  if (result?.error?.status === 404 || result?.error?.status === 403) {
    errotToast(result?.error?.data?.message);
  }

  if (result?.error?.status === 500) {
    errotToast(result?.error?.data?.message);
  }
  if (result?.error?.status === 400) {
    errotToast(result?.error?.data?.message);
  }

  if (result.error?.status === 401) {
    errotToast(result?.error?.data?.message);
  }
  if (result.error?.status === 409) {
    errotToast(result?.error?.data?.message);
    // okToast(result?.error?.data?.message);
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["message", "blog", "project", "resume"],
});
