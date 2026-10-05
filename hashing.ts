/*
Count numbers
Given an array, count how many times each number appears.
*/

let ArrayNums = [1, 1, 3, 2, 4, 5, 3, 6, 6, 6, 6]

const countNums = (nums: number[]) => {
  let seek = new Map<number, number>()

  for (const num of nums) {
    seek.set(num, (seek.get(num) ?? 0) + 1)
  }

  return seek
}

console.log(countNums(ArrayNums))

/*
Count numbers - More explicit solution without the seek.set(num, (seek.get(num) ?? 0) + 1) one liner
Given an array, count how many times each number appears.
*/

const countNumsExplicit = (nums: number[]): Map<number, number> => {
  const map = new Map<number, number>()

  for (const num of nums) {
    if (map.has(num)) {
      const currentCount = map.get(num)
      map.set(num, currentCount! + 1)
    } else {
      map.set(num, 1)
    }
  }
  return map
}

console.log(countNumsExplicit(ArrayNums))

// Two Sum problem - Returning indices
/*
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (nums: number[], target: number): number[] => {
  let seek = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]

    if (seek.has(complement)) {
      return [seek.get(complement)!, i]
    }
    seek.set(nums[i], i)
  }
  return []
}
console.log(twoSum([2, 7, 11, 15], 26))

// Two Sum problem - Returning actual Integers

const twoSumInt = (nums: number[], target: number): number[] => {
  let set = new Set<number>()

  for (const num of nums) {
    let complement = target - num

    if (set.has(complement)) {
      return [complement, num]
    }
    set.add(num)
  }
  return []
}
console.log(twoSumInt([2, 7, 11, 15], 26))

/*
Contains Duplicate

Given an integer array, return true if any value appears at least twice.

Time:  O(n)
Space: O(n)
*/

const containsDuplicate = (nums: number[]): boolean => {
  let set = new Set<number>()

  for (const num of nums) {
    if (set.has(num)) return true

    set.add(num)
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))

// Remove Duplicates

const removeDuplicates = (nums: number[]): Set<number> => {
  let set = new Set<number>()

  for (const num of nums) {
    set.add(num)
  }
  return set
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]))

// Shorter version:
const removeDuplicatesShort = (nums: number[]): Set<number> => new Set(nums)

console.log(removeDuplicatesShort([1, 2, 2, 3, 3, 4]))

// Finding frequency
const frequencyFind = (nums: number[]): Map<number, number> => {
  let map = new Map<number, number>()

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1)
  }

  return map
}

console.log(frequencyFind([1, 2, 2, 3, 1, 1]))
