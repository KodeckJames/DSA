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
  let map = new Map<number, number>()

  for (const num of nums) {
    let complement = target - num

    if (map.has(complement)) {
      return [complement, num]
    }
    map.set(num, num)
  }
  return []
}
console.log(twoSumInt([2, 7, 11, 15], 26))
