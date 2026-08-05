const NS = window.CasaJaguarDesignSystem_ef4a47;
const { Button, Eyebrow, Wordmark, Field, ProjectCard } = NS;
const { useState, useEffect } = React;

const A = './assets';
const MARK = A + '/brand/logo-mark.png';
const LOGO = A + '/brand/logo.png';
const LOGOTIPO = A + '/brand/logotipo.svg';
const LOGOTIPO_CREAM = A + '/brand/logotipo-cream.svg';
const PHOTO = {
  hero: A + '/photos/real-desk-shelf.png',
  daylight: A + '/photos/real-balcony.jpg',
  kitchen: A + '/photos/real-kitchen.jpg',
  shelf: A + '/photos/real-dining-shelf.png',
  wood: A + '/photos/real-wood.jpg',
  lamps: A + '/photos/real-lamps.png',
  nook: A + '/photos/real-wicker.jpg',
  heroLamp: A + '/photos/real-hero-lamp.png',
  extra: A + '/photos/real-extra.png',
  hero2: A + '/photos/real-hero.png',
  shelf2: A + '/photos/real-shelf.jpg',
};
const ARROW = '\u2192';
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
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdvbNWCvB8BWleIj4hngzT0E7uQG52HUsWf9B_INnE2_itrvA/viewform';
const WA_URL = 'https://wa.me/5493410000000';
const IG = '@casajaguar.ar';

