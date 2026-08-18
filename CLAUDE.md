# Casa Jaguar — Landing

> **La verdad está en los archivos.** Este documento da contexto de negocio, marca y
> decisiones. Si algo aquí contradice al código (`landing-app.jsx`, `tokens/*.css`,
> `index.html`, `assets/`), **manda el código** — actualizá este archivo cuando lo notes.

Esta carpeta (`deploy/`) es el sitio estático desplegable. La raíz del repo git es esta
misma carpeta.

---

## 1. El estudio (Casa Jaguar)

- **Qué es:** estudio de interiorismo y dirección creativa para espacios residenciales y comerciales.
- **Base:** Rosario, Argentina.
- **Origen (texto real):** "Casa Jaguar nace del cruce entre interiorismo, dirección creativa y la sensibilidad del textil… México, Italia y ahora Argentina…". El "MX · IT · AR" es real como trayectoria; **no** debe usarse como un stat inventado (ya se removió del bloque Estudio).
- **Instagram:** `@casajaguar.ar` — la identidad visual arranca de ahí.
- **Dominio anterior:** `somoscasajaguar.com` (GoDaddy, posiblemente vencido).
- **Servicios reales:** dirección integral, anteproyecto, dirección creativa, desarrollo de piezas. Tagline: *"Líneas que se adaptan a todos los espacios y presupuestos"*.
- **Objetos / Feria (texto real):** "Piezas seleccionadas del estudio… entrega coordinada en Rosario… también desarrollamos cada espacio a medida".

## 2. La clienta (Lucía)

- Lucía, de Casa Jaguar, confirmó que quiere empezar el proyecto.
- Mandó los SVG del logotipo. Material final (fotos/textos definitivos) llegó parcial.
- **Referencias estéticas de ella:** `framacph.com` y `thefinestore.com` (minimal, blanco, editorial, foco en producto/fotografía).
- Quiere contacto por **WhatsApp** + botón al **Google Form**.
- Mai puede ayudar con gráficos si hace falta.

## 3. El proyecto (brief)

- **Entregable:** landing page para recibir tráfico de campañas de Google y Meta.
- **Objetivo único:** que el visitante contacte por **WhatsApp** o complete la **solicitud de asesoramiento (Google Form)**.
- **Implementación final prevista:** WordPress (editor de bloques), preparada para crecer sin rehacerla. *(El código actual de esta carpeta es una landing estática en React/JSX — ver §9.)*
- **Segunda etapa (futuro, no ahora):** portfolio, catálogo amplio, formulario propio, carrito, pagos, stock.
- **Sin ahora:** e-commerce, carrito, pagos, login, formulario propio.
- **Idioma:** español de Argentina (**voseo** — "Escribinos", "Contanos").

## 4. Identidad / marca

- **Fuente de verdad de marca:** `uploads/Casa Jaguar-Manual de marca_compressed.pdf` (Manual de identidad, 25 pp).
- **Tipografía:** **Rubik** (Google Fonts) — decisión actualizada del cliente que reemplaza a Creato del manual (antes fue Roboto). Una sola familia; jerarquía por peso + tamaño + tracking amplio. Ver `tokens/fonts.css` y `tokens/typography.css` (`--cj-font`, fuente única de verdad).
- **Logotipo cursivo "casa jaguar"** = marca principal, es **vector (SVG)**, no fuente. Archivos en `assets/brand/`: `logotipo.svg` (rojo), `logotipo-cream.svg` (negativo), `logotipo-ink.svg`. Renderizado por el componente `Wordmark`.
- **Emblema** = logotipo en círculo (`logotipo-emblem.svg` + `-neg`) para uso compacto.
- **Jaguar de línea / isologo:** NO se usa por ahora (existe `isologo-jaguar.png` pero se evita hasta tener SVG limpio; prohibidos recortes borrosos de IG).
- **Área de seguridad:** mín. 50 mm impresión / 30 mm digital. Nunca deformar ni recolorar.

## 5. Color (ver `tokens/colors.css` — fuente de verdad)

- Base **blanco** `--cj-white #ffffff`; superficie compañera **cream** cálido `--cj-paper #f3efe6`.
- Oscuro = **carbón cálido** `--cj-ink #2b2521` (sin azul/navy).
- Acento de marca = **rojo ladrillo** `--cj-brick #a02a20` (logotipo + destacadas de IG).
- Tierras suaves, muy medidas: clay `--cj-clay #a9704f` y olive `--cj-olive #7c7d5f`.
- Máx. ~2 colores de fondo por pantalla. **Sin gradientes** (excepto el scrim sutil sobre imágenes).

## 6. Tono y estética

- Minimalista, blanco, editorial, sobrio, cálido, atemporal. **La fotografía manda.**
- **Voz:** primera persona plural para el estudio ("Diseñamos"), **vos** para el visitante. Calmo, sin vender lujo.
- **Evitar:** "lujo/exclusivo", superlativos, jerga de agencia, gradientes, cards genéricas, colores estridentes, emoji.
- **Motifs:** separador `·`, etiquetas numeradas `01 — …`, hairlines finas, flecha `→` en CTAs. (El asterisco `*` se sacó por pedido.)
- Casi sin íconos — lenguaje tipográfico.

## 7. Copy real (verbatim / adaptado)

- **Hero:** "¿Estás en obra o en reformas? ¿Te gustaría que te asesoremos? Dejanos tu contacto y nos comunicamos" (de su aviso recurrente en IG).
- **Manifiesto:** "Pensamos el espacio como experiencia, donde intervienen todos los sentidos" + "Nada es al azar: materiales, proporciones, vacíos".
- **Asesoramiento (texto exacto del Google Form):** "Casa Jaguar desarrolla proyectos de interiorismo y dirección creativa para espacios residenciales y comerciales. Compartimos la información sobre tu proyecto para conocer tus necesidades y coordinar una primera instancia de asesoramiento."

