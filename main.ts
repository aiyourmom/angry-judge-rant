import { writeFileSync, mkdirSync } from "node:fs";

const TEXT = `Someone just replied-all 'Thanks!' to an email sent to 4,000 people. Four thousand inboxes just lit up for one word. No information. No attachment. Just gratitude, broadcast to an entire company like a town crier. I hope their inbox is also full of 4,000 strangers replying 'You're welcome.'`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...TEXT].length < 1 || [...TEXT].length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${[...TEXT].length}`);
}
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} characters to ${out}/entry.txt`);
