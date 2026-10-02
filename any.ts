const lengthOfLongestSubstring = (s: string): number => {
  let seen = new Set<string>()

  let left = 0
  let maxLength = 0

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[right])
      left++
    }

    seen.add(s[right])

    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}
