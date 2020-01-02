/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

let nthFibonacci = N => {
  // solution1: recursive.
  //Time complexity: O(2^n) since T(n) = T(n-1) + T(n-2)is an exponential time
  //Space complexity: O(n) - space for recursive function call stack
  if (N <= 1) {
    return N
  } else {
    return nthFibonacci(N-1) + nthFibonacci(N-2)
  }
};

let nthFib = N => {
  // solution2: iterative
  //Time complexity: O(n)
  //Space complexity: O(1)
  //key: iterate from 1 to N-1 because first fib at index 0, so to get Nth fib, i should be N - 1.
   if (N <= 1) {
    return N
  } 
  
  let a = 0;
  let b = 1;
  for (let i = 1 ; i < N; i++) {
    let temp = a + b;
    a = b;
    b = temp
  }
  return b
};


// similar to climbStairs case on leetcode.
let climbStairs = n =>{
  //bottom up solution. dynmaic programming.
   if (n <= 1) {
    return 1
  } 
  let a = 1;
  let b = 1;
  for (let i = 2 ; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp
  }
  return b
};

//let's add one more condition, you may only climb 1, 3, or 5 steps at a time. X = {1, 3, 5}
// logic: numofways(n) = numofways(n-1) + numofways(n-3) + numofways(n-5)
//not efficient.
let X = [1, 3, 5]
let climbStairs = n => {
  if (n <= 1) {
    return 1;
  }
  total = 0;
  for (let j of X) {
    // only when #steps - option >= 0 makes sense. 
    if((n - j) >= 0) { total += climbStairs(n - j)}
  }
  return total;
}

//bottomup solution
let climbStairsBottomUp = n => {
  if(n <= 1) { return 1;}
  let nums =[];
  
  nums[0] = 1;

  for(let i = 1; i <= n; i++) {
    //from steps = 2 goes up. each n will have up to 3 options 1, 3, 5 steps.
    let total = 0;
    for(let j of X) {
      if((i - j) >= 0) {
        total += nums[i - j]
      }
    }
    nums[i] = total;
  }
  return nums[n]
}
