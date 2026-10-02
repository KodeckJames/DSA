// 1. Array Traversal

// a.)Finding maximum

let nums = [2, 9, 8, 5, 7, 39, 28, 44, 88, -3]

const findMax = (nums: number[]): number => {
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  return max
}

console.log(findMax(nums))

// b.) Searching

let searchNums = [2, 6, 4, 7]
let find = 4

const searchNum = (target: number, numsS: number[]): boolean => {
  for (let i = 0; i < numsS.length; i++) {
    if (numsS[i] === target) {
      return true
    }
  }
  return false
}
console.log(searchNum(find, searchNums))

// c.) Counting

// Example:- Counting number of even numbers in an array:
let count = 0
const countEven = (nums: number[]): number => {
  for (const num of nums) {
    if (num % 2 === 0) {
      count++
    }
  }
  return count
}

console.log(countEven(nums))

// Early termination
// You don't always have to traverse the entire array.
// Example:- Determining whether an array has a -ve number"

const hasNegative = (nums: number[]): boolean => {
  for (const num of nums) {
    if (num < 0) {
      return true
    }
  }
  return false
}
const hasNegativeReuelt = hasNegative(nums)
console.log(hasNegativeReuelt)

// Determine whether an array is sorted in ascending order:

let ascendArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let noAscendArray = [3, 4, 1, 5, 2, 9, 8]

const isAscend = (nums: number[]): boolean => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false
    }
  }
  return true
}

console.log(isAscend(noAscendArray))

// 2.) Two Pointers
// Finding out if a the sum target of 2 numbers are in an array

// O(n^2)
const findTarget = (nums: number[], target: number): boolean => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]
      if (sum === target) {
        return true
      }
    }
  }
  return false
}

console.log(findTarget(nums, 35))

// O(n)
const findTargetOptimal = (nums: number[], target: number) => {
  let left = 0
  let fast = nums.length - 1

  nums.sort((a, b) => a - b)

  while (left < fast) {
    const sum = nums[left] + nums[fast]

    if (sum === target) {
      return true
    } else if (sum < target) {
      left++
    } else if (sum > target) {
      fast--
    }
  }
  return false
}

console.log(findTargetOptimal(nums, 35))

// Palindrome

const isPalindrome = (word: string): boolean => {
  let left = 0
  let fast = word.length - 1

  while (left < fast) {
    if (word[left] != word[fast]) {
      return false
    }
    left++
    fast--
  }
  return true
}

console.log(isPalindrome('racecar'))

// Remove duplicates from a sorted array
// Link: https://chatgpt.com/share/6abbe049-65e4-83e9-9e9c-9c67a9b53fec

const removeDuplicates = (nums: number[]): number => {
  if (nums.length === 0) return 0

  let slow = 0

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
  }

  return slow + 1
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 3, 3, 4, 5]))

// 3.) Sliding window

const maxSum = (nums: number[], k: number): number => {
  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  let maxSum = sum

  for (let fast = k; fast < nums.length; fast++) {
    sum += nums[fast]
    sum -= nums[fast - k]

    maxSum = Math.max(sum, maxSum)
  }

  return maxSum
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3))

// Kadane's Algorithm 1 - maximum sub-array sum only

const maxSubArraySumOnly = (nums: number[]): number => {
  if (nums.length === 0) return 0

  let currentSum = nums[0]
  let maxSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]

    currentSum = Math.max(num, currentSum + num)

    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum
}
console.log(maxSubArraySumOnly([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// Kadane's Algorithm

function maxSubArray(nums: number[]): {
  sum: number
  start: number
  end: number
} {
  let currentSum = nums[0]
  let maxSum = nums[0]

  let currentStart = 0
  let bestStart = 0
  let bestEnd = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i]
      currentStart = i
    } else {
      currentSum += nums[i]
    }

    if (currentSum > maxSum) {
      maxSum = currentSum
      bestStart = currentStart
      bestEnd = i
    }
  }

  return {
    sum: maxSum,
    start: bestStart,
    end: bestEnd,
  }
}

// 6.) In-Place Modification
// Example problem: Move Zeroes - Move all zeroes to the end of the array while maintaining the relative order of the non-zero elements.

