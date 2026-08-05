/* @ds-bundle: {"format":4,"namespace":"CasaJaguarDesignSystem_ef4a47","components":[{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"}],"sourceHashes":{"components/brand/Wordmark.jsx":"5d83e1146e3d","components/cards/ProjectCard.jsx":"693f364e795b","components/core/Button.jsx":"83508cca4b02","components/core/Eyebrow.jsx":"81dec22de22e","components/forms/Field.jsx":"37e0b1fc5a5f","guidelines/image-slot.js":"fff26d081c8d","ui_kits/landing/App.jsx":"bb5abcb2912f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CasaJaguarDesignSystem_ef4a47 = window.CasaJaguarDesignSystem_ef4a47 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Casa Jaguar — Wordmark (logotipo)
 * The real cursive brand logotipo "casa jaguar" as an inline, recolorable SVG.
 * Primary mark for digital & print (manual p.5). Recolor via `color` (currentColor),
 * size via `size`. Never lock up beside the jaguar isologo.
 */
const LOGOTIPO_PATHS = `<path d="M2734.42,300.08c-32.03,22.95-82.35,55.44-120.07,61.44-4.44.71-10.61.36-14.84-.1-8.79-.96-12.31-8.26-11.67-16.33.6-7.54,2.21-15.09,5.85-21.84l16.94-31.49-54.8,29.96c-15.26,8.34-31.65,13.66-49.19,15.54l-18.73.14c-9.74.07-19.02-5.03-25.18-11.88-12.02-13.35-2.31-25.8-11.15-31.6-3.34-2.19-8.44-1.85-12.73.11l-91.21,41.6c-10.35,4.72-21.15,6.62-32.35,7.46-10.62.8-21.63-2.37-28.11-10.32-12.61-15.48-3.76-30.99,4.19-48.56l-215.55,93.03-12.02,12.43-15.44,15.49-14.87,13.76c-32.36,29.94-97.82,76.48-140.42,64.81-10.82-2.96-15.68-11.33-14.95-22.07.46-6.77,2.7-13.23,6.1-19.42,23.83-43.35,76.21-75.48,120.77-95.76l43.31-30.99-4.19-7.39c-20.49,10.25-40.68,19.47-62.2,25.88-8.99,2.67-19.15,2.06-26.15-3.44-4.46-3.5-5.88-10.8-4.68-16.21l2.94-13.28c.11-.48.19-2.47-.23-2.24l-2.01,1.09-64.38,32.2c-15.46,7.73-47.58,17.45-63.98,15.13-22.69-3.21-45.58-17.38-43.01-40.6l1-8.99c-32.08,23.82-85.2,57.88-123.2,63.85l-14.37.02c-4.08,0-10.47-4.67-11.31-8.99-5.58-28.55,33.33-76.47,53.89-99.24l32.45-32.41c15.9-15.88,33.88-28.73,54.21-38.04,21.22-9.71,53.54-12.49,66.76,7.23,5.27,7.85,4.88,17.31,3.49,26.33-2.48,16.07-10.81,28.68-17.5,43.21-4.07,8.83,5.74,20.92,13.57,23.94,8.13,3.14,15.32,4.23,23.82,3.32,16.74-1.79,32.71-6.42,48.41-13.05l102.78-43.37c53.44-44.01,124.36-81.06,193.25-89.53l11.71-.8,15.65-.06c18.85-.08,47.27,6.4,44.98,26.87-2.37,21.2-23.97,51.37-39.07,66.6l-32.26,32.54c-2.2,2.22-5.28,3.8-6.75,6.89l128.5-41.21c3.28-1.05,4.47-3.37,6.68-5.57l31.42-31.26c16.51-16.43,50.59-31.26,67.93-18.24,9.42,7.07,7.16,24.79-4.58,36.36l-7.84,7.73-30.14,30.19c-7.85,7.87-13.76,16.64-18.83,26.49-1.05,2.05-.36,6.89.68,8.67,4.11,7.07,23.51-1,31.97-6.92l36.29-25.4,51.84-40.4c24.08-18.77,48.97-15.05,47.41-2.53-1.63,13.1-11.73,24.93-17.41,36.54l-10.23,20.91c-2.3,4.71-3.17,11.93-1.78,16.93,4.15,14.89,28.67,8.19,44.49,2.51,36.81-13.22,69.95-31.69,102.55-54.03,25.06-22.94,50-47.2,84.07-56.31,5.97-1.6,11.92-1.61,18.13-1.84,12.3-.47,24.48,3.01,32.01,13.25,13.8,18.75-2.05,50.78-13.71,71.03-2.14,8.62,4.65,18.86,12.2,22.64,8.02,4.02,16.65,5.38,25.8,4.33,17.64-2.02,34.39-6.86,50.89-13.88l104.95-44.61c11.66-18.8,21.2-37.62,30.33-57.79,13.28-16.7,36.48-21.96,57.92-21.3,5.59.17,12.15,1.14,16.66,4.28,13.58,9.48-3.53,41.56-14.3,56.53-.58.83-1.21,1.7-.81,2.02l2.86,2.29c1.04.83,3.49,2.43,4.38,1.7l4.06-3.31c16.95-13.83,69.58-37.11,92.73-43.57,19.84-5.53,39.66-9.1,60.05-7.25,13.09,1.19,26.98,3.64,36.31,13.12,8.11,8.24,3.4,20.98-3.95,27.96-8.28,7.86-17.56,14.27-29.77,11.96-7.87-1.49-17.55-21.51-46.19-14.95-26.29,6.02-50.26,17.8-73.32,32.16-26.53,16.51-50.94,34.83-73.51,56.19l-14.74,13.95-13.28,13.22-9.58,10.2c-11.67,14.41-24.03,27.8-41.17,35.7-16,7.38-33.81,7.76-49.75.65-10.05-4.48-8.26-17.44-4.26-29.15,6.61-15.4,14.96-29.06,24.2-43l1.36-1.64c.35-.43-1.13-1.81-1.57-1.49l-2.27,1.65-73.3,39c-35.62,15.07-73.89,32.77-106.34,6.43-11.15-9.05-12.78-20.38-10.89-34.08.1-1.67.25-1.83-.15-1.54l-2.5,1.79ZM2074.75,276.3c47.18-17.91,109.61-49.75,146.68-83.16,7.18-6.47,15.36-16.98,11.54-21.23-.87-.97-3.4-2.55-4.77-2.57l-10.88-.16-40.38,10.31c-49.14,17.86-106.51,46.81-146.98,79.45-8.6,6.93-22.42,20.68-19.88,26.62,4.91,11.48,47.8-2.86,64.67-9.26ZM1740.33,286.25l35.12-35.07c10.35-10.33,30.27-39.39,19.96-39.77-18.66-.69-66.16,38.51-82.06,54.43l-17.71,17.73c-9.97,9.98-35.02,40.06-29.85,46.9,7.75,10.26,61.49-31.19,74.54-44.22ZM2744.91,250.11l17.66-17.63c4.39-4.38,7.83-9.94,9.35-16.2-1.03-2.69-6.66-3.74-9.59-2.9-14.93,4.27-28.12,10.24-41.57,18.06-27.48,15.98-53.12,33.9-76.22,55.59-8.03,7.54-22.1,22.67-19.45,28.19.54,1.13,3.75,3,5.19,2.72,35.69-6.87,85.82-43.01,114.63-67.83ZM1914.79,464.29c35.31-9.35,80.65-40.89,108.88-65.16l22.6-22.55c2.83-2.82,6.43-9.02,6.5-12.49.23-10.68-29.01,2.5-41.74,9.34-27.56,14.82-53.18,32.31-76.8,52.75l-17.98,17.52c-4.8,4.67-9.07,11.04-10.39,17.62,1.28,2.31,6.38,3.65,8.93,2.97Z"></path> <path d="M320.27,157.14l7.55-.56,9.16.03c27.03.09,46.88,21.61,45.08,49.05-.91,13.79-6.53,26.54-15.64,37.09l-10.98,11.03c-11.83,10.08-25.12,18.55-40.72,21.91-3.33.71-8.39.28-12.06.15-6.2-.22-6.9-10.69-4.62-14.66,5.56-9.66,12.33-20.99,5.42-29.36-5.32-6.45-15.88-4.94-24.62-.72-23.61,11.4-39.19,22.9-56.46,42.47-12.29,13.92-23.44,37.59-11.72,51.48,4.89,5.8,13.15,8.35,20.93,8.78,10.93.59,21.38-3.02,31.73-7.07,22.99-9.01,44.76-19.06,66.99-29.77l32.82-15.8,64-31.51,29.75-14.16c7.16-3.41,12.14-6.77,18.04-12.06l10.93-9.8c14.19-12.72,29.51-23.42,46.84-31.17,21.01-9.38,52.85-11.93,65.95,7.59,5.27,7.85,4.88,17.31,3.49,26.33-2.48,16.07-10.81,28.68-17.5,43.21-4.07,8.84,5.75,20.92,13.57,23.94,18.69,7.22,38.27,1.81,57.62-4.7,40.37-13.58,78.78-30.48,117.44-48.33,4.96-10.55,10.45-19.79,18.48-27.95l16.91-17.17c18.01-15.08,36.54-28.47,57.34-39.41,14.6-7.68,29.75-12.88,46.22-13.27,9.23-.21,17.64.39,25.8,3.92,10.47,4.53,17.18,14.09,14.77,25.95-2.45,12.03-9.66,22.35-18.69,30.48l-11.65,10.5c-15.15,11.42-30.95,21.01-47.37,30.62-7.66,4.48-14.75,9.23-20,16.23-6.72,8.96-6.37,19.78.08,28.77.88,3.93,2.41,10.19,1.97,13.97l-1.18,10.15c-2.24,19.19-12.75,35.78-25.65,50.22-14.38,16.11-33.37,25.86-53.64,33.24-22.96,8.36-50.4,12.5-73.5,4.81-27.61-10.57-37.87-41.84-30.25-71.64-28.42,12.93-62.22,30.29-93.59,27.16-21.6-4.82-42.63-17.86-40.09-40.48l1-8.94c-31.89,23.55-85.64,58.06-123.21,63.82l-14.36.02c-4.14,0-10.42-4.7-11.32-8.97-4.79-22.69,17.41-50.6,29.58-71.57l-95.8,54.61c-19.63,11.19-39.48,19.52-60.49,27.64-34.36,13.29-76.82,23.27-110.82,8.87-16.59-7.02-26.34-21.93-25.01-40.31.84-11.5,3.35-22.84,8.28-33.54,12.02-26.05,27.54-49.58,47.02-70.53,36.46-39.2,83.18-62.75,136.14-70.6ZM545.59,233.68c1.55-3.11,2.1-9.06.33-11.53-5.88-3.14-12.33-.87-17.65,1.89l-12.49,6.48c-23.27,14.36-43.5,32.1-61.7,52.48-9.44,10.57-27.54,33.82-21.42,41.68,10.43,13.4,90.27-45.44,112.92-91ZM739.28,348.91c13.71-5.2,23.84-14.86,26.59-29.3l2.24-11.74.06-34.36-1.35-7.25-53.48,32.09.58,10.45.89,16.05c.33,5.9,1.38,12.77,3.76,17.87,4.14,8.88,12.42,9.34,20.72,6.19Z"></path> <path d="M1212.76,428.27c5.65-26.55,28.19-45.35,54.84-46.91,9.37-.55,17.32,2.04,24.6,7.6l13.05,9.96c17.53,13.38,37.82,17.74,59.56,12.48,31.18-7.55,59.3-22.74,83.39-44.22,23.75-21.18,42.97-46.08,57.4-74.43l5.42-12.32-14.26,8.99c-5.43,3.42-15.65,2.75-19.43-3-11.28-17.14,7.24-42.6,25.27-53.18,36.53-21.45,71.16-44.58,103.95-71.77,7.43-6.16,14.54-12.16,22.87-16.7,15.71-8.56,45.19-11.38,59.86-1.19,1.87,1.3,4.42,5.76,4.2,8.01-2.38,24.02-26.42,44.77-41.75,63.73l-39.43,48.74c-24.88,34.19-51.2,66.06-79.99,97.04l-48.38,48.38c-18.35,18.34-38.5,33.65-60.63,47.31-31.57,19.48-66.93,30.65-103.67,34.86l-9.07.78-23.68-.2c-17.49-.14-34.29-4.9-49.6-12.87-19.3-10.05-29.18-29.11-24.5-51.08Z"></path> <path d="M1270.34,267.63c-41.88,27.35-110.8,66.13-158.53,77.91-19.36,4.61-39.2,1.34-54.47-10.98-11.21-9.04-15.02-21.39-11.58-36.54-33.06,23.8-71.63,48.7-109.19,60.37-17.03,5.29-40.35,6.55-40.38-9.51-.05-33.29,39.09-78.86,62.7-104.4l16.14-16.06c21.45-21.35,56.81-49.09,86.92-52.43l16.58-.1c6.15-.04,12.55,3.09,17.86,6.09,8.85,4.99,12.31,14.68,11.92,24.54-.19,4.78-.13,9.72-1.29,14.26-3.6,14.04-9.83,26.5-17.54,38.6-.9,14.5,9.49,25.34,23.8,26.93,6.12.68,13.67,1.84,19.69.12l40.32-11.56c34.84-12.39,67.94-27,101.56-42.44,11.61-5.33,21.96-10.56,34.84-12.51l9.63-.05c1.46,0,4.29,2.18,4.94,3.43.75,1.43-.09,4.94-1.46,6.36l-9.78,10.08-42.69,27.88ZM947.36,326.49l19.29-8.48c17.89-10.19,33.99-22.7,48.47-37.2l9.93-9.95c11.16-11.18,36.14-43.16,27.83-48.64-12.11-7.98-53.11,22.28-65.25,34.41l-28.5,28.5c-7.65,7.65-12.86,16.61-18.33,25.91-1.93,3.29-2.82,9.31-1.62,12.88.68,2.01,6.12,3.47,8.17,2.56Z"></path>`;
function Wordmark({
  size = 'md',
  color,
  alt = 'Casa Jaguar',
  style = {},
  ...rest
}) {
  const heights = {
    sm: 20,
    md: 28,
    lg: 42,
    xl: 62
  };
  const h = heights[size] || heights.md;
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": alt,
    viewBox: "0 0 3427.76 581.65",
    preserveAspectRatio: "xMidYMid meet",
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      color: color || 'var(--cj-brick)',
      fill: 'currentColor',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: LOGOTIPO_PATHS
    }
  }, rest));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Casa Jaguar — Button
 * Editorial, letterspaced-caps control. Ink-filled primary, ink-outline secondary,
 * quiet text ghost. No shadows, no bounce; hover shifts value, press nudges down 1px.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  icon = null,
  iconRight = false,
  full = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.6rem 1.1rem',
      fontSize: '0.6875rem',
      ls: '0.2em'
    },
    md: {
      padding: '0.9rem 1.6rem',
      fontSize: '0.75rem',
      ls: '0.22em'
    },
    lg: {
      padding: '1.15rem 2.1rem',
      fontSize: '0.8125rem',
      ls: '0.22em'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.7em',
    fontFamily: 'var(--cj-font-ui)',
    fontWeight: 'var(--cj-w-regular)',
    fontSize: s.fontSize,
    letterSpacing: s.ls,
    textTransform: 'uppercase',
    lineHeight: 1,
    padding: s.padding,
    width: full ? '100%' : 'auto',
    border: '1px solid transparent',
    borderRadius: 'var(--cj-radius)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--cj-dur-fast) var(--cj-ease), color var(--cj-dur-fast) var(--cj-ease), border-color var(--cj-dur-fast) var(--cj-ease), transform var(--cj-dur-fast) var(--cj-ease)',
    textDecoration: 'none',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      background: 'var(--cj-ink)',
      color: 'var(--cj-paper)',
      borderColor: 'var(--cj-ink)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--cj-ink)',
      borderColor: 'var(--cj-line-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--cj-ink)',
      borderColor: 'transparent',
      padding: `${s.padding.split(' ')[0]} 0`
    },
    accent: {
      background: 'var(--cj-brick)',
      color: 'var(--cj-white)',
      borderColor: 'var(--cj-brick)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--cj-ink-deep)',
      borderColor: 'var(--cj-ink-deep)'
    },
    secondary: {
      background: 'var(--cj-ink)',
      color: 'var(--cj-paper)',
      borderColor: 'var(--cj-ink)'
    },
    ghost: {
      color: 'var(--cj-clay)'
    },
    accent: {
      background: 'var(--cj-brick-deep)',
      borderColor: 'var(--cj-brick-deep)'
    }
  }[variant] : {};
  const Tag = href ? 'a' : as;
  const ghostUnderline = variant === 'ghost' ? {
    boxShadow: `inset 0 -1px 0 ${hover ? 'var(--cj-clay)' : 'var(--cj-line-strong)'}`
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: as === 'button' && !href ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...ghostUnderline,
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      ...style
    }
  }, rest), icon && !iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.15em'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, children), icon && iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.15em'
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Casa Jaguar — Eyebrow
 * Letterspaced uppercase label. The system's signature small-caps device
 * (echoes the logo & the Instagram overlay type). Optional leading index/rule.
 */
