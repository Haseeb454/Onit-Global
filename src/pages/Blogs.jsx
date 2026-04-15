import BlogPage from "../components/BlogPage";
import DreamProject from "../components/DreamProject";
const Blogs = () => {
    return (
      <div className="bg-white">
        {/* Services Hero Section */}
        <section className="bg-[#F7FBFF] py-24 text-center">
          <div className="container-wrap">
            <h1 className="text-6xl font-bold text-slate-800">
             Blogs
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Explore insights, tips, and industry trends from our experts. Stay informed <br /> and inspired with the latest in technology and digital innovation.            </p>
          </div>
        </section>
    <BlogPage/>
    <DreamProject/>     
        
   
      </div>
    );
  };
  export default Blogs;