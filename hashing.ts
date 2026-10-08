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

Space complexity - In the worst case, every number is unique:

[1, 2, 3, 4, 5, ...]

So the Set stores n values:

O(n)

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

const removeDuplicates01 = (nums: number[]): Set<number> => {
  let set = new Set<number>()

  for (const num of nums) {
    set.add(num)
  }
  return set
}
console.log(removeDuplicates01([1, 2, 2, 3, 3, 4]))

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

/*
Frequency counting with strings

Frequency counting with strings works because strings are iterable
*/

const frequencyString = (word: string): Map<string, number> => {
  let map = new Map<string, number>()

  for (const letter of word) {
    map.set(letter, (map.get(letter) ?? 0) + 1)
  }

  return map
}

console.log(frequencyString('banana'))

/* 
 Valid Anagram Problem - An anagram means both strings contain exactly the same characters with exactly the same frequencies.

 For example:

s = "anagram"
t = "nagaram"

They are anagrams.

Why?

Their frequencies are identical:

 Given two strings s and t, determine whether t is an anagram of s.
*/

const validAnagram = (word1: string, word2: string): boolean => {
  let map = new Map<string, number>()

  for (const letter of word1) {
    map.set(letter, (map.get(letter) ?? 0) + 1)
  }

  for (const char of word2) {
    const count = map.get(char)

    if (count === undefined) return false

    if (count === 1) {
      map.delete(char)
    } else {
      map.set(char, map.get(char)! - 1)
    }
  }

  return map.size === 0
}

console.log(validAnagram('anagram', 'nagaram'))

// Find the first character that appears only once.

const appearsOnce = (word: string): number => {
  let map = new Map<string, number>()

  for (const char of word) {
    map.set(char, map.get(char ?? 0)! + 1)
  }

  for (let i = 0; i < word.length; i++) {
    if (map.get(word[i]) === 1) {
      return i
    }
  }

  return -1
}

// Returning actual duplicate number in an array:
const returnDuplicate = (nums: number[]): number[] => {
  let set = new Set<number>()

  let duplicateNums = new Set<number>()

  for (const num of nums) {
    if (set.has(num)) {
      duplicateNums.add(num)
    }
    set.add(num)
  }

  return [...duplicateNums]
}
console.log(returnDuplicate([4, 3, 2, 7, 8, 2, 3, 1]))

// Returning all numbers occurring more than twice in an array:

const returnTwiceDuplicates = (nums: number[]): number[] => {
  let map = new Map<number, number>()

  let numArray = new Set<number>()

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1)

    if (map.get(num)! >= 2) {
      numArray.add(num)
    }
  }

  return [...numArray]
}

console.log(returnTwiceDuplicates([1, 1, 1, 2, 3, 3, 4, 5, 6, 6, 6, 7]))

// Returning all numbers occurring more than twice in an array - Another way, though the previous one above is better

const returnTwiceDuplicates2 = (nums: number[]): number[] => {
  let map = new Map<number, number>()

  let set = new Set<number>()

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1)
  }

  for (const [num, count] of map) {
    if (count >= 2) {
      set.add(num)
    }
  }

  return [...set]
}

console.log(returnTwiceDuplicates2([1, 1, 1, 2, 3, 3, 4, 5, 6, 6, 6, 7]))

// Two Sum Problem:
/*
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Space complexity:- We're storing values and their indexes:
value → index
In the worst case, we store n values.
Therefore:

Space: O(n)

So Two Sum using a HashMap is:

Time:  O(n)
Space: O(n)
*/

const twoSum2 = (nums: number[], target: number): number[] => {
  let map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (map.has(complement)) {
      return [(map.get(complement), i)]
    }

    map.set(nums[i], i)
  }

  return []
}

console.log(twoSum([2, 7, 8, 5, 6], 14))

// Fist Occurrence - Where did we first see a number in an array?
// You actually don't need a Map at all:
function firstOccurrenceOptimal(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    }
  }

  return -1
}

