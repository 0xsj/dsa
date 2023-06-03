var s = "ba";
var t = "car";
var y = "ab";
// try 1 - same as the python solution (the idea is). we sort the characters, and compare
function isAnagram(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
}
// console.log(isAnagram(s, t)); // expect false
// console.log(isAnagram(s, y)); // expect true
// // try 2 - hash table  - ES6
// function isAnagram2(s: string, t: string): boolean {
//   const charCount = {};
//   for (let char of s) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   for (let char of t) {
//     if (!charCount[char]) return false;
//     charCount[char]--;
//   }
//   return true;
// }
// console.log(isAnagram2(s, t)); // false
// console.log(isAnagram2(s, y)); // true
// try 3 - hastable v2  older versions
function isAnagram3(s, t) {
    var charCount = {};
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (var i = 0; i < s.length; i++) {
        var char = t[i];
        if (!charCount[char])
            return false;
        charCount[char]--;
    }
    return true;
}
console.log(isAnagram3(s, t)); // false
console.log(isAnagram3(s, y)); // true
