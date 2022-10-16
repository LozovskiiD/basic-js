const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(parNum) {
  let newNum = ''
  let array = (""+parNum).split("").map(Number)
  if (array[array.length-1] == 0) {
     array.pop()   
  console.log(array[array.length-1])  
  }
  console.log(array)
  for (let i=0; i<array.length; i++) {
    if(array[i]<array[i+1]) {
      
    }else {
      newNum=newNum+array[i].toString()
    }
      
  }
  return parseInt(newNum)
}

module.exports = {
  deleteDigit
};