// Unnecessary solution 2
const firstOccurrence = (nums: number[], target: number): number => {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
    if (map.has(target)) {
      return map.get(target)!
    }
  }

  return -1
}

console.log(firstOccurrence([1, 2, 2, 3, 4, 2, 5, 5, 6], 5))

// Interesting solution that you can use elsewhere:
function firstOccurrenceNot(nums: number[], target: number): number {
  const indexMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (!indexMap.has(nums[i])) {
      indexMap.set(nums[i], i)
    }
  }

  return indexMap.get(target) ?? -1
}

// Grouping - The key idea is using a HashMap to collect related items together.

// Problem - Given an array of words, group words with their first letter

const groupWords = (words: string[]): Map<string, string[]> => {
  let map = new Map<string, string[]>()

  for (const word of words) {
    const letter = word[0]
    if (!map.has(letter)) {
      map.set(letter, [])
    }

    map.get(letter)!.push(word)
  }

  return map
}

console.log(
  groupWords([
    'apple',
    'shell',
    'banana',
    'archaic',
    'cow',
    'shield',
    'ajar',
    'bus',
  ])
)

// Grouping by number:

const groupByNumber = (nums: number[]): Map<number, number[]> => {
  let map = new Map<number, number[]>()

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, [])
    }

    map.get(num)!.push(num)
  }

  return map
}

console.log(groupByNumber([1, 1, 1, 2, 3, 4, 4, 2, 3, 4, 1, 5]))

/*
Group Anagrams
Given an array of strings, group the anagrams together.
*/

const groupAnagrams = (words: string[]): Map<string, string[]> => {
  let map = new Map<string, string[]>()

  for (const word of words) {
    const sorted = word.split('').sort().join('')

    if (!map.has(sorted)) {
      map.set(sorted, [])
    }

    map.get(sorted)!.push(word)
  }

  return map
}

const groupAnagrams2 = (words: string[]): string[][] => {
  const map = new Map<string, string[]>()

  for (const word of words) {
    const key = word.split('').sort().join('')

    if (!map.has(key)) {
      map.set(key, [])
    }

    map.get(key)!.push(word)
  }

  return [...map.values()]
}

const anagramWords = [
  'eat',
  'tea',
  'ate',
  'dad',
  'dda',
  'car',
  'rac',
  'arc',
  'pump',
]

console.log(groupAnagrams(anagramWords))
console.log(groupAnagrams2(anagramWords))

// *** Prefix sum + HashMap integration
/*
The classic problem: Subarray Sum Equals K - How many sub-arrays have a sum equal to K?
*/

const subArraySum = (nums: number[], target: number): number => {
  let map = new Map<number, number>()

  map.set(0, 1)

  let count = 0
  let sum = 0

  for (const num of nums) {
    sum += num
    const needed = sum - target

    if (map.has(needed)) {
      count += map.get(needed)!
    }

    map.set(sum, map.get(sum) ?? 0 + 1)
  }

  return count
}
console.log(subArraySum([1, 2, 3], 3))

// * 8.) Caching Seen States

// *Fibonacci Problem - When you want it to return a finite defined number

const Fibonacci = (nums: number[], limit: number) => {
  let fibArray = [...nums]

  for (let i = 2; i < limit; i++) {
    let fibNum = fibArray[i - 1] + fibArray[i - 2]

    fibArray.push(fibNum)
  }

  return fibArray
}

console.log(Fibonacci([0, 1], 5))

// *Fibonacci Problem - Leetcode problem - When you are asked to use a generator and produce the subsequent numbers on demand:

/* 
 Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
*/

function* FibGenerator(): Generator<number> {
  let previous = 0
  let current = 1

  while (true) {
    yield previous

    const next = previous + current
    previous = current
    current = next
  }
}

const FibResult = FibGenerator()

console.log(FibResult.next())
console.log(FibResult.next())
console.log(FibResult.next().value)
console.log(FibResult.next().value)
console.log(FibResult.next().done)
console.log(FibResult.next().done)
