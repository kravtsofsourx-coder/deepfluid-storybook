# Deepfluid Storybook

Storybook for the **Deepfluid Design System** — React + TypeScript implementation faithful to the Figma source ([file `iesgLX5Umk2UnH47KV01qc`](https://www.figma.com/design/iesgLX5Umk2UnH47KV01qc/Deepfluid-DS)).

## Quick start

```bash
npm install
npm run storybook
```

Storybook starts at `http://localhost:6006`. A theme switcher in the top toolbar toggles light/dark mode.

## Build static Storybook for hosting

```bash
npm run build-storybook
```

Output goes to `storybook-static/`. Deploy that directory to Chromatic, Vercel, Netlify, GitHub Pages, or any static host.

## Project layout

```
deepfluid-storybook/
├── .storybook/            # Storybook config
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── styles/
│   │   ├── tokens.css     # Design tokens (CSS variables, light + dark)
│   │   ├── typography.css # Font face + utility text classes
│   │   └── global.css     # Resets and base styles
│   ├── components/        # One folder per component
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── …
│   ├── utils/
│   │   └── cx.ts          # className helper
│   └── index.ts           # Public barrel
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Components

| Component | Figma origin | Notes |
|-----------|--------------|-------|
| Button | Buttons (5 variants × 3 sizes × 4 states) | primary, brand, secondary, ghost, danger |
| IconButton | Buttons / Icon only | default + ghost variants, 3 sizes |
| TextField | Text Fields | label, helper, error, leading/trailing icons |
| Search | Text Fields / Search | inline clear button |
| Textarea | Text Fields / Textarea | resize, error, helper |
| Note | Note | info / success / warning / danger callouts |
| StatusBadge | Labels (formerly `Lable`) | semantic states with optional dot |
| Tag | Labels (formerly `Lable2`) | decorative color tags |
| Badge | Badges | small notification dots |
| Avatar | Avatar | 4 sizes, 5 colors, image / initials / icon |
| Breadcrumbs | Breadcrumbs | 2-level / 3-level / N-level |
| Pagination | Pagination | smart truncation with siblings |
| Tabs | Tabs | medium / large, optional icons |
| FilterChip | Filter Chips | selectable / readonly modes |
| InputChip | Input Chips | token chip with remove button |
| Switch | Switchers / Switch | controlled & uncontrolled |
| Checkbox | Switchers / Checkbox | with indeterminate state |
| Radio | Switchers / Radiobutton | with label |

Every story has a `parameters.design` link back to the original Figma node — the **Design** tab in the Storybook UI shows the Figma frame inline next to the rendered component.

## Design tokens

Tokens live in `src/styles/tokens.css` as CSS variables. Component styles **never** use raw colors — only semantic tokens like `var(--fill-primary-default)` or `var(--text-tertiary)`. Theme-switching works by setting `data-theme="dark"` on the `<html>` element; all semantic tokens have light and dark values defined.

Token categories:
- **Primitives:** `--violet-{50..900}`, `--teal-*`, `--orange-*`, `--amber-*`, `--grey-*`
- **Spacing:** `--size-{0,2,4,6,8,12,16,20,24,28,32,36,40,44}`
- **Radius:** `--radius-{0,4,8,12,24,full}`
- **Surface / text / fill / border** semantic tokens — light + dark
- **Typography:** font-family + per-style size and weight variables; `.df-*` utility classes for headings/body
- **Motion:** `--motion-fast` (120ms), `--motion-medium` (240ms), `--motion-easing` (easing curve)

## Stack

- **React 18** + **TypeScript 5**
- **Vite 5** for fast dev / build
- **Storybook 8** (`@storybook/react-vite`) with addons:
  - `addon-essentials` — controls, actions, viewport, backgrounds
  - `addon-a11y` — accessibility audit
  - `addon-designs` — embed Figma frames into stories
  - `addon-interactions` — play tests
- **CSS Modules** + **CSS variables** for styling — no Tailwind, no styled-components, no build-time CSS-in-JS
- **lucide-react** for the icon set

## Theme switching in your app

If you want to adopt these tokens outside Storybook, import the three stylesheets in your app's entry point:

```ts
import 'deepfluid-storybook/dist/styles/tokens.css';
import 'deepfluid-storybook/dist/styles/typography.css';
import 'deepfluid-storybook/dist/styles/global.css';
```

Then to switch themes:

```ts
document.documentElement.setAttribute('data-theme', 'dark');  // or 'light'
```

## Known gaps

The Figma file also has **Lists** and **Navigation** pages with very rich, application-specific composite components (data rows, tenant cards, sidebar navigation). These are out of scope for the initial component library and should be built as application-level components composed from the primitives in this library.

In `Badge`, the third Figma variant `information 2` has been mapped to `information-outline` (outlined version) — adjust if a different semantic was intended.
