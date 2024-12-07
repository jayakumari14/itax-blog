import BlogIndividualPage from "@/components/BlogComponents/Blogs/BlogIndividualPage";

const index = ({ params }) => {
  return (
    <div>
      <BlogIndividualPage params={params} />
    </div>
  );
};

export default index;
