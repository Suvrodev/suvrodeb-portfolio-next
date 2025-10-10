import { baseApi } from "@/redux/apis/BaseApi/baseApi";

const projectManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (data) => {
        console.log("Project data In redux: ", data);
        return {
          url: "/projects",
          method: "POST",
          body: data,
        };
      },
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        console.log("Project id In redux: ", id);
        return {
          url: `/projects/${id}`,
          method: "DELETE",
        };
      },
    }),
    updateProject: builder.mutation({
      query: ({ id, updateData }) => {
        console.log("Project id In redux: ", id);
        return {
          url: `/projects/update/${id}`,
          method: "PATCH",
          body: updateData,
        };
      },
    }),
  }),
});

export const {
  useAddProjectMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectManagement;
