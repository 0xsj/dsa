const a = [1, 2, 3, 4]; // false
const b = [1, 2, 3, 1]; // true
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
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
    let mySet = new Set(nums);
    let myArr = Array.from(mySet.values());
    if (myArr.length === nums.length) {
        return false;
    }
    return true;
}
// cleaned up ver of set solution try 2
function containsDuplicate3(nums) {
    const results = new Set(nums);
    return results.size !== nums.length;
}
// hashmap
/**
 *
 * @param nums The provided solution using a Map is efficient because it eliminates the need to create an intermediate array and instead uses a data structure specifically designed for key-value mappings.

Here's how the solution works:

It creates an empty Map called map.
It iterates over each number in the nums array using a for...of loop.
For each number, it checks if the map already has an entry for that number by using map.get(num). If the entry is not undefined, it means the number is a duplicate, and the function immediately returns true.
If the number is not a duplicate, it sets the number as a key in the map with a value of 1 using map.set(num, 1).
After iterating through all the numbers, if no duplicates are found, the function returns false.
 * @returns
 */
function containsDuplicate4(nums) {
    const map = new Map();
    for (let num of nums) {
        if (map.get(num) !== undefined) {
            return true;
        }
        map.set(num, 1);
    }
    return false;
}
console.log(containsDuplicate3(a));
