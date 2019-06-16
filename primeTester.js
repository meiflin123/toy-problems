/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  // assume n is 6, 6 = 2 * 3. 2 is always less than Math.sqrt(6)
  if (n === 2) {return true}
  if (typeof n !== 'number' || n <= 1 || n % 1 !== 0 || n % 2 === 0) {
    // n isn't a number or n is less than 1 or n is not an integer or n is even number.
    return false;

  }
  for (let i = 3; i <= Math.sqrt(n); i++, i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};


/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

let primeSieve = function (start, end) {
  // from start to end, pass it to primeTester.
  // if a number is prime, any multiples of n is not prime. 
  // any multiples of n should not greater then end.
  let hashTable = {};
  //let count = 0;
  for (let i = start; i <end +1; i++) {
    if (!hashTable.hasOwnProperty(i)) {
      //count++
      if (primeTester(i) === true) {
         hashTable[i] = true;
        for (let j = 2; j * i < end; j++) {
         hashTable[j *i] = false;
        }
      }
    }
  }
  let primes=[];
  for (let key in hashTable) {
    if (hashTable[key]) {primes.push(key)}
  }
  //console.log(count, primes.length)
 return primes;
};
console.log(primeSieve(2, 101)) // total 26 primes, with count = 26.
