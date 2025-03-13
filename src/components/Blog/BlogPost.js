import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import "../styles/_blog.scss";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Publicación no encontrada</h2>;

  return (
    <main className="blog-post">
      <h1>{post.title}</h1>
      <p className="fecha">{new Date(post.date).toLocaleDateString()}</p>
      <img src={post.image} alt={post.title} loading="lazy" />
      <p className="descripcion">{post.description}</p>
    </main>
  );
};

export default BlogPost;
