let prices = [7, 1, 5, 3, 6, 4];

// This function takes an array of stock prices and returns the maximum profit that can be made by buying and selling the stock
function maxProfit(prices) {
  // Initialize the current minimum profit to the first price in the array
  let curMinProfit = prices[0];
  // Initialize the current maximum profit to 0
  let curMaxProfit = 0;
  // Loop through the array of prices starting from the second element
  for (let i = 1; i < prices.length; i++) {
    // Calculate the profit by subtracting the current minimum profit from the current price
    let profit = prices[i] - curMinProfit;
    // Update the current minimum profit to the minimum of the current minimum profit and the current price
    curMinProfit = Math.min(curMinProfit, prices[i]);
    // Update the current maximum profit to the maximum of the current maximum profit and the current profit
    curMaxProfit = Math.max(curMaxProfit, profit);
  }
  // Return the current maximum profit
  return curMaxProfit;
}

console.log(maxProfit(prices));
