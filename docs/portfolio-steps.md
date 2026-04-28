# Prompt: Portfolio Personal — React + Vite + Tailwind v4 + shadcn

## Contexto general

Construye un portafolio personal completo, moderno y de alta calidad estética con el siguiente
stack:

- **React 18 + TypeScript + Vite**
- **Tailwind CSS v4** (dark/light mode con estrategia `class` vía `@variant`)
- **shadcn/ui** para componentes base (inicializar con soporte Tailwind v4)
- **framer-motion** para animaciones
- **react-router-dom v6** para rutas
- **i18next + react-i18next** para multidioma (es / en)
- **Zustand** para estado global (tema + idioma)
- **react-icons** para iconos del stack y redes
- **react-helmet-async** para SEO

---

## Instalación

```bash
pnpm create vite@latest portfolio -- --template react-ts
cd portfolio

# Tailwind v4 — plugin directo para Vite, sin postcss standalone
pnpm install tailwindcss @tailwindcss/vite

# Componentes (seleccionar Tailwind v4 cuando lo pregunte el CLI)
npx shadcn@latest init

# Animaciones
pnpm install framer-motion

# i18n
pnpm install i18next react-i18next i18next-browser-languagedetector

# Routing
pnpm install react-router-dom

# Iconos
pnpm install react-icons

# Estado global
pnpm install zustand

# SEO
pnpm install react-helmet-async
```

---

## Configuración Vite (`vite.config.ts`)

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [tailwindcss(), react()],
});
```

> No se necesita `postcss.config.js` ni `tailwind.config.ts`. Tailwind v4 corre completamente dentro
> del plugin de Vite.

---

## Estilos globales (`src/index.css`)

En Tailwind v4 toda la configuración del tema vive aquí dentro de `@theme {}`. No existe
`tailwind.config.ts`.

```css
@import 'tailwindcss';

@theme {
    /* Tipografía */
    --font-display: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;

    /* Paleta de acentos — ajustar según la dirección estética elegida */
    --color-accent: #e2ff00;
    --color-accent-secondary: #00ffcc;
    --color-surface: #111111;
    --color-surface-elevated: #1a1a1a;

    /* Breakpoint extra pequeño opcional */
    --breakpoint-xs: 475px;
}

/* Estrategia dark mode por clase */
@variant dark (&:where(.dark, .dark *));

/* Reset y base */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
}
```

---

## Configuración i18n (`src/i18n.config.ts`)

```ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './i18n/es.json';
import en from './i18n/en.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            en: { translation: en },
        },
        fallbackLng: 'es',
        interpolation: { escapeValue: false },
    });

export default i18n;
```

### Estructura de los JSON de traducción

```json
// es.json (misma estructura en en.json con valores en inglés)
{
    "nav": {
        "about": "Sobre mí",
        "stack": "Stack",
        "projects": "Proyectos",
        "experience": "Experiencia",
        "contact": "Contacto",
        "downloadCV": "Descargar CV"
    },
    "hero": {
        "greeting": "Hola, soy",
        "role": "Desarrollador Full Stack",
        "tagline": "Construyo productos digitales con atención al detalle.",
        "cta_projects": "Ver proyectos",
        "cta_contact": "Contáctame"
    },
    "about": {
        "title": "Sobre mí",
        "body": "..."
    },
    "stack": {
        "title": "Mi stack",
        "categories": {
            "frontend": "Frontend",
            "backend": "Backend",
            "devops": "DevOps",
            "tools": "Herramientas"
        }
    },
    "projects": {
        "title": "Proyectos",
        "all": "Todos",
        "featured": "Destacados",
        "viewCode": "Código",
        "viewLive": "Demo"
    },
    "experience": {
        "title": "Experiencia",
        "present": "Presente"
    },
    "contact": {
        "title": "Contacto",
        "subtitle": "¿Tienes un proyecto? Hablemos.",
        "email": "Enviar email",
        "copy": "Copiar email"
    },
    "footer": {
        "madeWith": "Hecho con"
    }
}
```

---

## Arquitectura de carpetas

```
portfolio/
├── public/
│   ├── cv.pdf
│   ├── og.png
│   └── projects/               # imágenes de proyectos
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/                 # botones, badges, cards reutilizables
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stack.tsx
│   │   ├── Projects.tsx
│   │   ├── Timeline.tsx
│   │   └── Contact.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── NotFound.tsx
│   ├── router/
│   │   └── index.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useScrollSpy.ts
│   │   └── useI18n.ts
│   ├── i18n/
│   │   ├── es.json
│   │   └── en.json
│   ├── data/
│   │   ├── projects.ts
│   │   ├── stack.ts
│   │   └── experience.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── animations.ts
│   ├── types/
│   │   └── index.ts
│   ├── store/
│   │   └── useAppStore.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # @import "tailwindcss" + @theme { ... }
├── vite.config.ts              # plugin @tailwindcss/vite aquí
└── i18n.config.ts
```

---

## Tipos TypeScript (`src/types/index.ts`)

```ts
export interface Project {
    id: string;
    slug: string;
    featured: boolean;
    category: 'frontend' | 'fullstack' | 'backend' | 'mobile' | 'other';
    title: string;
    description: { es: string; en: string };
    longDescription?: { es: string; en: string };
    stack: string[];
    links: { github?: string; live?: string };
    image: string;
    year: number;
}

