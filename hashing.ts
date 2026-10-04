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
