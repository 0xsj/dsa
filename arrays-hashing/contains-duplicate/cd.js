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
// console.log(containsDuplicate(a));
// using set try 1
function containsDuplicate2(nums) {
    var mySet = new Set(nums);
    var myArr = Array.from(mySet.values());
    if (myArr.length === nums.length) {
        return false;
    }
    return true;
}
// cleaned up ver of set solution try 2
function containsDuplicate3(nums) {
    var results = new Set(nums);
    return results.size !== nums.length;
}
// hashmap
function containsDuplicate4(nums) {
    var map = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (map.get(num) !== undefined) {
            return true;
        }
        map.set(num, 1);
    }
    return false;
}
console.log(containsDuplicate3(a));