function Eyebrow({
  children,
  index = null,
  rule = false,
  color,
  as = 'div',
  style = {},
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.9em',
      fontFamily: 'var(--cj-font-eyebrow)',
      fontWeight: 'var(--cj-w-regular)',
      fontSize: 'var(--cj-t-eyebrow)',
      letterSpacing: 'var(--cj-ls-eyebrow)',
      textTransform: 'uppercase',
      color: color || 'var(--cj-text-subtle)',
      ...style
    }
  }, rest), index != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cj-clay)',
      letterSpacing: '0.1em'
    }
  }, index) : null, rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '2.4em',
      height: '1px',
      background: 'currentColor',
      opacity: 0.5
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Casa Jaguar — ProjectCard
 * Editorial work/project tile: full-bleed image with a quiet caption block below
 * (or an overlay of letterspaced caps). No heavy shadow — a hairline and a slow
 * image zoom on hover. Used across the Trabajos gallery and object catalogue.
 */
function ProjectCard({
  image,
  title,
  meta,
  eyebrow,
  overlay = false,
  ratio = '4 / 5',
  href,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      color: 'var(--cj-ink)',
      textDecoration: 'none',
      cursor: href ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cj-photo",
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      borderRadius: 'var(--cj-radius)',
      background: 'var(--cj-stone-100)',
      border: '1px solid var(--cj-line)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--cj-dur-slow) var(--cj-ease)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cj-stone-400)',
      fontFamily: 'var(--cj-font-ui)',
      fontSize: '0.7rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase'
    }
  }, "Imagen"), overlay && title ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      padding: '1.5rem',
      background: 'linear-gradient(to top, rgba(28,24,21,0.55), rgba(28,24,21,0) 55%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontWeight: 300,
      fontSize: '1.05rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--cj-paper)'
    }
  }, title)) : null), !overlay && (title || meta || eyebrow) ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      fontSize: '0.6875rem'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-serif)',
      fontWeight: 300,
      fontSize: '1.35rem',
      lineHeight: 1.2,
      color: 'var(--cj-ink)'
    }
  }, title) : null, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: '0.8125rem',
      letterSpacing: '0.02em',
      color: 'var(--cj-text-muted)'
    }
  }, meta) : null) : null);
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Casa Jaguar — Field
 * Editorial form control. Underline-only by default (no boxy inputs) with a
 * letterspaced caps label. Supports input & textarea; the advisory form is built
 * from these. Minimal, ink-on-white, quiet focus (line thickens to ink).
 */
