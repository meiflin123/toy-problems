//Write a function called deepClone which takes an object and creates a object copy of it.


var personalDetail = {
  name : 'Nishant',
  address : {
    location: 'xyz',
    zip : '123456',
    phoneNumber : {
      homePhone: 8797912345,
      workPhone : 1234509876
    }
  }
}


var newObject = deepClone(obj);

function deepClone (obj) {
    var newObj = {};

    for (var key in obj) {
        if(typeof obj[key] == 'object' && obj[key] !== null ){
            newObj[key] = deepClone(obj[key]);

        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

