import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("WakeSay reflects the couples-focused direction and uses an app icon", async () => {
  const source = await read("src/content/projects.ts");
  const wakesay = source.slice(source.indexOf('slug: "wakesay"'), source.indexOf('slug: "visual-plate"'));
  assert.match(wakesay, /name: "WakeSay"/);
  assert.match(wakesay, /for couples/);
  assert.match(wakesay, /real voice recordings/);
  assert.match(wakesay, /not a released feature set/);
  assert.match(wakesay, /image: "\/work\/wakesay-icon.png"/);
  assert.doesNotMatch(wakesay, /WakeSay AI|"AI voice"|\/work\/wakesay.png/);
  const icon = await readFile(new URL("../public/work/wakesay-icon.png", import.meta.url));
  assert.equal(icon.subarray(1, 4).toString(), "PNG");
});

test("homepage states the positioning and production proof", async () => {
  const source = await read("src/app/page.tsx");

  assert.match(source, /AI Engineer building agentic systems/);
  assert.match(source, /Co-Founder & Lead Developer/);
  assert.match(source, /Stylefinden/);

  assert.match(source, /id="writing-heading">Writing/);
  assert.match(source, /href="\/ai-workflow">My agentic engineering system/);
  assert.match(source, /className="project-index-name"/);
  assert.match(source, /src="\/profile.jpg"/);
});

test("system page documents operating loops, infrastructure, and control", async () => {
  const source = await read("src/app/ai-workflow/page.tsx");

  for (const node of [
    "Intent",
    "Vault Memory",
    "Orchestrator",
    "Agents",
    "Skills",
    "Tools + APIs",
    "Verification",
    "Production",
  ]) {
    assert.match(source, new RegExp(`label: "${node.replace("+", "\\+")}"`));
  }

  for (const loop of [
    "Feature Development",
    "Content Operations",
    "Production Maintenance",
    "Memory Continuity",
  ]) {
    assert.match(source, new RegExp(loop));
  }

  for (const service of [
    "Sanity",
    "Supabase",
    "Resend",
    "Vercel",
    "Google Analytics",
  ]) {
    assert.match(source, new RegExp(service));
  }

  assert.match(source, /Stylefinden/);
  assert.match(source, /production decision/);
  assert.match(source, /Context before action/);
  assert.match(source, /Specialized work/);
  assert.match(source, /Evidence before release/);
  assert.doesNotMatch(source, /PracticeExplorer/);
  assert.match(source, />\s*Connected Infrastructure\s*</);
  assert.match(source, />\s*Control Model\s*</);
});

test("metadata reflects the AI engineering position", async () => {
  const source = await read("src/app/layout.tsx");

  assert.match(source, /AI Engineer/);
  assert.match(source, /Agentic Systems/);
  assert.match(source, /Stylefinden/);
});