function Field({
  label,
  name,
  type = 'text',
  as = 'input',
  placeholder = '',
  required = false,
  hint,
  boxed = false,
  rows = 4,
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const line = focus ? 'var(--cj-ink)' : 'var(--cj-line-strong)';
  const control = {
    width: '100%',
    fontFamily: 'var(--cj-font-body)',
    fontSize: 'var(--cj-t-body)',
    color: 'var(--cj-ink)',
    background: boxed ? 'var(--cj-white)' : 'transparent',
    border: boxed ? `1px solid ${line}` : '0',
    borderBottom: `1px solid ${line}`,
    borderRadius: boxed ? 'var(--cj-radius)' : 0,
    padding: boxed ? '0.85rem 0.9rem' : '0.6rem 0',
    outline: 'none',
    transition: 'border-color var(--cj-dur-fast) var(--cj-ease)',
    resize: as === 'textarea' ? 'vertical' : undefined,
    fontFamily: as === 'textarea' ? 'var(--cj-font-body)' : 'var(--cj-font-body)'
  };
  const Control = as;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-eyebrow)',
      fontSize: '0.6875rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--cj-text-subtle)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cj-clay)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement(Control, _extends({
    name: name,
    type: as === 'input' ? type : undefined,
    rows: as === 'textarea' ? rows : undefined,
    placeholder: placeholder,
    required: required,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: '0.75rem',
      color: 'var(--cj-text-subtle)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// guidelines/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/App.jsx
try { (() => {
const NS = window.CasaJaguarDesignSystem_ef4a47;
const {
  Button,
  Eyebrow,
  Wordmark,
  Field,
  ProjectCard
} = NS;
const {
  useState,
  useEffect
} = React;
const A = '../../assets';
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
  shelf2: A + '/photos/real-shelf.jpg'
};
const ARROW = '\u2192';
const ArrowIcon = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  style: {
    display: 'block',
    flex: '0 0 auto'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h13M13 6l6 6-6 6"
}));
const WA_ICON = A + '/brand/whatsapp.svg';
const WAIcon = ({
  size = 18,
  color = 'currentColor'
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: color,
  "aria-hidden": "true",
  style: {
    display: 'inline-block',
    verticalAlign: 'middle',
    flex: '0 0 auto'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.463 3.488A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
}));
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdvbNWCvB8BWleIj4hngzT0E7uQG52HUsWf9B_INnE2_itrvA/viewform';
const WA_URL = 'https://wa.me/5493410000000';
const IG = '@casajaguar.ar';
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--cj-max-w)',
    margin: '0 auto',
    paddingLeft: 'var(--cj-gutter)',
    paddingRight: 'var(--cj-gutter)',
    ...style
  }
}, children);
const Words = ({
  text,
  style
}) => {
  const words = text.split(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: "cj-words",
    style: style
  }, words.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "cj-word",
    style: {
      transitionDelay: (i * 0.055).toFixed(3) + 's'
    }
  }, w, i < words.length - 1 ? '\u00a0' : '')));
};
const Chevron = ({
  dir = 'left'
}) => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  style: {
    display: 'block'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: dir === 'left' ? 'M15 4l-8 8 8 8' : 'M9 4l8 8-8 8'
}));
const CloseIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  "aria-hidden": "true",
  style: {
    display: 'block'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6L6 18"
}));
const Lockup = ({
  dark
}) => /*#__PURE__*/React.createElement("img", {
  src: dark ? LOGOTIPO_CREAM : LOGOTIPO,
  alt: "Casa Jaguar",
  style: {
    height: 30,
    width: 'auto',
    display: 'block'
  }
});

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
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'saturate(1.1) blur(10px)',
      WebkitBackdropFilter: 'saturate(1.1) blur(10px)',
      borderBottom: `1px solid ${scrolled ? 'var(--cj-line)' : 'transparent'}`,
      transition: 'border-color var(--cj-dur) var(--cj-ease)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Lockup, null), /*#__PURE__*/React.createElement("nav", {
    className: "cj-navlinks",
    style: {
      display: 'flex',
      gap: 34
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 13,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cj-navcta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: WA_URL,
    icon: /*#__PURE__*/React.createElement(WAIcon, {
      size: "1.15em"
    })
  }, "Escribinos")), /*#__PURE__*/React.createElement("button", {
    className: "cj-burger",
    onClick: () => setOpen(!open),
    "aria-label": "Men\xFA",
    style: {
      display: 'none',
      flexDirection: 'column',
      gap: 5,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1,
      background: 'var(--cj-ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1,
      background: 'var(--cj-ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1,
      background: 'var(--cj-ink)'
    }
  })))), open ? /*#__PURE__*/React.createElement("div", {
    className: "cj-mobilemenu",
    style: {
      borderTop: '1px solid var(--cj-line)',
      background: 'var(--cj-white)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 18,
      paddingBottom: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    onClick: () => setOpen(false),
    style: {
      padding: '10px 0',
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 14,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    full: true,
    href: WA_URL,
    icon: /*#__PURE__*/React.createElement(WAIcon, null)
  }, "Escribinos")))) : null);
}

