s = 'rat'
t = 'car'
# t = 'baz'


# Try 1 
"""
1. we take each string, and run couple of methods to it 
2. we convert the string into a list of characters, we sort the list 
3. we just need to check if the two lists match, because we are assuming that this anagram has the same characters

time:
o(n log n)

space:
o(n)

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

def test():
    print(list(s))

test()