// Optimized Approach using Hash Map (O(n))
// -----------------------------------------
// Instead of checking all pairs, store each number’s index
// and look up if the complement already exists.

function twoSum1(nums, target) {
    let obj = {}; // acts as our hash map (key = number, value = index)

    for (let i = 0; i < nums.length; i++) {
        // Find the number needed to reach the target
        let complement = target - nums[i];

        // Check if complement already exists in our map
        if (obj.hasOwnProperty(complement)) {
            // If yes, we found the pair!
            return [obj[complement], i];
        }

        // Otherwise, store the current number with its index
        obj[nums[i]] = i;
    }

    return []; // No valid pair found
}

console.log(twoSum1([2, 7, 11, 15], 9)); // Output: [0, 1]


// Brute Force Approach (O(n^2))
// -----------------------------
// Check every possible pair until we find the one that sums up to target.

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) { // ✅ corrected condition
            if (nums[i] + nums[j] === target) {
                return [i, j]; // Return their indices
            }
        }
    }
    return []; // If no pair found
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]


