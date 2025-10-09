import { baseApi } from "../../apis/BaseApi/baseApi";

const authManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => {
        console.log("User data In redux: ", data);
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

    deleteUser: builder.mutation({
      query: (email) => {
        console.log("delete user mail in rtk: ", email);
        return {
          url: `/user/${email}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useDeleteUserMutation,
} = authManagement;
