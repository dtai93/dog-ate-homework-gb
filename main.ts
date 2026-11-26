// Dog excuse entry: one line, dog voice, punch last.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "You left the corner up. A corner up is a stick.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 199 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-199 characters and not blank");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, { encoding: "utf8" });
