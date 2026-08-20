const NS = window.CasaJaguarDesignSystem_ef4a47;
const { Button, Eyebrow, Wordmark, Field, ProjectCard } = NS;
const { useState, useEffect } = React;

const A = './assets';
const MARK = A + '/brand/logo-mark.png';
const LOGO = A + '/brand/logo.png';
const LOGOTIPO = A + '/brand/logotipo.svg';
const LOGOTIPO_CREAM = A + '/brand/logotipo-cream.svg';
const PHOTO = {
  hero: A + '/photos/real-desk-shelf.webp',
  daylight: A + '/photos/real-balcony.webp',
  kitchen: A + '/photos/real-kitchen.webp',
  shelf: A + '/photos/real-dining-shelf.webp',
  wood: A + '/photos/real-wood.webp',
  lamps: A + '/photos/real-lamps.webp',
  nook: A + '/photos/real-wicker.webp',
  heroLamp: A + '/photos/real-hero-lamp.webp',
  extra: A + '/photos/real-extra.webp',
  hero2: A + '/photos/real-hero.webp',
  shelf2: A + '/photos/real-shelf.webp',
  advisory: A + '/photos/real-advisory.webp',
};
const ARROW = '→';
const ArrowIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', flex: '0 0 auto' }}>
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);
const WA_ICON = A + '/brand/whatsapp.svg';
const WAIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} aria-hidden="true" style={{ display: 'inline-block', verticalAlign: 'middle', flex: '0 0 auto' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.463 3.488A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const IGIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'inline-block', verticalAlign: 'middle', flex: '0 0 auto' }}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
  </svg>
);
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdvbNWCvB8BWleIj4hngzT0E7uQG52HUsWf9B_INnE2_itrvA/viewform';
const WA_URL = 'https://wa.me/5493412612779';
const IG = '@casajaguar.ar';
const IG_URL = 'https://instagram.com/casajaguar.ar';
const PHONE = '+54 9 341 261-2779';
const TEL_URL = 'tel:+5493412612779';
const ADDRESS = 'Urquiza 1558, Rosario, Santa Fe';
const HOURS = 'Lun a Vie 10–18 · Sáb 10–13';
// Botón de ficha de producto → WhatsApp con la consulta ya escrita, identificando la pieza.
const waProduct = (name) => WA_URL + '?text=' + encodeURIComponent('Hola, quiero consultar por ' + name + '.');

const Container = ({ children, style }) => (
  <div style={{ maxWidth: 'var(--cj-max-w)', margin: '0 auto', paddingLeft: 'var(--cj-gutter)', paddingRight: 'var(--cj-gutter)', ...style }}>{children}</div>
);
const Words = ({ text, style }) => {
  const words = text.split(' ');
  return (
    <span className="cj-words" style={style}>
      {words.map((w, i) => <span key={i} className="cj-word" style={{ transitionDelay: (i * 0.055).toFixed(3) + 's' }}>{w}{i < words.length - 1 ? ' ' : ''}</span>)}
    </span>
  );
};

const Chevron = ({ dir = 'left' }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block' }}>
    <path d={dir === 'left' ? 'M15 4l-8 8 8 8' : 'M9 4l8 8-8 8'} />
  </svg>
);
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" style={{ display: 'block' }}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const Lockup = ({ dark }) => (
  <img src={dark ? LOGOTIPO_CREAM : LOGOTIPO} alt="Casa Jaguar" style={{ height: 30, width: 'auto', display: 'block' }} />
);

