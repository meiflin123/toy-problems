var minRemoveToMakeValid = function(s) {
    // if s[i] is '(', push i to the stack array
    // if s[i] is ')', 
       //if stack array is empty, record index to del Set.
       //else pop off last item from stack. -  one pair matched.
  //after the loop, if stack is not empty, add items to del Set
  //iterate the s again, only item not in delSet stays.
  
  
  var del = new Set();
  var stack = [];
  var result = [];
  
  for (let i = 0; i < s.length; i++){
    if(s[i] === '(') {
      stack.push(i)
    } 
    if(s[i] === ')') {
      if(stack.length === 0) {
        del.add(i);
      } else {
        stack.pop()
      }
    }
  }
  
  stack.forEach(item => del.add(item));
  
  for (let i = 0; i < s.length; i++){
    if(!del.has(i)) {
      result.push(s[i])
    }
  
  }
  return result.join('')

};