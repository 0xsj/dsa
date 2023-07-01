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
    var sortedArray = [];
    for (var i = 0; i < s.split("").length; i++) {
        map.set(indices[i], s[i]);
    }
    for (var j = 0; j < s.length; j++) {
        sortedArray.push(map.get(j));
        console.log(map);
        console.log(sortedArray);
    }
    return sortedArray.join("");
}
console.log(restoreString(word, indices));
