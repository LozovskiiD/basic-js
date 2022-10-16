const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

 /* let newString = ''
  let strSep=''
  for (let i=1; i<=options.additionRepeatTimes; i++ ) {
    strSep=strSep+ options.addition + (i<options.additionRepeatTimes ? options.additionSeparator : '')
    
  }
  console.log( strSep)
  for (let i=1; i<=options.repeatTimes; i++ ) {
    newString=newString+str+ strSep + (i<options.repeatTimes ? options.separator : '')
    
  } 
  
  return newString*/

  let newString = ''
  let strSep=options.separator == undefined ? '+':''
  for (let i=1; i<=options.additionRepeatTimes; i++ ) {
    strSep=strSep+ options.addition + (i<options.additionRepeatTimes ? options.additionSeparator : '')
    
  }
  console.log( strSep)
  for (let i=1; i<=options.repeatTimes; i++ ) {
    newString=newString+str+ strSep + (i<options.repeatTimes ? (options.separator == undefined ? '' :options.separator) : '')
    
  } 
  if (newString[newString.length-1] == '+') {
    console.log(newString[newString.length-1])
    newString = newString.substring(0,newString.length-1)
  }
  
  return newString

  
}

module.exports = {
  repeater
};
