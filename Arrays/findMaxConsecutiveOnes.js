/**
 * ================================================
 * Problem: Find Maximum Consecutive Ones
 * -----------------------------------------------
 * Given a binary array `nums`, return the maximum 
 * number of consecutive 1's in the array.
 *
 * Example:
 * Input:  [1,1,0,1,1,1]
 * Output: 3
 * -----------------------------------------------
 * Approach:
 * 1️⃣ Initialize two counters:
 *     - count → tracks current sequence of 1s
 *     - maxCount → tracks the highest sequence found so far
 * 
 * 2️⃣ Iterate through array:
 *     - If nums[i] === 1 → increment count
 *     - Else → reset count to 0
 * 
 * 3️⃣ After each step, update maxCount with Math.max(maxCount, count)
 * 
 * 4️⃣ Return maxCount at the end.
 *
 * ⏱️ Time Complexity: O(n)
 * 📦 Space Complexity: O(1)
 * ================================================
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;       // current streak of 1's
    let maxCount = 0;    // longest streak found so far

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;                        // continue streak
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;                      // reset streak
        }
    }

    return maxCount;
};

// ✅ Example Test
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // Output: 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // Output: 2
