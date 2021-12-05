// This is the key core of pairs two object contain key and value between two objects
function resultCombined(){
  // Looping key in const obj1, obj2, obj3
  for (let key in obj1 && obj2 && object3) {
    // if match key of two object between obj1 and obj2
    if (obj1.hasOwnProperty(key) === obj2.hasOwnProperty(key)) {
      // result is equal in addition obj1 and obj2
      result[key] = obj1[key] + obj2[key];
    } else{
      // else not match, result key is object not match between two object 
      result[key] = object3[key] ;
    }
  }
  return result;
}
const obj1 = {a: 10,b: 20,c: 30};
const obj2 = {a: 3 ,c: 6 ,d: 3};
const object3 = {...obj1, ...obj2}; 
const result = {};

console.log(resultCombined(result));