/* ————————————————————————————————— HERO ————————————————————————————————— */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      paddingTop: 'clamp(3rem,7vw,6rem)',
      paddingBottom: 'var(--cj-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "cj-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Interiorismo \xB7 Direcci\xF3n creativa \xB7 Rosario"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '1.6rem 0 0',
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: 'var(--cj-t-h1)',
      lineHeight: 'var(--cj-lh-tight)',
      letterSpacing: '-0.01em',
      color: 'var(--cj-ink)'
    }
  }, "\xBFEst\xE1s en obra", /*#__PURE__*/React.createElement("br", null), "o en reformas?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.5rem 0 0',
      maxWidth: '30ch',
      fontFamily: 'var(--cj-font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--cj-t-h4)',
      lineHeight: 1.3,
      color: 'var(--cj-brick)'
    }
  }, "\xBFTe gustar\xEDa que te asesoremos?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.6rem 0 0',
      maxWidth: '42ch',
      fontFamily: 'var(--cj-font-body)',
      fontSize: 'var(--cj-t-body-lg)',
      lineHeight: 1.55,
      color: 'var(--cj-ink-soft)'
    }
  }, "Dejanos tu contacto y nos comunicamos. Interiorismo y direcci\xF3n creativa para espacios residenciales y comerciales."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: '2.4rem',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: WA_URL,
    icon: /*#__PURE__*/React.createElement(WAIcon, null)
  }, "Escribinos"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    href: "#contacto"
  }, "Solicitar asesoramiento"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cj-photo",
    style: {
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      borderRadius: 'var(--cj-radius)',
      background: 'var(--cj-stone-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTO.hero,
    alt: "Proyecto Casa Jaguar",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 18,
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(6px)',
      padding: '8px 14px',
      borderRadius: 'var(--cj-radius)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--cj-ink)'
    }
  }, "Proyecto Edificio Costav\xEDa")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(6px)',
      padding: '6px 12px',
      borderRadius: 'var(--cj-radius)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 11,
      letterSpacing: '0.1em',
      color: 'var(--cj-brick)'
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: 'var(--cj-line-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--cj-ink)'
    }
  }, "Comercial"))))));
}

