import config from "@/components/utils/configFile/config";
import errotToast from "@/components/utils/svg/Toast/errorToast";
import { okToast } from "@/components/utils/svg/Toast/toast";
import { baseApiVar } from "@/components/utils/Variable/baseApiVar";
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: process.env.BASE_URL,
  // baseUrl: "http://localhost:5000/api",
  // baseUrl: config.baseApi,
  baseUrl: baseApiVar,
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
    // errotToast(result?.error?.data?.message);
    okToast(result?.error?.data?.message);
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["message", "blog", "project", "resume"],
});
