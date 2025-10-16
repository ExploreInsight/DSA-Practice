/**
 * Two Sum II - Using Two Pointers
 * --------------------------------
 * Problem:
 *  - Given a sorted array of integers `numbers`
 *  - Find two numbers such that they add up to a specific target number
 *  - Return their indices (1-based)
 * 
 * Approach:
 *  - Since the array is sorted, we can use the two-pointer technique.
 *  - Start with one pointer at the beginning (`left`)
 *    and one at the end (`right`).
 *  - Calculate the sum:
 *      → If sum == target → return the indices (1-based)
 *      → If sum < target → move `left` forward (to increase sum)
 *      → If sum > target → move `right` backward (to decrease sum)
 *  - Continue until pointers meet.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function twoSum(numbers, target) {
    let left = 0;                        // start pointer
    let right = numbers.length - 1;      // end pointer

    // Loop until the two pointers meet
    while (left < right) {
        const sum = numbers[left] + numbers[right]; // current pair sum

        if (sum === target) {
            //  Found the pair; return 1-based indices as required
            return [left + 1, right + 1];
        } else if (sum < target) {
            //  Need a bigger sum → move left pointer to the right
            left++;
        } else {
            //  Need a smaller sum → move right pointer to the left
            right--;
        }
    }

    // No valid pair found
    return [];
}

// Example:
console.log(twoSum([1, 2, 3, 4], 3)); // Output: [1, 2]
