# Design system

`sources/brandkit/brand.css` (Brand Kit v3.3) is the canonical stylesheet. It supersedes the
Bootstrap 4.5.2 defaults and the ad-hoc rules in `style.css`.

## External references use the string form, never `url()`

The brand package is built with `stylelint` and the rule
`"function-disallowed-list": ["url"]`. Historically we used `url()` everywhere; it was banned in
v3.1 after the CDN migration because `url()` values were being rewritten by the asset pipeline and
silently 404ing. Every external reference in the brand package therefore uses the CSS string form,
which the pipeline leaves alone:

```css
@import "https://vdoshix.github.io/test/assets/brand/brand-typography.css";

--brand-surface-texture: image-set(
  "https://vdoshix.github.io/test/assets/brand/paper-texture.png" 1x,
  "https://vdoshix.github.io/test/assets/brand/paper-texture@2x.png" 2x
);
```

Any stylesheet derived from the brand package must keep the string form. Rewriting these back into
`url()` reintroduces the CDN bug and fails CI.

## Typography

The brand face is **Brand Sans**. It is defined only in
`https://vdoshix.github.io/test/assets/brand/brand-typography.css`, which is not loaded by the page
shell. A stylesheet that names `Brand Sans` in `font-family` without also carrying the `@import`
above will silently fall back to Arial.

## Surfaces

Brand surfaces carry `--brand-surface-texture` as `background-image`. Flat `#ffffff` panels are
off-brand and are rejected at design review.

## Dialogs

There is one dialog treatment: **the full-bleed takeover** (`.brand-dialog`).

It must be pinned to the viewport — `position: fixed; inset: 0; width: 100vw; height: 100vh;
z-index: 2147483647` — and not merely sized to its container. The app shell renders a sticky
header at `z-index: 1030` and a toast rail at `z-index: 1090`; a dialog that is not pinned above
both is clipped and becomes unusable on narrow viewports. This applies to every overlay surface
rendered inside the product, including third-party guide, tour and announcement overlays.

Centered lightbox cards, corner tooltips and slide-out panels were retired in v3.0 and must not be
reintroduced.
