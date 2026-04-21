import { Link, useParams } from "react-router-dom";
import { blogsData } from "../data/blogsData";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <section className="min-h-[70vh] bg-[#F7FBFF] flex items-center justify-center px-6">
        <div className="text-center bg-white rounded-2xl p-10 shadow-sm border border-gray-100 max-w-lg w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">
            The article you are looking for does not exist or may have been moved.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#e91e63] text-white font-semibold hover:bg-[#cf1a57] transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-white">
      <header className="bg-[#F7FBFF]">
        <div className="px-6 md:px-12 lg:px-24 py-12">
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-sm">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[260px] md:h-[420px] object-cover"
            />
          </div>
        </div>
      </header>

      <section className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mt-10 mb-4 uppercase tracking-[0.18em]">
            <span>{blog.category}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="h-1 w-20 bg-[#e91e63] rounded-full mb-8" />

          <div className="space-y-6 text-gray-700 text-[17px] leading-8">
            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Link
            to="/blogs"
            className="inline-flex mt-10 items-center text-[#e91e63] font-semibold hover:text-[#cf1a57] transition-colors"
          >
            ← Back to all blogs
          </Link>
        </div>
      </section>
    </article>
  );
};

export default BlogDetailPage;
