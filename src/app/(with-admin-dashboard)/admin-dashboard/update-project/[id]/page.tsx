import UpdateProject from "@/components/modules/AdminDashboard/Project/UpdateProject/UpdateProject";
import { TProject } from "@/components/types/globalTypes";
import myConfig from "@/components/utils/configFile/myConfig";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}
const UpdateBlogPage = async ({ params }: IProps) => {
  const id = (await params)?.id;
  const res = await fetch(`${myConfig.baseApi}/projects/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const project: TProject = data?.data;
  console.log("project: ", project);
  return (
    <div>
      <UpdateProject project={project} />
    </div>
  );
};

export default UpdateBlogPage;
