Array.prototype.myReduce = function(fn, init) {
    let v = 0;
  
    if(typeof init === 'undefined') {
      v = 1;
      init = this[0];
    } 
  
    let current = init;
   
    for (let i = v; i < this.length; i++) {
    
      current = fn(this[i], current)
    }
    return current
  }
  
  
console.log(['1', '2', '3'].myReduce((c, v) => c + v))
console.log([1, 2, 3].myReduce((c, v) => c + v, 1))
