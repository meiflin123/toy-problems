/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var t = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // return my value as english words
  // slice number by three digits, add remaining none 3 digits. 
  // set variable words = [];
  // for Each three digits string, 
    // build english words:
      // get hundred: NumberToWords[str[0]] + numbersToPlace[str[1]]
      // get decades: if < 21, numbersToWords[str], else. numbersToWords[str[0]] + last digit
      // push to words array
      // get more than hundreds: if i > 0, push numbersToPlace[i] to word array.
  // join words array to result
  // return result

  if (num === 0) { return 'Zero'}
  var number = this.toString();
  var threeDigits = [];
  var len = number.length
  var result = []
  var place = '1'
  
  while (len > 0) {
    threeDigits.push(number.slice(len - 3 > 0? len -3 : 0, len));
    len -=3
  }
  
  for (var i = 0; i < threeDigits.length; i ++) {

    var str = threeDigits[i]
    var word = [];
    var hundred;
    var decade;
    var singles;
    
    if(i > 0) {
      place+= '000';
    }
      

    if (str.length === 3) {
      if (str[0] !== '0') { 
        hundred =  numbersToWords[str[0]] + ' ' + 'hundred';
        word.push(hundred);
    
      }
      str = str.slice(1);   //slice off 1st number
    }
      
    
    if (+str) {      //if remaining str is not 0
        if (str < 21) {  // if less than 21, add to word
          decade = numbersToWords[+str]
          word.push(decade);    
        } else {
          decade = numbersToWords[str[0] + '0'] ;  // if larger than 21, add decade
          word.push(decade)
            if (+str[1]) { // and if single is not 0, add single
               singles = numbersToWords[str[1]];
               word[word.length-1] = word[word.length-1] + '-' + singles
            }
         } 
     }
          
      
      
    if (word.length !==0) {
       // add thousdands or above.
        if(i > 0) {
         word.push(t[place]);
        }
        
        result.unshift(word.join(' '))
    }    
  }
  return result.join(' ');
};


