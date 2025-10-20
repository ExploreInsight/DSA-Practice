let s = "abcabcbb";

function lengthOfLongestSubstring(s) {
  // find the longest substring which is contingous
  let charSet = new Set();

   let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    // console.log('processing')
    while(charSet.has(s[right])) {
        console.log('processing1')
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  console.log(maxLen);
}

lengthOfLongestSubstring(s);
