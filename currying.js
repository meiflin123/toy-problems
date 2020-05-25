function f(num1){
    if(!num1) {
      return 0
    }
    let num = num1;
  
    if(arguments.length >= 2) {
      return arguments[0] + arguments[1]
    }
     
    return (num2) => {
      num += num2
      return (num3) =>{
        return num*num3
      }
    }
  }
  
  
  
  console.log(f(1)(2)(3));  //9
  console.log(f(2)(2)(1)); //4
  console.log(f(2, 2, 1)); //4
  console.log(f()); //0
  