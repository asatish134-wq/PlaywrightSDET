// Test results array
const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass", "skip", "pass"];

// Initialize counters
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Count test results using for loop
for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "pass") {
    passCount++;
  } else if (testResults[i] === "fail") {
    failCount++;
  } else if (testResults[i] === "skip") {
    skipCount++;
  }
}

// Calculate totals and pass rate
const totalTests = testResults.length;
const passRate = ((passCount / (totalTests - skipCount)) * 100).toFixed(2);

// Determine verdict
let verdict;
if (failCount === 0) {
  verdict = "✓ Ready for release";
} else if (failCount <= 2) {
  verdict = "⚠ Review required";
} else {
  verdict = "✗ Block release";
}

// Print test report
console.log("=== TEST REPORT ===");
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Skipped: ${skipCount}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Verdict: ${verdict}`);
console.log("===================");