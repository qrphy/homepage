# furkantitiz.dev

My personal site. A quiet portfolio for my work in AI engineering,
web products, and native iOS apps. The visual direction uses a narrow content
column and restrained typography, with light and dark colors following the device preference.

Live at [www.furkantitiz.dev](https://www.furkantitiz.dev).

## Routes

| Route | What's there |
|-------|--------------|
| `/` | Introduction, contact and CV links, Writing, and a four-project index |
| `/ai-workflow` | Interactive architecture, operating loops, connected infrastructure, control model, and the Stylefinden application |
| `/work/stylefinden` | Stylefinden product and engineering overview |
| `/work/wakesay` | WakeSay's couples-focused product direction and engineering overview |
| `/work/visual-plate` | Visual Plate development overview |
| `/work/museum-of-my-mind` | Personal image archive overview |

All routes are statically prerendered at build time. This portfolio has no
request-time server or database; the APIs shown on the site belong to the
Stylefinden product and the agentic engineering system described there.

## Running it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Stack

Next.js 16 (App Router), TypeScript, and Tailwind CSS v4, deployed on Vercel.

Five runtime dependencies, on purpose: `next`, `react`, `react-dom`,
`@vercel/analytics`, and `@vercel/speed-insights`. If you see Supabase or Sanity
mentioned on the site, those belong to the projects being described — not to this
one.

Inter is loaded through `next/font/google`.

## Two things that will bite you

**There is no `tailwind.config.js`, and there shouldn't be.** Tailwind v4 only
reads that file if `globals.css` contains an explicit `@config` directive. Add
the config back without the directive and it sits there doing nothing, quietly,
while you wonder why your changes have no effect. Theme values live in the
`@theme inline` block in `src/app/globals.css`.

**Portfolio layout lives in `globals.css`.** The main content column is 640px,
with 64px between homepage sections (48px on mobile). Project details and the
workflow article use the same 640px column. Project content is maintained in
`src/content/projects.ts`; all entries in `sections` are displayed.

Project preview assets in `public/work/` come from the live Stylefinden and
Museum of My Mind sites, plus the WakeSay and Visual Plate application icons.
WakeSay and Visual Plate are identified as in development, with no invented
launch links or results. Colors use shared CSS variables and
`prefers-color-scheme`, without a theme toggle or client-side theme state.

## Verifying a change

```bash
npm test
npx tsc --noEmit
npm run lint
npm run build
```

The content test protects the public positioning and infrastructure claims. The
build output should still show `/` and `/ai-workflow` marked `○ (Static)`. If
either turned dynamic, something started reading request-time state.
