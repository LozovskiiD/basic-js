const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(parDate) {
 
  let nDate= parDate
  retSeason = 'Unable to determine the time of year!'
  retMonth = parDate.getMonth()+1
  if (retMonth>=2 && retMonth <=4) {
    retSeason = 'spring'
  }
  if (retMonth>=5 && retMonth <=7) {
    retSeason = 'summer'
  }
  if (retMonth>=8 && retMonth <=10) {
    retSeason = 'autumn (fall)'
  }
  if (retMonth == 11 || retMonth == 0 || retMonth == 0) {
    retSeason = 'autumn (winter)'
  }
  

  return retSeason

}

module.exports = {
  getSeason
};
