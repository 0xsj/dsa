var nums = [3, 2, 4, 8, 10, 21];
var target = 23;
/**
 * Try 1: brute force
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
twoSum(nums, target);