/* ————————————————————————————————— NAV ————————————————————————————————— */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuRender, setMenuRender] = useState(false);
  useEffect(() => {
    const el = document.getElementById('cj-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    (el || window).addEventListener('scroll', onScroll);
    return () => (el || window).removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { if (open) setMenuRender(true); }, [open]);
  const links = [['Proyectos', '#proyectos'], ['Tienda', '#tienda'], ['Contactate', '#contacto']];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(255,255,255,0.86)', backdropFilter: 'saturate(1.1) blur(10px)', WebkitBackdropFilter: 'saturate(1.1) blur(10px)', borderBottom: `1px solid ${scrolled ? 'var(--cj-line)' : 'transparent'}`, transition: 'border-color var(--cj-dur) var(--cj-ease)' }}>
      <Container style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#top" aria-label="Casa Jaguar — inicio" style={{ display: 'inline-flex', alignItems: 'center' }}><Lockup /></a>
        <nav className="cj-navlinks" style={{ display: 'flex', gap: 34 }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="cj-navcta"><Button className="cj-header-cta" variant="primary" size="sm" href={WA_URL} target="_blank" rel="noopener noreferrer" icon={<WAIcon size="1.15em" />}>Escribinos</Button></div>
          <button className="cj-burger" onClick={() => setOpen(!open)} aria-label="Menú" style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 0, cursor: 'pointer', padding: 6 }}>
            <span style={{ width: 22, height: 1, background: 'var(--cj-ink)' }} /><span style={{ width: 22, height: 1, background: 'var(--cj-ink)' }} /><span style={{ width: 22, height: 1, background: 'var(--cj-ink)' }} />
          </button>
        </div>
      </Container>
      {menuRender ? (
        <div className={'cj-mobilemenu ' + (open ? 'cj-mobilemenu-in' : 'cj-mobilemenu-out')}
          onAnimationEnd={(e) => { if (e.animationName === 'cjMenuSlideUp') setMenuRender(false); }}
          style={{ borderTop: '1px solid var(--cj-line)', background: 'var(--cj-white)' }}>
          <Container style={{ paddingTop: 18, paddingBottom: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} style={{ padding: '10px 0', fontFamily: 'var(--cj-font-ui)', fontSize: 14, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{label}</a>)}
            <div style={{ marginTop: 10 }}><Button variant="primary" size="md" full href={WA_URL} target="_blank" rel="noopener noreferrer" icon={<WAIcon />}>Escribinos</Button></div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

/* ———————————————————— HERO — Pantalla 1: dos bloques (Proyectos / Tienda), apilados en mobile ————————————————————
   Cada bloque es un SLIDER: carrusel horizontal con autoplay e infinite loop (clona la
   1ª foto al final y salta sin transición → loop sin corte). Cambio LENTO y suave
   (intervalo 5s, transición 1.15s). Los textos y el CTA quedan FIJOS; solo se desliza la
   banda de fotos. En vez de puntos, se muestra el NOMBRE del contenido visible.
   Respeta prefers-reduced-motion.
   Cada slide = { src, name }. El `name` es placeholder editable (destino: WordPress). */
function HeroSlider({ slides, offset = 0 }) {
  const n = slides.length;
  const frames = React.useMemo(() => (n > 1 ? slides.concat(slides[0]) : slides), [slides]);
  const [i, setI] = useState(0);
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || n < 2) return;
    let interval;
    // El PRIMER cambio ocurre pronto (no hay que esperar los 5s del arranque); luego
    // sigue con la cadencia normal. `offset` desincroniza los dos paneles.
    const firstTO = setTimeout(() => {
      setI((v) => v + 1);
      interval = setInterval(() => setI((v) => v + 1), 5000);
    }, 1600 + offset);
    return () => { clearTimeout(firstTO); if (interval) clearInterval(interval); };
  }, [n, offset]);
  // Al llegar al clon (i === n), reponer al 0 real SIN transición (loop invisible).
  const onEnd = (e) => {
    if (e.target !== e.currentTarget) return; // ignorar el zoom hover de las <img>
    if (i >= n) { setAnimate(false); setI(0); }
  };
  useEffect(() => {
    if (!animate) {
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      return () => cancelAnimationFrame(r);
    }
  }, [animate]);
  const active = n > 1 ? i % n : 0;
  return (
    <div className="cj-herosplit-slides">
      <div className="cj-hero-track" onTransitionEnd={onEnd}
        style={{ transform: `translateX(-${i * 100}%)`, transition: animate ? 'transform 1.15s cubic-bezier(.45,.05,.25,1)' : 'none' }}>
        {frames.map((s, k) => (
          <div key={k} className="cj-hero-slide">
            <img className="cj-hero-img" src={s.src} alt="" aria-hidden="true" draggable="false" />
          </div>
        ))}
      </div>
      {n > 1 ? (
        <div className="cj-hero-caption" aria-hidden="true">
          <span key={slides[active].name} className="cj-hero-caption-name">{slides[active].name}</span>
        </div>
      ) : null}
    </div>
  );
}

function HeroSplit() {
  // Slides DERIVADOS de los datos reales (así el hero se actualiza solo desde WordPress):
  //  · Proyectos → fotos de cada obra (OBRAS), con el nombre del proyecto de caption.
  //  · Tienda   → foto de cada categoría/ítem (CATEGORIES), con su nombre de caption.
  const projectSlides = OBRAS.flatMap((o) => o.images.slice(0, 2).map((src) => ({ src, name: o.title })));
  const shopSlides = CATEGORIES.slice(0, 4).map((c) => ({ src: c.img, name: c.name }));
  const panels = [
    {
      label: 'Proyectos', href: '#proyectos', tag: 'Interiorismo · Dirección creativa',
      line: 'Espacios diseñados de principio a fin, con una mirada integral.', offset: 0,
      slides: projectSlides,
    },
    {
      label: 'Tienda', href: '#tienda', tag: 'Mobiliario · Iluminación · Objetos',
      line: 'Mobiliario, iluminación y objetos con la firma del estudio.', offset: 900,
      slides: shopSlides,
    },
  ];
  return (
    <section id="top" className="cj-herosplit">
      {panels.map((p) => (
        <a key={p.label} className="cj-herosplit-panel" href={p.href} aria-label={p.label}>
          <HeroSlider slides={p.slides} offset={p.offset} />
          <div className="cj-herosplit-scrim" />
          <div className="cj-herosplit-inner">
            <div className="cj-eyebrow" style={{ color: 'rgba(243,239,230,0.82)' }}>{p.tag}</div>
            <h2 className="cj-herosplit-title">{p.label}</h2>
            <p className="cj-herosplit-line">{p.line}</p>
            <span className="cj-herosplit-cta"><span className="cj-cta-label">Ver {p.label.toLowerCase()}</span><span className="cj-cta-arrow"><ArrowIcon /></span></span>
          </div>
        </a>
      ))}
    </section>
  );
}

/* ———————————————————————————————— MANIFESTO ———————————————————————————————— */
function Manifesto() {
  return (
    <section className="cj-manifesto" style={{ background: 'var(--cj-paper)', paddingTop: '17vh', paddingBottom: '17vh' }}>
      <Container style={{ maxWidth: 1060, textAlign: 'center', paddingLeft: 'var(--cj-gutter)', paddingRight: 'var(--cj-gutter)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ margin: '2rem 0 0', maxWidth: '43ch', width: '100%', fontFamily: 'var(--cj-font-display)', fontWeight: 500, fontSize: 'clamp(1.9rem,3.4vw,2.9rem)', lineHeight: 1.18, letterSpacing: '-0.01em', color: 'var(--cj-ink)' }}>
          Pensamos el espacio como experiencia, donde intervienen todos los sentidos.
        </p>
        <div style={{ width: 50, height: 1, background: 'var(--cj-line-strong)', margin: '1.4rem 0' }} />
        <p style={{ margin: '0', maxWidth: '68ch', fontSize: 'var(--cj-t-body)', lineHeight: 1.65, color: 'var(--cj-ink-soft)' }}>
          Nada es al azar: materiales, proporciones y vacíos. La composición se ajusta hasta que cada elemento encuentra su relación con el conjunto.
        </p>
      </Container>
    </section>
  );
}

/* ————————————————————————————————— PROYECTOS ————————————————————————————————— */
/* ESTRUCTURA LISTA PARA WORDPRESS (hoy estática; luego administrable como la Tienda).
   Cada obra = { title, cat, cover, images, desc }:
     · title  → título editable del proyecto (se muestra arriba en la vista de detalle).
     · cat    → etiqueta corta (Obra / Comercial / …).
     · cover  → foto de portada de la card (paso 1).
     · images → galería de fotos del proyecto (paso 2). Editable desde el CMS.
     · desc   → descripción breve, debajo de la galería.
   Al migrar a WordPress, este array se reemplaza por los datos del CMS (cada proyecto =
   entrada con campos ACF: título, categoría, galería, descripción). La UI no cambia.
   Comportamiento de DOS PASOS (igual que Tienda): al tocar una card se abre el detalle
   DENTRO de la misma sección (título arriba, galería, descripción debajo); "Volver"
   regresa a la grilla. No se crean páginas internas por proyecto.
   NOTA: obras reales indicadas por el cliente; fotos = placeholders hasta recibir el
   material en alta de Lucía. */
const OBRAS = [
  {
    title: 'Lab de Juju', cat: 'Obra', cover: PHOTO.shelf,
    images: [PHOTO.shelf, PHOTO.lamps, PHOTO.wood, PHOTO.hero2],
    desc: 'Un laboratorio de ideas hecho espacio. Madera clara, textiles y luz cálida se combinan en un ambiente de trabajo íntimo, donde cada objeto tiene su lugar y su razón.',
  },
  {
    title: 'Edificio Costavía', cat: 'Comercial', cover: PHOTO.hero,
    images: [PHOTO.hero, PHOTO.daylight, PHOTO.kitchen, PHOTO.extra],
    desc: 'Intervención integral de los espacios comunes del edificio. Materiales nobles y una paleta serena acompañan la vida cotidiana, con una mirada de dirección creativa en cada detalle.',
  },
];

function Projects() {
  const [open, setOpen] = useState(null);   // título del proyecto abierto (paso 2)
  const [touched, setTouched] = useState(false);
  const [lb, setLb] = useState(-1);          // índice de foto abierta en el lightbox (zoom)
  const current = OBRAS.find((o) => o.title === open);
  const openProject = (title) => { setOpen(title); setTouched(true); };
  const back = () => { setOpen(null); setTouched(true); };
  const gridCls = 'cj-gallery' + (touched ? ' cj-shop-enter' : '');
  return (
    <section className="cj-projects" style={{ background: 'var(--cj-white)', paddingTop: 'var(--cj-section-y)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <div id="proyectos" className="cj-section-anchor">
          <Eyebrow index="01" rule>Proyectos</Eyebrow>
          {!current ? (
            <h2 style={{ margin: '1.4rem 0 0', maxWidth: '20ch', fontFamily: 'var(--cj-font-display)', fontWeight: 700, fontSize: 'var(--cj-t-h2)', lineHeight: 1.1, color: 'var(--cj-ink)' }}>Espacios en transformación</h2>
          ) : null}
        </div>

        {current ? (
          <div key={'obra-' + current.title} className="cj-shop-view" style={{ marginTop: '2.4rem' }}>
            <div className="cj-shop-head">
              <div className="cj-shop-head-row">
                <div className="cj-cat-name" style={{ fontSize: 'clamp(1.5rem,3.4vw,2rem)', fontWeight: 700 }}>{current.title}</div>
                <button type="button" className="cj-shop-back" onClick={back}>
                  <span className="cj-shop-back-arrow" aria-hidden="true"><ArrowIcon size={16} /></span> Volver
                </button>
              </div>
              <div className="cj-cat-subline" style={{ marginTop: '0.5rem' }}>{current.cat}</div>
            </div>
            <p className="cj-project-desc">{current.desc}</p>
            <div className={gridCls} style={{ marginTop: '1.8rem' }}>
              {current.images.map((src, k) => (
                <button key={k} type="button" className="cj-gallery-item" onClick={() => setLb(k)} aria-label={`Ampliar foto ${k + 1} de ${current.title}`}>
                  <img src={src} alt={`${current.title} — foto ${k + 1}`} />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={'cj-works-b' + (touched ? ' cj-shop-enter' : '')} style={{ marginTop: '3rem' }}>
            {OBRAS.map((p) => <WorkTile key={p.title} p={p} ratio="4 / 5" overlay onOpen={() => openProject(p.title)} />)}
          </div>
        )}
      </Container>
      {lb > -1 && current ? <Lightbox project={current} start={lb} onClose={() => setLb(-1)} /> : null}
    </section>
  );
}

function WorkTile({ p, ratio, overlay, onOpen }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onOpen} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'block', width: '100%', textAlign: 'left', padding: 0, border: 0, background: 'none', cursor: 'pointer', font: 'inherit', color: 'var(--cj-ink)' }}>
      <div className="cj-photo" style={{ position: 'relative', aspectRatio: ratio, overflow: 'hidden', borderRadius: 'var(--cj-radius)', background: 'var(--cj-stone-100)', border: '1px solid var(--cj-line)' }}>
        <img src={p.cover} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: h ? 'scale(1.04)' : 'scale(1)', transition: 'transform var(--cj-dur-slow) var(--cj-ease)' }} />
        <span style={{ position: 'absolute', top: 12, right: 12, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(6px)', padding: '5px 10px', borderRadius: 'var(--cj-radius)', fontFamily: 'var(--cj-font-ui)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cj-ink)', opacity: h ? 1 : 0.85, transition: 'opacity var(--cj-dur) var(--cj-ease)' }}>
          <span style={{ width: 11, height: 9, border: '1px solid var(--cj-ink)', borderRadius: 1, position: 'relative', display: 'inline-block' }} />
          {p.images.length}
        </span>
        {overlay ? (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '1.5rem', background: 'linear-gradient(to top, rgba(28,24,21,0.82) 0%, rgba(28,24,21,0.32) 42%, rgba(28,24,21,0) 72%)' }}>
            <span style={{ fontFamily: 'var(--cj-font-ui)', fontWeight: 500, fontSize: '1.05rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cj-paper)', textShadow: '0 1px 14px rgba(0,0,0,0.55)' }}>{p.title}</span>
          </div>
        ) : null}
      </div>
      {!overlay ? (
        <div style={{ paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
          <div>
            <Eyebrow style={{ fontSize: '0.6875rem' }}>{p.cat}</Eyebrow>
            <div style={{ fontFamily: 'var(--cj-font-serif)', fontWeight: 500, fontSize: '1.35rem', lineHeight: 1.2, color: 'var(--cj-ink)', marginTop: 6 }}>{p.title}</div>
          </div>
          <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: h ? 'var(--cj-brick)' : 'var(--cj-text-subtle)', transition: 'color var(--cj-dur) var(--cj-ease)', whiteSpace: 'nowrap' }}>Ver galería {ARROW}</span>
        </div>
      ) : null}
    </button>
  );
}

/* ———————————————————————————————— LIGHTBOX ———————————————————————————————— */
function Lightbox({ project, onClose, start = 0 }) {
  const [i, setI] = useState(start);
  const n = project.images.length;
  const prev = (e) => { if (e) e.stopPropagation(); setI((v) => (v - 1 + n) % n); };
  const next = (e) => { if (e) e.stopPropagation(); setI((v) => (v + 1) % n); };
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); else if (e.key === 'ArrowLeft') prev(); else if (e.key === 'ArrowRight') next(); };
    document.addEventListener('keydown', onKey);
    const prevOv = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prevOv; };
  }, [n]);
  const arrowStyle = { width: 'clamp(36px,9vw,52px)', height: 'clamp(36px,9vw,52px)', borderRadius: '50%', border: '1px solid rgba(243,239,230,0.35)', background: 'rgba(43,37,33,0.4)', color: 'var(--cj-paper)', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', transition: 'background var(--cj-dur-fast) var(--cj-ease)' };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(28,24,21,0.95)', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', animation: 'cjFade var(--cj-dur) var(--cj-ease)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(0.6rem,2vw,1rem) clamp(0.75rem,4vw,3rem)', color: 'var(--cj-paper)' }}>
        <div>
          <div style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(243,239,230,0.55)' }}>{project.cat}</div>
          <div style={{ fontFamily: 'var(--cj-font-serif)', fontWeight: 500, fontSize: 'clamp(1.3rem,3vw,1.8rem)', marginTop: 4 }}>{project.title}</div>
        </div>
        <button onClick={onClose} aria-label="Cerrar" style={arrowStyle}><CloseIcon /></button>
      </div>
      <div onClick={(e) => e.stopPropagation()} style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem,2vw,1.5rem)', padding: '0 clamp(0.75rem,4vw,3rem)' }}>
        <button className="cj-lbarrow" onClick={prev} aria-label="Anterior" style={arrowStyle}><Chevron dir="left" /></button>
        <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={project.images[i]} alt={`${project.title} ${i + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 'var(--cj-radius)', boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }} />
        </div>
        <button className="cj-lbarrow" onClick={next} aria-label="Siguiente" style={arrowStyle}><Chevron dir="right" /></button>
      </div>
      <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 'clamp(1rem,3vw,1.6rem)', flexWrap: 'wrap' }}>
        {project.images.map((src, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Imagen ${k + 1}`}
            style={{ width: 60, height: 44, padding: 0, border: 0, borderRadius: 2, overflow: 'hidden', cursor: 'pointer', outline: k === i ? '2px solid var(--cj-paper)' : '2px solid transparent', outlineOffset: 2, opacity: k === i ? 1 : 0.5, transition: 'opacity var(--cj-dur-fast) var(--cj-ease)' }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </button>
        ))}
        <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 12, letterSpacing: '0.1em', color: 'rgba(243,239,230,0.6)', marginLeft: 8 }}>{i + 1} / {n}</span>
      </div>
    </div>
  );
}

