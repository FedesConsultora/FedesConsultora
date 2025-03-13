import React, { useState, useEffect } from "react";
import NotaCard from "./NotaCard";
import blogData from "../../data/blogData";

const NotasList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage, setNotesPerPage] = useState(3);

  // Función para actualizar la cantidad de notas por página según la pantalla
  useEffect(() => {
    const updateNotesPerPage = () => {
      if (window.innerWidth >= 1200) {
        setNotesPerPage(6); // Desktop grande (3 columnas)
      } else if (window.innerWidth >= 800) {
        setNotesPerPage(6); // Tablet / Laptop (2 columnas)
      } else {
        setNotesPerPage(3); // Móvil (1 columna)
      }
    };

    updateNotesPerPage(); // Ejecutar al montar
    window.addEventListener("resize", updateNotesPerPage);
    return () => window.removeEventListener("resize", updateNotesPerPage);
  }, []);

  // Ordenar las notas por fecha (más recientes primero)
  const sortedNotes = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Calcular las notas que se mostrarán en la página actual
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = sortedNotes.slice(indexOfFirstNote, indexOfLastNote);

  // Calcular total de páginas y actualizar botones de paginación
  const totalPages = Math.ceil(blogData.length / notesPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
        <section className="contenedor-notas">
        {currentNotes.map((nota) => (
            <NotaCard key={nota.id} nota={nota} />
        ))}

        
        </section>
        {/* Controles de paginación */}
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
