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
 * 1. define a function that takes in nums, target
 * 2. create a new object called "map", where we will store key value pairs and each value associated with a unique key
 * 3. iterate through the loop
 * 4. we define a variable called diff, where diff is the difference between the target number and the current element
 * it refers to a number that, when added to the current element, it equals the target value.
 * 5. we check if the diff exists as a key inside of our map object.
 * 6. if it exists, we return the array containing the value associated with the diff key
 *
 */

function twoSum2(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }
  return [];
}

twoSum2(nums, target);
