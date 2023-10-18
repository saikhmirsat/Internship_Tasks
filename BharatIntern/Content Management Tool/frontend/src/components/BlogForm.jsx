import React, { useState } from "react";
import axios from "axios";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/blog", {
        title,
        content,
      });
      console.log("Blog post created:", response.data);
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BlogForm;
