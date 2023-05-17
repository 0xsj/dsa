package main

import "fmt"

var s = "fooz"

var t = "baz"

// var t = "zoof"

// Try 1
// 1. in try 1, the sums of the rune values would be an issue.
// 2. we first compare the length of s to t
// 3. we initialize a map "count" to store the frequency of each character in the strings
// 4. iterate through s, increment count for each character in s
// 5. iterate through , but we decrement for each character. if a the count becomes negative or if a characer in t does not exist in the map, we return false

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	count := make(map[rune]int)

	for _, r := range s {
		count[r]++
	}

	for _, r := range t {
		count[r]--
		if count[r] < 0 {
			return false
		}
	}

	return true
}

func main() {
	fmt.Println(isAnagram(s, t))
}
