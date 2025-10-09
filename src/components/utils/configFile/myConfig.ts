const myConfig = {
  baseApi: process.env.NEXT_PUBLIC_BASE_API,
  accessTokenPath: process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY,
  revalidateTime: process.env.NEXT_PUBLIC_REVELIDATE_TIME,
};

export default myConfig;
