# furkantitiz.dev

My personal site. Dark, quiet, and deliberately small: a single page of who I am
and what I've built, plus one route that explains how I actually work with AI.

Live at [www.furkantitiz.dev](https://www.furkantitiz.dev).

## Routes

| Route | What's there |
|-------|--------------|
| `/` | Hero, experience, selected work, and a short summary of the AI workflow |
| `/ai-workflow` | An interactive force-directed graph of the system, plus the loops and skills behind it |

Both are statically prerendered at build time. There is no server, no database,
and no API.

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

Fonts are Geist Sans and Geist Mono, loaded through `next/font/google` rather
than the `geist` package.

## Two things that will bite you

**There is no `tailwind.config.js`, and there shouldn't be.** Tailwind v4 only
reads that file if `globals.css` contains an explicit `@config` directive. Add
the config back without the directive and it sits there doing nothing, quietly,
while you wonder why your changes have no effect. Theme values live in the
`@theme inline` block in `src/app/globals.css`.

**Section spacing comes from one place.** `<main>` carries a `space-y-16`, and
the `<section>` elements have no vertical margins of their own. To add a section,
make it a direct child of `<main>` and leave the spacing alone.

## Verifying a change

```bash
npx tsc --noEmit
npm run lint
npm run build
```

The build output should still show `/` and `/ai-workflow` marked `○ (Static)`.
If either turned dynamic, something started reading request-time state.
