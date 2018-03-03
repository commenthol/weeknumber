# weeknumber

[![NPM version](https://badge.fury.io/js/weeknumber.svg)](https://www.npmjs.com/package/weeknumber/)
[![build status](https://secure.travis-ci.org/commenthol/weeknumber.png)](http://travis-ci.org/commenthol/weeknumber)

> week number systems for Gregorian year according to [ISO-8601][] or starting on sundays, saturdays

- [API](#api)
	- [dayOfYear](#dayofyear)
	- [weekNumber](#weeknumber-1) - ISO 8601 week numbers
	- [weekNumberSun](#weeknumbersun) - week starting on sundays
	- [weekNumberSat](#weeknumbersat) - week starting on saturdays
- [Installation](#installation)
- [Tests](#tests)
- [License](#license)

## API

### dayOfYear

Get day of year in Gregorian year

**Parameters**

| parameter | type | description    |
| --------- | ---- | -------------- |
| `[date]`  | Date | _optional:_ |

**Example**

```js
dayOfYear(new Date(2017, 11, 31))
//> 365
dayOfYear(new Date(2018, 0, 1))
//> 1
```

**Returns** `Number`, number of day in year (1 ... 366)

### weekNumber

[ISO-8601][] week numbering.

New week starts on mondays.
Used by most European countries, most of Asia and Oceania.

1st week contains 4-7 days of the new year.

**Parameters**

| parameter | type | description                                      |
| --------- | ---- | ------------------------------------------------ |
| `[date]`  | Date | _optional:_ date to calculate week number from   |

**Example**

```js
weekNumber(new Date(2016, 0, 3)) // Sun
//> 53
weekNumber(new Date(2016, 0, 4)) // Mon
//> 1
```

**Returns** `Number`, week number in ISO 8601 format

### weekNumberSun

North American and Islamic system.

New week starts on sundays.
Used in Canada, United States, India, Japan, Taiwan, Hong Kong, Macau, Israel, South Africa, most of Latin America.

1st week contains 1-7 days of the new year

**Parameters**

| parameter | type | description                                      |
| --------- | ---- | ------------------------------------------------ |
| `[date]`  | Date | _optional:_ date to calculate week number from   |

**Example**

```js
weekNumberSun(new Date(2016, 0, 2)) // Sat
//> 52
weekNumberSun(new Date(2016, 0, 3)) // Sun
//> 1
```

**Returns** `Number`, week number

### weekNumberSat

Middle Eastern system.

New week starts on saturdays.
Used in most of the Middle East.

1st week contains 1-7 days of the new year

**Parameters**

| parameter | type | description                                      |
| --------- | ---- | ------------------------------------------------ |
| `[date]`  | Date | _optional:_ date to calculate week number from   |

**Example**

```js
weekNumberSat(new Date(2016, 0, 1)) // Fri
//> 52
weekNumberSat(new Date(2016, 0, 2)) // Sat
//> 1
```

**Returns** `Number`, week number

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
