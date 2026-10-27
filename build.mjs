import { mkdirSync, readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";

const root = new URL(".", import.meta.url).pathname;
const dist = join(root, "dist");
const skip = new Set(["build.mjs", "package.json", "vercel.json", "README.md"]);

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === "dist" || name === "node_modules" || name === ".git") continue;
    const abs = join(dir, name);
    if (statSync(abs).isDirectory()) out.push(...walk(abs));
    else out.push(abs);
  }
  return out;
}

const parts = new Map();
for (const abs of walk(root)) {
  const rel = relative(root, abs);
  if (skip.has(rel)) continue;
  const part = rel.match(/^(.*)\.b64\.(\d+)$/);
  if (part) {
    const list = parts.get(part[1]) || [];
    list.push([Number(part[2]), abs]);
    parts.set(part[1], list);
    continue;
  }
  if (rel.endsWith(".b64")) {
    const dest = join(dist, rel.slice(0, -4));
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, Buffer.from(readFileSync(abs, "utf8"), "base64"));
    continue;
  }
  const dest = join(dist, rel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, readFileSync(abs));
}
for (const [rel, list] of parts) {
  list.sort((a, b) => a[0] - b[0]);
  const b64 = list.map(([, abs]) => readFileSync(abs, "utf8")).join("");
  const dest = join(dist, rel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(b64, "base64"));
}
console.log("built", dist);
