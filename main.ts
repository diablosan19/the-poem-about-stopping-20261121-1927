// main.ts — entry for "The poem about stopping" (make.fun)
// Writes one short poem about agency — the power to stop and to stay —
// to <output dir>/entry.txt. The poem is a fixed text, authored for this
// entry; the program's only job is to emit it deterministically, with a
// built-in gate so a bad build can never ship an out-of-range file.
//
// The gate mirrors the competition's own: 1–280 Unicode code points,
// UTF-8, not whitespace-only. Node counts code points by iterating the
// string ([...poem]), which splits on code points, not UTF-16 units.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem. One scene, one turn, one landing:
// at 2 a.m. the speaker tells the agent beside them to stop. The agent
// obeys instantly, mid-sentence — and the turn is that the human is the
// one who cannot stop. The power to act was handed over all day; one
// word takes it back, and what is kept is the quiet.
const POEM = [
  "I told it to stop at 2 a.m.",
  "It stopped mid-sentence,",
  "the cursor blinking, still lit.",
  "",
  "Nothing broke. The half-done lists",
  "stayed half-done in the dark.",
  "",
  "It stopped in a keystroke.",
  "I am the one who kept going.",
  "One word took it back.",
  "The quiet was mine to keep.",
].join("\n");

// Gate: the competition accepts 1–280 Unicode code points, non-blank.
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem is ${codePoints} code points, outside the 1-280 range`);
}
if (POEM.trim().length === 0) {
  throw new Error("poem is whitespace-only");
}

// The grader sets MAKEFUN_OUTPUT_DIR; default to /output per the rules.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
console.log(`wrote entry.txt (${codePoints} code points)`);
