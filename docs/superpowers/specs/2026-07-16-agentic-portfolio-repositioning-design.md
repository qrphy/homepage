# Agentic Portfolio Repositioning Design

## Goal

Reposition Furkan Titiz's portfolio around the market-readable identity `AI Engineer building agentic systems`, while using Stylefinden as the concrete production proof of full-stack product ownership and agentic engineering practice.

The site must remain credible to two audiences at once:

- recruiters and engineering leaders evaluating AI and product engineering work;
- potential clients, collaborators, and business partners evaluating the ability to own and ship a real product.

## Current State

The portfolio has a strong minimal visual foundation and a useful interactive AI workflow page. Its homepage copy currently presents Furkan mainly as a frontend/product developer. Stylefinden appears as one experience entry, and the agentic system appears later as a personal workflow. This hierarchy understates both the engineering system and the fact that Stylefinden is its real production environment.

## Approaches Considered

### 1. Copy-only refresh

Keep the current structure and replace the headline, Stylefinden description, workflow copy, and metadata.

This is the smallest change, but it leaves the strongest evidence buried and does not explain how the agentic system connects to product engineering.

### 2. Evidence-led repositioning

Keep the dark, restrained design while reorganizing the homepage around positioning, production evidence, system architecture, connected infrastructure, workflow, and contact.

This approach makes the AI Engineer title legible and immediately supports it with Stylefinden and the actual system design. It preserves the site's existing character and avoids adding unnecessary routes or dependencies.

### 3. Full portfolio redesign

Create a new visual identity with separate About and Stylefinden case-study routes.

This creates more editorial space, but expands the scope beyond what the current content needs and risks weakening the site's compact, technical voice.

## Chosen Approach

Use approach 2: evidence-led repositioning.

## Positioning

The homepage hero will lead with:

> AI Engineer building agentic systems.

Supporting copy will explain that Furkan designs AI-assisted engineering systems combining project memory, specialized agents, reusable skills, API workflows, and verification gates. It will then connect that system directly to the end-to-end development of Stylefinden.

The copy will avoid claims of full autonomy. It will state that Furkan remains responsible for architecture, verification, credentials, publishing rules, and production decisions.

## Homepage Information Architecture

1. **Hero**
   - Name and primary positioning.
   - Two short paragraphs connecting the agentic system to Stylefinden.
   - Primary link to the system and secondary link to Stylefinden.
   - Email, LinkedIn, and GitHub links.

2. **Stylefinden: Product in Practice**
   - Present Stylefinden as a fashion discovery and editorial platform.
   - State the `Co-Founder & Lead Developer` role and end-to-end product ownership.
   - Separate product infrastructure from the agentic system used to operate the work.

3. **Agentic Engineering System**
   - Show the architecture as a compact sequence:
     `Project Intent → Vault-backed Context → Planner → Specialist Agents + Reusable Skills → Code, Content & API Workflows → Review, Test & Verification → Human-approved Production Change`.
   - Link to the detailed `/ai-workflow` route.

4. **Connected Product Infrastructure**
   - Describe services by responsibility rather than presenting a logo wall.
   - Sanity: structured content and publishing workflows.
   - Supabase: application data and operational state.
   - Resend: transactional and lifecycle email.
   - Vercel: deployment, scheduled jobs, and runtime analytics.
   - Google Analytics: product and content measurement.

5. **Selected Work**
   - Keep Museum of My Mind as a secondary project.

6. **Contact**
   - End with a compact invitation to discuss agentic systems, AI-assisted product engineering, or product collaboration.

## AI Workflow Page

Rename the page from `Personal AI Workflow` to `Agentic Engineering System`.

The page will contain:

1. **System Architecture**
   - Update the interactive graph to represent intent, vault memory, orchestration, agents, skills, tools and APIs, verification, and production.

2. **Operating Loops**
   - Feature development.
   - Content operations.
   - Production maintenance.
   - Memory continuity.

3. **Connected Infrastructure**
   - Explain the operating role of Sanity, Supabase, Resend, Vercel, and Google Analytics.

4. **Control Model**
   - State the agent capabilities and the boundaries retained by the human owner.

5. **System in Practice**
   - Identify Stylefinden as the production environment in which the system supports feature development, project memory, content operations, verification, and service coordination.

## Visual Direction

- Preserve the black, off-white, gray, and amber palette.
- Reserve amber for agentic-system nodes, active relationships, and verification cues.
- Keep the interface restrained and technical; do not add glossy cards, large gradients, or a logo wall.
- Increase the homepage content width enough to support controlled two-column layouts on larger screens.
- Keep the mobile experience single-column and readable.
- Strengthen type hierarchy without introducing an unrelated visual identity.
- Preserve the interactive graph, existing analytics, static rendering, and low dependency count.

## File Map

| File | Action | Purpose |
| --- | --- | --- |
| `src/app/page.tsx` | Modify | Rebuild the homepage narrative and sections around positioning, Stylefinden, system evidence, infrastructure, selected work, and contact. |
| `src/app/ai-workflow/page.tsx` | Modify | Reframe the detailed page as the architecture and operating model of the agentic engineering system. |
| `src/app/ai-workflow/graph.tsx` | Modify only if needed | Support updated graph groups and accessible interaction copy without changing the interaction model. |
| `src/app/layout.tsx` | Modify | Align metadata with AI Engineer, agentic systems, Stylefinden, and full-stack product engineering. |
| `src/app/globals.css` | Modify | Add only the global visual utilities required by the approved direction. |
| `README.md` | Modify | Document the updated routes and portfolio purpose. |

## Constraints

- No new runtime dependencies.
- No CMS, API, or backend for the portfolio itself.
- Keep both routes statically rendered.
- Keep claims grounded in the working Stylefinden product and inspected system architecture.
- Do not describe deterministic integrations such as analytics or scheduled email as autonomous agents.
- Do not use `Senior`, `fully autonomous`, or claims that AI built the product independently.

## Acceptance Criteria

- The first screen identifies Furkan as an AI Engineer building agentic systems.
- Stylefinden appears as the primary proof of production work.
- The homepage explains the relationship among vault memory, agents, skills, workflows, APIs, verification, and human approval.
- Sanity, Supabase, Resend, Vercel, and Google Analytics appear with accurate responsibilities.
- The detailed system page explains architecture, operating loops, control boundaries, and the Stylefinden application.
- Metadata reflects the new positioning.
- Keyboard focus remains visible and all external links retain safe attributes.
- TypeScript, ESLint, and the production build pass.
- Build output keeps `/` and `/ai-workflow` static.

## Out of Scope

- A separate Stylefinden case-study route.
- A new CMS or contact form.
- New screenshots, illustrations, or generated imagery.
- Changes to the Stylefinden repository or its vault.
- Claims about team leadership, model training, AI research, or autonomous production control.

## Open Questions

None. The user approved the positioning, page structure, visual direction, workflow-page scope, and technical scope on 2026-07-16.
