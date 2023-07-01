var word = "cabk";
var indices = [2, 1, 0, 3];
/**
 * Try 1:
 * 1. function called restorestring, that takes in s - string, and indicies
 * 2. create a new map object, where we are going to store the characters from the string and associate that with the indices
 * 3. so it should look like c => 2, a => 1, b => 0, k => 3
 * 4. we then could sort the array in ascending order

 */
function restoreString(s, indicies) {
    var map = new Map();
    for (var i = 0; i < s.split("").length; i++) {
        map.set(s[i], indices[i]);
        console.log(map);
    }
    return;
}
restoreString(word, indices);