/* ————————————————————————————————— TIENDA ————————————————————————————————— */
/* ESTRUCTURA LISTA PARA WORDPRESS (hoy estática; luego administrable).
   Cada categoría = { name, subs, img, products }. Cada producto = { name, sub, img }.
     · name  → título editable de la categoría/producto.
     · subs  → subcategorías de la categoría (línea fina en mayúsculas).
     · sub   → subcategoría/variante/modelo del producto (misma línea fina).
     · img   → ruta a la imagen (hoy fotos reutilizadas de assets/photos = placeholders).
   Al migrar a WordPress, este array se reemplaza por los datos del CMS
   (categorías = términos/colecciones; productos = entradas con campos ACF: nombre,
   sub, imagen). La UI (grilla, drill-down y animación) no cambia.
   Comportamiento: al tocar una categoría se muestran sus productos DENTRO de la misma
   sección, con la MISMA grilla editorial; "Volver" regresa a las categorías. Cada
   producto linkea a WhatsApp con la consulta ya escrita (waProduct). */
const PH = (n) => A + '/photos/' + n;
const CATEGORIES = [
  {
    name: 'Iluminación', subs: ['Colgante', 'Piso', 'Mesa', 'Aplique'], img: PH('p-lamps-paper.webp'),
    products: [
      { name: 'Colgante tejida', sub: 'Colgante', img: PH('p-lamps-paper.webp') },
      { name: 'Lámpara de pie', sub: 'Piso', img: PH('real-lamps.webp') },
      { name: 'Velador cerámico', sub: 'Mesa', img: PH('real-hero-lamp.webp') },
      { name: 'Aplique de bronce', sub: 'Aplique', img: PH('real-desk-shelf.webp') },
    ],
  },
  {
    name: 'Sillas', subs: [], img: PH('p-dining-wishbone.webp'),
    products: [
      { name: 'Silla Wishbone', sub: 'Comedor', img: PH('p-dining-wishbone.webp') },
      { name: 'Silla de madera', sub: 'Comedor', img: PH('real-wood.webp') },
      { name: 'Silla tapizada', sub: 'Living', img: PH('real-dining-shelf.webp') },
    ],
  },
  {
    name: 'Sillones', subs: [], img: PH('p-sofa-striped.webp'),
    products: [
      { name: 'Sillón rayado', sub: 'Dos cuerpos', img: PH('p-sofa-striped.webp') },
      { name: 'Sillón lino gris', sub: 'Tres cuerpos', img: PH('p-sofa-grey.webp') },
      { name: 'Butaca individual', sub: 'Individual', img: PH('real-extra.webp') },
    ],
  },
  {
    name: 'Mesas', subs: [], img: PH('p-dining-wood.webp'),
    products: [
      { name: 'Mesa de comedor', sub: 'Comedor', img: PH('p-dining-wood.webp') },
      { name: 'Mesa a medida', sub: 'Comedor', img: PH('real-wood.webp') },
      { name: 'Mesa auxiliar', sub: 'Auxiliar', img: PH('p-kitchen-round.webp') },
    ],
  },
  {
    name: 'Bibliotecas', subs: [], img: PH('p-living-shelf.webp'),
    products: [
      { name: 'Biblioteca abierta', sub: 'Modular', img: PH('p-living-shelf.webp') },
      { name: 'Estantería de pared', sub: 'Pared', img: PH('real-shelf.webp') },
      { name: 'Repisa de madera', sub: 'Auxiliar', img: PH('real-dining-shelf.webp') },
    ],
  },
  {
    name: 'Camas y Camastros', subs: [], img: PH('p-curtain-nook.webp'),
    products: [
      { name: 'Cama con dosel', sub: 'Matrimonial', img: PH('p-curtain-nook.webp') },
      { name: 'Camastro de mimbre', sub: 'Exterior', img: PH('real-wicker.webp') },
      { name: 'Respaldo tapizado', sub: 'Individual', img: PH('real-hero.webp') },
    ],
  },
  {
    name: 'Alfombras', subs: [], img: PH('p-sofa-grey.webp'),
    products: [
      { name: 'Alfombra natural', sub: 'Living', img: PH('p-sofa-grey.webp') },
      { name: 'Alfombra tejida', sub: 'Dormitorio', img: PH('real-balcony.webp') },
      { name: 'Camino de fibra', sub: 'Pasillo', img: PH('real-extra.webp') },
    ],
  },
  {
    name: 'Accesorios', subs: ['Portavelas', 'Mantelería', 'Bazar chico'], img: PH('p-kitchen-round.webp'),
    products: [
      { name: 'Portavelas de cerámica', sub: 'Portavelas', img: PH('p-kitchen-round.webp') },
      { name: 'Individuales de lino', sub: 'Mantelería', img: PH('real-kitchen.webp') },
      { name: 'Bazar chico', sub: 'Bazar chico', img: PH('real-advisory.webp') },
    ],
  },
];