/* ——————————————————————— HERO (overlay / full-bleed) ——————————————————————— */
function HeroFull() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: 'min(90vh, 820px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTO.heroLamp,
    alt: "Proyecto Casa Jaguar",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(28,24,21,0.7) 0%, rgba(28,24,21,0.26) 46%, rgba(28,24,21,0.4) 100%)'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      width: '100%',
      paddingTop: 'clamp(4rem,10vw,7rem)',
      paddingBottom: 'clamp(3rem,7vw,6rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cj-eyebrow",
    style: {
      color: 'rgba(243,239,230,0.82)'
    }
  }, "Interiorismo \xB7 Direcci\xF3n creativa \xB7 Rosario"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '1.4rem 0 0',
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: 'var(--cj-t-h1)',
      lineHeight: 'var(--cj-lh-tight)',
      letterSpacing: '-0.01em',
      color: 'var(--cj-paper)'
    }
  }, "\xBFEst\xE1s en obra", /*#__PURE__*/React.createElement("br", null), "o en reformas?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.3rem 0 0',
      maxWidth: '36ch',
      fontFamily: 'var(--cj-font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--cj-t-h4)',
      lineHeight: 1.3,
      color: 'var(--cj-paper)'
    }
  }, "\xBFTe gustar\xEDa que te asesoremos?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.4rem 0 0',
      maxWidth: '44ch',
      fontFamily: 'var(--cj-font-body)',
      fontSize: 'var(--cj-t-body-lg)',
      lineHeight: 1.55,
      color: 'rgba(243,239,230,0.86)'
    }
  }, "Dejanos tu contacto y nos comunicamos. Interiorismo y direcci\xF3n creativa para espacios residenciales y comerciales."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      marginTop: '2.4rem',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    href: WA_URL,
    icon: /*#__PURE__*/React.createElement(WAIcon, null)
  }, "Escribinos"), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 13,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--cj-paper)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: 'inset 0 -1px 0 rgba(243,239,230,0.45)',
      paddingBottom: 5
    }
  }, "Solicitar asesoramiento ", /*#__PURE__*/React.createElement(ArrowIcon, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--cj-gutter)',
      bottom: 'clamp(3rem,7vw,6rem)',
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(243,239,230,0.7)'
    }
  }, "Proyecto Edificio Costav\xEDa")));
}

/* ———————————————————————————————— MANIFESTO ———————————————————————————————— */
function Manifesto() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cj-paper)',
      paddingTop: 'clamp(4.5rem,9vw,7rem)',
      paddingBottom: 'clamp(4.5rem,9vw,7rem)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      maxWidth: 806,
      textAlign: 'center',
      paddingLeft: 0,
      paddingRight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2rem 0 0',
      maxWidth: '31.1ch',
      width: '100%',
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: 'clamp(1.9rem,3.4vw,2.9rem)',
      lineHeight: 1.18,
      letterSpacing: '-0.01em',
      color: 'var(--cj-ink)'
    }
  }, "Pensamos el espacio como experiencia, donde intervienen todos los sentidos."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 1,
      background: 'var(--cj-line-strong)',
      margin: '1.4rem 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0',
      maxWidth: '52ch',
      fontSize: 'var(--cj-t-body)',
      lineHeight: 1.65,
      color: 'var(--cj-ink-soft)'
    }
  }, "Nada es al azar: materiales, proporciones y vac\xEDos. La composici\xF3n se ajusta hasta que cada elemento encuentra su relaci\xF3n con el conjunto.")));
}

/* ———————————————————————————————— STUDIO ———————————————————————————————— */
function Studio() {
  return /*#__PURE__*/React.createElement("section", {
    id: "estudio",
    style: {
      paddingTop: 'var(--cj-section-y)',
      paddingBottom: 'var(--cj-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "01",
    rule: true
  }, "El estudio"), /*#__PURE__*/React.createElement("div", {
    className: "cj-two",
    style: {
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: 'var(--cj-t-h2)',
      lineHeight: 1.12,
      letterSpacing: '-0.01em',
      color: 'var(--cj-ink)'
    }
  }, "Casa Jaguar nace del cruce entre interiorismo, direcci\xF3n creativa y la sensibilidad del textil."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.3rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--cj-t-body)',
      lineHeight: 'var(--cj-lh-body)',
      color: 'var(--cj-ink-soft)'
    }
  }, "Desarrollamos espacios desde una mirada atravesada por el arte, la materialidad y la experiencia de habitar diferentes culturas."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--cj-t-body)',
      lineHeight: 'var(--cj-lh-body)',
      color: 'var(--cj-ink-soft)'
    }
  }, "Durante casi diez a\xF1os trabajamos entre distintos territorios \u2014M\xE9xico, Italia y ahora Argentina\u2014 colaborando con artesanos, artistas y oficios que transformaron nuestra forma de entender los espacios."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--cj-t-body)',
      lineHeight: 'var(--cj-lh-body)',
      color: 'var(--cj-ink-soft)'
    }
  }, "Cada proyecto se construye desde la identidad del lugar, la relaci\xF3n entre los materiales y una b\xFAsqueda constante por crear atm\xF3sferas con presencia, equilibrio y car\xE1cter."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: '0.6rem',
      flexWrap: 'wrap'
    }
  }, [['~10', 'años'], ['MX · IT · AR', 'territorios'], ['Rosario', 'base']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: '1.8rem',
      color: 'var(--cj-ink)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "cj-eyebrow",
    style: {
      fontSize: 11,
      marginTop: 4
    }
  }, l))))))));
}

