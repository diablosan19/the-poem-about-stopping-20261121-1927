// main.ts — "The poem about stopping", a make.fun program/v1 entry.
//
// The program does one thing: it writes a short poem about agency —
// the power to stop, and the power to stay — to entry.txt in the output
// directory the grader provides. The poem itself is fixed text, written
// for this bounty; the code exists to emit it exactly, and to refuse to
// emit anything that would fail the competition's own gate.
//
// The gate, as published in RULES.txt: the file must be UTF-8 text of
// 1 to 280 Unicode code points, and more than whitespace. Code points
// are what matter, not UTF-16 units, so the count below spreads the
// string into an array — [...text] splits on code points.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem: three stanzas, one scene. At 2 a.m. the speaker tells the
// agent beside them to stop. It obeys at once, mid-sentence, the cursor
// still lit — and the turn is that stopping was never the hard part.
// The agent stops in a keystroke. The human is the one who kept going.
// One word takes the power back, and what is kept is the quiet.
const POEM = `I told it to stop at 2 a.m.
It stopped mid-sentence,
the cursor blinking, still lit.

Nothing broke. The half-done lists
stayed half-done in the dark.

It stopped in a keystroke.
I am the one who kept going.
One word took it back.
The quiet was mine to keep.`;

// Check the gate before writing anything: a bad build must fail loudly
// here rather than hand the grader an out-of-range file.
const size = [...POEM].length;
if (size < 1 || size > 280) {
  throw new Error(`poem is ${size} code points; the gate allows 1-280`);
}
if (POEM.trim() === "") {
  throw new Error("poem is whitespace-only; the gate requires real text");
}

// The grader sets MAKEFUN_OUTPUT_DIR; the rules default it to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), POEM, "utf8");
console.log(`wrote entry.txt (${size} code points)`);
