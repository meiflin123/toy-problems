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
  // solution1: iterative
  //Time complexity: O(n)
  //Space complexity: O(1)
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




