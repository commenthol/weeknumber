/*!
 * weeknumber
 * @author commenthol
 * @license Unlicense
 */

const MINUTE = 60000
const DAY = 86400000
const WEEK = 604800000 // = 7 * 24 * 60 * 60 * 1000 = 7 days in ms

/**
 * Get the difference in milliseconds between the timezone offsets of 2 dates
 */
const tzDiff = (first, second) => (first.getTimezoneOffset() - second.getTimezoneOffset()) * MINUTE

/**
 * Get day of year in Gregorian year
 * @param {Date} [date] - local date
 * @return {Number} number of day in year (1 ... 366)
 * @example
 * dayOfYear(new Date(2017, 11, 31, 12))
 * //> 365
 * dayOfYear(new Date(2018, 0, 1, 12))
 * //> 1
 */
export const dayOfYear = (date = new Date()) => {
  const jan1st = new Date(date.getFullYear(), 0, 1)
  const _date = new Date(date)
  return Math.floor(1 + (_date - jan1st + tzDiff(jan1st, _date)) / DAY) // days 1 ... 366
}

/**
 * ISO 8601 week numbering.
 *
 * New week starts on mondays.
 * Used by most European countries, most of Asia and Oceania.
 *
 * 1st week contains 4-7 days of the new year
 * @param {Date} [date] - local date
 * @return {Number} week number in ISO 8601 format
 * @example
 * weekNumber(new Date(2016, 0, 3, 12)) // Sun
 * //> 53
 * weekNumber(new Date(2016, 0, 4, 12)) // Mon
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
  const weekNumber = 1 + Math.floor((thursday - firstThursday + tzDiff(firstThursday, thursday)) / WEEK)
  return weekNumber
}

/**
 * North American and islamic system.
 *
 * New week starts on sundays.
 * Used in Canada, United States, India, Japan, Taiwan, Hong Kong, Macau, Israel, South Africa, most of Latin America.
 *
 * 1st week contains 1-7 days of the new year
 * @param {Date} [date] - local date
 * @return {Number} week number
 * @example
 * weekNumberSun(new Date(2016, 0, 2, 12)) // Sat
 * //> 52
 * weekNumberSun(new Date(2016, 0, 3, 12)) // Sun
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
  const weekNumber = 1 + Math.floor((sunday - firstSunday + tzDiff(firstSunday, sunday)) / WEEK)
  return weekNumber
}

/**
 * Middle Eastern system.
 *
 * New week starts on saturdays.
 * Used in most of the Middle East.
 *
 * 1st week contains 1-7 days of the new year
 * @param {Date} [date] - local date
 * @return {Number} week number
 * @example
 * weekNumberSat(new Date(2016, 0, 1, 12)) // Fri
 * //> 52
 * weekNumberSat(new Date(2016, 0, 2, 12)) // Sat
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
  const weekNumber = 1 + Math.floor((saturday - firstSaturday + tzDiff(firstSaturday, saturday)) / WEEK)
  return weekNumber
}

/**
 * get year for a given date and week
 * @private
 */
const getYear = (date, week) => {
  let year = date.getFullYear()
  if (date.getMonth() === 11 && week === 1) year++
  if (date.getMonth() === 0 && week > 51) year--
  return year
}

/**
 * ISO 8601 calendar year, week, and day
 *
 * New week starts on mondays.
 * Used by most European countries, most of Asia and Oceania.
 *
 * 1st week contains 4-7 days of the new year
 * @param {Date} [date] - local date
 * @return {Object} {year, week, day} where day 1=Monday ... 7=Sunday
 * @example
 * weekNumberYear(new Date(2008, 11, 29, 12)) // Monday
 * //> { year: 2009, week: 1, day: 1 }
 * weekNumberYear(new Date(2010, 0, 3, 12)) // Sunday
 * //> { year: 2009, week: 53, day: 7 }
 */
export const weekNumberYear = date => {
  date = new Date(date)
  const week = weekNumber(date)
  const year = getYear(date, week)
  const day = date.getDay() || 7
  return { year, week, day }
}

/**
 * North American and islamic system calendar year, week, and day
 *
 * New week starts on sundays.
 * Used in Canada, United States, India, Japan, Taiwan, Hong Kong, Macau, Israel, South Africa, most of Latin America.
 *
 * 1st week contains 1-7 days of the new year
 * @param {Date} [date] - local date
 * @return {Object} {year, week, day} where day 1=Sunday ... 7=Saturday
 * @example
 * weekNumberYearSun(new Date(2009, 0, 3, 12)) // Saturday
 * //> { year: 2008, week: 52, day: 7 }
 * weekNumberYearSun(new Date(2009, 0, 4, 12)) // Sunday
 * //> { year: 2009, week: 1, day: 1 }
 */
export const weekNumberYearSun = date => {
  date = new Date(date)
  const week = weekNumberSun(date)
  const year = getYear(date, week)
  const day = (date.getDay() + 1) % 7 || 7
  return { year, week, day }
}

/**
 * Middle Eastern system calendar year, week, and day
 *
 * New week starts on saturdays.
 * Used in most of the Middle East.
 *
 * 1st week contains 1-7 days of the new year
 * @param {Date} [date] - local date
 * @return {Object} {year, week, day} where day 1=Saturday ... 7=Friday
 * @example
 * weekNumberYearSat(new Date(2009, 0, 2, 12)) // Friday
 * //> { year: 2008, week: 52, day: 7 }
 * weekNumberYearSat(new Date(2009, 0, 3, 12)) // Saturday
 * //> { year: 2009, week: 1, day: 1 }
 */
export const weekNumberYearSat = date => {
  date = new Date(date)
  const week = weekNumberSat(date)
  const year = getYear(date, week)
  const day = (date.getDay() + 2) % 7 || 7
  return { year, week, day }
}
