# Agentic Portfolio Repositioning Implementation Plan

## Goal

Reframe the portfolio as evidence of an AI Engineer building agentic systems, with Stylefinden as the production case study and the detailed workflow route as the system architecture.

## Why

The existing site presents strong work but leads with a generic product-development statement. The new hierarchy must state the intended role, prove it through Stylefinden, explain the system accurately, and retain the site's compact visual and technical character.

## Architecture

The portfolio remains a statically rendered Next.js App Router site. Content lives in typed arrays inside the two route components. The homepage presents the concise case; `/ai-workflow` provides the detailed system model. A dependency-free Node test reads the source files and protects critical positioning, infrastructure, control-boundary, and metadata statements from accidental removal.

## Model Budget

The implementation is divided by judgment level so the frontier model is not used for mechanical work.

| Task | Recommended model | Effort | Reason |
| --- | --- | --- | --- |
| PF-01 Content contract and regression tests | `gpt-5.6-luna` | low | File reads and exact string assertions are deterministic. |
| PF-02 Homepage positioning and Stylefinden case study | `gpt-5.6-terra` | medium | Requires copy judgment, React composition, and responsive hierarchy. |
| PF-03 Agentic system page and graph data | `gpt-5.6-terra` | medium | Requires architectural accuracy, but reuses the existing graph implementation. |
| PF-04 Metadata, global CSS, and README | `gpt-5.6-luna` | medium | Mostly bounded edits with explicit acceptance criteria. |
| PF-05 Automated verification and straightforward fixes | `gpt-5.6-luna` | low | Runs known commands and handles local type, lint, or formatting errors. |
| PF-06 Visual QA and claim review | `gpt-5.6-terra` | medium | Needs visual interpretation and cross-page consistency checks. |
| PF-07 Final architecture review | `gpt-5.6-sol` | medium, optional | Use only for a final high-confidence review if the extra cost is justified. No implementation should depend on it. |

Tasks run in order. PF-02 and PF-03 should remain separate sessions so each model receives only the files and approved design relevant to its task. PF-07 is optional because the approved design already fixes the main architectural decisions.

## File Map

| File | Action | Purpose |
| --- | --- | --- |
| `src/app/page.tsx` | Modify | Replace the current homepage hierarchy and copy. |
| `src/app/ai-workflow/page.tsx` | Modify | Replace the personal-workflow framing with system architecture and operating evidence. |
| `src/app/ai-workflow/graph.tsx` | Inspect, modify only if required | Keep the interaction model compatible with the updated graph node data. |
| `src/app/layout.tsx` | Modify | Update SEO and social metadata. |
| `src/app/globals.css` | Modify | Add global focus, background, and reduced-motion treatment. |
| `tests/portfolio-content.test.mjs` | Create | Assert critical public claims and infrastructure coverage. |
| `package.json` | Modify | Add the dependency-free content test command. |
| `README.md` | Modify | Document the site's new purpose and verification command. |

## Tasks

### PF-01. Add positioning regression tests

**Files:** `tests/portfolio-content.test.mjs` (create), `package.json` (modify)

**Steps:**

- Add a Node test that reads the homepage, workflow page, and layout source files.
- Assert the primary title, Stylefinden role, five connected services, human control statement, and metadata keywords.
- Add `npm test` using `node --test`.

**Code:**

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage states the positioning and production proof", async () => {
  const source = await read("src/app/page.tsx");
  assert.match(source, /AI Engineer building agentic systems/);
  assert.match(source, /Co-Founder & Lead Developer/);
  assert.match(source, /Stylefinden/);
});

test("system page names infrastructure and human control", async () => {
  const source = await read("src/app/ai-workflow/page.tsx");
  for (const service of ["Sanity", "Supabase", "Resend", "Vercel", "Google Analytics"]) {
    assert.match(source, new RegExp(service));
  }
  assert.match(source, /production decision/);
});

