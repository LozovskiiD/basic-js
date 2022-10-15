const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let retArr =[]
  let numSupl=0
let arrSupl = arr.filter(it => it>0)
  arrSupl.sort((a,b) => a-b)  
  for (let i=0; i<arr.length; i++) {
      if (arr[i] == -1) {
        retArr.push(arr[i])
      } else {
        retArr.push(arrSupl[numSupl])
        numSupl =numSupl+1
      }
  }
  return retArr
}

module.exports = {
  sortByHeight
};
