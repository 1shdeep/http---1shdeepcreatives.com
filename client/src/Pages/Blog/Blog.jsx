import "./Blog.css";
import { getBlogList } from "../../services/blogService";
import React, { useEffect, useState } from "react";

const Blog = () => {
  
  const [blogs, setBlogs] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchBlogs();
    }
  }, [isDataFetched]);

  const fetchBlogs = async () => {
    try {
      const blogsData = await getBlogList();
      setBlogs(blogsData.data);
      setIsDataFetched(true);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <section id="Blogs" className="blog-section">
      <div className="blogs-head container">
        <h2>OUR BLOGS</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
      </div>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <div className="blog-content">
            <h2 className="blog-title">{blog.content}</h2>
            <p className="blog-meta">
              {blog.author} • {blog.updatedAt}
            </p>
          </div>
          <div className="blog-image">
            <img src={blog.imageUrl} alt="" style={{ width: '100px', height: '100px' }} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Blog;