const Container = ({ children, style }) => (
  <div style={{ maxWidth: 'var(--cj-max-w)', margin: '0 auto', paddingLeft: 'var(--cj-gutter)', paddingRight: 'var(--cj-gutter)', ...style }}>{children}</div>
);
const Words = ({ text, style }) => {
  const words = text.split(' ');
  return (
    <span className="cj-words" style={style}>
      {words.map((w, i) => <span key={i} className="cj-word" style={{ transitionDelay: (i * 0.055).toFixed(3) + 's' }}>{w}{i < words.length - 1 ? '\u00a0' : ''}</span>)}
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
  useEffect(() => {
    const el = document.getElementById('cj-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    (el || window).addEventListener('scroll', onScroll);
    return () => (el || window).removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Estudio', 'Servicios', 'Objetos', 'Trabajos', 'Contacto'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(255,255,255,0.86)', backdropFilter: 'saturate(1.1) blur(10px)', WebkitBackdropFilter: 'saturate(1.1) blur(10px)', borderBottom: `1px solid ${scrolled ? 'var(--cj-line)' : 'transparent'}`, transition: 'border-color var(--cj-dur) var(--cj-ease)' }}>
      <Container style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Lockup />
        <nav className="cj-navlinks" style={{ display: 'flex', gap: 34 }}>
          {links.map((l) => (
            <a key={l} href={'#' + l.toLowerCase()} style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="cj-navcta"><Button variant="primary" size="sm" href={WA_URL} icon={<WAIcon size="1.15em" />}>Escribinos</Button></div>
          <button className="cj-burger" onClick={() => setOpen(!open)} aria-label="Menú" style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 0, cursor: 'pointer', padding: 6 }}>
            <span style={{ width: 22, height: 1, background: 'var(--cj-ink)' }} /><span style={{ width: 22, height: 1, background: 'var(--cj-ink)' }} /><span style={{ width: 22, height: 1, background: 'var(--cj-ink)' }} />
          </button>
        </div>
      </Container>
      {open ? (
        <div className="cj-mobilemenu" style={{ borderTop: '1px solid var(--cj-line)', background: 'var(--cj-white)' }}>
          <Container style={{ paddingTop: 18, paddingBottom: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map((l) => <a key={l} href={'#' + l.toLowerCase()} onClick={() => setOpen(false)} style={{ padding: '10px 0', fontFamily: 'var(--cj-font-ui)', fontSize: 14, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{l}</a>)}
            <div style={{ marginTop: 10 }}><Button variant="primary" size="md" full href={WA_URL} icon={<WAIcon />}>Escribinos</Button></div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

/* ————————————————————————————————— HERO ————————————————————————————————— */
function Hero() {
  return (
    <section id="top" style={{ paddingTop: 'clamp(3rem,7vw,6rem)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <div className="cj-hero">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Eyebrow rule>Interiorismo · Dirección creativa · Rosario</Eyebrow>
            <h1 style={{ margin: '1.6rem 0 0', fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: 'var(--cj-t-h1)', lineHeight: 'var(--cj-lh-tight)', letterSpacing: '-0.01em', color: 'var(--cj-ink)' }}>
              ¿Estás en obra<br />o en reformas?
            </h1>
            <p style={{ margin: '1.5rem 0 0', maxWidth: '30ch', fontFamily: 'var(--cj-font-display)', fontStyle: 'italic', fontSize: 'var(--cj-t-h4)', lineHeight: 1.3, color: 'var(--cj-brick)' }}>
              ¿Te gustaría que te asesoremos?
            </p>
            <p style={{ margin: '1.6rem 0 0', maxWidth: '42ch', fontFamily: 'var(--cj-font-body)', fontSize: 'var(--cj-t-body-lg)', lineHeight: 1.55, color: 'var(--cj-ink-soft)' }}>
              Dejanos tu contacto y nos comunicamos. Interiorismo y dirección creativa para espacios residenciales y comerciales.
            </p>
            <div style={{ display: 'flex', gap: 18, marginTop: '2.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="primary" size="lg" href={WA_URL} icon={<WAIcon />}>Escribinos</Button>
              <Button variant="ghost" size="lg" href="#contacto">Solicitar asesoramiento</Button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="cj-photo" style={{ aspectRatio: '4 / 5', overflow: 'hidden', borderRadius: 'var(--cj-radius)', background: 'var(--cj-stone-100)' }}>
              <img src={PHOTO.hero} alt="Proyecto Casa Jaguar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', left: 18, bottom: 18, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(6px)', padding: '8px 14px', borderRadius: 'var(--cj-radius)' }}>
              <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cj-ink)' }}>Proyecto Edificio Costavía</span>
            </div>
            <div style={{ position: 'absolute', right: 16, top: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(6px)', padding: '6px 12px', borderRadius: 'var(--cj-radius)' }}>
              <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--cj-brick)' }}>01</span>
              <span style={{ width: 16, height: 1, background: 'var(--cj-line-strong)' }} />
              <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cj-ink)' }}>Comercial</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ——————————————————————— HERO (overlay / full-bleed) ——————————————————————— */
function HeroFull() {
  return (
    <section id="top" style={{ position: 'relative', minHeight: 'min(90vh, 820px)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <img src={PHOTO.heroLamp} alt="Proyecto Casa Jaguar" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,24,21,0.7) 0%, rgba(28,24,21,0.26) 46%, rgba(28,24,21,0.4) 100%)' }} />
      <Container style={{ position: 'relative', width: '100%', paddingTop: 'clamp(4rem,10vw,7rem)', paddingBottom: 'clamp(3rem,7vw,6rem)' }}>
        <div style={{ maxWidth: 780 }}>
          <div className="cj-eyebrow" style={{ color: 'rgba(243,239,230,0.82)' }}>Interiorismo · Dirección creativa · Rosario</div>
          <h1 style={{ margin: '1.4rem 0 0', fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: 'var(--cj-t-h1)', lineHeight: 'var(--cj-lh-tight)', letterSpacing: '-0.01em', color: 'var(--cj-paper)' }}>
            ¿Estás en obra<br />o en reformas?
          </h1>
          <p style={{ margin: '1.3rem 0 0', maxWidth: '36ch', fontFamily: 'var(--cj-font-display)', fontStyle: 'italic', fontSize: 'var(--cj-t-h4)', lineHeight: 1.3, color: 'var(--cj-paper)' }}>
            ¿Te gustaría que te asesoremos?
          </p>
          <p style={{ margin: '1.4rem 0 0', maxWidth: '44ch', fontFamily: 'var(--cj-font-body)', fontSize: 'var(--cj-t-body-lg)', lineHeight: 1.55, color: 'rgba(243,239,230,0.86)' }}>
            Dejanos tu contacto y nos comunicamos. Interiorismo y dirección creativa para espacios residenciales y comerciales.
          </p>
          <div style={{ display: 'flex', gap: 22, marginTop: '2.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="accent" size="lg" href={WA_URL} icon={<WAIcon />}>Escribinos</Button>
            <a href="#contacto" style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--cj-paper)', display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: 'inset 0 -1px 0 rgba(243,239,230,0.45)', paddingBottom: 5 }}>Solicitar asesoramiento <ArrowIcon /></a>
          </div>
        </div>
        <span style={{ position: 'absolute', right: 'var(--cj-gutter)', bottom: 'clamp(3rem,7vw,6rem)', fontFamily: 'var(--cj-font-ui)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(243,239,230,0.7)' }}>Proyecto Edificio Costavía</span>
      </Container>
    </section>
  );
}

/* ———————————————————————————————— MANIFESTO ———————————————————————————————— */
function Manifesto() {
  return (
    <section style={{ background: 'var(--cj-paper)', paddingTop: 'clamp(4.5rem,9vw,7rem)', paddingBottom: 'clamp(4.5rem,9vw,7rem)' }}>
      <Container style={{ maxWidth: 806, textAlign: 'center', paddingLeft: 0, paddingRight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ margin: '2rem 0 0', maxWidth: '31.1ch', width: '100%', fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: 'clamp(1.9rem,3.4vw,2.9rem)', lineHeight: 1.18, letterSpacing: '-0.01em', color: 'var(--cj-ink)' }}>
          Pensamos el espacio como experiencia, donde intervienen todos los sentidos.
        </p>
        <div style={{ width: 50, height: 1, background: 'var(--cj-line-strong)', margin: '1.4rem 0' }} />
        <p style={{ margin: '0', maxWidth: '52ch', fontSize: 'var(--cj-t-body)', lineHeight: 1.65, color: 'var(--cj-ink-soft)' }}>
          Nada es al azar: materiales, proporciones y vacíos. La composición se ajusta hasta que cada elemento encuentra su relación con el conjunto.
        </p>
      </Container>
    </section>
  );
}

/* ———————————————————————————————— STUDIO ———————————————————————————————— */
function Studio() {
  return (
    <section id="estudio" style={{ paddingTop: 'var(--cj-section-y)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <Eyebrow index="01" rule>El estudio</Eyebrow>
        <div className="cj-two" style={{ marginTop: '2.5rem' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: 'var(--cj-t-h2)', lineHeight: 1.12, letterSpacing: '-0.01em', color: 'var(--cj-ink)' }}>
            Casa Jaguar nace del cruce entre interiorismo, dirección creativa y la sensibilidad del textil.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
            <p style={{ margin: 0, fontSize: 'var(--cj-t-body)', lineHeight: 'var(--cj-lh-body)', color: 'var(--cj-ink-soft)' }}>
              Desarrollamos espacios desde una mirada atravesada por el arte, la materialidad y la experiencia de habitar diferentes culturas.
            </p>
            <p style={{ margin: 0, fontSize: 'var(--cj-t-body)', lineHeight: 'var(--cj-lh-body)', color: 'var(--cj-ink-soft)' }}>
              Durante casi diez años trabajamos entre distintos territorios —México, Italia y ahora Argentina— colaborando con artesanos, artistas y oficios que transformaron nuestra forma de entender los espacios.
            </p>
            <p style={{ margin: 0, fontSize: 'var(--cj-t-body)', lineHeight: 'var(--cj-lh-body)', color: 'var(--cj-ink-soft)' }}>
              Cada proyecto se construye desde la identidad del lugar, la relación entre los materiales y una búsqueda constante por crear atmósferas con presencia, equilibrio y carácter.
            </p>
            <div style={{ display: 'flex', gap: 40, marginTop: '0.6rem', flexWrap: 'wrap' }}>
              {[['~10', 'años'], ['MX · IT · AR', 'territorios'], ['Rosario', 'base']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: '1.8rem', color: 'var(--cj-ink)' }}>{n}</div>
                  <div className="cj-eyebrow" style={{ fontSize: 11, marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ——————————————————————————————— SERVICES ——————————————————————————————— */
function Services() {
  const items = [
    ['Dirección integral de interiorismo', 'Luz, color y materialidad definidos como un sistema coordinado. Incluye desarrollo conceptual, selección material, definición técnica y acompañamiento en obra hasta su implementación.'],
    ['Anteproyecto y planificación', 'Definimos layout, proporción, circulación e iluminación antes de ejecutar. Relevamiento en propiedad, propuesta visual y desarrollo de moodboard material.'],
    ['Dirección creativa', 'Definimos el proyecto desde la materia: pruebas reales, ajuste de tonos y aplicación en obra. Espacios en transformación, con carácter y coherencia.'],
    ['Desarrollo de mobiliario y piezas', 'Bibliotecas, mesas, sillas e iluminación para integrar en proyectos. También desarrollamos cada espacio a medida.'],
  ];
  return (
    <section id="servicios" style={{ background: 'var(--cj-paper)', paddingTop: 'var(--cj-section-y)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <Eyebrow index="02" rule>Servicios</Eyebrow>
        <h2 style={{ margin: '1.4rem 0 0', maxWidth: '24.6ch', fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: 'var(--cj-t-h2)', lineHeight: 1.1, color: 'var(--cj-ink)' }}>
          Líneas que se adaptan a todos los espacios y presupuestos.
        </h2>
        <div className="cj-stagger" style={{ marginTop: '2.6rem' }}>
          {items.map(([t, d], i) => <ServiceRow key={t} n={i + 1} title={t} desc={d} />)}
        </div>
        <p style={{ marginTop: '1.8rem', fontFamily: 'var(--cj-font-ui)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--cj-text-subtle)' }}>
          Interiorismo residencial y comercial · Proyectos a medida · Cita previa
        </p>
      </Container>
    </section>
  );
}
function ServiceRow({ n, title, desc }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} className="cj-service" style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1.1fr auto', alignItems: 'center', gap: 28, padding: '1.9rem 0', borderBottom: '1px solid var(--cj-line)', transition: 'padding-left var(--cj-dur) var(--cj-ease)', paddingLeft: h ? 14 : 0 }}>
      <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 13, letterSpacing: '0.1em', color: 'var(--cj-brick)' }}>{String(n).padStart(2, '0')}</span>
      <h3 style={{ margin: 0, fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: 'var(--cj-t-h3)', color: 'var(--cj-ink)', lineHeight: 1.05 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 'var(--cj-t-body-sm)', lineHeight: 1.55, color: 'var(--cj-ink-soft)' }}>{desc}</p>
      <span style={{ fontFamily: 'var(--cj-font-serif)', fontSize: 22, color: 'var(--cj-ink)', opacity: h ? 1 : 0.25, transform: h ? 'translateX(4px)' : 'none', transition: 'all var(--cj-dur) var(--cj-ease)' }}>{ARROW}</span>
    </div>
  );
}

/* ———————————————————————————————— OBJECTS ———————————————————————————————— */
function Objects() {
  const objs = [
    [PHOTO.lamps, 'Iluminación', 'Lámpara tejida'],
    [PHOTO.wood, 'Mobiliario', 'Mesa a medida'],
    [PHOTO.shelf, 'Mobiliario', 'Biblioteca abierta'],
  ];
  return (
    <section id="objetos" style={{ paddingTop: 'var(--cj-section-y)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '55ch' }}>
            <Eyebrow index="03" rule>Objetos · Feria del estudio</Eyebrow>
            <h2 style={{ margin: '1.4rem 0 0', fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: 'var(--cj-t-h2)', lineHeight: 1.1, color: 'var(--cj-ink)' }}>Piezas seleccionadas del estudio</h2>
            <p style={{ margin: '1.2rem 0 0', maxWidth: '47ch', fontSize: 'var(--cj-t-body)', lineHeight: 1.6, color: 'var(--cj-ink-soft)' }}>
              Mobiliario, iluminación y objetos con entrega inmediata, junto con opciones que pueden desarrollarse a medida para cada espacio. Entrega coordinada en Rosario.
            </p>
          </div>
          <Button variant="ghost" href={WA_URL} icon={ARROW} iconRight>Escribinos para ver opciones</Button>
        </div>
        <div className="cj-grid3" style={{ marginTop: '3rem' }}>
          {objs.map(([img, cat, name]) => (
            <ProjectCard key={name} image={img} eyebrow={cat} title={name} meta="Consultá disponibilidad" ratio="4 / 5" />
          ))}
        </div>
        <p style={{ marginTop: '2rem', fontFamily: 'var(--cj-font-ui)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--cj-text-subtle)' }}>
          Consultá condiciones, cuotas y disponibilidad · También desarrollamos cada espacio a medida
        </p>
      </Container>
    </section>
  );
}

/* ————————————————————————————————— WORKS ————————————————————————————————— */
const PROJECTS = [
  { title: 'Proyecto Funes', cat: 'En curso', cover: PHOTO.daylight, images: [PHOTO.daylight, PHOTO.wood, PHOTO.kitchen, PHOTO.shelf] },
  { title: 'Proyecto Divisadero', cat: 'Anteproyecto', cover: PHOTO.kitchen, images: [PHOTO.kitchen, PHOTO.hero, PHOTO.nook, PHOTO.extra] },
  { title: 'Proyecto Lab', cat: 'Residencial', cover: PHOTO.shelf, images: [PHOTO.shelf, PHOTO.lamps, PHOTO.wood, PHOTO.hero2] },
  { title: 'Edificio Costavía', cat: 'Comercial', cover: PHOTO.hero, images: [PHOTO.hero, PHOTO.daylight, PHOTO.kitchen, PHOTO.extra] },
  { title: 'Proyecto Río', cat: 'Residencial', cover: PHOTO.nook, images: [PHOTO.nook, PHOTO.shelf2, PHOTO.lamps, PHOTO.hero2] },
];

function Works() {
  const [open, setOpen] = useState(-1);
  const rowA = [PROJECTS[0], PROJECTS[1]];
  const rowB = [PROJECTS[2], PROJECTS[3], PROJECTS[4]];
  const idxOf = (p) => PROJECTS.indexOf(p);
  return (
    <section id="trabajos" style={{ background: 'var(--cj-paper)', paddingTop: 'var(--cj-section-y)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow index="04" rule>Trabajos</Eyebrow>
            <h2 style={{ margin: '1.4rem 0 0', maxWidth: '20ch', fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: 'var(--cj-t-h2)', lineHeight: 1.1, color: 'var(--cj-ink)' }}>Proyectos para espacios en transformación</h2>
          </div>
          <Button variant="ghost" href={WA_URL} icon={ARROW} iconRight>Consultar proyectos</Button>
        </div>
        <div className="cj-works-a" style={{ marginTop: '3rem' }}>
          {rowA.map((p) => <WorkTile key={p.title} p={p} ratio="16 / 11" onOpen={() => setOpen(idxOf(p))} />)}
        </div>
        <div className="cj-works-b" style={{ marginTop: '2rem' }}>
          {rowB.map((p) => <WorkTile key={p.title} p={p} ratio="4 / 5" overlay onOpen={() => setOpen(idxOf(p))} />)}
        </div>
      </Container>
      {open > -1 ? <Lightbox project={PROJECTS[open]} onClose={() => setOpen(-1)} /> : null}
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
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '1.5rem', background: 'linear-gradient(to top, rgba(28,24,21,0.55), rgba(28,24,21,0) 55%)' }}>
            <span style={{ fontFamily: 'var(--cj-font-ui)', fontWeight: 300, fontSize: '1.05rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cj-paper)' }}>{p.title}</span>
          </div>
        ) : null}
      </div>
      {!overlay ? (
        <div style={{ paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
          <div>
            <Eyebrow style={{ fontSize: '0.6875rem' }}>{p.cat}</Eyebrow>
            <div style={{ fontFamily: 'var(--cj-font-serif)', fontWeight: 300, fontSize: '1.35rem', lineHeight: 1.2, color: 'var(--cj-ink)', marginTop: 6 }}>{p.title}</div>
          </div>
          <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: h ? 'var(--cj-brick)' : 'var(--cj-text-subtle)', transition: 'color var(--cj-dur) var(--cj-ease)', whiteSpace: 'nowrap' }}>Ver galería {ARROW}</span>
        </div>
      ) : null}
    </button>
  );
}

/* ———————————————————————————————— LIGHTBOX ———————————————————————————————— */
function Lightbox({ project, onClose }) {
  const [i, setI] = useState(0);
  const n = project.images.length;
  const prev = (e) => { if (e) e.stopPropagation(); setI((v) => (v - 1 + n) % n); };
  const next = (e) => { if (e) e.stopPropagation(); setI((v) => (v + 1) % n); };
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); else if (e.key === 'ArrowLeft') prev(); else if (e.key === 'ArrowRight') next(); };
    document.addEventListener('keydown', onKey);
    const prevOv = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prevOv; };
  }, [n]);
  const arrowStyle = { width: 52, height: 52, borderRadius: '50%', border: '1px solid rgba(243,239,230,0.35)', background: 'rgba(43,37,33,0.4)', color: 'var(--cj-paper)', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', transition: 'background var(--cj-dur-fast) var(--cj-ease)' };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(28,24,21,0.95)', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', animation: 'cjFade var(--cj-dur) var(--cj-ease)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(1rem,3vw,1.6rem) clamp(1.25rem,5vw,3rem)', color: 'var(--cj-paper)' }}>
        <div>
          <div style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(243,239,230,0.55)' }}>{project.cat}</div>
          <div style={{ fontFamily: 'var(--cj-font-serif)', fontWeight: 300, fontSize: 'clamp(1.3rem,3vw,1.8rem)', marginTop: 4 }}>{project.title}</div>
        </div>
        <button onClick={onClose} aria-label="Cerrar" style={{ ...arrowStyle, width: 40, height: 40 }}><CloseIcon /></button>
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

/* ———————————————————————————————— ADVISORY ———————————————————————————————— */
function Advisory() {
  return (
    <section id="contacto" style={{ background: 'var(--cj-ink)', color: 'var(--cj-paper)', paddingTop: 'var(--cj-section-y)', paddingBottom: 'var(--cj-section-y)' }}>
      <Container>
        <div className="cj-advisory" style={{ alignItems: 'stretch', gap: 'clamp(2rem,5vw,4.5rem)' }}>
          <div>
            <Eyebrow index="05" rule color="rgba(243,239,230,0.6)">Asesoramiento</Eyebrow>
            <h2 style={{ margin: '1.6rem 0 0', fontFamily: 'var(--cj-font-display)', fontWeight: 300, fontSize: 'var(--cj-t-h2)', lineHeight: 1.08, color: 'var(--cj-paper)' }}>Solicitá tu asesoramiento</h2>
            <p style={{ margin: '1.6rem 0 0', maxWidth: '46ch', fontSize: 'var(--cj-t-body)', lineHeight: 1.6, color: 'rgba(243,239,230,0.78)' }}>
              Casa Jaguar desarrolla proyectos de interiorismo y dirección creativa para espacios residenciales y comerciales. Compartinos información sobre tu proyecto para conocer tus necesidades y coordinar una primera instancia de asesoramiento.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: '2.2rem', flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" href={FORM_URL} target="_blank" rel="noopener" icon={ARROW} iconRight>Completar formulario</Button>
              <Button variant="ghost" size="lg" href={WA_URL} icon={<WAIcon size={18} />} style={{ color: 'var(--cj-paper)', boxShadow: 'inset 0 -1px 0 rgba(243,239,230,0.4)' }}>Escribinos</Button>
            </div>
            <div style={{ marginTop: '2.6rem', display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              {[['Estudio', 'Rosario, Argentina'], ['Escribinos', 'hola@casajaguar.ar'], ['Instagram', IG]].map(([l, v]) => (
                <div key={l}><div className="cj-eyebrow" style={{ fontSize: 11, color: 'rgba(243,239,230,0.5)' }}>{l}</div><div style={{ fontFamily: 'var(--cj-font-serif)', fontSize: 16, marginTop: 6, color: 'var(--cj-paper)' }}>{v}</div></div>
              ))}
            </div>
          </div>
          <div className="cj-photo" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--cj-radius)', minHeight: 340, background: 'var(--cj-stone-100)' }}>
            <img src={PHOTO.hero} alt="Proyecto Casa Jaguar" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </Container>
    </section>
  );
}
function AdvisoryForm_HIDDEN() {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ background: 'var(--cj-white)', borderRadius: 'var(--cj-radius)', padding: 'clamp(1.6rem,3vw,2.4rem)' }}>
      <div style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cj-text-subtle)' }}>Solicitud de asesoramiento</div>
      {sent ? (
        <div style={{ padding: '2.5rem 0', textAlign: 'center' }}>
          <div style={{ width: 40, height: 1, background: 'var(--cj-brick)', margin: '0 auto' }} />
          <p style={{ fontFamily: 'var(--cj-font-serif)', fontSize: 20, color: 'var(--cj-ink)', margin: '1.2rem 0 0' }}>¡Gracias! Nos comunicamos a la brevedad.</p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ marginTop: '1.6rem', display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <Field label="Nombre y apellido" required />
          <Field label="Correo electrónico" type="email" required />
          <Field label="¿Qué espacio te gustaría desarrollar?" required />
          <Field label="Medidas aproximadas" required />
          <Field label="Ubicación" required />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="primary" size="md" as="button">Enviar solicitud</Button>
          </div>
        </form>
      )}
    </div>
  );
}

/* ————————————————————————————————— FOOTER ————————————————————————————————— */
function Footer() {
  return (
    <footer style={{ background: 'var(--cj-paper)', paddingTop: 'var(--cj-space-9)', paddingBottom: 'var(--cj-space-7)' }}>
      <Container>
        <div className="cj-footer">
          <div style={{ maxWidth: 340 }}>
            <img src={LOGOTIPO} alt="Casa Jaguar" style={{ height: 44, width: 'auto', display: 'block' }} />
            <p style={{ margin: '1.4rem 0 0', fontSize: 'var(--cj-t-body-sm)', lineHeight: 1.6, color: 'var(--cj-ink-soft)' }}>Estudio de interiorismo y dirección creativa. Residencial y comercial · Cita previa. Rosario, Argentina.</p>
          </div>
          <FooterCol title="Navegación" items={[['Estudio', '#estudio'], ['Servicios', '#servicios'], ['Objetos', '#objetos'], ['Trabajos', '#trabajos'], ['Contacto', '#contacto']]} />
          <FooterCol title="Contacto" items={[['Escribinos', WA_URL], ['hola@casajaguar.ar', 'mailto:hola@casajaguar.ar'], ['Solicitud de asesoramiento', '#contacto']]} />
          <FooterCol title="Seguinos" items={[[IG, 'https://instagram.com/casajaguar.ar']]} />
        </div>
        <div style={{ marginTop: 'var(--cj-space-8)', paddingTop: 'var(--cj-space-5)', borderTop: '1px solid var(--cj-line)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--cj-font-ui)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--cj-text-subtle)' }}>© 2025 Casa Jaguar · Rosario, Argentina</span>
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
        {items.map(([label, href]) => <li key={label}><a href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--cj-font-serif)', fontSize: 15, color: 'var(--cj-ink)' }}>{href === WA_URL ? <WAIcon size="0.95em" /> : null}{label}</a></li>)}
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
    let blocks = [...document.querySelectorAll('#cj-scroll > section:not(#top) > div, .cj-grid3, .cj-works-a, .cj-works-b, .cj-stagger')];
    blocks.forEach((b) => {
      if (b.classList.contains('cj-stagger')) return;
      const cls = b.matches('.cj-grid3,.cj-works-a,.cj-works-b') ? 'cj-stagger'
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
      <Nav /><HeroFull /><Manifesto /><Studio /><Services /><Objects /><Works /><Advisory /><Footer />
    </div>
  );
}
Object.assign(window, { CJApp: CJDeployApp });
