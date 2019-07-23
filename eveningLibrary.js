/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

let mixEvents = obj =>{
  // TODO: Your code here

  let events = {};

  obj.on = (event, callback) => {
    // register a callback to an event.
    if (!events[event]) {
      events[event] = [callback];
    } else {
      events[event].push(callback);
    }
  }

  obj.trigger = (...args) => {
    let event = args.slice(0,1)
    let arguments = args.slice(1)
    if (events[event]){
      events[event].forEach(cb => {
        cb.apply(null, arguments)
      })
    }
  }
  return obj;
  
};




//test examples
/*var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(age){ // On takes an event name and a callback function
   console.log('1st event', age)
});
obj.on('ageChange', function(num1, num2){console.log('2nd Event', num1 + num2)});

obj.age++;
obj.on('2Change', function(){console.log(2)})
obj.trigger('ageChange', 1, 2);  // hi 1 hello3 

