/**
 * @param {number[]} nums
 * @return {number}
 * Remove Duplicated from Sorted Array
 * Two Possible ways:
 * 1. Using Two Pointers - one pointer to iterate through array and other to keep track of unique elements
 * 2. Using Set - convert array to set and back to array and return length
 */

let nums = [1, 1, 2];

// Using Two Pointers approch

function removeDuplicatesTwoPointers(nums) {
  let uniqueIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      // Found a unique elements its a pass
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    } else {
      // Duplicate elemnet Found do nothing
      continue;
    }
  }
  return uniqueIndex + 1;
}

// Using set approch first
function removeDuplicates(nums) {
  let unique = [...new Set(nums)];
  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }
  console.log(unique.size);
}

removeDuplicates(nums);
removeDuplicatesTwoPointers(nums);
