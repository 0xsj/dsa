from typing import List


a = [1, 2, 3, 4] # false
b = [1, 2, 3, 1] # true

# Try 1 Brute force
"""
1. first loop, we just go for the entire length of nums
2. the second for loop, we start at indices i + 1 to length of nums
3. we check to see if nums[i] == nums[j]. because if there are two identical values in different positions, there is a "duplicate"
4. return True if there is a match, otherwise return False 

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


# Try 2 Hashmap
"""
1. create a hashset, where we are going to store unique elements we encounter
2. for each element i in nums,
3. if i already exists in the hashset, we return True. 
4. we add each element i into the hashset
5. if we encounter 0 duplicates, return false

time: 
o(n)

space:
o(n)
"""
class Solution2:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()

        for i in nums:
            if i in hashset:
                return True
            hashset.add(i)
        return False
    
hashmap = Solution2()
print(hashmap.containsDuplicate(b))


# Try 3 Sort
"""
1. we run sort() to nums, where for example if our list is [1, 2, 3, 1], it will change this to [1, 1, 2, 3]
2. we compare adjascent elements with nums[i] and nums[i + 1] to see if we have a duplicate

"""
class Solution3:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()

        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                return True
        return False
    
sort = Solution3()
print(sort.containsDuplicate(b))