test("metadata reflects the AI engineering position", async () => {
  const source = await read("src/app/layout.tsx");
  assert.match(source, /AI Engineer/);
  assert.match(source, /Agentic Systems/);
  assert.match(source, /Stylefinden/);
});
```

**Test:** Run the test before content changes and confirm it fails because the new public position is absent.

**Verify:** `npm test`

### PF-02. Rebuild the homepage narrative

**Files:** `src/app/page.tsx` (modify), `tests/portfolio-content.test.mjs` (existing)

**Steps:**

- Replace generic hero copy with the approved AI Engineer position and Stylefinden connection.
- Replace the experience card with a full-width `Product in Practice` case section.
- Add typed collections for product stack, system capabilities, system stages, and connected services.
- Present system stages in order and mark the agents/skills branch and human-approval endpoint clearly.
- Keep Museum of My Mind as secondary work.
- Add a concise contact section and preserve external-link security attributes.

**Code:**

```ts
const systemStages = [
  { id: "01", label: "Project Intent", detail: "A feature, issue, content need, or product decision enters with a defined outcome." },
  { id: "02", label: "Vault-backed Context", detail: "Project memory restores constraints, decisions, active work, and the relevant code." },
  { id: "03", label: "Planner", detail: "The request becomes scoped, ordered, and verifiable work before implementation begins." },
  { id: "04", label: "Agents + Skills", detail: "Specialized roles execute reusable procedures for engineering, content, SEO, review, and QA.", accent: true },
  { id: "05", label: "Workflows + APIs", detail: "Code and selected content operations connect to the services behind the product." },
  { id: "06", label: "Verification", detail: "Reviews, tests, builds, browser checks, and documentation gates challenge every result." },
  { id: "07", label: "Human-approved Change", detail: "I retain final responsibility for architecture and every production decision.", terminal: true },
] as const;
```

**Test:** Extend the homepage test to assert `Vault-backed Context`, `Agents + Skills`, `Verification`, and `Human-approved Change` appear in order.

**Verify:** `npm test && npx tsc --noEmit`

### PF-03. Reframe the detailed system page

**Files:** `src/app/ai-workflow/page.tsx` (modify), `src/app/ai-workflow/graph.tsx` (inspect), `tests/portfolio-content.test.mjs` (modify)

**Steps:**

- Rename the page and route metadata to `Agentic Engineering System`.
- Update graph nodes to represent intent, vault memory, orchestrator, agents, skills, tools and APIs, verification, and production.
- Replace the three generic workflows with four production operating loops.
- Add connected-infrastructure entries with accurate responsibilities.
- Add the explicit control model and Stylefinden production application.
- Update visible graph instructions so keyboard and pointer users understand the interaction.

**Code:**

```ts
const operatingLoops = [
  { title: "Feature Development", chain: "scope → plan → implement → review → test → document → ship" },
  { title: "Content Operations", chain: "research → draft → review → Sanity → publish → measure" },
  { title: "Production Maintenance", chain: "detect → reproduce → patch → verify → deploy" },
  { title: "Memory Continuity", chain: "decision → documentation → vault update → future retrieval" },
] as const;
```

**Test:** Assert all four loop titles, all five service names, `Stylefinden`, and `production decision` are present.

**Verify:** `npm test && npx tsc --noEmit`

### PF-04. Align metadata and global presentation

**Files:** `src/app/layout.tsx` (modify), `src/app/globals.css` (modify), `tests/portfolio-content.test.mjs` (existing)

**Steps:**

- Change default title and description to the new position while keeping the personal name prominent.
- Add accurate keywords for AI engineering, agentic systems, full-stack product engineering, and Stylefinden.
- Align Open Graph text with the homepage.
- Add `colorScheme`, visible `:focus-visible` treatment, layered background atmosphere, and reduced-motion support without affecting static rendering.

**Code:**

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://www.furkantitiz.dev"),
  title: {
    default: "Furkan Titiz | AI Engineer building agentic systems",
    template: "%s | Furkan Titiz",
  },
  description:
    "AI Engineer and Co-Founder of Stylefinden, building agentic engineering systems and full-stack products with human-governed production workflows.",
};
```

**Test:** Assert the metadata source contains the exact position and Stylefinden proof.

**Verify:** `npm test && npx tsc --noEmit`

PF-04 also includes the following documentation work.

**Files:** `README.md` (modify)

**Steps:**

- Update the opening description to reflect the evidence-led portfolio.
- Update both route descriptions.
- Document `npm test` alongside TypeScript, lint, and build verification.
- Preserve the accurate static-rendering and dependency notes.

**Code:**

```md
## Routes

| Route | What's there |
| --- | --- |
| `/` | Positioning, Stylefinden production case study, agentic system overview, infrastructure, selected work, and contact |
| `/ai-workflow` | Interactive architecture, operating loops, connected infrastructure, control model, and the Stylefinden application |
```

**Test:** Review the rendered Markdown and confirm every documented command exists in `package.json`.

**Verify:** `npm test`

### PF-05. Run the automated quality gate

**Files:** all modified files

**Steps:**

- Run the content tests.
- Run TypeScript without emitting files.
- Run ESLint.
- Run the production build and confirm both routes remain static.
- Inspect the git diff for unintended edits and AI-writing patterns.

**Code:**

```sh
npm test
npx tsc --noEmit
npm run lint
npm run build
```

**Test:** All four commands exit with status 0; build output marks `/` and `/ai-workflow` with `○`.

**Verify:** `git diff --check && git status --short`

### PF-06. Run visual QA and review public claims

**Files:** `src/app/page.tsx` (inspect), `src/app/ai-workflow/page.tsx` (inspect), rendered `/` and `/ai-workflow`

**Steps:**

- Inspect both routes at mobile and desktop widths.
- Check hierarchy, overflow, graph interaction, link focus, and reduced-motion behavior.
- Review all public copy for unsupported autonomy, seniority, research, or team-leadership claims.
- Fix only issues supported by the approved design and rerun PF-05 after any edit.

**Test:** Capture evidence at one mobile and one desktop viewport for each route; confirm no horizontal overflow and all primary content remains readable.

**Verify:** `npm test && npx tsc --noEmit && npm run lint && npm run build`

### PF-07. Optional final architecture review

**Files:** complete diff and approved design document

**Steps:**

- Compare the implementation against every acceptance criterion in the design document.
- Identify only material gaps in positioning, technical accuracy, control boundaries, or accessibility.
- Skip this task when PF-05 and PF-06 pass without unresolved concerns.

**Test:** Every design acceptance criterion maps to visible copy, source evidence, or a passing verification command.

**Verify:** `git diff --check`

## Risks

- **The AI title reads as unsupported self-description.** → Place Stylefinden and specific system responsibilities immediately after the hero.
- **Service integrations are mistaken for autonomous agents.** → Describe each service as infrastructure and reserve agent language for the orchestration layer.
- **The homepage becomes too dense.** → Keep each section to one argument, use short copy, and move detailed operating explanations to `/ai-workflow`.
- **The graph becomes unreadable after adding architecture concepts.** → Keep eight primary nodes, preserve the current force layout, and use concise labels.
- **Claims imply AI controls production.** → Repeat the human-control boundary on both routes.
- **Visual changes weaken the established identity.** → Preserve the palette, graph interaction, typography stack, and restrained component treatment.

## Out of Scope

- New routes, backend services, forms, generated images, or runtime dependencies.
- Changes to Stylefinden itself.
- Claims involving seniority, model training, AI research, or fully autonomous production.

## Scope

**S** (less than one day)
