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


#Try 2 - Hash map
"""
1. we first start by initializing an empty dictionary 'previous'. we are going to store the previously encoutnered elements and returns a list of integers
2. we can use enumerate to iterate through over the nums list, where for each element n the index i
3. diff - the difference between the target and n
4. The variable diff represents the difference between the target value and the current element n being iterated over in the nums list. By calculating diff, we determine the complement that we need to find in order to reach the target sum.
5. if we find the diff already exists in the dictionary, we return the index of the complement and the current index


"""

class Solution2:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        previous = {} # val: index

        for i, n in enumerate(nums):
            diff = target - n
            if diff in previous:
                return [previous[diff], i]
            previous[n] = i
        return