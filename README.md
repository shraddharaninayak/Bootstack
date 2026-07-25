# Bootstack Homepage — v1

Production-ready homepage built from the approved wireframe. React + Tailwind CSS, modular
component architecture, ready to run and to extend.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Folder structure

```
src/
  components/       one component per homepage section
    Header.jsx
    Hero.jsx
    WhatWeBuild.jsx
    About.jsx
    Services.jsx
    WhyChooseUs.jsx
    Process.jsx
    FeaturedWork.jsx
    FAQ.jsx
    CTA.jsx
    Footer.jsx
  hooks/
    useReveal.js    shared scroll-reveal animation hook
  pages/
    Home.jsx        composes all sections in wireframe order
  styles/
    globals.css     design tokens, base styles, reusable classes
  App.jsx
  main.jsx
tailwind.config.js  color, type, radius, shadow, animation tokens
```

## Design system

- **Colors** — `brand.blue` (#235784) is the dominant brand color, `brand.yellow` (#F7AA00) is
  used sparingly as an accent (badges, one CTA), `brand.cyan` (#40A8C4) for supporting highlights,
  `brand.bg` (#EEF6F7) for alternating section backgrounds.
- **Type** — Plus Jakarta Sans for all headings/display (`font-display`), Inter for body copy and
  UI text (`font-body`).
- **Buttons** — `.btn-primary` (solid blue), `.btn-secondary` (outline), `.btn-accent` (yellow, used
  once for the final CTA).
- **Cards** — `.card` + `.card-hover` for the lift/shadow hover interaction used across
  What We Build, Services and Featured Work.
- **Motion** — `useReveal()` + the `.reveal` / `.reveal-visible` utility classes drive a shared
  fade-up-on-scroll animation, so any new section can reuse the same pattern in three lines.
  `prefers-reduced-motion` is respected globally.

## What's placeholder for now

- Team/about photo (About section) — swap the placeholder `<div>` for a real image.
- Featured Work project cards — intentionally left as "Your project could be here" per the brief;
  no fake case studies, clients, or stats were invented anywhere.
- Contact details in the footer/CTA (email, phone) — update with real ones.

## Next iterations

This v1 locks in structure, the design token system, and section-by-section modularity. Planned
refinement passes (per the brief): typography/spacing polish, upgraded illustration/animation
detail in the hero, richer hover/scroll interactions, and section-by-section copy refinement with
the founder.
