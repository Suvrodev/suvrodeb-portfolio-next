import { baseApi } from "@/redux/apis/BaseApi/baseApi";

const resumeManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addResume: builder.mutation({
      query: (data) => {
        console.log("In redux: ", data);
        return {
          url: "/resume",
          method: "POST",
          body: data,
        };
      },
    }),
    getSingleResume: builder.query({
      query: (resumeId: string) => {
        return {
          url: `/resume/${resumeId}`,
          method: "GET",
        };
      },
      providesTags: ["resume"],
    }),
    deleteResume: builder.mutation({
      query: (id: string) => {
        return {
          url: `/resume/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["resume"],
    }),
    updateResume: builder.mutation({
      query: ({ _id, updateData }) => {
        console.log("_id in rtk: ", _id);
        console.log("Body in rtk: ", updateData);
        return {
          url: `/resume/update/${_id}`,
          method: "PATCH",
          body: updateData,
        };
      },
      invalidatesTags: ["resume"],
    }),
  }),
});

export const {
  useAddResumeMutation,
  useGetSingleResumeQuery,
  useDeleteResumeMutation,
  useUpdateResumeMutation,
} = resumeManagement;
