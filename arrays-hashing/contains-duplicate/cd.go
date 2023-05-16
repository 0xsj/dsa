package main

var a []int

func containsDuplicate(nums []int) bool {
	seen := make(map[int]bool)

	for _, num := range nums {
		if seen[num] {
			return true
		}
		seen[num] = true
	}
	return false
}

func main() {
	// a := []int{1, 2, 3, 4, 5}
	b := []int{1, 1, 2, 3, 4}
	result := containsDuplicate(b)
	println(result)
}
