const DAY = 86400000
const WEEK = 604800000 // = 7 * 24 * 60 * 60 * 1000 = 7 days in ms

/**
* Get day of year in Gregorian year
* @param {Date} [date] -
* @return {Number} number of day in year (1 ... 366)
* @example
* dayOfYear(new Date(2017, 11, 31))
* //> 365
* dayOfYear(new Date(2018, 0, 1))
* //> 1
*/
export const dayOfYear = (date = new Date()) => {
  const jan1st = new Date(date.getFullYear(), 0, 1)
  return Math.floor(1 + ((date - jan1st) / DAY)) // days 1 ... 366
}

/**
* ISO 8601 week numbering.
*
* New week starts on mondays.
* Used by most European countries, most of Asia and Oceania.
*
* 1st week contains 4-7 days of the new year
* @param {Date} [date] - date to calculate week number from
* @return {Number} week number in ISO 8601 format
* @example
* weekNumber(new Date(2016, 0, 3)) // Sun
* //> 53
* weekNumber(new Date(2016, 0, 4)) // Mon
* //> 1
*/
export const weekNumber = (date = new Date()) => {
  // day 0 is monday
  const day = (date.getDay() + 6) % 7
  // get thursday of present week
  const thursday = new Date(date)
  thursday.setDate(date.getDate() - day + 3)
  // set 1st january first
  const firstThursday = new Date(thursday.getFullYear(), 0, 1)
  // if Jan 1st is not a thursday...
  if (firstThursday.getDay() !== 4) {
    firstThursday.setMonth(0, 1 + (11 /* 4 + 7 */ - firstThursday.getDay()) % 7)
  }
  const weekNumber = 1 + Math.ceil((thursday - firstThursday) / WEEK)
  return weekNumber
}

/**
* North American and islamic system.
*
* New week starts on sundays.
* Used in Canada, United States, India, Japan, Taiwan, Hong Kong, Macau, Israel, South Africa, most of Latin America.
*
* 1st week contains 1-7 days of the new year
* @param {Date} [date] - date to calculate week number from
* @return {Number} week number
* @example
* weekNumberSun(new Date(2016, 0, 2)) // Sat
* //> 52
* weekNumberSun(new Date(2016, 0, 3)) // Sun
* //> 1
*/
export const weekNumberSun = (date = new Date()) => {
  // get sunday of present week
  const sunday = new Date(date)
  sunday.setDate(date.getDate() - date.getDay())
  // set 1st january first
  const firstSunday = new Date(sunday.getFullYear(), 0, 1)
  // if Jan 1st is not a sunday...
  if (firstSunday.getDay() !== 0) {
    firstSunday.setMonth(0, 1 + (7 - firstSunday.getDay()) % 7)
  }
  const weekNumber = 1 + Math.ceil((sunday - firstSunday) / WEEK)
  return weekNumber
}

/**
* Middle Eastern system.
*
* New week starts on saturdays.
* Used in most of the Middle East.
*
* 1st week contains 1-7 days of the new year
* @param {Date} [date] - date to calculate week number from
* @return {Number} week number
* @example
* weekNumberSat(new Date(2016, 0, 1)) // Fri
* //> 52
* weekNumberSat(new Date(2016, 0, 2)) // Sat
* //> 1
*/
export const weekNumberSat = (date = new Date()) => {
  // day 0 is saturday
  const day = (date.getDay() + 1) % 7
  // get saturday of present week
  const saturday = new Date(date)
  saturday.setDate(date.getDate() - day)
  // set 1st january first
  const firstSaturday = new Date(saturday.getFullYear(), 0, 1)
  // if Jan 1st is not a saturday...
  if (firstSaturday.getDay() !== 6) {
    firstSaturday.setMonth(0, 1 + (13 - firstSaturday.getDay()) % 7)
  }
  const weekNumber = 1 + Math.ceil((saturday - firstSaturday) / WEEK)
  return weekNumber
}
