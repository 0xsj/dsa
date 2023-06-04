from typing import List

nums = [3, 2, 4]
target = 6

# Try 1 - Brute force
"""
1. we set n to the length of the entire nums array, because we want to use this to iterate over
2. we start the for loop in
3. we start a second for loop with the index incremented by 1
4. we check if the index of nums[i] + nums[j] is equal to the target number. 
5. if the two indicies add up to the target, we return the indicies as an array [i, j]


time complexity:
O(n^2) because there are nested loops iterating through all possible pairs of elements.

Space:
o(1)

"""
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []
    
solution = Solution()
result = solution.twoSum(nums, target)
print(result)