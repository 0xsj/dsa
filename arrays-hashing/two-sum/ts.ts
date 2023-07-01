const nums = [3, 2, 4, 8, 10, 21];
const target = 23;

/**
 * Try 1: brute force
 * 1. define a function that takes in nums array and the target number
 * 2. iterate through the nums array
 * 3. start a nested for loop, increment the starting index by 1 (i + 1)
 * 4. if the sum of the two indices match the target number, return the indices in an array
 *
 *
 */

function twoSum(nums, target): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
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

function twoSum2(nums: number[], target: number): number[] {
  const map = new Map();
  map.set(nums[0], target);
  console.log(map);
  return [];
}

twoSum2(nums, target);
