var a = [1, 2, 3, 4]; // false
var b = [1, 2, 3, 1]; // true
function containsDuplicate(nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log(containsDuplicate(a));
// hash
function containsDuplicate2(nums) {
    var mySet = new Set(nums);
    console.log(mySet);
    return false;
}
containsDuplicate2(a);
