from typing import List


a = [1, 2, 3, 4] # false
b = [1, 2, 3, 1] # true

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return True
        return False

solution = Solution()
print(solution.containsDuplicate(a))