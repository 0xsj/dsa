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

func main() {
	fmt.Println(isAnagram(s, t))
}
