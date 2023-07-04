const arr1 = [3, 2, 2, 3];
const val1 = 2;
const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;

/**
 * Try 1:
 *
 * 1. function that takes in an array of numbers, and a value.
 * 2. instantiate i with a value of 0. this will be used to index and keep track of the positions of elements where elements != val should be placed
 * 3. start a for loop, iterate through nums
 * 4. if the current index / value of nums does not match
 *
 */

function removeElement(nums: number[], val: number): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

removeElement(arr1, val1);
removeElement(arr2, val2);