export interface StackItem {
    name: string;
    icon: string; // nombre del ícono de react-icons, e.g. "SiReact"
    category: 'frontend' | 'backend' | 'devops' | 'tools' | 'mobile';
    color: string; // color hex para el efecto hover/glow
}

export interface Experience {
    id: string;
    company: string;
    role: { es: string; en: string };
    description: { es: string; en: string };
    startDate: string;
    endDate: string | 'present';
    technologies: string[];
    logo?: string;
}
```

---

## Store global (`src/store/useAppStore.ts`)

```ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
    theme: 'light' | 'dark';
    lang: 'es' | 'en';
    toggleTheme: () => void;
    setLang: (lang: 'es' | 'en') => void;
}

export const useAppStore = create<AppState>()(
    persist(
        set => ({
            theme: 'dark',
            lang: 'es',
            toggleTheme: () => set(s => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
            setLang: lang => set({ lang }),
        }),
        { name: 'portfolio-store' },
    ),
);
```

El tema debe aplicarse al elemento `<html>` añadiendo/quitando la clase `dark`, que activa el
`@variant dark` declarado en el CSS.

```ts
// En App.tsx, sincronizar la clase con el store:
useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
}, [theme]);
```

---

## Animaciones reutilizables (`src/lib/animations.ts`)

```ts
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
```

Usa `whileInView` con `viewport={{ once: true, amount: 0.2 }}` en todas las secciones.

---

## Router (`src/router/index.tsx`)

```tsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ProjectDetail from '../pages/ProjectDetail';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'projects/:slug', element: <ProjectDetail /> },
            { path: '*', element: <NotFound /> },
        ],
    },
]);
```

---

## Sección Hero (`src/sections/Hero.tsx`)

- Fondo con **gradiente en malla animado** (CSS `@keyframes` sobre pseudo-elementos)
- Nombre con tipografía grande y **efecto typewriter** usando `framer-motion` + `AnimatePresence`
- Subtítulo que rota entre 2–3 roles con animación de salida/entrada vertical
- Dos botones CTA: "Ver proyectos" (scroll suave a `#projects`) y "Descargar CV"
  (`<a href="/cv.pdf" download>`)
- Avatar circular con borde animado de gradiente giratorio (`conic-gradient` + `@keyframes rotate`)
- Badges flotantes con el stack principal y animación `float` en CSS
- Totalmente responsive

---

## Sección Stack (`src/sections/Stack.tsx`)

- Datos desde `data/stack.ts`
- Tabs o filtro por categoría: Frontend / Backend / DevOps / Tools
- Grid de tarjetas con ícono (`react-icons`) + nombre + color de hover por tecnología
- Hover: escala + glow del color propio de la tecnología con `box-shadow`
- Entrada con `staggerChildren` de framer-motion al entrar en viewport

---

