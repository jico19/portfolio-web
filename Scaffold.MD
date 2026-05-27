# Portfolio Frontend — Gemini Scaffold Prompt

Frontend only. Single-page scroll layout.
**Stack:** React 19 · Vite 8 · Tailwind CSS 4 · TanStack Query
**Design:** Dark & Techy — pure black, monochrome, monospace typography, terminal feel.

> Backend is already set up. API runs at `http://localhost:8000`.

---

## Setup

```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm install tailwindcss @tailwindcss/vite
npm install @tanstack/react-query @tanstack/react-query-devtools
```

### `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/media": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
```

---

## Folder Structure

```
src/
├── api/
│   └── portfolio.js        # raw fetch functions
├── hooks/
│   └── usePortfolio.js     # React Query hooks
├── components/
│   ├── Navbar.jsx
│   ├── SectionShell.jsx    # shared section wrapper
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Certifications.jsx
│   └── Testimonials.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## Global Styles — `src/index.css`

Only non-Tailwind things live here: fonts, scanline texture, fade-up keyframe.
All component styling is done with Tailwind utility classes.

```css
@import "tailwindcss";

/* Scanline texture — not expressible with Tailwind utilities */
body {
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.012) 2px,
    rgba(255, 255, 255, 0.012) 4px
  );
}

/* Fade-up entry animation */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
}
```

### `index.html` — add fonts inside `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
```

---

## Data Layer

### `src/api/portfolio.js`

```js
const BASE = "/api";

async function get(endpoint) {
  const res = await fetch(`${BASE}/${endpoint}/`);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}

export const fetchPersonalInfo   = () => get("personal-info");
export const fetchTech           = () => get("tech");
export const fetchProjects       = () => get("projects");
export const fetchCertifications = () => get("certifications");
export const fetchExperience     = () => get("experience");
export const fetchTestimonials   = () => get("testimonials");
```

### `src/hooks/usePortfolio.js`

```js
import { useQuery } from "@tanstack/react-query";
import {
  fetchPersonalInfo, fetchTech, fetchProjects,
  fetchCertifications, fetchExperience, fetchTestimonials,
} from "../api/portfolio";

const OPTS = { staleTime: 1000 * 60 * 5 };

export const usePersonalInfo   = () => useQuery({ queryKey: ["personalInfo"],   queryFn: fetchPersonalInfo,   ...OPTS });
export const useTech           = () => useQuery({ queryKey: ["tech"],           queryFn: fetchTech,           ...OPTS });
export const useProjects       = () => useQuery({ queryKey: ["projects"],       queryFn: fetchProjects,       ...OPTS });
export const useCertifications = () => useQuery({ queryKey: ["certifications"], queryFn: fetchCertifications, ...OPTS });
export const useExperience     = () => useQuery({ queryKey: ["experience"],     queryFn: fetchExperience,     ...OPTS });
export const useTestimonials   = () => useQuery({ queryKey: ["testimonials"],   queryFn: fetchTestimonials,   ...OPTS });
```

### `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
```

---

## Components

### `src/App.jsx`

```jsx
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import Skills         from "./components/Skills";
import Projects       from "./components/Projects";
import Experience     from "./components/Experience";
import Certifications from "./components/Certifications";
import Testimonials   from "./components/Testimonials";

export default function App() {
  return (
    <div className="bg-black text-[#e8e8e8] font-[Syne,sans-serif] min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Testimonials />
    </div>
  );
}
```

---

### `src/components/SectionShell.jsx`

Shared wrapper for every section. Handles max-width, padding, border-top, and the `// label` comment style.

