const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(parStr) {
  let retStr=''
  retOne=parStr[0] 
  kvo = 0
  for (let i=0; i<parStr.length; i++){
      if(retOne === parStr[i]){
        kvo =kvo+1      
      }
    else {
      retStr = retStr+ (kvo>1 ? kvo.toString(): '')+retOne 
      kvo=1
      retOne = parStr[i]      
    }
  }
    retStr = parStr.length == 0 ? '' : retStr+ (kvo>1 ? kvo.toString(): '')+retOne
    return retStr
}

module.exports = {
  encodeLine
};
