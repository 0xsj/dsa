const a = [1, 2, 3, 4]; // false
const b = [1, 2, 3, 1]; // true

function containsDuplicate(nums: number[]): boolean {
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

// hash
function containsDuplicate2(nums: number[]): boolean {
  let mySet = new Set<number>(nums);
  let myArr = Array.from(mySet.values());
  if (myArr.length === nums.length) {
    return false;
  }
  return true;
}

console.log(containsDuplicate2(a));
