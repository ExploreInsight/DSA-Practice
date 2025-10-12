/*
=========================================
Problem: containsDuplicate
-----------------------------------------
Given an integer array nums, return true
if any value appears at least twice in the
array, and false if every element is distinct.
=========================================
*/


/*
====================================================
1️⃣ Brute Force Approach (Nested Loops)
----------------------------------------------------
💡 Idea:
Compare each element with every other element.
If a duplicate is found → return true.

⏱️ Time Complexity: O(n²)
📦 Space Complexity: O(1)
====================================================
*/
var containsDuplicate_bruteForce = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
console.log("Brute Force:", containsDuplicate_bruteForce([1,2,3,4,1])); // true



/*
====================================================
2️⃣ Using Hash Map (or Object)
----------------------------------------------------
💡 Idea:
Use an object to store seen numbers.
If a number already exists, return true.

⏱️ Time Complexity: O(n)
📦 Space Complexity: O(n)
====================================================
*/
var containsDuplicate_hashMap = function(nums) {
  const seen = {};
  for (const num of nums) {
    if (seen[num]) return true;
    seen[num] = true;
  }
  return false;
};
console.log("Hash Map:", containsDuplicate_hashMap([1,2,3,4,5,6])); // false



/*
====================================================
3️⃣ Using reduce() Method
----------------------------------------------------
💡 Idea:
Use reduce to accumulate seen numbers
and set a flag if a duplicate is found.

⏱️ Time Complexity: O(n)
📦 Space Complexity: O(n)
====================================================
*/
var containsDuplicate_reduce = function(nums) {
  let duplicateFound = false;

  nums.reduce((acc, val) => {
    if (acc[val]) {
      duplicateFound = true;
    } else {
      acc[val] = true;
    }
    return acc;
  }, {});

  return duplicateFound;
};
console.log("Reduce Method:", containsDuplicate_reduce([1,2,3,4,1])); // true



/*
====================================================
4️⃣ Using includes() and Array only
----------------------------------------------------
💡 Idea:
Use a simple array to keep track of seen numbers.
Check if number already exists using includes().

⏱️ Time Complexity: O(n²)
📦 Space Complexity: O(n)
====================================================
*/
var containsDuplicate_includes = function(nums) {
  const seen = [];
  for (const num of nums) {
    if (seen.includes(num)) return true;
    seen.push(num);
  }
  return false;
};
console.log("Includes:", containsDuplicate_includes([1,2,3,4,2])); // true



/*
====================================================
5️⃣ Using Set (Shortest and Efficient)
----------------------------------------------------
💡 Idea:
Convert array into a Set — duplicates are removed.
If Set size < array length → duplicate exists.

⏱️ Time Complexity: O(n)
📦 Space Complexity: O(n)
====================================================
*/
var containsDuplicate_set = function(nums) {
  return new Set(nums).size !== nums.length;
};
console.log("Set Method:", containsDuplicate_set([1,1,1,3,3,4,3,2,4,2])); // true



/*
====================================================
6️⃣ Using Sorting and Comparing Neighbors
----------------------------------------------------
💡 Idea:
Sort the array and check if any two consecutive
numbers are equal.

⏱️ Time Complexity: O(n log n)
📦 Space Complexity: O(1) or O(n)
====================================================
*/
var containsDuplicate_sort = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};
console.log("Sort & Compare:", containsDuplicate_sort([1,2,3,4,1])); // true



/*
====================================================
📘 Summary:

| Approach | Method            | Time     | Space | Notes |
|-----------|------------------|----------|--------|--------|
| 1 | Brute Force        | O(n²) | O(1) | Simple but slow |
| 2 | Hash Map           | O(n)  | O(n) | Fast & common |
| 3 | Reduce             | O(n)  | O(n) | Functional style |
| 4 | Includes (Array)   | O(n²) | O(n) | Easy but inefficient |
| 5 | Set                | O(n)  | O(n) | Best one-liner |
| 6 | Sort & Compare     | O(n log n) | O(1) | Memory friendly |
====================================================
*/
