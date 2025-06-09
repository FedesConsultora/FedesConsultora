// src/components/Blog/NotasList.js
import React, { useState, useEffect } from "react";
import NotaCard from "./NotaCard";
import { getBlogPosts } from "../../services/googleApi";
import { Player } from "@lottiefiles/react-lottie-player";

const NotasList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage, setNotesPerPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogPosts();
        console.log(data);
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updateNotesPerPage = () => {
      if (window.innerWidth >= 1200) {
        setNotesPerPage(6);
      } else if (window.innerWidth >= 800) {
        setNotesPerPage(6);
      } else {
        setNotesPerPage(3);
      }
    };

    updateNotesPerPage();
    window.addEventListener("resize", updateNotesPerPage);
    return () => window.removeEventListener("resize", updateNotesPerPage);
  }, []);

  const sortedNotes = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = sortedNotes.slice(indexOfFirstNote, indexOfLastNote);
  const totalPages = Math.ceil(blogPosts.length / notesPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="blog-loading" style={{ textAlign: "center", padding: "2rem" }}>
        <Player
          autoplay
          loop
          src="/assets/videos/LoadingBlanco.json"
          style={{ height: "300px", width: "300px" }}
        />
      </div>
    );
  }

  return (
    <>
      <section className="contenedor-notas">
        {currentNotes.map((nota) => (
          <NotaCard key={nota.id} nota={nota} />
        ))}
      </section>
      {totalPages > 1 && (
        <div className="paginacion">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`pagina ${currentPage === index + 1 ? "activo" : ""}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default NotasList;