```jsx
export default function SectionShell({ id, label, children }) {
  return (
    <section id={id} className="border-t border-[#222] py-24 px-6 max-w-6xl mx-auto">
      {label && (
        <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#555] mb-10">
          {`// ${label}`}
        </p>
      )}
      {children}
    </section>
  );
}
```

---

### `src/components/Navbar.jsx`

Fixed top bar. Frosted black background, monospace nav links, hover reveals white.

```jsx
const links = [
  { href: "#skills",         label: "stack" },
  { href: "#projects",       label: "projects" },
  { href: "#experience",     label: "experience" },
  { href: "#certifications", label: "certs" },
  { href: "#testimonials",   label: "testimonials" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 py-5 border-b border-[#222] bg-black/80 backdrop-blur-md">
      <span className="font-mono text-xs text-[#555] tracking-widest">
        &gt;_ portfolio
      </span>
      <div className="flex gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-mono text-xs text-[#555] tracking-widest hover:text-white transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
```

---

### `src/components/Hero.jsx`

Full-viewport hero. Giant monospace name, muted about text, two CTA buttons.

```jsx
import { usePersonalInfo } from "../hooks/usePortfolio";

export default function Hero() {
  const { data, isLoading } = usePersonalInfo();
  const info = data?.[0];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-20">
      <p className="animate-fade-up font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#555] mb-6 [animation-delay:0ms]">
        // portfolio.init()
      </p>

      <h1 className="animate-fade-up font-[JetBrains_Mono,monospace] font-extrabold leading-none tracking-tighter text-[clamp(3rem,10vw,7rem)] text-white [animation-delay:100ms]">
        {isLoading ? "..." : (info?.name ?? "Your Name")}
      </h1>

      <p className="animate-fade-up mt-8 max-w-xl text-sm text-[#555] leading-relaxed [animation-delay:250ms]">
        {info?.about ?? ""}
      </p>

      <div className="animate-fade-up flex gap-4 mt-12 [animation-delay:400ms]">
        <a
          href="#projects"
          className="font-mono text-xs tracking-widest px-6 py-3 bg-white text-black hover:bg-[#e8e8e8] transition-colors duration-200"
        >
          View Projects →
        </a>
        <a
          href="#testimonials"
          className="font-mono text-xs tracking-widest px-6 py-3 border border-[#222] text-[#555] hover:border-white hover:text-white transition-colors duration-200"
        >
          Testimonials
        </a>
      </div>
    </section>
  );
}
```

---

### `src/components/Skills.jsx`

Pill-style tech tags with grayscale icons. Border reveals white on hover.

```jsx
import { useTech } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";

const MEDIA = "http://localhost:8000";

export default function Skills() {
  const { data: tech = [], isLoading } = useTech();

  return (
    <SectionShell id="skills" label="tech.stack">
      <h2 className="font-mono text-2xl font-bold mb-10">Technologies</h2>
      {isLoading ? (
        <p className="font-mono text-xs text-[#555]">fetching data...</p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {tech.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-2 border border-[#222] px-4 py-2 font-mono text-xs hover:border-white transition-colors duration-200 cursor-default"
            >
              {t.icon && (
                <img
                  src={`${MEDIA}${t.icon}`}
                  alt={t.name}
                  className="w-4 h-4 object-contain grayscale brightness-200"
                />
              )}
              {t.name}
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
```

---

### `src/components/Projects.jsx`

Grid separated by 1px lines (via `gap-px` on a `bg-[#222]` parent). Cards hover to `#0d0d0d`. Images are grayscale.

```jsx
import { useProjects } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";

const MEDIA = "http://localhost:8000";

export default function Projects() {
  const { data: projects = [], isLoading } = useProjects();

  return (
    <SectionShell id="projects" label="projects.list">
      <h2 className="font-mono text-2xl font-bold mb-10">Projects</h2>
      {isLoading ? (
        <p className="font-mono text-xs text-[#555]">fetching data...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222]">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col bg-black hover:bg-[#0d0d0d] transition-colors duration-200 p-8"
            >
              {p.image && (
                <img
                  src={`${MEDIA}${p.image}`}
                  alt={p.name}
                  className="w-full h-44 object-cover grayscale mb-6"
                />
              )}
              <h3 className="font-mono text-sm font-semibold mb-2">{p.name}</h3>
              <p className="text-xs text-[#555] leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.technologies.map((t) => (
                  <span
                    key={t.id}
                    className="font-mono text-[0.65rem] text-[#555] border border-[#222] px-2 py-0.5"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-white tracking-widest hover:text-[#555] transition-colors duration-200 self-start"
                >
                  open_project →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
```

---

### `src/components/Experience.jsx`

Two-column layout: date on the left, role + description on the right. `divide-y` for row separators.

```jsx
import { useExperience } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";

export default function Experience() {
  const { data: experience = [], isLoading } = useExperience();

  return (
    <SectionShell id="experience" label="experience.log">
      <h2 className="font-mono text-2xl font-bold mb-10">Experience</h2>
      {isLoading ? (
        <p className="font-mono text-xs text-[#555]">fetching data...</p>
      ) : (
        <div className="divide-y divide-[#222]">
          {experience.map((e) => (
            <div
              key={e.id}
              className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-6 py-8"
            >
              <p className="font-mono text-xs text-[#555] pt-0.5">{e.date}</p>
              <div>
                <h3 className="text-sm font-semibold mb-2">{e.name}</h3>
                <p className="text-xs text-[#555] leading-relaxed">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
```

---

### `src/components/Certifications.jsx`

Card grid. Border reveals white on hover. Images are grayscale.

```jsx
import { useCertifications } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";

const MEDIA = "http://localhost:8000";

export default function Certifications() {
  const { data: certs = [], isLoading } = useCertifications();

  return (
    <SectionShell id="certifications" label="certifications.verify">
      <h2 className="font-mono text-2xl font-bold mb-10">Certifications</h2>
      {isLoading ? (
        <p className="font-mono text-xs text-[#555]">fetching data...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c) => (
            <div
              key={c.id}
              className="border border-[#222] p-5 hover:border-white transition-colors duration-200"
            >
              {c.image && (
                <img
                  src={`${MEDIA}${c.image}`}
                  alt={c.name}
                  className="w-full h-36 object-cover grayscale mb-4"
                />
              )}
              <p className="font-mono text-sm font-semibold">{c.name}</p>
              <p className="font-mono text-xs text-[#555] mt-1">{c.date}</p>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
```

---

### `src/components/Testimonials.jsx`

Same 1px-line grid trick as Projects. Quote, name, and tag badge per card.

```jsx
import { useTestimonials } from "../hooks/usePortfolio";
import SectionShell from "./SectionShell";

export default function Testimonials() {
  const { data: testimonials = [], isLoading } = useTestimonials();

  return (
    <SectionShell id="testimonials" label="testimonials.read">
      <h2 className="font-mono text-2xl font-bold mb-10">Testimonials</h2>
      {isLoading ? (
        <p className="font-mono text-xs text-[#555]">fetching data...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222]">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-black hover:bg-[#0d0d0d] transition-colors duration-200 p-8"
            >
              <p className="text-xs text-[#555] leading-relaxed mb-6">
                "{t.description}"
              </p>
              <p className="font-mono text-sm font-semibold">{t.name}</p>
              <span className="inline-block font-mono text-[0.65rem] text-[#555] border border-[#222] px-2 py-0.5 mt-2">
                {t.tag}
              </span>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
```

---

## Run

```bash
npm run dev
# → http://localhost:5173
```

Make sure the Django backend is running at `http://localhost:8000` first.

---

## Design Rules (for Gemini to follow)

| Rule | Detail |
|---|---|
| Background | `bg-black` everywhere |
| Borders | `border border-[#222]` — never thicker, never colored |
| Text primary | `text-[#e8e8e8]` or `text-white` for emphasis |
| Text muted | `text-[#555]` for dates, labels, descriptions |
| Font headings | `font-mono` (`JetBrains Mono`) |
| Font body | `font-[Syne,sans-serif]` set on root `<div>` |
| Hover pattern | Reveal white via `hover:border-white` or `hover:text-white` — no background floods |
| Images | Always `grayscale` class |
| Section labels | `// label.name` format in monospace, uppercase, wide tracking |
| Grid dividers | `gap-px bg-[#222]` on the grid parent — no box shadows |
| Inline styles | **None.** Tailwind classes only. |