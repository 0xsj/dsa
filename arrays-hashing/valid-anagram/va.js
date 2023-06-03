var s = "ba";
var t = "car";
var y = "ab";
// try 1 - same as the python solution (the idea is). we sort the characters, and compare
function isAnagram(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
}
// console.log(isAnagram(s, t)); // expect false
// console.log(isAnagram(s, y)); // expect true
// try 2 - hash table
function isAnagram2(s, t) {
    var charCount = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var char = t_1[_a];
        if (!charCount[char])
            return false;
        charCount[char]--;
    }
    return true;
}
console.log(isAnagram2(s, t)); // false
console.log(isAnagram2(s, y)); // true
