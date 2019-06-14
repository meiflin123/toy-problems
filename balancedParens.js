/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
let balancedParens = input => {
  // criteria: 1. opening tags are closed in reverse orders. -- stack
  //           2. each opening tag has a closing tag.
  // create hash table of pairs
  // iterate input, 
    //if it's open tag, push to  stack.
    //if closing tag, pop off the last item from stack and check if they are a pair.
      // if not, return false
  // check remaining open tags.
  
  let stack = [];
  let pairs = {'{': '}', '[': ']', '(':')'};
  let parens = ['}', ')', ']']

  for (let item of input) {
    if (pairs[item]) {
      stack.push(item)
    } else if (parens.includes(item)){
      let lastOpening = stack.pop();
      if (pairs[lastOpening] !== item) {
        return false;
      }

    }
  }
  return stack.length === 0? true: false
};

