//find Nth prime number

const nthPrime = n => {
  // if n === 1, return 2;
  // each time a prime number is found, count increment by 1
  // i = i + 2 to skip all even numbers.
  let count = 1;
  let i = 1;
  let result = null;
  while(count < n) {
    if(isPrime(i)) {
      result = i
      count++
    };
     i = i + 2;
  }

  return n === 1? 2 : result;
}



const isPrime = function(n) {
 
  if (n === 2) {return true}
  if (typeof n !== 'number' || n <= 1 || n % 1 !== 0 || n % 2 === 0) {
    // n isn't a number or n is less than 1 or n is not an integer or n is even number.
    return false;

  }
   //If a number n is not a prime, it can be factored into two factors:
   // ex: 6 = 2 * 3. Math.Min(2, 3) is less than/equal to Math.sqrt(6) = 2.449....
   //Hence if search till Math.sqrt(n), can find at least one factor of n, which is enough to show that n is not prime.
  for (let i = 3; i <= Math.sqrt(n); i++, i++) {  //i++, i++, to skip all even nums.
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

//test
//primes numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, etc.
nthPrime(3) //5