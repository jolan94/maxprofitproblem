function calculateMaxProfit(timeUnit, earnings) {
  let maxProfit = 0;
  let solutions = [];

  // Iterate through all possible combinations of properties
  for (let t = 0; t <= timeUnit; t += 5) {
    for (let p = 0; p <= timeUnit; p += 4) {
      for (let c = 0; c <= timeUnit; c += 10) {
        const totalTime = t + p + c;
        const totalEarnings = t / 5 * 1500 + p / 4 * 1000 + c / 10 * 3000;

        // Check if the combination is valid and maximizes earnings
        if (totalTime === timeUnit && totalEarnings === earnings) {
          const solution = `T: ${t / 5} P: ${p / 4} C: ${c / 10}`;
          solutions.push(solution);

          // Update the maximum profit
          if (totalEarnings > maxProfit) {
            maxProfit = totalEarnings;
          }
        }
      }
    }
  }

  return {
    maxProfit: maxProfit,
    solutions: solutions
  };
}

// Example usage
const timeUnit = 8;
const earnings = 4500;

const result = calculateMaxProfit(timeUnit, earnings);

console.log(`Max Profit: $${result.maxProfit}`);
console.log("Solutions:");
result.solutions.forEach(solution => console.log(solution));
