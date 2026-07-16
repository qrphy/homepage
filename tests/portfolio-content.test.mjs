import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage states the positioning and production proof", async () => {
  const source = await read("src/app/page.tsx");

  assert.match(source, /AI Engineer building agentic systems/);
  assert.match(source, /Co-Founder & Lead Developer/);
  assert.match(source, /Stylefinden/);

  const architecture = [
    "Vault-backed Context",
    "Agents + Skills",
    "Verification",
    "Human-approved Change",
  ];
  let previous = -1;
  for (const label of architecture) {
    const position = source.indexOf(label);
    assert.ok(position > previous, `${label} should appear in architecture order`);
    previous = position;
  }
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
  assert.match(source, />\s*Connected Infrastructure\s*</);
  assert.match(source, />\s*Control Model\s*</);
});

test("metadata reflects the AI engineering position", async () => {
  const source = await read("src/app/layout.tsx");

  assert.match(source, /AI Engineer/);
  assert.match(source, /Agentic Systems/);
  assert.match(source, /Stylefinden/);
});
