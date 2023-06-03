const s = "ba";
const t = "car";
const y = "ab";

// try 1 - same as the python solution (the idea is). we sort the characters, and compare

function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// console.log(isAnagram(s, t)); // expect false
// console.log(isAnagram(s, y)); // expect true

// try 2 - hash table

function isAnagram2(s: string, t: string): boolean {
  const charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

console.log(isAnagram2(s, t)); // false
console.log(isAnagram2(s, y)); // true
