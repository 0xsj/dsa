const word = "cabk";
const indices = [2, 1, 0, 3];

/**
 * Try 1:
 * 1. function called restorestring, that takes in s - string, and indicies
 * 2. create a new map object, where we are going to store the characters from the string and associate that with the indices
 * 3. so it should look like c => 2, a => 1, b => 0, k => 3 
 * 4. we then could sort the array in ascending order

 */
function restoreString(s: string, indices: number[]): string {
  const map = new Map();
  const sortedArray = [];

  for (let i = 0; i < s.split("").length; i++) {
    map.set(indices[i], s[i]);
  }
  for (let j = 0; j < s.length; j++) {
    sortedArray.push(map.get(j));
  }
  return sortedArray.join("");
}

console.log(restoreString(word, indices));

/**
 * Try 2: simplified.
 *
 */

function restoreString2(s: string, indicies: number[]): string {
  const results = [];
  for (let i = 0; i < s.split("").length; i++) {
    results[indices[i]] = s[i];
  }
  return results.join("");
}

console.log(restoreString2(word, indices));