/* ——————————————————————————————— SERVICES ——————————————————————————————— */
function Services() {
  const items = [['Dirección integral de interiorismo', 'Luz, color y materialidad definidos como un sistema coordinado. Incluye desarrollo conceptual, selección material, definición técnica y acompañamiento en obra hasta su implementación.'], ['Anteproyecto y planificación', 'Definimos layout, proporción, circulación e iluminación antes de ejecutar. Relevamiento en propiedad, propuesta visual y desarrollo de moodboard material.'], ['Dirección creativa', 'Definimos el proyecto desde la materia: pruebas reales, ajuste de tonos y aplicación en obra. Espacios en transformación, con carácter y coherencia.'], ['Desarrollo de mobiliario y piezas', 'Bibliotecas, mesas, sillas e iluminación para integrar en proyectos. También desarrollamos cada espacio a medida.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      background: 'var(--cj-paper)',
      paddingTop: 'var(--cj-section-y)',
      paddingBottom: 'var(--cj-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "02",
    rule: true
  }, "Servicios"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '1.4rem 0 0',
      maxWidth: '24.6ch',
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: 'var(--cj-t-h2)',
      lineHeight: 1.1,
      color: 'var(--cj-ink)'
    }
  }, "L\xEDneas que se adaptan a todos los espacios y presupuestos."), /*#__PURE__*/React.createElement("div", {
    className: "cj-stagger",
    style: {
      marginTop: '2.6rem'
    }
  }, items.map(([t, d], i) => /*#__PURE__*/React.createElement(ServiceRow, {
    key: t,
    n: i + 1,
    title: t,
    desc: d
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.8rem',
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--cj-text-subtle)'
    }
  }, "Interiorismo residencial y comercial \xB7 Proyectos a medida \xB7 Cita previa")));
}
function ServiceRow({
  n,
  title,
  desc
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    className: "cj-service",
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr 1.1fr auto',
      alignItems: 'center',
      gap: 28,
      padding: '1.9rem 0',
      borderBottom: '1px solid var(--cj-line)',
      transition: 'padding-left var(--cj-dur) var(--cj-ease)',
      paddingLeft: h ? 14 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 13,
      letterSpacing: '0.1em',
      color: 'var(--cj-brick)'
    }
  }, String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: 'var(--cj-t-h3)',
      color: 'var(--cj-ink)',
      lineHeight: 1.05
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--cj-t-body-sm)',
      lineHeight: 1.55,
      color: 'var(--cj-ink-soft)'
    }
  }, desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-serif)',
      fontSize: 22,
      color: 'var(--cj-ink)',
      opacity: h ? 1 : 0.25,
      transform: h ? 'translateX(4px)' : 'none',
      transition: 'all var(--cj-dur) var(--cj-ease)'
    }
  }, ARROW));
}

/* ———————————————————————————————— OBJECTS ———————————————————————————————— */
function Objects() {
  const objs = [[PHOTO.lamps, 'Iluminación', 'Lámpara tejida'], [PHOTO.wood, 'Mobiliario', 'Mesa a medida'], [PHOTO.shelf, 'Mobiliario', 'Biblioteca abierta']];
  return /*#__PURE__*/React.createElement("section", {
    id: "objetos",
    style: {
      paddingTop: 'var(--cj-section-y)',
      paddingBottom: 'var(--cj-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '55ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "03",
    rule: true
  }, "Objetos \xB7 Feria del estudio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '1.4rem 0 0',
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: 'var(--cj-t-h2)',
      lineHeight: 1.1,
      color: 'var(--cj-ink)'
    }
  }, "Piezas seleccionadas del estudio"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.2rem 0 0',
      maxWidth: '47ch',
      fontSize: 'var(--cj-t-body)',
      lineHeight: 1.6,
      color: 'var(--cj-ink-soft)'
    }
  }, "Mobiliario, iluminaci\xF3n y objetos con entrega inmediata, junto con opciones que pueden desarrollarse a medida para cada espacio. Entrega coordinada en Rosario.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: WA_URL,
    icon: ARROW,
    iconRight: true
  }, "Escribinos para ver opciones")), /*#__PURE__*/React.createElement("div", {
    className: "cj-grid3",
    style: {
      marginTop: '3rem'
    }
  }, objs.map(([img, cat, name]) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: name,
    image: img,
    eyebrow: cat,
    title: name,
    meta: "Consult\xE1 disponibilidad",
    ratio: "4 / 5"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '2rem',
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--cj-text-subtle)'
    }
  }, "Consult\xE1 condiciones, cuotas y disponibilidad \xB7 Tambi\xE9n desarrollamos cada espacio a medida")));
}