## Sección Projects (`src/sections/Projects.tsx`)

- Filtros por categoría con reordenamiento animado (`framer-motion` prop `layout` en cada card)
- Cards con: imagen + overlay al hover, título, descripción traducida, badges de stack, links
- Proyectos `featured: true` se muestran más grandes (bento grid o card destacada)
- Cada card enlaza a `/projects/:slug`
- Botón "Ver todos" si hay más de 6 proyectos

---

## Sección Timeline (`src/sections/Timeline.tsx`)

- Línea vertical central con puntos de conexión
- Cada nodo: logo empresa, cargo, fechas, descripción, chips de tecnologías
- Animación de aparición desde izquierda/derecha alternada al hacer scroll

---

## Navbar (`src/components/layout/Navbar.tsx`)

- Sticky con blur backdrop usando las clases de Tailwind v4:
  `backdrop-blur-md bg-[--color-surface]/80`
- Links con scroll spy (el activo se resalta según la sección visible)
- Toggle dark/light mode con animación de icono (sol ↔ luna)
- Selector de idioma ES / EN con transición
- Botón "Descargar CV" como CTA secundario
- Móvil: menú hamburguesa con `framer-motion` `AnimatePresence` para slide-down

---

## Dirección estética

Elige y ejecuta una de estas dos opciones (decide cuál encaja mejor y coméntala):

**Opción A — Dark luxury editorial**

- Fondo `#0a0a0a`, acentos en `#e2ff00` (amarillo eléctrico) o `#00ffcc` (cian)
- Tipografía display: `Syne` para headings, `DM Sans` para cuerpo
- Bordes finos `border-white/10`, cards con `bg-white/5`
- Efectos: grain overlay sutil, líneas decorativas, números grandes de sección

**Opción B — Clean minimalist light**

- Fondo `#f8f7f4` (crema), acentos en `#1a1a2e` (navy) + `#e85d04` (naranja)
- Tipografía: `Playfair Display` para headings, `Outfit` para cuerpo
- Mucho espacio blanco, composición asimétrica
- Efectos: sombras suaves, hover con underline animado

Ambas opciones definen sus tokens en el bloque `@theme {}` de `src/index.css`.

---

## Datos de ejemplo

Incluye en `data/projects.ts` al menos **3 proyectos** de ejemplo con datos ficticios coherentes.
Incluye en `data/stack.ts` al menos **12 tecnologías** distribuidas en las 4 categorías. Incluye en
`data/experience.ts` al menos **2 posiciones** de ejemplo. Incluye los archivos `i18n/es.json` e
`i18n/en.json` con todas las cadenas usadas.

---

## Requisitos de calidad

1. **Responsive** — mobile-first en todas las secciones
2. **Dark/light mode** funcional y persistido (Zustand + persist → clase `dark` en `<html>`)
3. **Sin contenido hardcodeado** en componentes — todo viene de `data/` o de los JSON de i18n
4. **Performance** — lazy loading de imágenes, `React.lazy` + `Suspense` por ruta
5. **SEO** — `react-helmet-async` con título, descripción y og:image dinámicos por página
6. **Accesibilidad** — `aria-label` en iconos, contraste adecuado, navegación por teclado

---

## Entregables en orden

Genera todos los archivos del proyecto en este orden:

1. `package.json`
2. `vite.config.ts`
3. `src/index.css`
4. `src/i18n.config.ts`
5. `src/types/index.ts`
6. `src/store/useAppStore.ts`
7. `src/lib/animations.ts` y `src/lib/utils.ts`
8. `src/data/projects.ts`, `src/data/stack.ts`, `src/data/experience.ts`
9. `src/i18n/es.json` y `src/i18n/en.json`
10. `src/router/index.tsx`
11. `src/components/layout/Navbar.tsx` y `Footer.tsx`
12. `src/sections/Hero.tsx`, `About.tsx`, `Stack.tsx`, `Projects.tsx`, `Timeline.tsx`, `Contact.tsx`
13. `src/pages/Home.tsx`, `ProjectDetail.tsx`, `NotFound.tsx`
14. `src/App.tsx`
15. `src/main.tsx`
