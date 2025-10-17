var maxSubArray = function (nums) {
    let maxSum = nums[0]; // keep track of the maximum subarray sum so far
    let curSum = 0;       // current window sum

    for (let i = 0; i < nums.length; i++) {

        // If current sum drops below 0, we discard it and start fresh
        if (curSum < 0) {
            curSum = 0;
        }

        // Expand the window by adding current element
        curSum += nums[i];

        // Update maxSum if current sum is greater
        maxSum = Math.max(curSum, maxSum)
    }

    return maxSum;
};