/* ————————————————————————————————— WORKS ————————————————————————————————— */
const PROJECTS = [{
  title: 'Proyecto Funes',
  cat: 'En curso',
  cover: PHOTO.daylight,
  images: [PHOTO.daylight, PHOTO.wood, PHOTO.kitchen, PHOTO.shelf]
}, {
  title: 'Proyecto Divisadero',
  cat: 'Anteproyecto',
  cover: PHOTO.kitchen,
  images: [PHOTO.kitchen, PHOTO.hero, PHOTO.nook, PHOTO.extra]
}, {
  title: 'Proyecto Lab',
  cat: 'Residencial',
  cover: PHOTO.shelf,
  images: [PHOTO.shelf, PHOTO.lamps, PHOTO.wood, PHOTO.hero2]
}, {
  title: 'Edificio Costavía',
  cat: 'Comercial',
  cover: PHOTO.hero,
  images: [PHOTO.hero, PHOTO.daylight, PHOTO.kitchen, PHOTO.extra]
}, {
  title: 'Proyecto Río',
  cat: 'Residencial',
  cover: PHOTO.nook,
  images: [PHOTO.nook, PHOTO.shelf2, PHOTO.lamps, PHOTO.hero2]
}];
function Works() {
  const [open, setOpen] = useState(-1);
  const rowA = [PROJECTS[0], PROJECTS[1]];
  const rowB = [PROJECTS[2], PROJECTS[3], PROJECTS[4]];
  const idxOf = p => PROJECTS.indexOf(p);
  return /*#__PURE__*/React.createElement("section", {
    id: "trabajos",
    style: {
      background: 'var(--cj-paper)',
      paddingTop: 'var(--cj-section-y)',
      paddingBottom: 'var(--cj-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "04",
    rule: true
  }, "Trabajos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '1.4rem 0 0',
      maxWidth: '20ch',
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: 'var(--cj-t-h2)',
      lineHeight: 1.1,
      color: 'var(--cj-ink)'
    }
  }, "Proyectos para espacios en transformaci\xF3n")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: WA_URL,
    icon: ARROW,
    iconRight: true
  }, "Consultar proyectos")), /*#__PURE__*/React.createElement("div", {
    className: "cj-works-a",
    style: {
      marginTop: '3rem'
    }
  }, rowA.map(p => /*#__PURE__*/React.createElement(WorkTile, {
    key: p.title,
    p: p,
    ratio: "16 / 11",
    onOpen: () => setOpen(idxOf(p))
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cj-works-b",
    style: {
      marginTop: '2rem'
    }
  }, rowB.map(p => /*#__PURE__*/React.createElement(WorkTile, {
    key: p.title,
    p: p,
    ratio: "4 / 5",
    overlay: true,
    onOpen: () => setOpen(idxOf(p))
  })))), open > -1 ? /*#__PURE__*/React.createElement(Lightbox, {
    project: PROJECTS[open],
    onClose: () => setOpen(-1)
  }) : null);
}
function WorkTile({
  p,
  ratio,
  overlay,
  onOpen
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: 0,
      border: 0,
      background: 'none',
      cursor: 'pointer',
      font: 'inherit',
      color: 'var(--cj-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cj-photo",
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      borderRadius: 'var(--cj-radius)',
      background: 'var(--cj-stone-100)',
      border: '1px solid var(--cj-line)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.cover,
    alt: p.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: h ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--cj-dur-slow) var(--cj-ease)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(6px)',
      padding: '5px 10px',
      borderRadius: 'var(--cj-radius)',
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--cj-ink)',
      opacity: h ? 1 : 0.85,
      transition: 'opacity var(--cj-dur) var(--cj-ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 9,
      border: '1px solid var(--cj-ink)',
      borderRadius: 1,
      position: 'relative',
      display: 'inline-block'
    }
  }), p.images.length), overlay ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      padding: '1.5rem',
      background: 'linear-gradient(to top, rgba(28,24,21,0.55), rgba(28,24,21,0) 55%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontWeight: 300,
      fontSize: '1.05rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--cj-paper)'
    }
  }, p.title)) : null), !overlay ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: '0.6875rem'
    }
  }, p.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--cj-font-serif)',
      fontWeight: 300,
      fontSize: '1.35rem',
      lineHeight: 1.2,
      color: 'var(--cj-ink)',
      marginTop: 6
    }
  }, p.title)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: h ? 'var(--cj-brick)' : 'var(--cj-text-subtle)',
      transition: 'color var(--cj-dur) var(--cj-ease)',
      whiteSpace: 'nowrap'
    }
  }, "Ver galer\xEDa ", ARROW)) : null);
}

/* ———————————————————————————————— LIGHTBOX ———————————————————————————————— */
function Lightbox({
  project,
  onClose
}) {
  const [i, setI] = useState(0);
  const n = project.images.length;
  const prev = e => {
    if (e) e.stopPropagation();
    setI(v => (v - 1 + n) % n);
  };
  const next = e => {
    if (e) e.stopPropagation();
    setI(v => (v + 1) % n);
  };
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();else if (e.key === 'ArrowLeft') prev();else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    const prevOv = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOv;
    };
  }, [n]);
  const arrowStyle = {
    width: 52,
    height: 52,
    borderRadius: '50%',
    border: '1px solid rgba(243,239,230,0.35)',
    background: 'rgba(43,37,33,0.4)',
    color: 'var(--cj-paper)',
    fontSize: 22,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 auto',
    transition: 'background var(--cj-dur-fast) var(--cj-ease)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(28,24,21,0.95)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      flexDirection: 'column',
      animation: 'cjFade var(--cj-dur) var(--cj-ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'clamp(1rem,3vw,1.6rem) clamp(1.25rem,5vw,3rem)',
      color: 'var(--cj-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(243,239,230,0.55)'
    }
  }, project.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--cj-font-serif)',
      fontWeight: 300,
      fontSize: 'clamp(1.3rem,3vw,1.8rem)',
      marginTop: 4
    }
  }, project.title)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      ...arrowStyle,
      width: 40,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(CloseIcon, null))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem,2vw,1.5rem)',
      padding: '0 clamp(0.75rem,4vw,3rem)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "cj-lbarrow",
    onClick: prev,
    "aria-label": "Anterior",
    style: arrowStyle
  }, /*#__PURE__*/React.createElement(Chevron, {
    dir: "left"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: project.images[i],
    alt: `${project.title} ${i + 1}`,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      borderRadius: 'var(--cj-radius)',
      boxShadow: '0 30px 80px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "cj-lbarrow",
    onClick: next,
    "aria-label": "Siguiente",
    style: arrowStyle
  }, /*#__PURE__*/React.createElement(Chevron, {
    dir: "right"
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: 'clamp(1rem,3vw,1.6rem)',
      flexWrap: 'wrap'
    }
  }, project.images.map((src, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setI(k),
    "aria-label": `Imagen ${k + 1}`,
    style: {
      width: 60,
      height: 44,
      padding: 0,
      border: 0,
      borderRadius: 2,
      overflow: 'hidden',
      cursor: 'pointer',
      outline: k === i ? '2px solid var(--cj-paper)' : '2px solid transparent',
      outlineOffset: 2,
      opacity: k === i ? 1 : 0.5,
      transition: 'opacity var(--cj-dur-fast) var(--cj-ease)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 12,
      letterSpacing: '0.1em',
      color: 'rgba(243,239,230,0.6)',
      marginLeft: 8
    }
  }, i + 1, " / ", n)));
}

