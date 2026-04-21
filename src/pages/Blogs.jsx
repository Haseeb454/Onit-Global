import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogsData } from "../data/blogsData";
import DreamProject from "../components/DreamProject";

const Blogs = () => {
  const latestInsights = blogsData.slice(0, 3);
  const listBlogs = blogsData.slice(3);
  const trendingPosts = blogsData.slice(1, 4);

  return (
    <div className="bg-white">
      <section className="bg-[#F7FBFF] py-24 text-center">
        <div className="container-wrap">
          <h1 className="text-6xl font-bold text-slate-800">Blogs</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Explore insights, tips, and industry trends from our experts. Stay informed
            <br /> and inspired with the latest in technology and digital innovation.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-12 lg:px-24 text-[#0f172a]">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">Latest Insights</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <Link to={`/blogs/${latestInsights[0].slug}`} className="lg:col-span-2 group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-5">
              <img
                src={latestInsights[0].image}
                alt={latestInsights[0].title}
                className="w-full aspect-[16/9] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 mb-3 tracking-wider uppercase">
              <span>{latestInsights[0].category}</span>
              <span>•</span>
              <span>{latestInsights[0].date}</span>
            </div>
            <h3 className="text-3xl font-bold leading-tight transition-colors group-hover:text-[#e91e63]">
              {latestInsights[0].title}
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mt-3">{latestInsights[0].excerpt}</p>
          </Link>

          <div className="flex flex-col gap-10">
            {latestInsights.slice(1).map((blog) => (
              <Link key={blog.id} to={`/blogs/${blog.slug}`} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full aspect-[16/9] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 mb-2 tracking-wider uppercase">
                  <span>{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                <h4 className="text-[17px] font-bold leading-snug transition-colors group-hover:text-[#e91e63]">
                  {blog.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 border-t border-gray-100 pt-16">
          <div className="lg:w-[65%] flex flex-col gap-14">
            {listBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          <aside className="lg:w-[35%]">
            <h4 className="text-xl font-bold mb-8 border-b-2 border-gray-100 pb-2">Trending posts</h4>
            <div className="space-y-8">
              {trendingPosts.map((blog) => (
                <Link key={blog.id} to={`/blogs/${blog.slug}`} className="flex gap-5 items-center group cursor-pointer">
                  <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h5 className="text-[13px] font-bold leading-tight transition-colors group-hover:text-[#e91e63]">
                    {blog.title}
                  </h5>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <DreamProject />
    </div>
  );
};

export default Blogs;