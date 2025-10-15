/**
 * Problem: Container With Most Water
 * -----------------------------------
 * You are given an array 'height' where each value represents
 * the height of a vertical line drawn at that position.
 *
 * We need to find two lines that together with the x-axis
 * form a container that can store the maximum amount of water.
 *
 * Key Idea:
 * - The container’s area depends on:
 *     height = min(height[left], height[right])
 *     width = right - left
 *     area = height * width
 *
 * Approach: Two Pointer Technique (O(n) Time)
 * -------------------------------------------
 * 1. Start with two pointers at both ends of the array.
 * 2. Compute the current area formed by those two lines.
 * 3. Move the pointer that points to the *shorter line* inward,
 *    since the smaller height is the limiting factor.
 * 4. Keep track of the maximum area seen so far.
 * 5. Repeat until the two pointers meet.
 */

var maxArea = function (height) {

    // Step 1️⃣: Initialize two pointers at both ends
    let left = 0;                        // Start pointer
    let right = height.length - 1;       // End pointer
    let res = 0;                         // Variable to store max area

    // Step 2️⃣: Continue until pointers meet
    while (left < right) {

        // Step 3️⃣: Calculate the current area
        const width = right - left;                           // Distance between the two lines
        const h = Math.min(height[left], height[right]);      // Height is limited by the shorter line
        const area = width * h;                               // Area of the container

        // Step 4️⃣: Update max area if current one is larger
        res = Math.max(res, area);

        // Step 5️⃣: Move the pointer at the smaller height inward
        // Because moving the taller line won't help — width decreases and height stays limited
        if (height[left] <= height[right]) {
            left++;  // Move left pointer forward to find a possibly taller line
        } else {
            right--; // Move right pointer backward to find a possibly taller line
        }
    }

    // Step 6️⃣: Return the largest area found
    return res;
};
