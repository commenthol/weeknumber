/*!
 * weeknumber
 * @author commenthol
 * @license Unlicense
 */

import assert from 'assert'
import {
  dayOfYear,
  weekNumber,
  weekNumberSun,
  weekNumberSat,
  weekNumberYear,
  weekNumberYearSun,
  weekNumberYearSat
} from '..'

describe('dayOfYear', () => {
  it('should return a number', () => {
    assert.strictEqual(typeof dayOfYear(), 'number')
  })
  it('should return 1 on Jan 1st 2018', () => {
    assert.strictEqual(dayOfYear(new Date(2018, 0, 1)), 1)
  })
  it('should return 365 on Dec 31st in non leap year 2017', () => {
    assert.strictEqual(dayOfYear(new Date(2017, 11, 31, 23, 59)), 365)
  })
  it('should return 366 on Dec 31st in leap year 2016', () => {
    assert.strictEqual(dayOfYear(new Date(2016, 11, 31, 23, 59)), 366)
  })
  it('should correct DST changes', function () {
    assert.strictEqual(dayOfYear(new Date(2018, 2, 25)), 84)
    assert.strictEqual(dayOfYear(new Date(2018, 2, 26)), 85)
  })
})

const dateToString = (date) => date.toString().substr(0, 15)

const fixturesIso = [
  [new Date(2008, 11, 29), { year: 2009, week: 1, day: 1 }],
  [new Date(2010, 0, 3), { year: 2009, week: 53, day: 7 }],

  [new Date(2014, 11, 31), { year: 2015, week: 1, day: 3 }],
  [new Date(2015, 0, 1), { year: 2015, week: 1, day: 4 }],
  [new Date(2015, 0, 4), { year: 2015, week: 1, day: 7 }],
  [new Date(2015, 0, 5), { year: 2015, week: 2, day: 1 }],

  [new Date(2015, 11, 31), { year: 2015, week: 53, day: 4 }],
  [new Date(2016, 0, 1), { year: 2015, week: 53, day: 5 }],
  [new Date(2016, 0, 3), { year: 2015, week: 53, day: 7 }],
  [new Date(2016, 0, 4), { year: 2016, week: 1, day: 1 }],

  [new Date(2016, 11, 31), { year: 2016, week: 52, day: 6 }],
  [new Date(2017, 0, 1), { year: 2016, week: 52, day: 7 }],
  [new Date(2017, 0, 2), { year: 2017, week: 1, day: 1 }],

  [new Date(2017, 11, 31), { year: 2017, week: 52, day: 7 }],
  [new Date(2018, 0, 1), { year: 2018, week: 1, day: 1 }],
  [new Date(2018, 0, 7), { year: 2018, week: 1, day: 7 }],
  [new Date(2018, 0, 8), { year: 2018, week: 2, day: 1 }],

  [new Date(2018, 2, 25), { year: 2018, week: 12, day: 7 }],
  [new Date(2018, 2, 26), { year: 2018, week: 13, day: 1 }],

  [new Date(2018, 11, 30), { year: 2018, week: 52, day: 7 }],
  [new Date(2018, 11, 31), { year: 2019, week: 1, day: 1 }],
  [new Date(2019, 0, 1), { year: 2019, week: 1, day: 2 }]
]

const fixturesSun = [
  [new Date(2014, 11, 31), { year: 2014, week: 52, day: 4 }],
  [new Date(2015, 0, 3), { year: 2014, week: 52, day: 7 }],
  [new Date(2015, 0, 4), { year: 2015, week: 1, day: 1 }],
  [new Date(2015, 0, 11), { year: 2015, week: 2, day: 1 }],

  [new Date(2015, 11, 31), { year: 2015, week: 52, day: 5 }],
  [new Date(2016, 0, 2), { year: 2015, week: 52, day: 7 }],
  [new Date(2016, 0, 3), { year: 2016, week: 1, day: 1 }],

  [new Date(2016, 11, 31), { year: 2016, week: 52, day: 7 }],
  [new Date(2017, 0, 1), { year: 2017, week: 1, day: 1 }],

  [new Date(2017, 11, 31), { year: 2017, week: 53, day: 1 }],
  [new Date(2018, 0, 6), { year: 2017, week: 53, day: 7 }],
  [new Date(2018, 0, 7), { year: 2018, week: 1, day: 1 }],

  [new Date(2018, 2, 24), { year: 2018, week: 11, day: 7 }],
  [new Date(2018, 2, 25), { year: 2018, week: 12, day: 1 }],

  [new Date(2018, 11, 31), { year: 2018, week: 52, day: 2 }],
  [new Date(2019, 0, 5), { year: 2018, week: 52, day: 7 }],
  [new Date(2019, 0, 6), { year: 2019, week: 1, day: 1 }]
]

