// src/components/Blog/ArticleLayout.js
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { getBlogPosts } from '../../services/googleApi';
import { Player } from '@lottiefiles/react-lottie-player';
import { formatDateEs } from '../../utils/formatDate';

const ArticleLayout = ({ id, blocks, accent }) => {
  const ref = useRef(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar el post por ID desde la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogPosts();
        const found = data.find((p) => p.id === id);
        setPost(found || null);
      } catch (err) {
        console.error('Error al cargar el post:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Animación con Intersection Observer
  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll('.notaCard') || [];

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('show')) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, [loading]);

  if (loading || !post) {
    return (
      <main className="blogArticleSection">
        <article className="articleCard">
          <div className="blog-loading" style={{ textAlign: 'center', padding: '3rem' }}>
            <Player
              autoplay
              loop
              src="/assets/videos/Loading.json"
              style={{ height: '280px', width: '280px' }}
            />
          </div>
        </article>
      </main>
    );
  }

  return (
    <main
      className="blogArticleSection"
      style={accent ? { '--accent': accent } : undefined}
    >
      <article className="articleCard">
        {/* Imagen de portada */}
        <figure className="heroImage">
          <img src={post.image} alt={post.title} loading="eager" />
        </figure>

        {/* Título, autor y descripción */}
        <div className="articleIntro">
          <div className="metaLine">
            <p className="fecha">{formatDateEs(post.date)}</p>
            <div className="autor">
              {post.authorImg && (
                <img
                  src={post.authorImg}
                  alt={post.author}
                  className="authorImage"
                  loading="lazy"
                />
              )}
              <p className="authorName">{post.author}</p>
            </div>
          </div>

          <h1 className="articleTitle">{post.title}</h1>
          <p className="descripcion">{post.description}</p>
        </div>

        {/* Contenido de los bloques */}
        <div className="gridNotas" ref={ref}>
          {blocks.map(({ id, span = 1, icono, texto, destacado, dobleCol, step }) => (
            <section
              key={id}
              className={
                'notaCard' +
                (destacado ? ' destacado' : '') +
                (dobleCol ? ' dobleCol' : '') +
                (step ? ' pasoCard' : '')
              }
              style={{ gridColumn: `span ${span}` }}
            >
              <div className="icono">{icono}</div>

              {destacado ? (
                texto.split('. ').map((f, i) => (
                  <p key={i} className="sentence">
                    {f.trim()}
                    {f.trim().endsWith('.') ? '' : '.'}
                  </p>
                ))
              ) : (() => {
                const [titulo, ...resto] = texto.split('\n');
                const fullText = resto.length ? resto.join('\n') : titulo;
                const containsHtml = /<\/?[a-z][\s\S]*>/i.test(fullText);

                return (
                  <>
                    {resto.length ? <h3 className="blockTitle">{titulo}</h3> : null}
                    {containsHtml ? (
                      <p dangerouslySetInnerHTML={{ __html: fullText }} />
                    ) : (
                      <p>
                        {fullText.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    )}
                  </>
                );
              })()}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
};

ArticleLayout.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  accent: PropTypes.string,
};

export default ArticleLayout;