/* ———————————————————————————————— ADVISORY ———————————————————————————————— */
function Advisory() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: 'var(--cj-ink)',
      color: 'var(--cj-paper)',
      paddingTop: 'var(--cj-section-y)',
      paddingBottom: 'var(--cj-section-y)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "cj-advisory",
    style: {
      alignItems: 'stretch',
      gap: 'clamp(2rem,5vw,4.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    index: "05",
    rule: true,
    color: "rgba(243,239,230,0.6)"
  }, "Asesoramiento"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '1.6rem 0 0',
      fontFamily: 'var(--cj-font-display)',
      fontWeight: 300,
      fontSize: 'var(--cj-t-h2)',
      lineHeight: 1.08,
      color: 'var(--cj-paper)'
    }
  }, "Solicit\xE1 tu asesoramiento"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.6rem 0 0',
      maxWidth: '46ch',
      fontSize: 'var(--cj-t-body)',
      lineHeight: 1.6,
      color: 'rgba(243,239,230,0.78)'
    }
  }, "Casa Jaguar desarrolla proyectos de interiorismo y direcci\xF3n creativa para espacios residenciales y comerciales. Compartinos informaci\xF3n sobre tu proyecto para conocer tus necesidades y coordinar una primera instancia de asesoramiento."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: '2.2rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    href: FORM_URL,
    target: "_blank",
    rel: "noopener",
    icon: ARROW,
    iconRight: true
  }, "Completar formulario"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    href: WA_URL,
    icon: /*#__PURE__*/React.createElement(WAIcon, {
      size: 18
    }),
    style: {
      color: 'var(--cj-paper)',
      boxShadow: 'inset 0 -1px 0 rgba(243,239,230,0.4)'
    }
  }, "Escribinos")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.6rem',
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, [['Estudio', 'Rosario, Argentina'], ['Escribinos', 'hola@casajaguar.ar'], ['Instagram', IG]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "cj-eyebrow",
    style: {
      fontSize: 11,
      color: 'rgba(243,239,230,0.5)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--cj-font-serif)',
      fontSize: 16,
      marginTop: 6,
      color: 'var(--cj-paper)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    className: "cj-photo",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--cj-radius)',
      minHeight: 340,
      background: 'var(--cj-stone-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTO.hero,
    alt: "Proyecto Casa Jaguar",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))));
}
function AdvisoryForm_HIDDEN() {
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cj-white)',
      borderRadius: 'var(--cj-radius)',
      padding: 'clamp(1.6rem,3vw,2.4rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--cj-text-subtle)'
    }
  }, "Solicitud de asesoramiento"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '2.5rem 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 1,
      background: 'var(--cj-brick)',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--cj-font-serif)',
      fontSize: 20,
      color: 'var(--cj-ink)',
      margin: '1.2rem 0 0'
    }
  }, "\xA1Gracias! Nos comunicamos a la brevedad.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      marginTop: '1.6rem',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre y apellido",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Correo electr\xF3nico",
    type: "email",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "\xBFQu\xE9 espacio te gustar\xEDa desarrollar?",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Medidas aproximadas",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Ubicaci\xF3n",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    as: "button"
  }, "Enviar solicitud"))));
}

/* ————————————————————————————————— FOOTER ————————————————————————————————— */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cj-paper)',
      paddingTop: 'var(--cj-space-9)',
      paddingBottom: 'var(--cj-space-7)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "cj-footer"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGOTIPO,
    alt: "Casa Jaguar",
    style: {
      height: 44,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '1.4rem 0 0',
      fontSize: 'var(--cj-t-body-sm)',
      lineHeight: 1.6,
      color: 'var(--cj-ink-soft)'
    }
  }, "Estudio de interiorismo y direcci\xF3n creativa. Residencial y comercial \xB7 Cita previa. Rosario, Argentina.")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Navegaci\xF3n",
    items: [['Estudio', '#estudio'], ['Servicios', '#servicios'], ['Objetos', '#objetos'], ['Trabajos', '#trabajos'], ['Contacto', '#contacto']]
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Contacto",
    items: [['Escribinos', WA_URL], ['hola@casajaguar.ar', 'mailto:hola@casajaguar.ar'], ['Solicitud de asesoramiento', '#contacto']]
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Seguinos",
    items: [[IG, 'https://instagram.com/casajaguar.ar']]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--cj-space-8)',
      paddingTop: 'var(--cj-space-5)',
      borderTop: '1px solid var(--cj-line)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 12,
      letterSpacing: '0.04em',
      color: 'var(--cj-text-subtle)'
    }
  }, "\xA9 2025 Casa Jaguar \xB7 Rosario, Argentina"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--cj-font-ui)',
      fontSize: 12,
      letterSpacing: '0.04em',
      color: 'var(--cj-text-subtle)'
    }
  }, "Interiorismo & direcci\xF3n creativa"))));
}
function FooterCol({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cj-eyebrow",
    style: {
      fontSize: 11
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '1.2rem 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(([label, href]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--cj-font-serif)',
      fontSize: 15,
      color: 'var(--cj-ink)'
    }
  }, href === WA_URL ? /*#__PURE__*/React.createElement(WAIcon, {
    size: "0.95em"
  }) : null, label)))));
}
function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("a", {
    href: WA_URL,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Escribinos por WhatsApp",
    style: {
      position: 'fixed',
      right: 'clamp(1rem,3vw,2rem)',
      bottom: 'clamp(1rem,3vw,2rem)',
      zIndex: 90,
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 30px rgba(37,211,102,0.45)',
      transition: 'opacity var(--cj-dur) var(--cj-ease), transform var(--cj-dur) var(--cj-ease)',
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
      pointerEvents: show ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement(WAIcon, {
    size: 30
  }));
}
function App() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = document.querySelector('#top > div:last-child');
    if (hero) {
      if (reduce) hero.classList.add('cj-hero-in');else requestAnimationFrame(() => hero.classList.add('cj-hero-in'));
    }
    let blocks = [...document.querySelectorAll('#cj-scroll > section:not(#top) > div, .cj-grid3, .cj-works-a, .cj-works-b, .cj-stagger')];
    blocks.forEach(b => {
      if (b.classList.contains('cj-stagger')) return;
      const cls = b.matches('.cj-grid3,.cj-works-a,.cj-works-b') ? 'cj-stagger' : b.querySelector('.cj-words') ? 'cj-wordblock' : 'cj-reveal';
      b.classList.add(cls);
    });
    if (reduce) {
      blocks.forEach(b => b.classList.add('in'));
      return;
    }
    const reveal = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      blocks = blocks.filter(b => {
        if (b.getBoundingClientRect().top < vh * 0.88) {
          b.classList.add('in');
          return false;
        }
        return true;
      });
      if (!blocks.length) {
        window.removeEventListener('scroll', onScroll, true);
        window.removeEventListener('resize', reveal);
      }
    };
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          reveal();
        });
      }
    };
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', reveal);
    reveal();
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', reveal);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: "cj-scroll",
    style: {
      background: 'var(--cj-white)'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(HeroFull, null), /*#__PURE__*/React.createElement(Manifesto, null), /*#__PURE__*/React.createElement(Studio, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Objects, null), /*#__PURE__*/React.createElement(Works, null), /*#__PURE__*/React.createElement(Advisory, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  CJApp: App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/App.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Field = __ds_scope.Field;

})();
