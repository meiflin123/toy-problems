/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(fn, context) {
  var bindArg = Array.prototype.slice.call(arguments, 2)
  var bind = (fn, context, ...args) =>  {
  var bindArg = args
  return function() {
    var callArgs = [...arguments]
    var allArgs = bindArg.concat(callArgs);
    return fn.apply(context, allArgs)
  }
};

//ES6 Arrow functions don't have this since the arguments array-like object was a workaround to begin with, which ES6 has solved with a rest parameter:
const binds = (fn, context, ...args) =>  {
  const bindArg = args
  
  return (...args) => {
    const callArgs = args
    const allArgs = bindArg.concat(callArgs);
    return fn.apply(context, allArgs)
  }
};
/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(context) {
  var fn = this;
  var bindArg = Array.prototype.slice.call(arguments, 1);
  return function() {
    var callArgs = [...arguments];
    var allArgs = bindArg.concat(callArgs);
    return fn.apply(context, allArgs);
  }
};
