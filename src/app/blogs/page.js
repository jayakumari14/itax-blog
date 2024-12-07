import Blogs from "@/components/BlogComponents/Blogs/Blogs";
const index = () => {
  return (
    <div>
      <Blogs />
    </div>
  );
};

export default index;

export async function generateMetadata({ params }) {
  return {
    title: "blogs",
  };
}
