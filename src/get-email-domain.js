const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(parEmail) {
  let retStr =parEmail 
  while (retStr.indexOf('@')>=0){
    retStr= retStr.substring(retStr.indexOf('@')+1)
    console.log(retStr)
  }  
  return retStr 
  }

module.exports = {
  getEmailDomain
};
