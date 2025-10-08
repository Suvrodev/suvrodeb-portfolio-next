import { baseApi } from "../../apis/BaseApi/baseApi";

const authManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => {
        console.log("User data In redux for Registration: ", data);
        return {
          url: "/user/reg",
          method: "POST",
          body: data,
        };
      },
    }),
    login: builder.mutation({
      query: (data) => {
        console.log("User data In redux for Login: ", data);
        return {
          url: "/auth",
          method: "POST",
          body: data,
        };
      },
    }),

    getAllUser: builder.mutation({
      query: ({ id, updateData }) => {
        console.log("Blog id In redux: ", id);
        return {
          url: `/blog/update/${id}`,
          method: "PATCH",
          body: updateData,
        };
      },
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useGetAllUserMutation,
} = authManagement;