const fixturesSat = [
  [new Date(2010, 11, 31), { year: 2010, week: 52, day: 7 }],
  [new Date(2011, 0, 1), { year: 2011, week: 1, day: 1 }],

  [new Date(2014, 11, 31), { year: 2014, week: 52, day: 5 }],
  [new Date(2015, 0, 2), { year: 2014, week: 52, day: 7 }],
  [new Date(2015, 0, 3), { year: 2015, week: 1, day: 1 }],
  [new Date(2015, 0, 10), { year: 2015, week: 2, day: 1 }],

  [new Date(2015, 11, 31), { year: 2015, week: 52, day: 6 }],
  [new Date(2016, 0, 1), { year: 2015, week: 52, day: 7 }],
  [new Date(2016, 0, 2), { year: 2016, week: 1, day: 1 }],

  [new Date(2016, 11, 31), { year: 2016, week: 53, day: 1 }],
  [new Date(2017, 0, 1), { year: 2016, week: 53, day: 2 }],
  [new Date(2017, 0, 6), { year: 2016, week: 53, day: 7 }],
  [new Date(2017, 0, 7), { year: 2017, week: 1, day: 1 }],

  [new Date(2017, 11, 31), { year: 2017, week: 52, day: 2 }],
  [new Date(2018, 0, 5), { year: 2017, week: 52, day: 7 }],
  [new Date(2018, 0, 6), { year: 2018, week: 1, day: 1 }],

  [new Date(2018, 2, 23), { year: 2018, week: 11, day: 7 }],
  [new Date(2018, 2, 24), { year: 2018, week: 12, day: 1 }],
  [new Date(2018, 2, 25), { year: 2018, week: 12, day: 2 }],

  [new Date(2018, 11, 31), { year: 2018, week: 52, day: 3 }],
  [new Date(2019, 0, 4), { year: 2018, week: 52, day: 7 }],
  [new Date(2019, 0, 5), { year: 2019, week: 1, day: 1 }]
]

describe('weekNumber', () => {
  it('should return a number', () => {
    assert.strictEqual(typeof weekNumber(), 'number')
  })
  fixturesIso.forEach(([date, { week }]) => {
    it(`${dateToString(date)} should return ${week}`, () => {
      const wn = weekNumber(date)
      assert.strictEqual(wn, week)
    })
  })
})

describe('weekNumberSun', () => {
  it('should return a number', () => {
    assert.strictEqual(typeof weekNumberSun(), 'number')
  })
  fixturesSun.forEach(([date, { week }]) => {
    it(`${dateToString(date)} should return ${week}`, () => {
      const wn = weekNumberSun(date)
      assert.strictEqual(wn, week)
    })
  })
})

describe('weekNumberSat', () => {
  it('should return a number', () => {
    assert.strictEqual(typeof weekNumberSat(), 'number')
  })
  fixturesSat.forEach(([date, { week }]) => {
    it(`${dateToString(date)} should return ${week}`, () => {
      const wn = weekNumberSat(date)
      assert.strictEqual(wn, week)
    })
  })
})

describe('weekNumberYear', () => {
  it('should return an object', () => {
    assert.strictEqual(typeof weekNumberYear(), 'object')
  })
  fixturesIso.forEach(([date, exp]) => {
    it(`${dateToString(date)} should return ${JSON.stringify(exp)}`, () => {
      const wn = weekNumberYear(date)
      assert.deepStrictEqual(wn, exp)
    })
  })
})

describe('weekNumberYearSun', () => {
  it('should return an object', () => {
    assert.strictEqual(typeof weekNumberYearSun(), 'object')
  })
  fixturesSun.forEach(([date, exp]) => {
    it(`${dateToString(date)} should return ${JSON.stringify(exp)}`, () => {
      const wn = weekNumberYearSun(date)
      assert.deepStrictEqual(wn, exp)
    })
  })
})

describe('weekNumberYearSat', () => {
  it('should return an object', () => {
    assert.strictEqual(typeof weekNumberYearSat(), 'object')
  })
  fixturesSat.forEach(([date, exp]) => {
    it(`${dateToString(date)} should return ${JSON.stringify(exp)}`, () => {
      const wn = weekNumberYearSat(date)
      assert.deepStrictEqual(wn, exp)
    })
  })
})
