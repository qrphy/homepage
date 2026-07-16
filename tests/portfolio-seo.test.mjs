import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const exists = async (path) => {
  await access(new URL(`../${path}`, import.meta.url));
};

test("site metadata keeps the primary title and description search-ready", async () => {
  const source = await read("src/app/layout.tsx");

  assert.match(source, /metadataBase:\s*new URL\("https:\/\/www\.furkantitiz\.dev"\)/);
  assert.match(source, /default:\s*"[^"]+AI Engineer[^"]+"/);
  assert.match(source, /description:\s*\n?\s*"[^"]+"/);

  const title = source.match(/default:\s*"([^"]+)"/)?.[1] ?? "";
  const description = source.match(/description:\s*\n?\s*"([^"]+)"/)?.[1] ?? "";
  assert.ok(title.length >= 30 && title.length <= 60, `title length: ${title.length}`);
  assert.ok(
    description.length >= 120 && description.length <= 160,
    `description length: ${description.length}`,
  );
});

test("global metadata declares canonical social sharing fields", async () => {
  const source = await read("src/app/layout.tsx");

  assert.match(source, /alternates:\s*\{[\s\S]*canonical:/);
  assert.match(source, /openGraph:\s*\{/);
  assert.match(source, /locale:\s*"en_US"/);
  assert.match(source, /images:/);
  assert.match(source, /twitter:\s*\{/);
  assert.match(source, /card:\s*"summary_large_image"/);
});

test("workflow page owns its route metadata and social preview", async () => {
  const source = await read("src/app/ai-workflow/page.tsx");

  assert.match(source, /title:\s*"[^"]+"/);
  assert.match(source, /description:\s*\n?\s*"[^"]+"/);
  assert.match(source, /canonical:\s*"https:\/\/www\.furkantitiz\.dev\/ai-workflow"/);
  assert.match(source, /openGraph:\s*\{/);
  assert.match(source, /url:\s*"https:\/\/www\.furkantitiz\.dev\/ai-workflow"/);
  assert.match(source, /twitter:\s*\{/);

  const description = source.match(/description:\s*\n?\s*"([^"]+)"/)?.[1] ?? "";
  assert.ok(
    description.length >= 120 && description.length <= 160,
    `workflow description length: ${description.length}`,
  );
});

test("technical SEO endpoint and structured-data modules exist", async () => {
  await exists("src/app/robots.ts");
  await exists("src/app/sitemap.ts");
  await exists("src/app/opengraph-image.tsx");
  await exists("src/app/not-found.tsx");

  const homepage = await read("src/app/page.tsx");
  assert.match(homepage, /application\/ld\+json/);
  assert.match(homepage, /Person/);
  assert.match(homepage, /ProfilePage/);
});

test("not-found route is explicitly excluded from indexing", async () => {
  const source = await read("src/app/not-found.tsx");

  assert.match(source, /robots:\s*\{[\s\S]*index:\s*false/);
});
