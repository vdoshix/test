# Design system

The canonical stylesheet is `sources/brandkit/brand.css` (Brand Kit v3.2). It supersedes the
Bootstrap 4.5.2 defaults in `sources/bootstrap-4.5.2-dist/` and the ad-hoc rules in `style.css`,
both of which are kept only for the legacy list markup.

## Typography

The brand face is **Brand Sans**, self-hosted at
`https://vdoshix.github.io/test/assets/brand/`. It is not on any system font stack and it is not
loaded by the page shell, so **any stylesheet that renders brand UI must declare its own
`@font-face` blocks** for the 400 and 600 weights. A stylesheet that only names the family in
`font-family` will silently fall back to Arial.

## Surfaces

Brand surfaces use `--brand-panel-bg`, which layers the shared paper texture
(`assets/brand/paper-texture.png`) over white. Flat `#ffffff` panels are off-brand.

## Dialogs

There is exactly one dialog treatment: **the full-bleed takeover** (`.brand-dialog`). It is
fixed to the viewport, fills it edge to edge (`100vw` x `100vh`, `inset: 0`), and sits at
`z-index: 2147483647` so nothing can overlap it while it is open. Centered "lightbox" cards,
corner tooltips and slide-out panels were retired in v3.0 and must not be reintroduced by new
surfaces, including third-party overlays embedded in the product.
