import React, {
  useMemo, useRef, useState, useEffect, useLayoutEffect, useCallback
} from 'react';

const TEAM = [
  { name: 'Andre Coronel Vargas',  role: 'Analista Multimedia',                  photo: 'https://fedes.ai/fedes-consultora/landing/foto_andre.webp',   linkedin: 'https://www.linkedin.com/in/andr%C3%A9-wilber-coronel-vargas/' },
  { name: 'Mateo Germano',         role: 'Analista Multimedia',                  photo: 'https://fedes.ai/fedes-consultora/landing/foto_mateo.webp',   linkedin: 'https://www.linkedin.com/in/mateo-germano-898b872b1/' },
  { name: 'Gonzalo Cañibano',      role: 'Analista de Cuentas',                  photo: 'https://fedes.ai/fedes-consultora/landing/foto_gonzalo.webp', linkedin: 'https://www.linkedin.com/in/gonzalo-canibano-a703872a/' },
  { name: 'Enzo Pinotti',          role: 'Desarrollador',                        photo: 'https://fedes.ai/fedes-consultora/landing/foto_enzo.webp',    linkedin: 'https://www.linkedin.com/in/enzo-daniel-pinotti-667270179/' },
  { name: 'Florencia Marchesotti', role: 'Analista en Diseño',                   photo: 'https://fedes.ai/fedes-consultora/landing/foto_flor.webp',    linkedin: 'https://www.linkedin.com/in/florencia-marchesotti-7570a3212/' },
  { name: 'Romina Albanesi',       role: 'Comunicación y Redacción',             photo: 'https://fedes.ai/fedes-consultora/landing/foto_romi.webp',    linkedin: 'https://www.linkedin.com/in/rominaalbanesi/' },
  { name: 'Paola Lopez',           role: 'Analista de Cuentas',                  photo: 'https://fedes.ai/fedes-consultora/landing/foto_paola.webp',   linkedin: 'https://www.linkedin.com/in/paola-alejandra-lópez-6117969/' },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0h4.8v2.05h.07c.67-1.2 2.31-2.47 4.76-2.47 5.09 0 6.03 3.35 6.03 7.7V23H18V16.1c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.79-2.65 3.65V23H7.5V8z"
    />
  </svg>
);

export default function TeamCarousel() {
  const LOOP = useMemo(() => [...TEAM, ...TEAM, ...TEAM], []);
  const containerRef = useRef(null);
  const trackRef     = useRef(null);

  const [paused, setPaused] = useState(false);
  const draggingRef         = useRef(false);

  const posRef      = useRef(0);
  const cycleRef    = useRef(0);
  const startXRef   = useRef(0);
  const startPosRef = useRef(0);
  const rafRef      = useRef(null);
  const lastTsRef   = useRef(0);

  // ↑ “un poco más rápido”
  const speedRef    = useRef(36); // px/seg

  const normalize = useCallback((x) => {
    const C = cycleRef.current || 0;
    if (!C) return x;
    const min = -2 * C, max = 0;
    const span = max - min;
    let t = (x - min) % span;
    if (t < 0) t += span;
    return min + t;
  }, []);

  const applyTransform = useCallback((x) => {
    if (trackRef.current) trackRef.current.style.transform = `translateX(${x}px)`;
  }, []);

  const measureCycle = useCallback(() => {
    if (!trackRef.current) return;
    const total = trackRef.current.scrollWidth;
    if (!total) return;
    const C = Math.max(1, Math.round(total / 3));
    cycleRef.current = C;
    posRef.current = posRef.current === 0 ? -C : normalize(posRef.current);
    applyTransform(posRef.current);
  }, [applyTransform, normalize]);

  useLayoutEffect(() => {
    measureCycle();
    let ro;
    if ('ResizeObserver' in window && trackRef.current) {
      ro = new ResizeObserver(measureCycle);
      ro.observe(trackRef.current);
    }
    const onResize = () => measureCycle();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      ro && ro.disconnect();
    };
  }, [measureCycle]);

  const step = useCallback((ts) => {
    if (!trackRef.current) return;
    if (draggingRef.current || paused) {
      lastTsRef.current = ts;
      rafRef.current = requestAnimationFrame(step);
      return;
    }
    const dt = lastTsRef.current ? (ts - lastTsRef.current) / 1000 : 0;
    lastTsRef.current = ts;
    if (!cycleRef.current) {
      rafRef.current = requestAnimationFrame(step);
      return;
    }
    let next = posRef.current - speedRef.current * dt;
    next = normalize(next);
    posRef.current = next;
    applyTransform(next);
    rafRef.current = requestAnimationFrame(step);
  }, [applyTransform, normalize, paused]);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    lastTsRef.current = 0;
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [step]);

  // Evitar “arrancar drag” si clickean el botón/ícono de LinkedIn
  const isOnLink = (target) => !!target.closest?.('a');

  const onPointerDown = useCallback((e) => {
    if (isOnLink(e.target)) return;        // click normal en el link
    const el = containerRef.current;
    if (!el) return;
    draggingRef.current = true;
    setPaused(true);
    startXRef.current   = e.clientX ?? 0;
    startPosRef.current = posRef.current;
    el.classList.add('is-dragging');
    el.setPointerCapture?.(e.pointerId);
    // Evita selección por seguridad
    e.preventDefault();
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!draggingRef.current) return;
    const clientX = e.clientX ?? 0;
    const dx = clientX - startXRef.current;
    let next = startPosRef.current + dx;
    next = normalize(next);
    posRef.current = next;
    applyTransform(next);
  }, [applyTransform, normalize]);

  const onPointerUp = useCallback((e) => {
    const el = containerRef.current;
    if (!draggingRef.current || !el) return;
    draggingRef.current = false;
    el.classList.remove('is-dragging');
    el.releasePointerCapture?.(e.pointerId);
    setPaused(false);
  }, []);

  return (
    <section className="teamCarouselSection" role="region" aria-label="Equipo Fedes">
      <article className="equipoHeader">
        <p>Equipo</p>
        <img
          src="https://fedesagency.com/fedes-consultora/landing/lineaChicaNegra.svg"
          alt="Detalle"
          loading="lazy"
        />
      </article>

      <article className="equipoInfo">
        <h2 className="equipoTitulo" aria-label="El equipo que impulsa el crecimiento de cada marca">
          <span className="muted">El equipo que </span>
          <span className="highlight">impulsa</span>
          <span className="muted"> el crecimiento de cada </span>
          <span className="highlight">marca</span>
        </h2>

        <div
          className={`teamCarousel ${paused ? 'is-paused' : ''}`}
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onDragStart={(e) => e.preventDefault()}
        >
          <div className="teamTrack" ref={trackRef} aria-live="off">
            {LOOP.map((m, i) => (
              <article
                className="memberCard"
                key={`${m.name}-${i}`}
                tabIndex={0}
                aria-label={`${m.name}, ${m.role}`}
                style={{ '--i': i % TEAM.length }}
              >
                <div className="avatarWrap">
                  <img
                    className="avatar"
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    draggable="false"
                  />
                </div>

                <div className="cardBody">
                  <h3 className="memberName">{m.name}</h3>
                  <p className="memberRole">{m.role}</p>

                  {m.linkedin ? (
                    <a
                      className="btnLinkedIn"
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver LinkedIn de ${m.name}`}
                    >
                      <LinkedInIcon />
                      <span>Ver LinkedIn</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
