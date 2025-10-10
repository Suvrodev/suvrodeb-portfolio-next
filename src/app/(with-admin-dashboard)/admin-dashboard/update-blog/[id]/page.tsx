import UpdateBlog from "@/components/modules/AdminDashboard/Blog/UpdateBlog/UpdateBlog";
import { TBlog } from "@/components/types/globalTypes";
import myConfig from "@/components/utils/configFile/myConfig";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}
const UpdateBlogPage = async ({ params }: IProps) => {
  const id = (await params)?.id;
  const res = await fetch(`${myConfig.baseApi}/blog/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blog: TBlog = data?.data;
  console.log("Blog: ", blog);
  return (
    <div>
      <UpdateBlog blog={blog} />
    </div>
  );
};

export default UpdateBlogPage;
