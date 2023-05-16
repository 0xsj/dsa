package main

import "fmt"

var s = "fooz"

var t = "baz"

// var t = "zoof"

// Try 1, dirty way
// 1. we take the rune of the strings. rune essentially is an array of int values, or treating it as such here
// 2. we make the assumption that if the strings have the same exact characters which would mean same exact int values, the sum is also going to be always the same
// 3. take the sum of list1 and list2 and see if they match.

func isAnagram(s string, t string) bool {
	list1 := []rune(s)
	list2 := []rune(t)

	sum1 := 0
	sum2 := 0

	for _, r := range list1 {
		sum1 += int(r)
	}

	for _, r := range list2 {
		sum2 += int(r)
	}

	if sum1 == sum2 {
		return true
	}

	return false
}

// Try 2 - corrected
// 1. in try 1, the sums of the rune values would be an issue.
// 2. we first compare the length of s to t
// 3. we initialize a map "count" to store the frequency of each character in the strings
// 4. iterate through s, increment count for each character in s
// 5. iterate through , but we decrement for each character. if a the count becomes negative or if a characer in t does not exist in the map, we return false

func isAnagram2(s string, t string) bool {
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