## 8. La landing (estructura) — actualizada tras feedback del cliente (ago 2026)

Secciones: **Nav → HeroSplit → Manifiesto → Proyectos → Tienda → Nosotros → Servicios → Asesoramiento → Footer.**

- **Nav:** 3 ítems — **Proyectos · Tienda · Contactate** (+ logo sin cambios + CTA WhatsApp "Escribinos").
- **HeroSplit (Pantalla 1):** dos bloques de igual jerarquía, foto + link — **Proyectos** (`#proyectos`) y **Tienda** (`#tienda`). Reemplazó al hero full-bleed. Costavía ya NO vive en la home.
- **Proyectos:** sección simple (se quitó el toggle Por obra / Por área para simplificar la navegación). Obras: `Lab de Juju`, `Edificio Costavía`. Galería con lightbox. (Se quitaron `Maximalismo Latino` y el pie "Próximamente · México · Milán".) ⚠️ Fotos = placeholders hasta recibir material real.
- **Tienda:** 8 categorías con **formato de card editorial** (foto limpia + nombre + subcategorías como línea fina en mayúsculas debajo). **Drill-down:** al tocar una categoría se muestran sus **productos** dentro de la misma sección, con la **misma grilla** (`CategoryTile` = botón que abre; `ProductTile` = misma estética, linkea a WhatsApp vía `waProduct(name)`); botón **"Volver"** + animación fade-up (`cj-shop-enter`/`cj-shop-view`). Categorías: Iluminación (Colgante·Piso·Mesa·Aplique), Sillas, Sillones, Mesas, Bibliotecas, Camas y Camastros, Alfombras, Accesorios (Portavelas·Mantelería·Bazar chico). **Estructura lista para WordPress:** `CATEGORIES` = array de `{ name, subs, img, products:[{ name, sub, img }] }` — al migrar se reemplaza por datos del CMS sin tocar la UI. Productos = **muestras estáticas** (fotos reutilizadas de `assets/photos/`). En mobile las grillas son **slider horizontal**. (Se quitó el título "Piezas para comprar por unidad".) ⚠️ Fotos = placeholders (criterio: [[placeholder-photos-everywhere]]).
- **Nosotros:** banda con foto blurreada de fondo + texto final del cliente + "Trabajamos en todo el mundo". (Antes se llamaba "El estudio".)
- **Servicios:** copy nuevo del cliente — Interiorismo, Remodelaciones, Home Staging, Asesoría de diseño online. Se quitó el tagline genérico "se adapta a todos los espacios y presupuestos".
- **Asesoramiento/Contacto:** heading "Agendá una cita" + botones Formulario (Google Form) y WhatsApp ("Contactanos"). Se quitó **Dirección y Horarios** (solo quedan Teléfono + Instagram).
- **WhatsApp:** ícono oficial (`assets/brand/whatsapp.svg`), botón fijo en el header. El flotante (`WhatsAppFab`) está definido pero no montado.
- **Footer:** "© {año dinámico} Casa Jaguar · Rosario, Argentina". Sin dirección física.
- **Animaciones:** fade-up sutil al scrollear (reveal por scroll listener); hero split con zoom en hover.
- Responsive desktop + mobile; menú mobile con animación al abrir.

## 9. Arquitectura / deploy (código actual)

- Sitio **estático**. Entry: `landing-app.jsx`; bundle `_ds_bundle.js`; `index.html`; `styles.css`; tokens en `tokens/*.css`; assets en `assets/brand` y `assets/photos`.
- Rutas **relativas** (`./assets`, `./styles.css`, `./_ds_bundle.js`).
- **No abre por doble clic local** (bloqueo `file://`); hay que servirlo (ej. `npx serve`).
- **Vercel:** Framework Preset = **Other** (sin build), root = esta carpeta.

## 10. Datos de contacto / constantes (en `landing-app.jsx`, líneas ~43–46)

| Dato | Valor actual | Estado |
|---|---|---|
| `FORM_URL` | Google Form `1FAIpQLSdvbNWCvB8BWleIj4hngzT0E7uQG52HUsWf9B_INnE2_itrvA` | ✅ real |
| `WA_URL` | `https://wa.me/5493412612779` | ✅ **real** (ya no es placeholder) |
| `IG` / `IG_URL` | `@casajaguar.ar` / `instagram.com/casajaguar.ar` | ✅ real |
| Email | *(no hay email en el código)* | — |

## 11. Pendientes reales (de Lucía / Casa Jaguar)

1. **Fotos reales de las obras** `Lab de Juju` y `Edificio Costavía` (hoy usan placeholders de `assets/photos/`).
2. **Catálogo real de Tienda**: para cada categoría → sus productos con foto + nombre + subcategoría. Hoy hay muestras estáticas por categoría (drill-down); falta reemplazar por el catálogo real (destino: administrable desde WordPress con la estructura `CATEGORIES`).
3. Decidir si algún día se usa el jaguar isologo (necesita SVG limpio).
4. Confirmar próximas obras (México, Milán) cuando tengan material (por ahora no se muestran en el sitio).

## 12. Decisión de arquitectura pendiente

El feedback convirtió la landing en un **mini-sitio de catálogo** (Proyectos + Tienda con navegación interna y fichas). El destino final previsto era **WordPress**. Sin resolver: si se sigue evolucionando este prototipo React estático o se reconstruye en WordPress antes de invertir más en Proyectos/Tienda. La Tienda **no es e-commerce** — el botón de producto lleva a WhatsApp, no a carrito.
