const s = "a";
const t = "car";
const y = "ab";

function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(isAnagram(s, t)); // expect false
console.log(isAnagram(s, y)); // expect true
