from typing import List


a = [1, 2, 3, 4] # false
b = [1, 2, 3, 1] # true

# Try 1 Brute force
"""
1. instantiate a class named "Solution"
2. method named containsDuplicate, which takes in a list of integers. expect a boolean return
3. first loop, we just go for the entire length of nums
4. the second for loop, we start at indices i + 1 to length of nums
5. we check to see if nums[i] == nums[j]. because if there are two identical values in different positions, there is a "duplicate"
6. return True if there is a match, otherwise return False 

Time: 
o(n^2)

Space:
o(1)
"""
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return True
        return False

solution = Solution()
print(solution.containsDuplicate(a))