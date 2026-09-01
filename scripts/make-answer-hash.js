#!/usr/bin/env node
"use strict";

const crypto = require("node:crypto");

// .github/scripts/grade-assignment.js と同じ規則で正規化する。
function normalize(value) {
  return String(value)
    .replace(/[！-～]/g, (character) =>
      String.fromCharCode(character.charCodeAt(0) - 0xfee0))
    .replace(/[−–—]/g, "-")
    .replace(/[\s　]/g, "");
}

const input = process.argv.slice(2).join(" ");

if (input.length === 0) {
  console.error("Usage: node scripts/make-answer-hash.js <answer>");
  process.exit(1);
}

console.log(
  crypto.createHash("sha256").update(normalize(input), "utf8").digest("hex")
);
