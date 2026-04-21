import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      className="group flex flex-col md:flex-row gap-8 items-start cursor-pointer"
    >
      <div className="w-full md:w-[300px] flex-shrink-0 overflow-hidden rounded-xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full aspect-[4/3] object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
          <span>{blog.category}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 leading-tight transition-colors group-hover:text-[#e91e63]">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-[15px] leading-relaxed">{blog.excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
