/*!
 * weeknumber
 * @author commenthol
 * @license Unlicense
 */

import assert from 'assert'
import {dayOfYear, weekNumber, weekNumberSun, weekNumberSat} from '..'

describe('dayOfYear', () => {
  it('should return a number', () => {
    assert.equal(typeof dayOfYear(), 'number')
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
    assert.equal(dayOfYear(new Date(2018, 2, 25)), 84)
    assert.equal(dayOfYear(new Date(2018, 2, 26)), 85)
  })
})

const dateToString = (date) => date.toString().substr(0, 15)

describe('weekNumber', () => {
  it('should return a number', () => {
    assert.equal(typeof weekNumber(), 'number')
  })
  ;[
    [new Date(2014, 11, 31), 1],
    [new Date(2015, 0, 1), 1],
    [new Date(2015, 0, 4), 1],
    [new Date(2015, 0, 5), 2], // Mon

    [new Date(2015, 11, 31), 53],
    [new Date(2016, 0, 1), 53],
    [new Date(2016, 0, 3), 53],
    [new Date(2016, 0, 4), 1], // Mon

    [new Date(2016, 11, 31), 52],
    [new Date(2017, 0, 1), 52],
    [new Date(2017, 0, 2), 1],

    [new Date(2017, 11, 31), 52],
    [new Date(2018, 0, 1), 1],
    [new Date(2018, 0, 7), 1],
    [new Date(2018, 0, 8), 2],

    [new Date(2018, 2, 25), 12],
    [new Date(2018, 2, 26), 13], // Mon

    [new Date(2018, 11, 30), 52],
    [new Date(2018, 11, 31), 1],
    [new Date(2019, 0, 1), 1]
  ].forEach(([date, week]) => {
    it(`${dateToString(date)} should return ${week}`, () => {
      const wn = weekNumber(date)
      // console.log('\t>w %s %s', wn, week)
      assert.equal(wn, week)
    })
  })
})

describe('weekNumberSun', () => {
  it('should return a number', () => {
    assert.equal(typeof weekNumberSun(), 'number')
  })
  ;[
    [new Date(2014, 11, 31), 52],
    [new Date(2015, 0, 3), 52],
    [new Date(2015, 0, 4), 1], // Sun
    [new Date(2015, 0, 11), 2],

    [new Date(2015, 11, 31), 52],
    [new Date(2016, 0, 2), 52],
    [new Date(2016, 0, 3), 1], // Sun

    [new Date(2016, 11, 31), 52],
    [new Date(2017, 0, 1), 1], // Sun

    [new Date(2017, 11, 31), 53], // Sun
    [new Date(2018, 0, 6), 53],
    [new Date(2018, 0, 7), 1], // Sun

    [new Date(2018, 2, 24), 11],
    [new Date(2018, 2, 25), 12], // Sun

    [new Date(2018, 11, 31), 52],
    [new Date(2019, 0, 5), 52],
    [new Date(2019, 0, 6), 1] // Sun
  ].forEach(([date, week]) => {
    it(`${dateToString(date)} should return ${week}`, () => {
      const wn = weekNumberSun(date)
      assert.equal(wn, week)
    })
  })
})

describe('weekNumberSat', () => {
  it('should return a number', () => {
    assert.equal(typeof weekNumberSat(), 'number')
  })
  ;[
    [new Date(2010, 11, 31), 52],
    [new Date(2011, 0, 1), 1], // Sat

    [new Date(2014, 11, 31), 52],
    [new Date(2015, 0, 2), 52],
    [new Date(2015, 0, 3), 1], // Sat
    [new Date(2015, 0, 10), 2], // Sat

    [new Date(2015, 11, 31), 52],
    [new Date(2016, 0, 1), 52],
    [new Date(2016, 0, 2), 1], // Sat

    [new Date(2016, 11, 31), 53],
    [new Date(2017, 0, 1), 53],
    [new Date(2017, 0, 6), 53],
    [new Date(2017, 0, 7), 1], // Sat

    [new Date(2017, 11, 31), 52],
    [new Date(2018, 0, 5), 52],
    [new Date(2018, 0, 6), 1], // Sat

    [new Date(2018, 2, 23, 23, 59, 59), 11],
    [new Date(2018, 2, 24), 12],
    [new Date(2018, 2, 25), 12], // Sun

    [new Date(2018, 11, 31), 52],
    [new Date(2019, 0, 4), 52],
    [new Date(2019, 0, 5), 1] // Sat
  ].forEach(([date, week]) => {
    it(`${dateToString(date)} should return ${week}`, () => {
      const wn = weekNumberSat(date)
      assert.equal(wn, week)
    })
  })
})
