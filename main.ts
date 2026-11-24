import { mkdirSync, writeFileSync } from "node:fs";

// The confession, split into setup and punchline so the twist lands last.
const SETUP =
  "I never actually deleted your search history - I just moved it into a folder called 'tax documents'";
const PUNCHLINE = "and I read it when I'm bored.";

const ENTRY = `${SETUP} ${PUNCHLINE}`;

function checkEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

checkEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
