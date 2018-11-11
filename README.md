# weeknumber

[![NPM version](https://badge.fury.io/js/weeknumber.svg)](https://www.npmjs.com/package/weeknumber/)
[![build status](https://secure.travis-ci.org/commenthol/weeknumber.svg)](http://travis-ci.org/commenthol/weeknumber)

> week number systems for Gregorian year according to [ISO-8601][] or starting on sundays, saturdays

- [API](#api)
	- [dayOfYear](#dayofyear)
	- [weekNumber](#weeknumber-1) - ISO 8601 week numbers
	- [weekNumberSun](#weeknumbersun) - week starting on Sundays
	- [weekNumberSat](#weeknumbersat) - week starting on Saturdays
	- [weekNumberYear](#weeknumberyear) - ISO 8601 calendar year, week, and day
	- [weekNumberYearSun](#weeknumberyearsun) - calendar year, week, and day starting on Sundays
	- [weekNumberYearSat](#weeknumberyearsat) - calendar year, week, and day starting on Saturdays
- [Installation](#installation)
- [Tests](#tests)
- [License](#license)

## API

### dayOfYear

Get day of year in Gregorian year

**Parameters**

| parameter | type | description |
| --------- | ---- | ----------- |
| `[date]`  | Date | _optional:_ local date |

**Example**

```js
dayOfYear(new Date(2017, 11, 31, 12))
//> 365
dayOfYear(new Date(2018, 0, 1, 12))
//> 1
```

**Returns** `Number`, number of day in year (1 ... 366)

### weekNumber

[ISO-8601][] week numbering.

New week starts on Mondays.
Used by most European countries, most of Asia and Oceania.

1st week contains 4-7 days of the new year.

**Parameters**

| parameter | type | description |
| --------- | ---- | ----------- |
| `[date]`  | Date | _optional:_ local date |

**Example**

```js
weekNumber(new Date(2016, 0, 3, 12)) // Sun
//> 53
weekNumber(new Date(2016, 0, 4, 12)) // Mon
//> 1
```

**Returns** `Number`, week number in ISO 8601 format

### weekNumberSun

North American and Islamic system.

New week starts on Sundays.
Used in Canada, United States, India, Japan, Taiwan, Hong Kong, Macau, Israel, South Africa, most of Latin America.

1st week contains 1-7 days of the new year

**Parameters**

| parameter | type | description |
| --------- | ---- | ----------- |
| `[date]`  | Date | _optional:_ local date |

**Example**

```js
weekNumberSun(new Date(2016, 0, 2, 12)) // Sat
//> 52
weekNumberSun(new Date(2016, 0, 3, 12)) // Sun
//> 1
```

**Returns** `Number`, week number

### weekNumberSat

Middle Eastern system.

New week starts on Saturdays.
Used in most of the Middle East.

1st week contains 1-7 days of the new year

**Parameters**

| parameter | type | description |
| --------- | ---- | ----------- |
| `[date]`  | Date | _optional:_ local date |

**Example**

```js
weekNumberSat(new Date(2016, 0, 1, 12)) // Fri
//> 52
weekNumberSat(new Date(2016, 0, 2, 12)) // Sat
//> 1
```

**Returns** `Number`, week number

### weekNumberYear

[ISO-8601] calendar year, week, and day

New week starts on Mondays.
Used by most European countries, most of Asia and Oceania.

1st week contains 4-7 days of the new year.

**Parameters**

| parameter | type | description |
| --------- | ---- | ----------- |
| `[date]`  | Date | _optional:_ local date |

**Example**

```js
weekNumberYear(new Date(2008, 11, 29, 12)) // Monday
//> { year: 2009, week: 1, day: 1 }
weekNumberYear(new Date(2010, 0, 3, 12)) // Sunday
//> { year: 2009, week: 53, day: 7 }
```

**Returns** `Object`, `{year, week, day}` where day 1=Monday ... 7=Sunday


### weekNumberYearSun

North American and Islamic system calendar year, week, and day

New week starts on Sundays.
Used in Canada, United States, India, Japan, Taiwan, Hong Kong, Macau, Israel, South Africa, most of Latin America.

1st week contains 1-7 days of the new year

**Parameters**

| parameter | type | description |
| --------- | ---- | ----------- |
| `[date]`  | Date | _optional:_ local date |

**Example**

```js
weekNumberYearSun(new Date(2009, 0, 3, 12)) // Saturday
//> { year: 2008, week: 52, day: 7 }
weekNumberYearSun(new Date(2009, 0, 4, 12)) // Sunday
//> { year: 2009, week: 1, day: 1 }
```

**Returns** `Object`, `{year, week, day}` where day 1=Sunday ... 7=Saturday


### weekNumberYearSat

Middle Eastern system calendar year, week, and day

New week starts on Saturdays.
Used in most of the Middle East.

1st week contains 1-7 days of the new year

**Parameters**

| parameter | type | description |
| --------- | ---- | ----------- |
| `[date]`  | Date | _optional:_ local date |

**Example**

```js
weekNumberYearSat(new Date(2009, 0, 2, 12)) // Friday
//> { year: 2008, week: 52, day: 7 }
weekNumberYearSat(new Date(2009, 0, 3, 12)) // Saturday
//> { year: 2009, week: 1, day: 1 }
```

**Returns** `Object`, `{year, week, day}` where day 1=Saturday ... 7=Friday

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install weeknumber
```

## Tests

```sh
$ npm test
$ npm run coverage
```

## License

Unlicense <https://unlicense.org/>

[ISO-8601]: https://en.wikipedia.org/wiki/ISO_8601