const moveZeroes = (nums: number[]): void => {
  let slow = 0

  for (let fast = 0; fast < nums.length; fast++) {
    if (fast !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }

  while (slow < nums.length) {
    nums[slow] = 0
    slow++
  }
}

console.log(moveZeroes([0, 1, 0, 2, 3, 0, 0, 4, 5, 6]))

// Remove Duplicates: Modify the array in-place and return the number of unique elements.

const removeDuplicates2 = (nums: number[]): number => {
  if (nums.length === 0) return 0
  let slow = 0

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
  }

  return slow + 1
}

// Remove Element
/*
Problem:
nums = [3, 2, 2, 3]
val = 3

Remove every occurrence of 3 in-place.

Desired meaningful portion:
[2, 2]
*/
const removeElement = (nums: number[], val: number): number => {
  let slow = 0

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    }
  }

  return slow + 1
}

/* 
In-place doesn't always mean two pointers

Two pointers are one of the most useful ways to perform in-place modification, but they're not the only way.

For example, reversing an array:
*/

const reverseArray = (nums: number[]): number[] => {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    ;[nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }

  return nums
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]))

// 8.) Matrix Traversal
// e.g. Find where 8 is in:

/*
Time:  O(RC)
Space: O(1)
*/
const matrix = [
  [4, 7, 2],
  [9, 1, 6],
  [3, 8, 5],
]
console.log(`Matrix Length = ${matrix.length}`)

const findValueInMatrix = (nums: number[][], value: number): string => {
  for (let row = 0; row < nums.length; row++) {
    for (let col = 0; col < nums[row].length; col++) {
      if (nums[row][col] === value) {
        return `Value = ${value}: Row = ${row}, Column = ${col}`
      }
    }
  }
  return 'Not Available'
}

console.log(findValueInMatrix(matrix, 8))

// Summing every element in a matrix
/*
Time:  O(RC)
Space: O(1)
*/

const sumElements = (nums: number[][]): number => {
  let sum = 0
  for (let row = 0; row < nums.length; row++) {
    for (let col = 0; col < nums[row].length; col++) {
      sum += nums[row][col]
    }
  }
  return sum
}
console.log(
  sumElements([
    [1, 2, 3],
    [4, 5, 6],
  ])
)

// Column traversal
const ColumnTraversal = (matrix: number[][]) => {
  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      console.log([matrix[row], matrix[col]])
    }
  }
}
// ColumnTraversal(matrix)

// Diagonal Traversal

const diagonalTraversal = (matrix: number[][]) => {
  let result = []
  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i][i])
  }

  return result
}
console.log(diagonalTraversal(matrix))

// Anti-diagonal Traversal
/*
For:

1 2 3
4 5 6
7 8 9

coordinates are:

(0,2)
(1,1)
(2,0)

Notice:

row + col = n - 1

For a 3 × 3 matrix:

0 + 2 = 2
1 + 1 = 2
2 + 0 = 2

So:
 */

const antiDiagonalTraversal = (matrxi: number[][]) => {
  let n = matrix.length
  let result = []

  for (let row = 0; row < n; row++) {
    let col = n - 1 - row
    result.push(matrix[row][col])
  }
  return result
}

console.log(antiDiagonalTraversal(matrix))

// 8.) Intervals
// Problem = Given a collection of intervals, merge all overlapping intervals.

// Explanation of how this problem is solved:
// So in this problem, the main idea is to create a new array of arrays called result. What we do, is that whenever we find an interval that is okay and doest overlap with its preceding interval, we append (push) that interval to result. When starting, we use the first value (an array) of our matrix/ intervals array of arrays as the first value of the new result array of arrays so that the incoming arrays build upon it as we push them there. If we find that the second array overlaps the first array, we replace the second value of the first array in result with the second value of the current array in matrix...

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]

const mergeIntervals = (matrix: number[][]): number[][] => {
  if (matrix.length === 0) return []

  matrix.sort((a, b) => a[0] - b[0])

  const result: number[][] = [matrix[0]]

  for (let i = 1; i < matrix.length; i++) {
    const current = matrix[i]
    let last = result[result.length - 1]

    if (current[0] < last[1]) {
      last[1] = Math.max(last[1], current[1])
    } else {
      result.push(current)
    }
  }
  return result
}
console.log(mergeIntervals(intervals))
