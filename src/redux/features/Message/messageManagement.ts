import { baseApi } from "@/redux/apis/BaseApi/baseApi";

const messageManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => {
        console.log("In redux: ", data);
        return {
          url: "/message",
          method: "POST",
          body: data,
        };
      },
    }),
    getMessage: builder.query({
      query: () => {
        return {
          url: "/message",
          method: "GET",
        };
      },
      providesTags: ["message"],
    }),
    delteMessage: builder.mutation({
      query: (id: string) => {
        return {
          url: `/message/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["message"],
    }),
    updateMessage: builder.mutation({
      query: ({ _id, updateData }) => {
        return {
          url: `/message/update/${_id}`,
          method: "PATCH",
          body: updateData,
        };
      },
      invalidatesTags: ["message"],
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetMessageQuery,
  useDelteMessageMutation,
  useUpdateMessageMutation,
} = messageManagement;
