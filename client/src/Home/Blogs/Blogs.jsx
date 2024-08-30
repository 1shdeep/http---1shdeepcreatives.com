import React from "react";
import "./Blogs.css";

import img from "../../Assets/About/1shdeep.jpg";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Vanshdeep Singh Sisodia’s ride from a would-be Engineer to a successful Content Creator.",
      source: "The Statesman",
      date: "3 Sept 2022",
      image: { img }, // Replace with actual image path or URL
    },
    {
      id: 2,
      title:
        "Photography has no bounds and so does any passionate photographer: The story of...",
      source: "Mid-day",
      date: "9 May 2022",
      image: { img }, // Replace with actual image path or URL
    },
    {
      id: 3,
      title:
        "Is content creation on social media all about fun and play? Vanshdeep Sisodia weighs in",
      source: "India TV News",
      date: "3 Jan 2023",
      image: { img }, // Replace with actual image path or URL
    },
    {
      id: 4,
      title:
        "Duke of Photography: Journey of Vanshdeep Sisodia Towards Success Amid Hardships",
      source: "Influencive",
      date: "6 Jul 2021",
      image: { img }, // Replace with actual image path or URL
    },
  ];

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
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-meta">
              {blog.source} • {blog.date}
            </p>
          </div>
          <div className="blog-image">
            <img src={img} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogSection;
