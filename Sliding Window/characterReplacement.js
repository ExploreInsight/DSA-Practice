function characterReplacement(s, k) {
  // Create a map to store frequency of each character in the current window
  let map = new Map();

  // 'left' is the start index of the sliding window
  let left = 0;

  // 'maxFreq' keeps track of the highest frequency of any single character in the current window
  let maxFreq = 0;

  // 'maxLen' will store the maximum window size found so far
  let maxLen = 0;

  // Expand the window by moving 'right' from 0 to end of string
  for (let right = 0; right < s.length; right++) {

    // Add current character (s[right]) to the map, increasing its count
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    // Update maxFreq to the maximum frequency of any character seen in this window
    // (this helps us know which character appears the most)
    maxFreq = Math.max(maxFreq, map.get(s[right]));

    /* 
      Now, check if this window is still valid.

      The rule:
      (window size - maxFreq) = number of characters that need to be replaced 
      to make all characters the same in the current window.

      If this number is greater than k (allowed replacements), 
      then we must shrink the window from the left.
    */
    while ((right - left + 1) - maxFreq > k) {
      // Decrease count of the character that goes out of the window
      map.set(s[left], map.get(s[left]) - 1);
      // Move the left pointer forward (shrink window)
      left++;
    }

    // Update maxLen with the largest valid window size so far
    maxLen = Math.max(maxLen, right - left + 1);
  }

  // Print the maximum valid substring length
  console.log(maxLen);
}

// Example test
characterReplacement("AAABABB", 1);

