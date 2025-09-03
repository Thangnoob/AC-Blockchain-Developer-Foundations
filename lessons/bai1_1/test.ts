import { isValidBlock, Block, calculateHash } from "./solution";

const block1: Block = {
  index: 0,
  timestamp: "2024-01-01T00:00:00Z",
  transactions: [],
  previous_hash: "0",
  current_hash: "",
};

block1.current_hash = calculateHash(
  block1.index,
  block1.timestamp,
  block1.transactions,
  block1.previous_hash
);

console.log("✅ Block 1:", isValidBlock(block1)); // Expected: true

block1.current_hash = "invalid_hash";
console.log("❌ Block 1 (sai):", isValidBlock(block1)); // Expected: false
