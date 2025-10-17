/* Brute Force  */
let prices = [10, 8, 7, 5, 2];

function maxProfit(prices) {
    // Variable to store the maximum profit found
    let maxProfit = 0;

    // Outer loop → choose buying day
    for (let i = 0; i < prices.length; i++) {

        // Inner loop → choose selling day after buying day
        for (let j = i + 1; j < prices.length; j++) {

            // Calculate potential profit
            let profit = prices[j] - prices[i];

            // Update maxProfit if current profit is greater
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    console.log("Max Profit (Brute Force):", maxProfit);
    return maxProfit;
}

maxProfit(prices);

/* Silding Window - Modification of two pointers */
function maxProfit(prices) {
    let maxProfit = 0;

    // left → buying day pointer
    // right → selling day pointer
    let left = 0, right = 1;

    // Move the right pointer across the array
    while (right < prices.length) {

        // If we find a profitable situation
        if (prices[left] < prices[right]) {

            // Calculate profit and update maxProfit
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);

        } else {
            // If current price is lower than buy price,
            // move the left pointer to right
            // (buy at this new lower price)
            left = right;
        }

        // Move right pointer to explore next day
        right++;
    }

    console.log("Max Profit (Optimized):", maxProfit);
    return maxProfit;
}

maxProfit(prices);
