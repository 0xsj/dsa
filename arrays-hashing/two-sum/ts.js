var nums = [3, 2, 4, 8, 10, 21];
var target = 23;
/**
 * Try 1: brute force
 * 1. define a function that takes in nums array and the target number
 * 2. iterate through the nums array
 * 3. start a nested for loop, increment the starting index by 1 (i + 1)
 * 4. if the sum of the two indices match the target number, return the indices in an array
 *
 *
 */
function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log([i, j]);
                return [i, j];
            }
        }
    }
    return [];
}
// twoSum(nums, target);
/**
 * Try 2: hash map
 *
 */
function twoSum2(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    console.log(map);
    return [];
}
twoSum2(nums, target);