/* Ficha de categoría → botón que abre los productos de esa categoría (drill-down). */
function CategoryTile({ name, subs, img, onOpen }) {
  const [h, setH] = useState(false);
  return (
    <button type="button" className="cj-cat" onClick={onOpen} aria-label={'Ver ' + name}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div className="cj-cat-photo">
        <img src={img} alt={name} style={{ transform: h ? 'scale(1.04)' : 'scale(1)' }} />
      </div>
      <div className="cj-cat-meta">
        <div className="cj-cat-name">{name}</div>
        {subs.length ? <div className="cj-cat-subline">{subs.join(' · ')}</div> : null}
      </div>
    </button>
  );
}

/* Ficha de producto → misma grilla/estética que la categoría; linkea a WhatsApp. */
function ProductTile({ name, sub, img }) {
  const [h, setH] = useState(false);
  return (
    <a className="cj-cat" href={waProduct(name)} target="_blank" rel="noopener noreferrer" aria-label={'Consultar ' + name}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div className="cj-cat-photo">
        <img src={img} alt={name} style={{ transform: h ? 'scale(1.04)' : 'scale(1)' }} />
      </div>
      <div className="cj-cat-meta">
        <div className="cj-cat-name">{name}</div>
        {sub ? <div className="cj-cat-subline">{sub}</div> : null}
      </div>
    </a>
  );
}

