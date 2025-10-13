// valid Anagarms

let s = "anagram",
  t = "nagaram";

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj = {};

  for (let char of s) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let char of t) {
    if (!obj[char]) return false;
    obj[char]--;
  }
  return true;
};

isAnagram(s, t);


// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;

//     return s.split('').sort().join('') === t.split('').sort().join('');
// }
