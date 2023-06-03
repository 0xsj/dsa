var s = "a";
var t = "car";
var y = "ab";
function isAnagram(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join();
}
console.log(isAnagram(s, t)); // expect false
console.log(isAnagram(s, y)); // expect true
