s = 'rat'
t = 'car'
# t = 'baz'


# Try 1 Brute force
"""
1. we take each string, and run couple of methods to it 
2. 

"""
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        list_1 = sorted(list(s))
        list_2 = sorted(list(t))
        
        if list_1 == list_2:
            print("anagram")
            return True
        else:
            print("not anagram")
            return False

solution = Solution()
solution.isAnagram(s, t)