function Tienda() {
  const [openCat, setOpenCat] = useState(null);
  const [touched, setTouched] = useState(false);
  const openCategory = (name) => { setOpenCat(name); setTouched(true); };
  const back = () => { setOpenCat(null); setTouched(true); };
  const current = CATEGORIES.find((c) => c.name === openCat);
  const gridCls = 'cj-catgrid' + (touched ? ' cj-shop-enter' : '');
  return (
    <section className="cj-tienda" style={{ background: 'var(--cj-paper)', paddingTop: 'var(--cj-section-y)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div id="tienda" className="cj-section-anchor" style={{ maxWidth: '58ch' }}>
            <Eyebrow index="02" rule>Tienda</Eyebrow>
            <p style={{ margin: '1.2rem 0 0', maxWidth: '54ch', fontSize: 'var(--cj-t-body)', lineHeight: 1.6, color: 'var(--cj-ink-soft)' }}>
              Mobiliario, iluminación y objetos seleccionados del estudio. Consultá disponibilidad por WhatsApp; entrega coordinada en Rosario.
            </p>
          </div>
          <Button variant="ghost" href={WA_URL} target="_blank" rel="noopener noreferrer" icon={<ArrowIcon size={16} />} iconRight>Escribinos para ver opciones</Button>
        </div>

        {current ? (
          <div key={'cat-' + current.name} className="cj-shop-view" style={{ marginTop: '3rem' }}>
            <div className="cj-shop-head">
              <div className="cj-shop-head-row">
                <div className="cj-cat-name" style={{ fontSize: '1.6rem', fontWeight: 700 }}>{current.name}</div>
                <button type="button" className="cj-shop-back" onClick={back}>
                  <span className="cj-shop-back-arrow" aria-hidden="true"><ArrowIcon size={16} /></span> Volver
                </button>
              </div>
              {current.subs.length ? <div className="cj-cat-subline" style={{ marginTop: '0.5rem' }}>{current.subs.join(' · ')}</div> : null}
            </div>
            <div className={gridCls} style={{ marginTop: '1.6rem' }}>
              {current.products.map((p) => <ProductTile key={p.name} name={p.name} sub={p.sub} img={p.img} />)}
            </div>
          </div>
        ) : (
          <div className={gridCls} style={{ marginTop: '3rem' }}>
            {CATEGORIES.map((c) => <CategoryTile key={c.name} name={c.name} subs={c.subs} img={c.img} onOpen={() => openCategory(c.name)} />)}
          </div>
        )}
      </Container>
    </section>
  );
}

/* ————————————————————————————————— NOSOTROS ————————————————————————————————— */
function About() {
  return (
    <section className="cj-about">
      <img className="cj-about-bg" src={PHOTO.hero2} alt="" aria-hidden="true" />
      <div className="cj-about-scrim" />
      <Container style={{ position: 'relative' }}>
        <div id="nosotros" className="cj-section-anchor cj-about-inner">
          <Eyebrow index="03" rule color="rgba(243,239,230,0.6)">Nosotros</Eyebrow>
          <p className="cj-about-lead">
            Somos un estudio de dirección creativa e interiorismo, especializado en la curaduría de mobiliario y objetos con materiales nobles. Diseñamos espacios singulares, con una estética única y atención al detalle en cada proyecto. Ofrecemos asesoramiento personalizado, para que tu espacio represente tu identidad y tu idea.
          </p>
          <div style={{ width: 50, height: 1, background: 'rgba(243,239,230,0.42)', margin: '2rem auto 1.4rem' }} />
          <p style={{ margin: 0, fontFamily: 'var(--cj-font-ui)', fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(243,239,230,0.6)' }}>
            Trabajamos en todo el mundo
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ——————————————————————————————— SERVICIOS ——————————————————————————————— */
function Services() {
  const items = [
    ['Interiorismo', 'Convertimos tu idea en anteproyecto y proyecto, acompañando la gestión hasta el resultado.'],
    ['Remodelaciones', 'Resolvemos la materialidad y el tratamiento de superficies con una mirada de dirección creativa, cuidando cada detalle del proceso.'],
    ['Home Staging', 'Preparamos tu propiedad para potenciar su valor antes de la venta o el alquiler. Trabajamos la puesta en escena para que cada ambiente muestre su mejor versión.'],
    ['Asesoría de diseño online', 'Acompañamos tu proyecto con asesoramiento personalizado, para que tu espacio represente tu identidad.'],
  ];
  return (
    <section className="cj-services" style={{ background: 'var(--cj-paper)', paddingTop: 'var(--cj-section-y)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <div id="servicios" className="cj-section-anchor">
          <Eyebrow index="04" rule>Servicios</Eyebrow>
        </div>
        <p style={{ margin: '1.4rem 0 0', maxWidth: '40ch', fontFamily: 'var(--cj-font-display)', fontWeight: 500, fontSize: 'var(--cj-t-h4)', lineHeight: 1.32, color: 'var(--cj-ink)' }}>
          Trabajamos con una mirada integral que combina arquitectura, diseño, materiales, iluminación y mobiliario, siempre al servicio de quienes habitan esos espacios.
        </p>
        <div className="cj-stagger" style={{ marginTop: '2.6rem' }}>
          {items.map(([t, d], i) => <ServiceRow key={t} n={i + 1} title={t} desc={d} />)}
        </div>
        <p style={{ marginTop: '1.8rem', fontFamily: 'var(--cj-font-ui)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--cj-text-subtle)' }}>
          Interiorismo residencial y comercial · Proyectos a medida
        </p>
      </Container>
    </section>
  );
}
function ServiceRow({ n, title, desc }) {
  return (
    <div className="cj-service" style={{ display: 'grid', gridTemplateColumns: '72px 1fr 1.2fr', alignItems: 'baseline', gap: 28, padding: '1.9rem 0', borderBottom: '1px solid var(--cj-line)' }}>
      <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 13, letterSpacing: '0.1em', color: 'var(--cj-brick)' }}>{String(n).padStart(2, '0')}</span>
      <h3 style={{ margin: 0, fontFamily: 'var(--cj-font-display)', fontWeight: 700, fontSize: 'var(--cj-t-h3)', color: 'var(--cj-ink)', lineHeight: 1.1 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 'var(--cj-t-body-sm)', lineHeight: 1.55, color: 'var(--cj-ink-soft)' }}>{desc}</p>
    </div>
  );
}

/* ———————————————————————————————— ASESORAMIENTO ———————————————————————————————— */
function Advisory() {
  return (
    <section className="cj-contact" style={{ background: 'var(--cj-ink)', color: 'var(--cj-paper)', paddingTop: 'var(--cj-section-y)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <div className="cj-advisory">
          <div id="contacto" className="cj-section-anchor cj-advisory-intro">
            <Eyebrow index="05" rule color="rgba(243,239,230,0.6)">Contactate</Eyebrow>
            <h2 style={{ margin: '1.6rem 0 0', fontFamily: 'var(--cj-font-display)', fontWeight: 700, fontSize: 'var(--cj-t-h2)', lineHeight: 1.08, color: 'var(--cj-paper)' }}>Solicitá tu asesoramiento</h2>
            <p style={{ margin: '1.6rem 0 0', maxWidth: '46ch', fontSize: 'var(--cj-t-body)', lineHeight: 1.6, color: 'rgba(243,239,230,0.78)' }}>
              Casa Jaguar desarrolla proyectos de interiorismo y dirección creativa para espacios residenciales y comerciales. Compartinos información sobre tu proyecto para conocer tus necesidades y coordinar una primera instancia de asesoramiento.
            </p>
          </div>
          <div className="cj-advisory-media">
            <img src={PHOTO.advisory} alt="Proyecto Casa Jaguar" />
          </div>
          <div className="cj-advisory-actions">
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" href={FORM_URL} target="_blank" rel="noopener" icon={<ArrowIcon size={16} />} iconRight>Agendá una cita</Button>
              <Button className="cj-advisory-escribinos" variant="secondary" size="lg" href={WA_URL} target="_blank" rel="noopener noreferrer" icon={<WAIcon size={18} />} style={{ color: 'var(--cj-paper)', borderColor: 'rgba(243,239,230,0.45)' }}>Contactanos</Button>
            </div>
            <div style={{ marginTop: '2.6rem', display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              {[['Teléfono', PHONE], ['Instagram', IG]].map(([l, v]) => (
                <div key={l}><div className="cj-eyebrow" style={{ fontSize: 11, color: 'rgba(243,239,230,0.5)' }}>{l}</div><div style={{ fontFamily: 'var(--cj-font-serif)', fontSize: 16, marginTop: 6, color: 'var(--cj-paper)' }}>{v}</div></div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ————————————————————————————————— FOOTER ————————————————————————————————— */
function Footer() {
  return (
    <footer className="cj-site-footer" style={{ background: 'var(--cj-paper)', paddingTop: 'var(--cj-space-9)', paddingBottom: 'var(--cj-space-7)' }}>
      <Container>
        <div className="cj-footer">
          <div style={{ maxWidth: 340 }}>
            <a href="#top" aria-label="Casa Jaguar — inicio" style={{ display: 'inline-block' }}><img src={LOGOTIPO} alt="Casa Jaguar" style={{ height: 44, width: 'auto', display: 'block' }} /></a>
            <p style={{ margin: '1.4rem 0 0', fontSize: 'var(--cj-t-body-sm)', lineHeight: 1.6, color: 'var(--cj-ink-soft)' }}>Estudio de interiorismo y dirección creativa. Trabajamos en todo el mundo.</p>
          </div>
          <FooterCol title="Navegación" items={[['Proyectos', '#proyectos'], ['Tienda', '#tienda'], ['Nosotros', '#nosotros'], ['Contacto', '#contacto']]} />
          <FooterCol title="Contacto" items={[['Escribinos', WA_URL], [PHONE, TEL_URL], ['Agendá una cita', '#contacto']]} />
          <FooterCol title="Seguinos" items={[[IG, IG_URL]]} />
        </div>
        <div className="cj-footer-legal" style={{ marginTop: 'var(--cj-space-8)', paddingTop: 'var(--cj-space-5)', borderTop: '1px solid var(--cj-line)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--cj-text-subtle)' }}>© {new Date().getFullYear()} Casa Jaguar · Rosario, Argentina</span>
          <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--cj-text-subtle)' }}>Interiorismo &amp; dirección creativa</span>
        </div>
      </Container>
    </footer>
  );
}
function FooterCol({ title, items }) {
  return (
    <div>
      <div className="cj-eyebrow" style={{ fontSize: 11 }}>{title}</div>
      <ul style={{ listStyle: 'none', margin: '1.2rem 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map(([label, href]) => { const ext = href.startsWith('http'); return <li key={label}><a className="cj-footer-link" href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--cj-font-serif)', fontSize: 15, color: 'var(--cj-ink)' }}>{href === WA_URL ? <WAIcon size="1.3em" /> : (href === IG_URL ? <IGIcon size="1.35em" /> : null)}{label}</a></li>; })}
      </ul>
    </div>
  );
}

function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href={WA_URL} target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp"
      style={{ position: 'fixed', right: 'clamp(1rem,3vw,2rem)', bottom: 'clamp(1rem,3vw,2rem)', zIndex: 90, width: 60, height: 60, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(37,211,102,0.45)', transition: 'opacity var(--cj-dur) var(--cj-ease), transform var(--cj-dur) var(--cj-ease)', opacity: show ? 1 : 0, transform: show ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)', pointerEvents: show ? 'auto' : 'none' }}>
      <WAIcon size={30} />
    </a>
  );
}

function CJDeployApp() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = document.querySelector('#top > div:last-child');
    if (hero) { if (reduce) hero.classList.add('cj-hero-in'); else requestAnimationFrame(() => hero.classList.add('cj-hero-in')); }
    let blocks = [...document.querySelectorAll('#cj-scroll > section:not(#top) > div, .cj-grid3, .cj-works-a, .cj-works-b, .cj-catgrid, .cj-stagger')];
    blocks.forEach((b) => {
      if (b.classList.contains('cj-stagger')) return;
      const cls = b.matches('.cj-grid3,.cj-works-a,.cj-works-b,.cj-catgrid') ? 'cj-stagger'
        : b.querySelector('.cj-words') ? 'cj-wordblock'
        : 'cj-reveal';
      b.classList.add(cls);
    });
    if (reduce) { blocks.forEach((b) => b.classList.add('in')); return; }
    const reveal = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      blocks = blocks.filter((b) => {
        if (b.getBoundingClientRect().top < vh * 0.88) { b.classList.add('in'); return false; }
        return true;
      });
      if (!blocks.length) { window.removeEventListener('scroll', onScroll, true); window.removeEventListener('resize', reveal); }
    };
    let ticking = false;
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; reveal(); }); } };
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', reveal);
    reveal();
    return () => { window.removeEventListener('scroll', onScroll, true); window.removeEventListener('resize', reveal); };
  }, []);
  return (
    <div id="cj-scroll" style={{ background: 'var(--cj-white)' }}>
      <Nav /><HeroSplit /><Manifesto /><Projects /><Tienda /><About /><Services /><Advisory /><Footer />
    </div>
  );
}
Object.assign(window, { CJApp: CJDeployApp });
