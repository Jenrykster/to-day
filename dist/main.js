/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/sweetalert2/src/SweetAlert.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/SweetAlert.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _staticMethods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticMethods.js */ "./node_modules/sweetalert2/src/staticMethods.js");
/* harmony import */ var _instanceMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceMethods.js */ "./node_modules/sweetalert2/src/instanceMethods.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





let currentInstance

class SweetAlert {
  constructor (...args) {
    // Prevent run in Node env
    if (typeof window === 'undefined') {
      return
    }

    currentInstance = this

    const outerParams = Object.freeze(this.constructor.argsToParams(args))

    Object.defineProperties(this, {
      params: {
        value: outerParams,
        writable: false,
        enumerable: true,
        configurable: true
      }
    })

    const promise = this._main(this.params)
    _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].promise.set(this, promise)
  }

  // `catch` cannot be the name of a module export, so we define our thenable methods here instead
  then (onFulfilled) {
    const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].promise.get(this)
    return promise.then(onFulfilled)
  }

  finally (onFinally) {
    const promise = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].promise.get(this)
    return promise.finally(onFinally)
  }
}

// Assign instance methods from src/instanceMethods/*.js to prototype
Object.assign(SweetAlert.prototype, _instanceMethods_js__WEBPACK_IMPORTED_MODULE_2__)

// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, _staticMethods_js__WEBPACK_IMPORTED_MODULE_1__)

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(_instanceMethods_js__WEBPACK_IMPORTED_MODULE_2__).forEach(key => {
  SweetAlert[key] = function (...args) {
    if (currentInstance) {
      return currentInstance[key](...args)
    }
  }
})

SweetAlert.DismissReason = _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_0__.DismissReason

SweetAlert.version = '11.1.7'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SweetAlert);


/***/ }),

/***/ "./node_modules/sweetalert2/src/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/sweetalert2/src/constants.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESTORE_FOCUS_TIMEOUT": () => (/* binding */ RESTORE_FOCUS_TIMEOUT)
/* harmony export */ });
const RESTORE_FOCUS_TIMEOUT = 100


/***/ }),

/***/ "./node_modules/sweetalert2/src/globalState.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/globalState.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "restoreActiveElement": () => (/* binding */ restoreActiveElement)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/sweetalert2/src/constants.js");


const globalState = {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalState);

const focusPreviousActiveElement = () => {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus()
    globalState.previousActiveElement = null
  } else if (document.body) {
    document.body.focus()
  }
}

// Restore previous active (focused) element
const restoreActiveElement = (returnFocus) => {
  return new Promise(resolve => {
    if (!returnFocus) {
      return resolve()
    }
    const x = window.scrollX
    const y = window.scrollY

    globalState.restoreFocusTimeout = setTimeout(() => {
      focusPreviousActiveElement()
      resolve()
    }, _constants_js__WEBPACK_IMPORTED_MODULE_0__.RESTORE_FOCUS_TIMEOUT) // issues/900

    window.scrollTo(x, y)
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableLoading": () => (/* reexport safe */ _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__.disableLoading),
/* harmony export */   "hideLoading": () => (/* reexport safe */ _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__.hideLoading),
/* harmony export */   "getInput": () => (/* reexport safe */ _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__.getInput),
/* harmony export */   "close": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.close),
/* harmony export */   "closeModal": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.closeModal),
/* harmony export */   "closePopup": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.closePopup),
/* harmony export */   "closeToast": () => (/* reexport safe */ _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__.closeToast),
/* harmony export */   "disableButtons": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.disableButtons),
/* harmony export */   "disableInput": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.disableInput),
/* harmony export */   "enableButtons": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.enableButtons),
/* harmony export */   "enableInput": () => (/* reexport safe */ _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__.enableInput),
/* harmony export */   "resetValidationMessage": () => (/* reexport safe */ _instanceMethods_validation_message_js__WEBPACK_IMPORTED_MODULE_4__.resetValidationMessage),
/* harmony export */   "showValidationMessage": () => (/* reexport safe */ _instanceMethods_validation_message_js__WEBPACK_IMPORTED_MODULE_4__.showValidationMessage),
/* harmony export */   "getProgressSteps": () => (/* reexport safe */ _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__.getProgressSteps),
/* harmony export */   "_main": () => (/* reexport safe */ _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__._main),
/* harmony export */   "update": () => (/* reexport safe */ _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__.update),
/* harmony export */   "_destroy": () => (/* reexport safe */ _instanceMethods_destroy_js__WEBPACK_IMPORTED_MODULE_8__._destroy)
/* harmony export */ });
/* harmony import */ var _instanceMethods_hideLoading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceMethods/hideLoading.js */ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js");
/* harmony import */ var _instanceMethods_getInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceMethods/getInput.js */ "./node_modules/sweetalert2/src/instanceMethods/getInput.js");
/* harmony import */ var _instanceMethods_close_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceMethods/close.js */ "./node_modules/sweetalert2/src/instanceMethods/close.js");
/* harmony import */ var _instanceMethods_enable_disable_elements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceMethods/enable-disable-elements.js */ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js");
/* harmony import */ var _instanceMethods_validation_message_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceMethods/validation-message.js */ "./node_modules/sweetalert2/src/instanceMethods/validation-message.js");
/* harmony import */ var _instanceMethods_progress_steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instanceMethods/progress-steps.js */ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js");
/* harmony import */ var _instanceMethods_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instanceMethods/_main.js */ "./node_modules/sweetalert2/src/instanceMethods/_main.js");
/* harmony import */ var _instanceMethods_update_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceMethods/update.js */ "./node_modules/sweetalert2/src/instanceMethods/update.js");
/* harmony import */ var _instanceMethods_destroy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instanceMethods/_destroy.js */ "./node_modules/sweetalert2/src/instanceMethods/_destroy.js");











/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/_destroy.js":
/*!******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/_destroy.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_destroy": () => (/* binding */ _destroy)
/* harmony export */ });
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");




function _destroy () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].domCache.get(this)
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].innerParams.get(this)

  if (!innerParams) {
    return // This instance has already been destroyed
  }

  // Check if there is another Swal closing
  if (domCache.popup && _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].swalCloseEventFinishedCallback) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].swalCloseEventFinishedCallback()
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].swalCloseEventFinishedCallback
  }

  // Check if there is a swal disposal defer timer
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].deferDisposalTimer) {
    clearTimeout(_globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].deferDisposalTimer)
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].deferDisposalTimer
  }

  if (typeof innerParams.didDestroy === 'function') {
    innerParams.didDestroy()
  }

  disposeSwal(this)
}

const disposeSwal = (instance) => {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params
  // Unset globalState props so GC will dispose globalState (#1569)
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].keydownHandler
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].keydownTarget
  // Unset WeakMaps so GC will be able to dispose them (#1569)
  unsetWeakMaps(_privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"])
  unsetWeakMaps(_privateMethods_js__WEBPACK_IMPORTED_MODULE_2__["default"])
  // Unset currentInstance
  delete _globalState_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentInstance
}

const unsetWeakMaps = (obj) => {
  for (const i in obj) {
    obj[i] = new WeakMap()
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/_main.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/_main.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_main": () => (/* binding */ _main)
/* harmony export */ });
/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_Timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Timer.js */ "./node_modules/sweetalert2/src/utils/Timer.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_setParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/setParameters.js */ "./node_modules/sweetalert2/src/utils/setParameters.js");
/* harmony import */ var _utils_getTemplateParams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTemplateParams.js */ "./node_modules/sweetalert2/src/utils/getTemplateParams.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _utils_openPopup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/openPopup.js */ "./node_modules/sweetalert2/src/utils/openPopup.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");
/* harmony import */ var _utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/dom/inputUtils.js */ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js");
/* harmony import */ var _buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buttons-handlers.js */ "./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js");
/* harmony import */ var _keydown_handler_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keydown-handler.js */ "./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js");
/* harmony import */ var _popup_click_handler_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popup-click-handler.js */ "./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _utils_aria_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");

















function _main (userParams, mixinParams = {}) {
  (0,_utils_params_js__WEBPACK_IMPORTED_MODULE_0__.showWarningsForParams)(Object.assign({}, mixinParams, userParams))

  if (_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].currentInstance) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].currentInstance._destroy()
    if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isModal()) {
      (0,_utils_aria_js__WEBPACK_IMPORTED_MODULE_15__.unsetAriaHidden)()
    }
  }
  _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].currentInstance = this

  const innerParams = prepareParams(userParams, mixinParams)
  ;(0,_utils_setParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"])(innerParams)
  Object.freeze(innerParams)

  // clear the previous timer
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout.stop()
    delete _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].timeout
  }

  // clear the restore focus timeout
  clearTimeout(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"].restoreFocusTimeout)

  const domCache = populateDomCache(this)

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.render(this, innerParams)

  _privateProps_js__WEBPACK_IMPORTED_MODULE_8__["default"].innerParams.set(this, innerParams)

  return swalPromise(this, domCache, innerParams)
}

const prepareParams = (userParams, mixinParams) => {
  const templateParams = (0,_utils_getTemplateParams_js__WEBPACK_IMPORTED_MODULE_5__.getTemplateParams)(userParams)
  const params = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"], mixinParams, templateParams, userParams) // precedence is described in #2131
  params.showClass = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"].showClass, params.showClass)
  params.hideClass = Object.assign({}, _utils_params_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideClass, params.hideClass)
  return params
}

const swalPromise = (instance, domCache, innerParams) => {
  return new Promise((resolve) => {
    // functions to handle all closings/dismissals
    const dismissWith = (dismiss) => {
      instance.closePopup({ isDismissed: true, dismiss })
    }

    _privateMethods_js__WEBPACK_IMPORTED_MODULE_9__["default"].swalPromiseResolve.set(instance, resolve)

    domCache.confirmButton.onclick = () => (0,_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__.handleConfirmButtonClick)(instance)
    domCache.denyButton.onclick = () => (0,_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__.handleDenyButtonClick)(instance)
    domCache.cancelButton.onclick = () => (0,_buttons_handlers_js__WEBPACK_IMPORTED_MODULE_11__.handleCancelButtonClick)(instance, dismissWith)

    domCache.closeButton.onclick = () => dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_14__.DismissReason.close)

    ;(0,_popup_click_handler_js__WEBPACK_IMPORTED_MODULE_13__.handlePopupClick)(instance, domCache, dismissWith)

    ;(0,_keydown_handler_js__WEBPACK_IMPORTED_MODULE_12__.addKeydownHandler)(instance, _globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"], innerParams, dismissWith)

    ;(0,_utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_10__.handleInputOptionsAndValue)(instance, innerParams)

    ;(0,_utils_openPopup_js__WEBPACK_IMPORTED_MODULE_7__.openPopup)(innerParams)

    setupTimer(_globalState_js__WEBPACK_IMPORTED_MODULE_6__["default"], innerParams, dismissWith)

    initFocus(domCache, innerParams)

    // Scroll container to top on open (#1247, #1946)
    setTimeout(() => {
      domCache.container.scrollTop = 0
    })
  })
}

const populateDomCache = (instance) => {
  const domCache = {
    popup: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getPopup(),
    container: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getContainer(),
    actions: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getActions(),
    confirmButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getConfirmButton(),
    denyButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getDenyButton(),
    cancelButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getCancelButton(),
    loader: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getLoader(),
    closeButton: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getCloseButton(),
    validationMessage: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getValidationMessage(),
    progressSteps: _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getProgressSteps()
  }
  _privateProps_js__WEBPACK_IMPORTED_MODULE_8__["default"].domCache.set(instance, domCache)

  return domCache
}

const setupTimer = (globalState, innerParams, dismissWith) => {
  const timerProgressBar = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getTimerProgressBar()
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(timerProgressBar)
  if (innerParams.timer) {
    globalState.timeout = new _utils_Timer_js__WEBPACK_IMPORTED_MODULE_2__["default"](() => {
      dismissWith('timer')
      delete globalState.timeout
    }, innerParams.timer)
    if (innerParams.timerProgressBar) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.show(timerProgressBar)
      setTimeout(() => {
        if (globalState.timeout && globalState.timeout.running) { // timer can be already stopped or unset at this point
          _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.animateTimerProgressBar(innerParams.timer)
        }
      })
    }
  }
}

const initFocus = (domCache, innerParams) => {
  if (innerParams.toast) {
    return
  }

  if (!(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.callIfFunction)(innerParams.allowEnterKey)) {
    return blurActiveElement()
  }

  if (!focusButton(domCache, innerParams)) {
    (0,_keydown_handler_js__WEBPACK_IMPORTED_MODULE_12__.setFocus)(innerParams, -1, 1)
  }
}

const focusButton = (domCache, innerParams) => {
  if (innerParams.focusDeny && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(domCache.denyButton)) {
    domCache.denyButton.focus()
    return true
  }

  if (innerParams.focusCancel && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(domCache.cancelButton)) {
    domCache.cancelButton.focus()
    return true
  }

  if (innerParams.focusConfirm && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(domCache.confirmButton)) {
    domCache.confirmButton.focus()
    return true
  }

  return false
}

const blurActiveElement = () => {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur()
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/buttons-handlers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleConfirmButtonClick": () => (/* binding */ handleConfirmButtonClick),
/* harmony export */   "handleDenyButtonClick": () => (/* binding */ handleDenyButtonClick),
/* harmony export */   "handleCancelButtonClick": () => (/* binding */ handleCancelButtonClick)
/* harmony export */ });
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/inputUtils.js */ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js");
/* harmony import */ var _utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");








const handleConfirmButtonClick = (instance) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance)
  instance.disableButtons()
  if (innerParams.input) {
    handleConfirmOrDenyWithInput(instance, 'confirm')
  } else {
    confirm(instance, true)
  }
}

const handleDenyButtonClick = (instance) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance)
  instance.disableButtons()
  if (innerParams.returnInputValueOnDeny) {
    handleConfirmOrDenyWithInput(instance, 'deny')
  } else {
    deny(instance, false)
  }
}

const handleCancelButtonClick = (instance, dismissWith) => {
  instance.disableButtons()
  dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_5__.DismissReason.cancel)
}

const handleConfirmOrDenyWithInput = (instance, type /* 'confirm' | 'deny' */) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance)
  const inputValue = (0,_utils_dom_inputUtils_js__WEBPACK_IMPORTED_MODULE_1__.getInputValue)(instance, innerParams)
  if (innerParams.inputValidator) {
    handleInputValidator(instance, inputValue, type)
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons()
    instance.showValidationMessage(innerParams.validationMessage)
  } else if (type === 'deny') {
    deny(instance, inputValue)
  } else {
    confirm(instance, inputValue)
  }
}

const handleInputValidator = (instance, inputValue, type /* 'confirm' | 'deny' */) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance)
  instance.disableInput()
  const validationPromise = Promise.resolve().then(() => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(
    innerParams.inputValidator(inputValue, innerParams.validationMessage))
  )
  validationPromise.then(
    (validationMessage) => {
      instance.enableButtons()
      instance.enableInput()
      if (validationMessage) {
        instance.showValidationMessage(validationMessage)
      } else if (type === 'deny') {
        deny(instance, inputValue)
      } else {
        confirm(instance, inputValue)
      }
    }
  )
}

const deny = (instance, value) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance || undefined)

  if (innerParams.showLoaderOnDeny) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)((0,_utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__.getDenyButton)())
  }

  if (innerParams.preDeny) {
    const preDenyPromise = Promise.resolve().then(() => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(
      innerParams.preDeny(value, innerParams.validationMessage))
    )
    preDenyPromise.then(
      (preDenyValue) => {
        if (preDenyValue === false) {
          instance.hideLoading()
        } else {
          instance.closePopup({ isDenied: true, value: typeof preDenyValue === 'undefined' ? value : preDenyValue })
        }
      }
    )
  } else {
    instance.closePopup({ isDenied: true, value })
  }
}

const succeedWith = (instance, value) => {
  instance.closePopup({ isConfirmed: true, value })
}

const confirm = (instance, value) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(instance || undefined)

  if (innerParams.showLoaderOnConfirm) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)()
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage()
    const preConfirmPromise = Promise.resolve().then(() => (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(
      innerParams.preConfirm(value, innerParams.validationMessage))
    )
    preConfirmPromise.then(
      (preConfirmValue) => {
        if ((0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.isVisible)((0,_utils_dom_getters_js__WEBPACK_IMPORTED_MODULE_2__.getValidationMessage)()) || preConfirmValue === false) {
          instance.hideLoading()
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue)
        }
      }
    )
  } else {
    succeedWith(instance, value)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/close.js":
/*!***************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/close.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "close": () => (/* binding */ close),
/* harmony export */   "closePopup": () => (/* binding */ close),
/* harmony export */   "closeModal": () => (/* binding */ close),
/* harmony export */   "closeToast": () => (/* binding */ close)
/* harmony export */ });
/* harmony import */ var _utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _utils_aria_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");
/* harmony import */ var _privateMethods_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../privateMethods.js */ "./node_modules/sweetalert2/src/privateMethods.js");









/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState (instance, container, returnFocus, didClose) {
  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.isToast()) {
    triggerDidCloseAndDispose(instance, didClose)
  } else {
    (0,_globalState_js__WEBPACK_IMPORTED_MODULE_5__.restoreActiveElement)(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose))
    _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].keydownTarget.removeEventListener('keydown', _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].keydownHandler, { capture: _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].keydownListenerCapture })
    _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].keydownHandlerAdded = false
  }

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  // workaround for #2088
  // for some reason removing the container in Safari will scroll the document to bottom
  if (isSafari) {
    container.setAttribute('style', 'display:none !important')
    container.removeAttribute('class')
    container.innerHTML = ''
  } else {
    container.remove()
  }

  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.isModal()) {
    (0,_utils_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_0__.undoScrollbar)()
    ;(0,_utils_iosFix_js__WEBPACK_IMPORTED_MODULE_1__.undoIOSfix)()
    ;(0,_utils_aria_js__WEBPACK_IMPORTED_MODULE_2__.unsetAriaHidden)()
  }

  removeBodyClasses()
}

function removeBodyClasses () {
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.removeClass(
    [document.documentElement, document.body],
    [
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__.swalClasses.shown,
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__.swalClasses["height-auto"],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__.swalClasses["no-backdrop"],
      _utils_classes_js__WEBPACK_IMPORTED_MODULE_4__.swalClasses["toast-shown"],
    ]
  )
}

function close (resolveValue) {
  const popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.getPopup()

  if (!popup) {
    return
  }

  resolveValue = prepareResolveValue(resolveValue)

  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_6__["default"].innerParams.get(this)
  if (!innerParams || _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.hasClass(popup, innerParams.hideClass.popup)) {
    return
  }
  const swalPromiseResolve = _privateMethods_js__WEBPACK_IMPORTED_MODULE_7__["default"].swalPromiseResolve.get(this)

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.removeClass(popup, innerParams.showClass.popup)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.addClass(popup, innerParams.hideClass.popup)

  const backdrop = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.getContainer()
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.removeClass(backdrop, innerParams.showClass.backdrop)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.addClass(backdrop, innerParams.hideClass.backdrop)

  handlePopupAnimation(this, popup, innerParams)

  // Resolve Swal promise
  swalPromiseResolve(resolveValue)
}

const prepareResolveValue = (resolveValue) => {
  // When user calls Swal.close()
  if (typeof resolveValue === 'undefined') {
    return {
      isConfirmed: false,
      isDenied: false,
      isDismissed: true,
    }
  }

  return Object.assign({
    isConfirmed: false,
    isDenied: false,
    isDismissed: false,
  }, resolveValue)
}

const handlePopupAnimation = (instance, popup, innerParams) => {
  const container = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.getContainer()
  // If animation is supported, animate
  const animationIsSupported = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.animationEndEvent && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.hasCssAnimation(popup)

  if (typeof innerParams.willClose === 'function') {
    innerParams.willClose(popup)
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose)
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose)
  }
}

const animatePopup = (instance, popup, container, returnFocus, didClose) => {
  _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose)
  popup.addEventListener(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_3__.animationEndEvent, function (e) {
    if (e.target === popup) {
      _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].swalCloseEventFinishedCallback()
      delete _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].swalCloseEventFinishedCallback
    }
  })
}

const triggerDidCloseAndDispose = (instance, didClose) => {
  setTimeout(() => {
    if (typeof didClose === 'function') {
      didClose.bind(instance.params)()
    }
    instance._destroy()
  })
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/enable-disable-elements.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableButtons": () => (/* binding */ enableButtons),
/* harmony export */   "disableButtons": () => (/* binding */ disableButtons),
/* harmony export */   "enableInput": () => (/* binding */ enableInput),
/* harmony export */   "disableInput": () => (/* binding */ disableInput)
/* harmony export */ });
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");


function setButtonsDisabled (instance, buttons, disabled) {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(instance)
  buttons.forEach(button => {
    domCache[button].disabled = disabled
  })
}

function setInputDisabled (input, disabled) {
  if (!input) {
    return false
  }
  if (input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode
    const radios = radiosContainer.querySelectorAll('input')
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled
    }
  } else {
    input.disabled = disabled
  }
}

function enableButtons () {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false)
}

function disableButtons () {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true)
}

function enableInput () {
  return setInputDisabled(this.getInput(), false)
}

function disableInput () {
  return setInputDisabled(this.getInput(), true)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/getInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/getInput.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInput": () => (/* binding */ getInput)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");



// Get input element by specified type or, if type isn't specified, by params.input
function getInput (instance) {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].innerParams.get(instance || this)
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_1__["default"].domCache.get(instance || this)
  if (!domCache) {
    return null
  }
  return _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getInput(domCache.popup, innerParams.input)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/hideLoading.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/hideLoading.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideLoading": () => (/* binding */ hideLoading),
/* harmony export */   "disableLoading": () => (/* binding */ hideLoading)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




/**
 * Hides loader and shows back the button which was hidden by .showLoading()
 */
function hideLoading () {
  // do nothing if popup is closed
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(this)
  if (!innerParams) {
    return
  }
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(domCache.loader)
  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isToast()) {
    if (innerParams.icon) {
      _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getIcon())
    }
  } else {
    showRelatedButton(domCache)
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass([domCache.popup, domCache.actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.loading)
  domCache.popup.removeAttribute('aria-busy')
  domCache.popup.removeAttribute('data-loading')
  domCache.confirmButton.disabled = false
  domCache.denyButton.disabled = false
  domCache.cancelButton.disabled = false
}

const showRelatedButton = (domCache) => {
  const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'))
  if (buttonToReplace.length) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(buttonToReplace[0], 'inline-block')
  } else if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.allButtonsAreHidden()) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(domCache.actions)
  }
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/keydown-handler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addKeydownHandler": () => (/* binding */ addKeydownHandler),
/* harmony export */   "setFocus": () => (/* binding */ setFocus)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticMethods/dom.js */ "./node_modules/sweetalert2/src/staticMethods/dom.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");






const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture })
    globalState.keydownHandlerAdded = false
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = (e) => keydownHandler(instance, e, dismissWith)
    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, { capture: globalState.keydownListenerCapture })
    globalState.keydownHandlerAdded = true
  }
}

// Focus handling
const setFocus = (innerParams, index, increment) => {
  const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements()
  // search for visible elements and select the next possible match
  if (focusableElements.length) {
    index = index + increment

    // rollover to first item
    if (index === focusableElements.length) {
      index = 0

      // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1
    }

    return focusableElements[index].focus()
  }
  // no visible focusable elements, focus the popup
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup().focus()
}

const arrowKeysNextButton = [
  'ArrowRight', 'ArrowDown',
]

const arrowKeysPreviousButton = [
  'ArrowLeft', 'ArrowUp',
]

const keydownHandler = (instance, e, dismissWith) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_4__["default"].innerParams.get(instance)

  if (!innerParams) {
    return // This instance has already been destroyed
  }

  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation()
  }

  // ENTER
  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams)

  // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams)

  // ARROWS - switch focus between buttons
  } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
    handleArrows(e.key)

  // ESC
  } else if (e.key === 'Escape') {
    handleEsc(e, innerParams, dismissWith)
  }
}

const handleEnter = (instance, e, innerParams) => {
  // #720 #721
  if (e.isComposing) {
    return
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].includes(innerParams.input)) {
      return // do not submit
    }

    (0,_staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_3__.clickConfirm)()
    e.preventDefault()
  }
}

const handleTab = (e, innerParams) => {
  const targetElement = e.target

  const focusableElements = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements()
  let btnIndex = -1
  for (let i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i
      break
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1)
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1)
  }
  e.stopPropagation()
  e.preventDefault()
}

const handleArrows = (key) => {
  const confirmButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton()
  const denyButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton()
  const cancelButton = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton()
  if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
    return
  }
  const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling'
  const buttonToFocus = document.activeElement[sibling]
  if (buttonToFocus) {
    buttonToFocus.focus()
  }
}

const handleEsc = (e, innerParams, dismissWith) => {
  if ((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.callIfFunction)(innerParams.allowEscapeKey)) {
    e.preventDefault()
    dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason.esc)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/popup-click-handler.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlePopupClick": () => (/* binding */ handlePopupClick)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DismissReason.js */ "./node_modules/sweetalert2/src/utils/DismissReason.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




const handlePopupClick = (instance, domCache, dismissWith) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(instance)
  if (innerParams.toast) {
    handleToastClick(instance, domCache, dismissWith)
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache)

    // Ignore click events that had mousedown on the container but mouseup on the popup
    handleContainerMousedown(domCache)

    handleModalClick(instance, domCache, dismissWith)
  }
}

const handleToastClick = (instance, domCache, dismissWith) => {
  // Closing toast by internal click
  domCache.popup.onclick = () => {
    const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(instance)
    if (
      innerParams.showConfirmButton ||
      innerParams.showDenyButton ||
      innerParams.showCancelButton ||
      innerParams.showCloseButton ||
      innerParams.timer ||
      innerParams.input
    ) {
      return
    }
    dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason.close)
  }
}

let ignoreOutsideClick = false

const handleModalMousedown = (domCache) => {
  domCache.popup.onmousedown = () => {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined
      // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup
      if (e.target === domCache.container) {
        ignoreOutsideClick = true
      }
    }
  }
}

const handleContainerMousedown = (domCache) => {
  domCache.container.onmousedown = () => {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined
      // We also need to check if the mouseup target is a child of the popup
      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true
      }
    }
  }
}

const handleModalClick = (instance, domCache, dismissWith) => {
  domCache.container.onclick = (e) => {
    const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(instance)
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false
      return
    }
    if (e.target === domCache.container && (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.callIfFunction)(innerParams.allowOutsideClick)) {
      dismissWith(_utils_DismissReason_js__WEBPACK_IMPORTED_MODULE_1__.DismissReason.backdrop)
    }
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/progress-steps.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/progress-steps.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProgressSteps": () => (/* binding */ getProgressSteps)
/* harmony export */ });
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");


function getProgressSteps () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_0__["default"].domCache.get(this)
  return domCache.progressSteps
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/update.js":
/*!****************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/update.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





/**
 * Updates popup parameters.
 */
function update (params) {
  const popup = _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(this)

  if (!popup || _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasClass(popup, innerParams.hideClass.popup)) {
    return (0,_src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`)
  }

  const validUpdatableParams = {}

  // assign valid params from `params` to `defaults`
  Object.keys(params).forEach(param => {
    if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param]
    } else {
      (0,_src_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`Invalid parameter to update: "${param}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)
    }
  })

  const updatedParams = Object.assign({}, innerParams, validUpdatableParams)

  _src_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.render(this, updatedParams)

  _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.set(this, updatedParams)
  Object.defineProperties(this, {
    params: {
      value: Object.assign({}, this.params, params),
      writable: false,
      enumerable: true
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/instanceMethods/validation-message.js":
/*!****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/instanceMethods/validation-message.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showValidationMessage": () => (/* binding */ showValidationMessage),
/* harmony export */   "resetValidationMessage": () => (/* binding */ resetValidationMessage)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");




// Show block with validation message
function showValidationMessage (error) {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  const params = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].innerParams.get(this)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(domCache.validationMessage, error)
  domCache.validationMessage.className = _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["validation-message"]
  if (params.customClass && params.customClass.validationMessage) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(domCache.validationMessage, params.customClass.validationMessage)
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(domCache.validationMessage)

  const input = this.getInput()
  if (input) {
    input.setAttribute('aria-invalid', true)
    input.setAttribute('aria-describedby', _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["validation-message"])
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.focusInput(input)
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.inputerror)
  }
}

// Hide block with validation message
function resetValidationMessage () {
  const domCache = _privateProps_js__WEBPACK_IMPORTED_MODULE_2__["default"].domCache.get(this)
  if (domCache.validationMessage) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(domCache.validationMessage)
  }

  const input = this.getInput()
  if (input) {
    input.removeAttribute('aria-invalid')
    input.removeAttribute('aria-describedby')
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(input, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.inputerror)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/privateMethods.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateMethods.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  swalPromiseResolve: new WeakMap()
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/privateProps.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/privateProps.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsToParams": () => (/* reexport safe */ _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__.argsToParams),
/* harmony export */   "clickCancel": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickCancel),
/* harmony export */   "clickConfirm": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickConfirm),
/* harmony export */   "clickDeny": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.clickDeny),
/* harmony export */   "getActions": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getActions),
/* harmony export */   "getCancelButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getCancelButton),
/* harmony export */   "getCloseButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getCloseButton),
/* harmony export */   "getConfirmButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getConfirmButton),
/* harmony export */   "getContainer": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getContainer),
/* harmony export */   "getDenyButton": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getDenyButton),
/* harmony export */   "getFocusableElements": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getFocusableElements),
/* harmony export */   "getFooter": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getFooter),
/* harmony export */   "getHtmlContainer": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getHtmlContainer),
/* harmony export */   "getIcon": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getIcon),
/* harmony export */   "getImage": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getImage),
/* harmony export */   "getInputLabel": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getInputLabel),
/* harmony export */   "getLoader": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getLoader),
/* harmony export */   "getPopup": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getPopup),
/* harmony export */   "getTimerProgressBar": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getTimerProgressBar),
/* harmony export */   "getTitle": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getTitle),
/* harmony export */   "getValidationMessage": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.getValidationMessage),
/* harmony export */   "isLoading": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.isLoading),
/* harmony export */   "isVisible": () => (/* reexport safe */ _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__.isVisible),
/* harmony export */   "fire": () => (/* reexport safe */ _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__.fire),
/* harmony export */   "mixin": () => (/* reexport safe */ _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__.mixin),
/* harmony export */   "enableLoading": () => (/* reexport safe */ _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.enableLoading),
/* harmony export */   "showLoading": () => (/* reexport safe */ _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading),
/* harmony export */   "getTimerLeft": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.getTimerLeft),
/* harmony export */   "increaseTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.increaseTimer),
/* harmony export */   "isTimerRunning": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.isTimerRunning),
/* harmony export */   "resumeTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.resumeTimer),
/* harmony export */   "stopTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.stopTimer),
/* harmony export */   "toggleTimer": () => (/* reexport safe */ _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__.toggleTimer),
/* harmony export */   "bindClickHandler": () => (/* reexport safe */ _staticMethods_bindClickHandler_js__WEBPACK_IMPORTED_MODULE_6__.bindClickHandler),
/* harmony export */   "isValidParameter": () => (/* reexport safe */ _utils_params_js__WEBPACK_IMPORTED_MODULE_7__.isValidParameter),
/* harmony export */   "isUpdatableParameter": () => (/* reexport safe */ _utils_params_js__WEBPACK_IMPORTED_MODULE_7__.isUpdatableParameter),
/* harmony export */   "isDeprecatedParameter": () => (/* reexport safe */ _utils_params_js__WEBPACK_IMPORTED_MODULE_7__.isDeprecatedParameter)
/* harmony export */ });
/* harmony import */ var _staticMethods_argsToParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staticMethods/argsToParams.js */ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js");
/* harmony import */ var _staticMethods_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticMethods/dom.js */ "./node_modules/sweetalert2/src/staticMethods/dom.js");
/* harmony import */ var _staticMethods_fire_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staticMethods/fire.js */ "./node_modules/sweetalert2/src/staticMethods/fire.js");
/* harmony import */ var _staticMethods_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticMethods/mixin.js */ "./node_modules/sweetalert2/src/staticMethods/mixin.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");
/* harmony import */ var _staticMethods_timer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staticMethods/timer.js */ "./node_modules/sweetalert2/src/staticMethods/timer.js");
/* harmony import */ var _staticMethods_bindClickHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staticMethods/bindClickHandler.js */ "./node_modules/sweetalert2/src/staticMethods/bindClickHandler.js");
/* harmony import */ var _utils_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/params.js */ "./node_modules/sweetalert2/src/utils/params.js");










/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/argsToParams.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/argsToParams.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsToParams": () => (/* binding */ argsToParams)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const isJqueryElement = (elem) => typeof elem === 'object' && elem.jquery
const isElement = (elem) => elem instanceof Element || isJqueryElement(elem)

const argsToParams = (args) => {
  const params = {}
  if (typeof args[0] === 'object' && !isElement(args[0])) {
    Object.assign(params, args[0])
  } else {
    ['title', 'html', 'icon'].forEach((name, index) => {
      const arg = args[index]
      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg
      } else if (arg !== undefined) {
        (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.error)(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`)
      }
    })
  }
  return params
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/bindClickHandler.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/bindClickHandler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindClickHandler": () => (/* binding */ bindClickHandler)
/* harmony export */ });
let bodyClickListenerAdded = false
const clickHandlers = {}

function bindClickHandler (attr = 'data-swal-template') {
  clickHandlers[attr] = this

  if (!bodyClickListenerAdded) {
    document.body.addEventListener('click', bodyClickListener)
    bodyClickListenerAdded = true
  }
}

const bodyClickListener = (event) => {
  for (let el = event.target; el && el !== document; el = el.parentNode) {
    for (const attr in clickHandlers) {
      const template = el.getAttribute(attr)
      if (template) {
        clickHandlers[attr].fire({ template })
        return
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/dom.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/dom.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContainer": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer),
/* harmony export */   "getPopup": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup),
/* harmony export */   "getTitle": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getTitle),
/* harmony export */   "getHtmlContainer": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer),
/* harmony export */   "getImage": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getImage),
/* harmony export */   "getIcon": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getIcon),
/* harmony export */   "getInputLabel": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getInputLabel),
/* harmony export */   "getCloseButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCloseButton),
/* harmony export */   "getActions": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getActions),
/* harmony export */   "getConfirmButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton),
/* harmony export */   "getDenyButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton),
/* harmony export */   "getCancelButton": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton),
/* harmony export */   "getLoader": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getLoader),
/* harmony export */   "getFooter": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFooter),
/* harmony export */   "getTimerProgressBar": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getTimerProgressBar),
/* harmony export */   "getFocusableElements": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements),
/* harmony export */   "getValidationMessage": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getValidationMessage),
/* harmony export */   "isLoading": () => (/* reexport safe */ _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isLoading),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "clickConfirm": () => (/* binding */ clickConfirm),
/* harmony export */   "clickDeny": () => (/* binding */ clickDeny),
/* harmony export */   "clickCancel": () => (/* binding */ clickCancel)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");





/*
 * Global function to determine if SweetAlert2 popup is shown
 */
const isVisible = () => {
  return _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup())
}

/*
 * Global function to click 'Confirm' button
 */
const clickConfirm = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton().click()

/*
 * Global function to click 'Deny' button
 */
const clickDeny = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton().click()

/*
 * Global function to click 'Cancel' button
 */
const clickCancel = () => _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton() && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton().click()


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/fire.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/fire.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fire": () => (/* binding */ fire)
/* harmony export */ });
function fire (...args) {
  const Swal = this
  return new Swal(...args)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/mixin.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/mixin.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixin": () => (/* binding */ mixin)
/* harmony export */ });
/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin (mixinParams) {
  class MixinSwal extends this {
    _main (params, priorityMixinParams) {
      return super._main(params, Object.assign({}, mixinParams, priorityMixinParams))
    }
  }

  return MixinSwal
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/showLoading.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/showLoading.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showLoading": () => (/* binding */ showLoading),
/* harmony export */   "enableLoading": () => (/* binding */ showLoading)
/* harmony export */ });
/* harmony import */ var _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");




/**
 * Shows loader (spinner), this is useful with AJAX requests.
 * By default the loader be shown instead of the "Confirm" button.
 */
const showLoading = (buttonToReplace) => {
  let popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  if (!popup) {
    _sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__["default"].fire()
  }
  popup = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  const loader = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getLoader()

  if (_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isToast()) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getIcon())
  } else {
    replaceButton(popup, buttonToReplace)
  }
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(loader)

  popup.setAttribute('data-loading', true)
  popup.setAttribute('aria-busy', true)
  popup.focus()
}

const replaceButton = (popup, buttonToReplace) => {
  const actions = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getActions()
  const loader = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getLoader()

  if (!buttonToReplace && _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isVisible(_utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton())) {
    buttonToReplace = _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton()
  }

  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(actions)
  if (buttonToReplace) {
    _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(buttonToReplace)
    loader.setAttribute('data-button-to-replace', buttonToReplace.className)
  }
  loader.parentNode.insertBefore(loader, buttonToReplace)
  _utils_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass([popup, actions], _utils_classes_js__WEBPACK_IMPORTED_MODULE_2__.swalClasses.loading)
}




/***/ }),

/***/ "./node_modules/sweetalert2/src/staticMethods/timer.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/staticMethods/timer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimerLeft": () => (/* binding */ getTimerLeft),
/* harmony export */   "stopTimer": () => (/* binding */ stopTimer),
/* harmony export */   "resumeTimer": () => (/* binding */ resumeTimer),
/* harmony export */   "toggleTimer": () => (/* binding */ toggleTimer),
/* harmony export */   "increaseTimer": () => (/* binding */ increaseTimer),
/* harmony export */   "isTimerRunning": () => (/* binding */ isTimerRunning)
/* harmony export */ });
/* harmony import */ var _utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");



/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */
const getTimerLeft = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.getTimerLeft()
}

/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const stopTimer = () => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout) {
    (0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.stopTimerProgressBar)()
    return _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.stop()
  }
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const resumeTimer = () => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout) {
    const remaining = _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.start()
    ;(0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.animateTimerProgressBar)(remaining)
    return remaining
  }
}

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */
const toggleTimer = () => {
  const timer = _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout
  return timer && (timer.running ? stopTimer() : resumeTimer())
}

/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */
const increaseTimer = (n) => {
  if (_globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout) {
    const remaining = _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.increase(n)
    ;(0,_utils_dom_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.animateTimerProgressBar)(remaining, true)
    return remaining
  }
}

/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */
const isTimerRunning = () => {
  return _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout && _globalState_js__WEBPACK_IMPORTED_MODULE_1__["default"].timeout.isRunning()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/sweetalert2.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SweetAlert.js */ "./node_modules/sweetalert2/src/SweetAlert.js");


const Swal = _SweetAlert_js__WEBPACK_IMPORTED_MODULE_0__["default"]
Swal.default = Swal

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swal);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/DismissReason.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/DismissReason.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DismissReason": () => (/* binding */ DismissReason)
/* harmony export */ });
const DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
})


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/Timer.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/Timer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
class Timer {
  constructor (callback, delay) {
    this.callback = callback
    this.remaining = delay
    this.running = false

    this.start()
  }

  start () {
    if (!this.running) {
      this.running = true
      this.started = new Date()
      this.id = setTimeout(this.callback, this.remaining)
    }
    return this.remaining
  }

  stop () {
    if (this.running) {
      this.running = false
      clearTimeout(this.id)
      this.remaining -= new Date() - this.started
    }
    return this.remaining
  }

  increase (n) {
    const running = this.running
    if (running) {
      this.stop()
    }
    this.remaining += n
    if (running) {
      this.start()
    }
    return this.remaining
  }

  getTimerLeft () {
    if (this.running) {
      this.stop()
      this.start()
    }
    return this.remaining
  }

  isRunning () {
    return this.running
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/aria.js":
/*!****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/aria.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAriaHidden": () => (/* binding */ setAriaHidden),
/* harmony export */   "unsetAriaHidden": () => (/* binding */ unsetAriaHidden)
/* harmony export */ });
/* harmony import */ var _dom_getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");



// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

const setAriaHidden = () => {
  const bodyChildren = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(document.body.children)
  bodyChildren.forEach(el => {
    if (el === (0,_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__.getContainer)() || el.contains((0,_dom_getters_js__WEBPACK_IMPORTED_MODULE_0__.getContainer)())) {
      return
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'))
    }
    el.setAttribute('aria-hidden', 'true')
  })
}

const unsetAriaHidden = () => {
  const bodyChildren = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(document.body.children)
  bodyChildren.forEach(el => {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'))
      el.removeAttribute('data-previous-aria-hidden')
    } else {
      el.removeAttribute('aria-hidden')
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/classes.js":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/classes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swalPrefix": () => (/* binding */ swalPrefix),
/* harmony export */   "prefix": () => (/* binding */ prefix),
/* harmony export */   "swalClasses": () => (/* binding */ swalClasses),
/* harmony export */   "iconTypes": () => (/* binding */ iconTypes)
/* harmony export */ });
const swalPrefix = 'swal2-'

const prefix = (items) => {
  const result = {}
  for (const i in items) {
    result[items[i]] = swalPrefix + items[i]
  }
  return result
}

const swalClasses = prefix([
  'container',
  'shown',
  'height-auto',
  'iosfix',
  'popup',
  'modal',
  'no-backdrop',
  'no-transition',
  'toast',
  'toast-shown',
  'show',
  'hide',
  'close',
  'title',
  'html-container',
  'actions',
  'confirm',
  'deny',
  'cancel',
  'default-outline',
  'footer',
  'icon',
  'icon-content',
  'image',
  'input',
  'file',
  'range',
  'select',
  'radio',
  'checkbox',
  'label',
  'textarea',
  'inputerror',
  'input-label',
  'validation-message',
  'progress-steps',
  'active-progress-step',
  'progress-step',
  'progress-step-line',
  'loader',
  'loading',
  'styled',
  'top',
  'top-start',
  'top-end',
  'top-left',
  'top-right',
  'center',
  'center-start',
  'center-end',
  'center-left',
  'center-right',
  'bottom',
  'bottom-start',
  'bottom-end',
  'bottom-left',
  'bottom-right',
  'grow-row',
  'grow-column',
  'grow-fullscreen',
  'rtl',
  'timer-progress-bar',
  'timer-progress-bar-container',
  'scrollbar-measure',
  'icon-success',
  'icon-warning',
  'icon-info',
  'icon-question',
  'icon-error',
])

const iconTypes = prefix([
  'success',
  'warning',
  'info',
  'question',
  'error'
])


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/defaultInputValidators.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage || 'Invalid email address')
  },
  url: (string, validationMessage) => {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string)
      ? Promise.resolve()
      : Promise.resolve(validationMessage || 'Invalid URL')
  }
});


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationEndEvent": () => (/* binding */ animationEndEvent)
/* harmony export */ });
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");


const animationEndEvent = (() => {
  // Prevent run in Node env
  /* istanbul ignore if */
  if ((0,_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_0__.isNodeEnv)()) {
    return false
  }

  const testEl = document.createElement('div')
  const transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  }
  for (const i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i]
    }
  }

  return false
})()


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/domUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/domUtils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "states": () => (/* binding */ states),
/* harmony export */   "setInnerHtml": () => (/* binding */ setInnerHtml),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "applyCustomClass": () => (/* binding */ applyCustomClass),
/* harmony export */   "getInput": () => (/* binding */ getInput),
/* harmony export */   "focusInput": () => (/* binding */ focusInput),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "getChildByClass": () => (/* binding */ getChildByClass),
/* harmony export */   "applyNumericalStyle": () => (/* binding */ applyNumericalStyle),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "setStyle": () => (/* binding */ setStyle),
/* harmony export */   "toggle": () => (/* binding */ toggle),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "allButtonsAreHidden": () => (/* binding */ allButtonsAreHidden),
/* harmony export */   "isScrollable": () => (/* binding */ isScrollable),
/* harmony export */   "hasCssAnimation": () => (/* binding */ hasCssAnimation),
/* harmony export */   "animateTimerProgressBar": () => (/* binding */ animateTimerProgressBar),
/* harmony export */   "stopTimerProgressBar": () => (/* binding */ stopTimerProgressBar)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




// Remember state in cases where opening and handling a modal will fiddle with it.
const states = {
  previousBodyPadding: null
}

const setInnerHtml = (elem, html) => { // #1926
  elem.textContent = ''
  if (html) {
    const parser = new DOMParser()
    const parsed = parser.parseFromString(html, `text/html`)
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(parsed.querySelector('head').childNodes).forEach((child) => {
      elem.appendChild(child)
    })
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(parsed.querySelector('body').childNodes).forEach((child) => {
      elem.appendChild(child)
    })
  }
}

const hasClass = (elem, className) => {
  if (!className) {
    return false
  }
  const classList = className.split(/\s+/)
  for (let i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false
    }
  }
  return true
}

const removeCustomClasses = (elem, params) => {
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toArray)(elem.classList).forEach(className => {
    if (
      !Object.values(_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses).includes(className) &&
      !Object.values(_classes_js__WEBPACK_IMPORTED_MODULE_1__.iconTypes).includes(className) &&
      !Object.values(params.showClass).includes(className)
    ) {
      elem.classList.remove(className)
    }
  })
}

const applyCustomClass = (elem, params, className) => {
  removeCustomClasses(elem, params)

  if (params.customClass && params.customClass[className]) {
    if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.warn)(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`)
    }

    addClass(elem, params.customClass[className])
  }
}

const getInput = (popup, inputType) => {
  if (!inputType) {
    return null
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses[inputType])
    case 'checkbox':
      return popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.checkbox} input`)
    case 'radio':
      return popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio} input:checked`) ||
        popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio} input:first-child`)
    case 'range':
      return popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.range} input`)
    default:
      return getChildByClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.input)
  }
}

const focusInput = (input) => {
  input.focus()

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    const val = input.value
    input.value = ''
    input.value = val
  }
}

const toggleClass = (target, classList, condition) => {
  if (!target || !classList) {
    return
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean)
  }
  classList.forEach((className) => {
    if (target.forEach) {
      target.forEach((elem) => {
        condition ? elem.classList.add(className) : elem.classList.remove(className)
      })
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className)
    }
  })
}

const addClass = (target, classList) => {
  toggleClass(target, classList, true)
}

const removeClass = (target, classList) => {
  toggleClass(target, classList, false)
}

const getChildByClass = (elem, className) => {
  for (let i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i]
    }
  }
}

const applyNumericalStyle = (elem, property, value) => {
  if (value === `${parseInt(value)}`) {
    value = parseInt(value)
  }
  if (value || parseInt(value) === 0) {
    elem.style[property] = (typeof value === 'number') ? `${value}px` : value
  } else {
    elem.style.removeProperty(property)
  }
}

const show = (elem, display = 'flex') => {
  elem.style.display = display
}

const hide = (elem) => {
  elem.style.display = 'none'
}

const setStyle = (parent, selector, property, value) => {
  const el = parent.querySelector(selector)
  if (el) {
    el.style[property] = value
  }
}

const toggle = (elem, condition, display) => {
  condition ? show(elem, display) : hide(elem)
}

// borrowed from jquery $(elem).is(':visible') implementation
const isVisible = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length))

const allButtonsAreHidden = () => !isVisible((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton)()) && !isVisible((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getDenyButton)()) && !isVisible((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getCancelButton)())

const isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight)

// borrowed from https://stackoverflow.com/a/46352119
const hasCssAnimation = (elem) => {
  const style = window.getComputedStyle(elem)

  const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0')
  const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0')

  return animDuration > 0 || transDuration > 0
}

const animateTimerProgressBar = (timer, reset = false) => {
  const timerProgressBar = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getTimerProgressBar)()
  if (isVisible(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none'
      timerProgressBar.style.width = '100%'
    }
    setTimeout(() => {
      timerProgressBar.style.transition = `width ${timer / 1000}s linear`
      timerProgressBar.style.width = '0%'
    }, 10)
  }
}

const stopTimerProgressBar = () => {
  const timerProgressBar = (0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getTimerProgressBar)()
  const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width)
  timerProgressBar.style.removeProperty('transition')
  timerProgressBar.style.width = '100%'
  const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width)
  const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100)
  timerProgressBar.style.removeProperty('transition')
  timerProgressBar.style.width = `${timerProgressBarPercent}%`
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/getters.js":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/getters.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContainer": () => (/* binding */ getContainer),
/* harmony export */   "elementBySelector": () => (/* binding */ elementBySelector),
/* harmony export */   "getPopup": () => (/* binding */ getPopup),
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "getTitle": () => (/* binding */ getTitle),
/* harmony export */   "getHtmlContainer": () => (/* binding */ getHtmlContainer),
/* harmony export */   "getImage": () => (/* binding */ getImage),
/* harmony export */   "getProgressSteps": () => (/* binding */ getProgressSteps),
/* harmony export */   "getValidationMessage": () => (/* binding */ getValidationMessage),
/* harmony export */   "getConfirmButton": () => (/* binding */ getConfirmButton),
/* harmony export */   "getDenyButton": () => (/* binding */ getDenyButton),
/* harmony export */   "getInputLabel": () => (/* binding */ getInputLabel),
/* harmony export */   "getLoader": () => (/* binding */ getLoader),
/* harmony export */   "getCancelButton": () => (/* binding */ getCancelButton),
/* harmony export */   "getActions": () => (/* binding */ getActions),
/* harmony export */   "getFooter": () => (/* binding */ getFooter),
/* harmony export */   "getTimerProgressBar": () => (/* binding */ getTimerProgressBar),
/* harmony export */   "getCloseButton": () => (/* binding */ getCloseButton),
/* harmony export */   "getFocusableElements": () => (/* binding */ getFocusableElements),
/* harmony export */   "isModal": () => (/* binding */ isModal),
/* harmony export */   "isToast": () => (/* binding */ isToast),
/* harmony export */   "isLoading": () => (/* binding */ isLoading)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");




const getContainer = () => document.body.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.container}`)

const elementBySelector = (selectorString) => {
  const container = getContainer()
  return container ? container.querySelector(selectorString) : null
}

const elementByClass = (className) => {
  return elementBySelector(`.${className}`)
}

const getPopup = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.popup)

const getIcon = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.icon)

const getTitle = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title)

const getHtmlContainer = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"])

const getImage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.image)

const getProgressSteps = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-steps"])

const getValidationMessage = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["validation-message"])

const getConfirmButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.confirm}`)

const getDenyButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.deny}`)

const getInputLabel = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["input-label"])

const getLoader = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.loader}`)

const getCancelButton = () => elementBySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions} .${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.cancel}`)

const getActions = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions)

const getFooter = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.footer)

const getTimerProgressBar = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["timer-progress-bar"])

const getCloseButton = () => elementByClass(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.close)

// https://github.com/jkup/focusable/blob/master/index.js
const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`

const getFocusableElements = () => {
  const focusableElementsWithTabindex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(
    getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
  )
  // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'))
      b = parseInt(b.getAttribute('tabindex'))
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
      return 0
    })

  const otherFocusableElements = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(
    getPopup().querySelectorAll(focusable)
  ).filter(el => el.getAttribute('tabindex') !== '-1')

  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.uniqueArray)(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.isVisible)(el))
}

const isModal = () => {
  return !isToast() && !document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-backdrop"])
}

const isToast = () => {
  return document.body.classList.contains(_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["toast-shown"])
}

const isLoading = () => {
  return getPopup().hasAttribute('data-loading')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.addClass),
/* harmony export */   "allButtonsAreHidden": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.allButtonsAreHidden),
/* harmony export */   "animateTimerProgressBar": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.animateTimerProgressBar),
/* harmony export */   "applyCustomClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass),
/* harmony export */   "applyNumericalStyle": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.applyNumericalStyle),
/* harmony export */   "focusInput": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.focusInput),
/* harmony export */   "getChildByClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.getChildByClass),
/* harmony export */   "getInput": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.getInput),
/* harmony export */   "hasClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.hasClass),
/* harmony export */   "hasCssAnimation": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.hasCssAnimation),
/* harmony export */   "hide": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.hide),
/* harmony export */   "isScrollable": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.isScrollable),
/* harmony export */   "isVisible": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.isVisible),
/* harmony export */   "removeClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeClass),
/* harmony export */   "setInnerHtml": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml),
/* harmony export */   "setStyle": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setStyle),
/* harmony export */   "show": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.show),
/* harmony export */   "states": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.states),
/* harmony export */   "stopTimerProgressBar": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.stopTimerProgressBar),
/* harmony export */   "toggle": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggle),
/* harmony export */   "toggleClass": () => (/* reexport safe */ _domUtils_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass),
/* harmony export */   "init": () => (/* reexport safe */ _init_js__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   "elementBySelector": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.elementBySelector),
/* harmony export */   "getActions": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getActions),
/* harmony export */   "getCancelButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getCancelButton),
/* harmony export */   "getCloseButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getCloseButton),
/* harmony export */   "getConfirmButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getConfirmButton),
/* harmony export */   "getContainer": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getContainer),
/* harmony export */   "getDenyButton": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getDenyButton),
/* harmony export */   "getFocusableElements": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getFocusableElements),
/* harmony export */   "getFooter": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getFooter),
/* harmony export */   "getHtmlContainer": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getHtmlContainer),
/* harmony export */   "getIcon": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getIcon),
/* harmony export */   "getImage": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getImage),
/* harmony export */   "getInputLabel": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getInputLabel),
/* harmony export */   "getLoader": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getLoader),
/* harmony export */   "getPopup": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getPopup),
/* harmony export */   "getProgressSteps": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getProgressSteps),
/* harmony export */   "getTimerProgressBar": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getTimerProgressBar),
/* harmony export */   "getTitle": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getTitle),
/* harmony export */   "getValidationMessage": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.getValidationMessage),
/* harmony export */   "isLoading": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.isLoading),
/* harmony export */   "isModal": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.isModal),
/* harmony export */   "isToast": () => (/* reexport safe */ _getters_js__WEBPACK_IMPORTED_MODULE_2__.isToast),
/* harmony export */   "parseHtmlToContainer": () => (/* reexport safe */ _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__.parseHtmlToContainer),
/* harmony export */   "animationEndEvent": () => (/* reexport safe */ _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__.animationEndEvent),
/* harmony export */   "measureScrollbar": () => (/* reexport safe */ _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__.measureScrollbar),
/* harmony export */   "render": () => (/* reexport safe */ _renderers_render_js__WEBPACK_IMPORTED_MODULE_6__.render)
/* harmony export */ });
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/sweetalert2/src/utils/dom/init.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _parseHtmlToContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseHtmlToContainer.js */ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js");
/* harmony import */ var _animationEndEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animationEndEvent.js */ "./node_modules/sweetalert2/src/utils/dom/animationEndEvent.js");
/* harmony import */ var _measureScrollbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./measureScrollbar.js */ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js");
/* harmony import */ var _renderers_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderers/render.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/render.js");









/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/init.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/init.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../isNodeEnv.js */ "./node_modules/sweetalert2/src/utils/isNodeEnv.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");







const sweetHTML = `
 <div aria-labelledby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title}" aria-describedby="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"]}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.popup}" tabindex="-1">
   <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.close}"></button>
   <ul class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-steps"]}"></ul>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.icon}"></div>
   <img class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.image}" />
   <h2 class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.title}"></h2>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"]}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["html-container"]}"></div>
   <input class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input}" />
   <input type="file" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.file}" />
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.select}"></select>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.radio}"></div>
   <label for="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox}" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.label}"></span>
   </label>
   <textarea class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.textarea}"></textarea>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["validation-message"]}" id="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["validation-message"]}"></div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.actions}">
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.loader}"></div>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.confirm}"></button>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.deny}"></button>
     <button type="button" class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.cancel}"></button>
   </div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.footer}"></div>
   <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["timer-progress-bar-container"]}">
     <div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '')

const resetOldContainer = () => {
  const oldContainer = (0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getContainer)()
  if (!oldContainer) {
    return false
  }

  oldContainer.remove()
  ;(0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.removeClass)(
    [document.documentElement, document.body],
    [
      _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-backdrop"],
      _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["toast-shown"],
      _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["has-column"]
    ]
  )

  return true
}

const resetValidationMessage = () => {
  if (_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__["default"].isVisible()) {
    _sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__["default"].resetValidationMessage()
  }
}

const addInputChangeListeners = () => {
  const popup = (0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getPopup)()

  const input = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input)
  const file = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.file)
  const range = popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.range} input`)
  const rangeOutput = popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.range} output`)
  const select = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.select)
  const checkbox = popup.querySelector(`.${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox} input`)
  const textarea = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.textarea)

  input.oninput = resetValidationMessage
  file.onchange = resetValidationMessage
  select.onchange = resetValidationMessage
  checkbox.onchange = resetValidationMessage
  textarea.oninput = resetValidationMessage

  range.oninput = () => {
    resetValidationMessage()
    rangeOutput.value = range.value
  }

  range.onchange = () => {
    resetValidationMessage()
    range.nextSibling.value = range.value
  }
}

const getTarget = (target) => typeof target === 'string' ? document.querySelector(target) : target

const setupAccessibility = (params) => {
  const popup = (0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getPopup)()

  popup.setAttribute('role', params.toast ? 'alert' : 'dialog')
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive')
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true')
  }
}

const setupRTL = (targetElement) => {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.addClass)((0,_getters_js__WEBPACK_IMPORTED_MODULE_1__.getContainer)(), _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.rtl)
  }
}

/*
 * Add modal + backdrop to DOM
 */
const init = (params) => {
  // Clean up the old popup container if it exists
  const oldContainerExisted = resetOldContainer()

  /* istanbul ignore if */
  if ((0,_isNodeEnv_js__WEBPACK_IMPORTED_MODULE_3__.isNodeEnv)()) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.error)('SweetAlert2 requires document to initialize')
    return
  }

  const container = document.createElement('div')
  container.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.container
  if (oldContainerExisted) {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-transition"])
  }
  (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml)(container, sweetHTML)

  const targetElement = getTarget(params.target)
  targetElement.appendChild(container)

  setupAccessibility(params)
  setupRTL(targetElement)
  addInputChangeListeners()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/inputUtils.js":
/*!**************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/inputUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleInputOptionsAndValue": () => (/* binding */ handleInputOptionsAndValue),
/* harmony export */   "getInputValue": () => (/* binding */ getInputValue)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../staticMethods/showLoading.js */ "./node_modules/sweetalert2/src/staticMethods/showLoading.js");






const handleInputOptionsAndValue = (instance, params) => {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params)
  } else if (
    ['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) &&
    ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hasToPromiseFn)(params.inputValue) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isPromise)(params.inputValue))
  ) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)(_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton())
    handleInputValue(instance, params)
  }
}

const getInputValue = (instance, innerParams) => {
  const input = instance.getInput()
  if (!input) {
    return null
  }
  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input)
    case 'radio':
      return getRadioValue(input)
    case 'file':
      return getFileValue(input)
    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value
  }
}

const getCheckboxValue = (input) => input.checked ? 1 : 0

const getRadioValue = (input) => input.checked ? input.value : null

const getFileValue = (input) => input.files.length ? (input.getAttribute('multiple') !== null ? input.files : input.files[0]) : null

const handleInputOptions = (instance, params) => {
  const popup = _index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  const processInputOptions = (inputOptions) => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params)
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.hasToPromiseFn)(params.inputOptions) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isPromise)(params.inputOptions)) {
    (0,_staticMethods_showLoading_js__WEBPACK_IMPORTED_MODULE_4__.showLoading)(_index_js__WEBPACK_IMPORTED_MODULE_0__.getConfirmButton())
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(params.inputOptions).then((inputOptions) => {
      instance.hideLoading()
      processInputOptions(inputOptions)
    })
  } else if (typeof params.inputOptions === 'object') {
    processInputOptions(params.inputOptions)
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.error)(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`)
  }
}

const handleInputValue = (instance, params) => {
  const input = instance.getInput()
  _index_js__WEBPACK_IMPORTED_MODULE_0__.hide(input)
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asPromise)(params.inputValue).then((inputValue) => {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : `${inputValue}`
    _index_js__WEBPACK_IMPORTED_MODULE_0__.show(input)
    input.focus()
    instance.hideLoading()
  })
    .catch((err) => {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.error)(`Error in inputValue promise: ${err}`)
      input.value = ''
      _index_js__WEBPACK_IMPORTED_MODULE_0__.show(input)
      input.focus()
      instance.hideLoading()
    })
}

const populateInputOptions = {
  select: (popup, inputOptions, params) => {
    const select = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.select)
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option')
      option.value = optionValue
      _index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(option, optionLabel)
      option.selected = isSelected(optionValue, params.inputValue)
      parent.appendChild(option)
    }
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0]
      const optionLabel = inputOption[1]
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) { // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup')
        optgroup.label = optionValue
        optgroup.disabled = false // not configurable for now
        select.appendChild(optgroup)
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]))
      } else { // case of <option>
        renderOption(select, optionLabel, optionValue)
      }
    })
    select.focus()
  },

  radio: (popup, inputOptions, params) => {
    const radio = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass)(popup, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio)
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0]
      const radioLabel = inputOption[1]
      const radioInput = document.createElement('input')
      const radioLabelElement = document.createElement('label')
      radioInput.type = 'radio'
      radioInput.name = _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.radio
      radioInput.value = radioValue
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true
      }
      const label = document.createElement('span')
      _index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(label, radioLabel)
      label.className = _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.label
      radioLabelElement.appendChild(radioInput)
      radioLabelElement.appendChild(label)
      radio.appendChild(radioLabelElement)
    })
    const radios = radio.querySelectorAll('input')
    if (radios.length) {
      radios[0].focus()
    }
  }
}

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
const formatInputOptions = (inputOptions) => {
  const result = []
  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      let valueFormatted = value
      if (typeof valueFormatted === 'object') { // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted)
      }
      result.push([key, valueFormatted])
    })
  } else {
    Object.keys(inputOptions).forEach(key => {
      let valueFormatted = inputOptions[key]
      if (typeof valueFormatted === 'object') { // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted)
      }
      result.push([key, valueFormatted])
    })
  }
  return result
}

const isSelected = (optionValue, inputValue) => {
  return inputValue && inputValue.toString() === optionValue.toString()
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/measureScrollbar.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "measureScrollbar": () => (/* binding */ measureScrollbar)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");


// Measure scrollbar width for padding body during modal show/hide
// https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
const measureScrollbar = () => {
  const scrollDiv = document.createElement('div')
  scrollDiv.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["scrollbar-measure"]
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/parseHtmlToContainer.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseHtmlToContainer": () => (/* binding */ parseHtmlToContainer)
/* harmony export */ });
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtils.js */ "./node_modules/sweetalert2/src/utils/dom/domUtils.js");


const parseHtmlToContainer = (param, target) => {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param)

  // Object
  } else if (typeof param === 'object') {
    handleObject(param, target)

  // Plain string
  } else if (param) {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml)(target, param)
  }
}

const handleObject = (param, target) => {
  // JQuery element(s)
  if (param.jquery) {
    handleJqueryElem(target, param)

  // For other objects use their string representation
  } else {
    (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml)(target, param.toString())
  }
}

const handleJqueryElem = (target, elem) => {
  target.textContent = ''
  if (0 in elem) {
    for (let i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true))
    }
  } else {
    target.appendChild(elem.cloneNode(true))
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/render.js":
/*!********************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/render.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _getters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getters.js */ "./node_modules/sweetalert2/src/utils/dom/getters.js");
/* harmony import */ var _renderActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderActions.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js");
/* harmony import */ var _renderContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderContainer.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js");
/* harmony import */ var _renderContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderContent.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js");
/* harmony import */ var _renderFooter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderFooter.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js");
/* harmony import */ var _renderCloseButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderCloseButton.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js");
/* harmony import */ var _renderIcon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderIcon.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js");
/* harmony import */ var _renderImage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderImage.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js");
/* harmony import */ var _renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderProgressSteps.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js");
/* harmony import */ var _renderTitle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./renderTitle.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js");
/* harmony import */ var _renderPopup_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renderPopup.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js");












const render = (instance, params) => {
  (0,_renderPopup_js__WEBPACK_IMPORTED_MODULE_10__.renderPopup)(instance, params)
  ;(0,_renderContainer_js__WEBPACK_IMPORTED_MODULE_2__.renderContainer)(instance, params)

  ;(0,_renderProgressSteps_js__WEBPACK_IMPORTED_MODULE_8__.renderProgressSteps)(instance, params)
  ;(0,_renderIcon_js__WEBPACK_IMPORTED_MODULE_6__.renderIcon)(instance, params)
  ;(0,_renderImage_js__WEBPACK_IMPORTED_MODULE_7__.renderImage)(instance, params)
  ;(0,_renderTitle_js__WEBPACK_IMPORTED_MODULE_9__.renderTitle)(instance, params)
  ;(0,_renderCloseButton_js__WEBPACK_IMPORTED_MODULE_5__.renderCloseButton)(instance, params)

  ;(0,_renderContent_js__WEBPACK_IMPORTED_MODULE_3__.renderContent)(instance, params)
  ;(0,_renderActions_js__WEBPACK_IMPORTED_MODULE_1__.renderActions)(instance, params)
  ;(0,_renderFooter_js__WEBPACK_IMPORTED_MODULE_4__.renderFooter)(instance, params)

  if (typeof params.didRender === 'function') {
    params.didRender((0,_getters_js__WEBPACK_IMPORTED_MODULE_0__.getPopup)())
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderActions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderActions": () => (/* binding */ renderActions)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");




const renderActions = (instance, params) => {
  const actions = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getActions()
  const loader = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getLoader()
  const confirmButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getConfirmButton()
  const denyButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getDenyButton()
  const cancelButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getCancelButton()

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(actions)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.show(actions)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(actions, params, 'actions')

  // Render buttons
  renderButton(confirmButton, 'confirm', params)
  renderButton(denyButton, 'deny', params)
  renderButton(cancelButton, 'cancel', params)
  handleButtonsStyling(confirmButton, denyButton, cancelButton, params)

  if (params.reverseButtons) {
    actions.insertBefore(cancelButton, loader)
    actions.insertBefore(denyButton, loader)
    actions.insertBefore(confirmButton, loader)
  }

  // Loader
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.setInnerHtml(loader, params.loaderHtml)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(loader, params, 'loader')
}

function handleButtonsStyling (confirmButton, denyButton, cancelButton, params) {
  if (!params.buttonsStyling) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.removeClass([confirmButton, denyButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.styled)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass([confirmButton, denyButton, cancelButton], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.styled)

  // Buttons background colors
  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(confirmButton, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["default-outline"])
  }
  if (params.denyButtonColor) {
    denyButton.style.backgroundColor = params.denyButtonColor
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(denyButton, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["default-outline"])
  }
  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(cancelButton, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["default-outline"])
  }
}

function renderButton (button, buttonType, params) {
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.toggle(button, params[`show${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(buttonType)}Button`], 'inline-block')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.setInnerHtml(button, params[`${buttonType}ButtonText`]) // Set caption text
  button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`]) // ARIA label

  // Add buttons custom classes
  button.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[buttonType]
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(button, params, `${buttonType}Button`)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(button, params[`${buttonType}ButtonClass`])
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderCloseButton.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCloseButton": () => (/* binding */ renderCloseButton)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderCloseButton = (instance, params) => {
  const closeButton = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getCloseButton()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.setInnerHtml(closeButton, params.closeButtonHtml)

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(closeButton, params, 'closeButton')

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.toggle(closeButton, params.showCloseButton)
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderContainer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContainer": () => (/* binding */ renderContainer)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");




function handleBackdropParam (container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop
  } else if (!backdrop) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["no-backdrop"])
  }
}

function handlePositionParam (container, position) {
  if (position in _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[position])
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)('The "position" parameter is not valid, defaulting to "center"')
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.center)
  }
}

function handleGrowParam (container, grow) {
  if (grow && typeof grow === 'string') {
    const growClass = `grow-${grow}`
    if (growClass in _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[growClass])
    }
  }
}

const renderContainer = (instance, params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getContainer()

  if (!container) {
    return
  }

  handleBackdropParam(container, params.backdrop)

  handlePositionParam(container, params.position)
  handleGrowParam(container, params.grow)

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.applyCustomClass(container, params, 'container')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderContent.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContent": () => (/* binding */ renderContent)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _renderInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderInput.js */ "./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js");



const renderContent = (instance, params) => {
  const htmlContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(htmlContainer, params, 'htmlContainer')

  // Content as HTML
  if (params.html) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.parseHtmlToContainer(params.html, htmlContainer)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(htmlContainer, 'block')

  // Content as plain text
  } else if (params.text) {
    htmlContainer.textContent = params.text
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(htmlContainer, 'block')

  // No content
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hide(htmlContainer)
  }

  (0,_renderInput_js__WEBPACK_IMPORTED_MODULE_1__.renderInput)(instance, params)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderFooter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFooter": () => (/* binding */ renderFooter)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderFooter = (instance, params) => {
  const footer = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getFooter()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.toggle(footer, params.footer)

  if (params.footer) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.parseHtmlToContainer(params.footer, footer)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(footer, params, 'footer')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderIcon": () => (/* binding */ renderIcon)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





const renderIcon = (instance, params) => {
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(instance)
  const icon = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getIcon()

  // if the given icon already rendered, apply the styling without re-rendering the icon
  if (innerParams && params.icon === innerParams.icon) {
    // Custom or default content
    setContent(icon, params)

    applyStyles(icon, params)
    return
  }

  if (!params.icon && !params.iconHtml) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(icon)
  }

  if (params.icon && Object.keys(_classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes).indexOf(params.icon) === -1) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.error)(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`)
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(icon)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.show(icon)

  // Custom or default content
  setContent(icon, params)

  applyStyles(icon, params)

  // Animate icon
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(icon, params.showClass.icon)
}

const applyStyles = (icon, params) => {
  for (const iconType in _classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes) {
    if (params.icon !== iconType) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.removeClass(icon, _classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes[iconType])
    }
  }
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(icon, _classes_js__WEBPACK_IMPORTED_MODULE_0__.iconTypes[params.icon])

  // Icon color
  setColor(icon, params)

  // Success icon background color
  adjustSuccessIconBackgoundColor()

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.applyCustomClass(icon, params, 'icon')
}

// Adjust success icon background color to match the popup background color
const adjustSuccessIconBackgoundColor = () => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup()
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color')
  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix')
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor
  }
}

const setContent = (icon, params) => {
  icon.textContent = ''

  if (params.iconHtml) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, iconContent(params.iconHtml))
  } else if (params.icon === 'success') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, `
      <div class="swal2-success-circular-line-left"></div>
      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
      <div class="swal2-success-circular-line-right"></div>
    `)
  } else if (params.icon === 'error') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, `
      <span class="swal2-x-mark">
        <span class="swal2-x-mark-line-left"></span>
        <span class="swal2-x-mark-line-right"></span>
      </span>
    `)
  } else {
    const defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    }
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]))
  }
}

const setColor = (icon, params) => {
  if (!params.iconColor) {
    return
  }
  icon.style.color = params.iconColor
  icon.style.borderColor = params.iconColor
  for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setStyle(icon, sel, 'backgroundColor', params.iconColor)
  }
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor)
}

const iconContent = (content) => `<div class="${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["icon-content"]}">${content}</div>`


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderImage.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderImage": () => (/* binding */ renderImage)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderImage = (instance, params) => {
  const image = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getImage()

  if (!params.imageUrl) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(image)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.show(image, '')

  // Src, alt
  image.setAttribute('src', params.imageUrl)
  image.setAttribute('alt', params.imageAlt)

  // Width, height
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(image, 'width', params.imageWidth)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(image, 'height', params.imageHeight)

  // Class
  image.className = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.image
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(image, params, 'image')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderInput.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderInput": () => (/* binding */ renderInput)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _privateProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../privateProps.js */ "./node_modules/sweetalert2/src/privateProps.js");





const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea']

const renderInput = (instance, params) => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup()
  const innerParams = _privateProps_js__WEBPACK_IMPORTED_MODULE_3__["default"].innerParams.get(instance)
  const rerender = !innerParams || params.input !== innerParams.input

  inputTypes.forEach((inputType) => {
    const inputClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[inputType]
    const inputContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass(popup, inputClass)

    // set attributes
    setAttributes(inputType, params.inputAttributes)

    // set class
    inputContainer.className = inputClass

    if (rerender) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(inputContainer)
    }
  })

  if (params.input) {
    if (rerender) {
      showInput(params)
    }
    // set custom class
    setCustomClass(params)
  }
}

const showInput = (params) => {
  if (!renderInputType[params.input]) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.error)(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`)
  }

  const inputContainer = getInputContainer(params.input)
  const input = renderInputType[params.input](inputContainer, params)
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.show(input)

  // input autofocus
  setTimeout(() => {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.focusInput(input)
  })
}

const removeAttributes = (input) => {
  for (let i = 0; i < input.attributes.length; i++) {
    const attrName = input.attributes[i].name
    if (!['type', 'value', 'style'].includes(attrName)) {
      input.removeAttribute(attrName)
    }
  }
}

const setAttributes = (inputType, inputAttributes) => {
  const input = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getInput(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup(), inputType)
  if (!input) {
    return
  }

  removeAttributes(input)

  for (const attr in inputAttributes) {
    input.setAttribute(attr, inputAttributes[attr])
  }
}

const setCustomClass = (params) => {
  const inputContainer = getInputContainer(params.input)
  if (params.customClass) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(inputContainer, params.customClass.input)
  }
}

const setInputPlaceholder = (input, params) => {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder
  }
}

const setInputLabel = (input, prependTo, params) => {
  if (params.inputLabel) {
    input.id = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input
    const label = document.createElement('label')
    const labelClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["input-label"]
    label.setAttribute('for', input.id)
    label.className = labelClass
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(label, params.customClass.inputLabel)
    label.innerText = params.inputLabel
    prependTo.insertAdjacentElement('beforebegin', label)
  }
}

const getInputContainer = (inputType) => {
  const inputClass = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[inputType] ? _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[inputType] : _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.input
  return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getChildByClass(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup(), inputClass)
}

const renderInputType = {}

renderInputType.text =
renderInputType.email =
renderInputType.password =
renderInputType.number =
renderInputType.tel =
renderInputType.url = (input, params) => {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue
  } else if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isPromise)(params.inputValue)) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof params.inputValue}"`)
  }
  setInputLabel(input, input, params)
  setInputPlaceholder(input, params)
  input.type = params.input
  return input
}

renderInputType.file = (input, params) => {
  setInputLabel(input, input, params)
  setInputPlaceholder(input, params)
  return input
}

renderInputType.range = (range, params) => {
  const rangeInput = range.querySelector('input')
  const rangeOutput = range.querySelector('output')
  rangeInput.value = params.inputValue
  rangeInput.type = params.input
  rangeOutput.value = params.inputValue
  setInputLabel(rangeInput, range, params)
  return range
}

renderInputType.select = (select, params) => {
  select.textContent = ''
  if (params.inputPlaceholder) {
    const placeholder = document.createElement('option')
    _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(placeholder, params.inputPlaceholder)
    placeholder.value = ''
    placeholder.disabled = true
    placeholder.selected = true
    select.appendChild(placeholder)
  }
  setInputLabel(select, select, params)
  return select
}

renderInputType.radio = (radio) => {
  radio.textContent = ''
  return radio
}

renderInputType.checkbox = (checkboxContainer, params) => {
  const checkbox = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getInput(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup(), 'checkbox')
  checkbox.value = 1
  checkbox.id = _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.checkbox
  checkbox.checked = Boolean(params.inputValue)
  const label = checkboxContainer.querySelector('span')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(label, params.inputPlaceholder)
  return checkboxContainer
}

renderInputType.textarea = (textarea, params) => {
  textarea.value = params.inputValue
  setInputPlaceholder(textarea, params)
  setInputLabel(textarea, textarea, params)

  const getMargin = (el) => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight)

  setTimeout(() => { // #2291
    if ('MutationObserver' in window) { // #1699
      const initialPopupWidth = parseInt(window.getComputedStyle(_dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup()).width)
      const textareaResizeHandler = () => {
        const textareaWidth = textarea.offsetWidth + getMargin(textarea)
        if (textareaWidth > initialPopupWidth) {
          _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup().style.width = `${textareaWidth}px`
        } else {
          _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getPopup().style.width = null
        }
      }
      new MutationObserver(textareaResizeHandler).observe(textarea, {
        attributes: true, attributeFilter: ['style']
      })
    }
  })

  return textarea
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderPopup.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPopup": () => (/* binding */ renderPopup)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");



const renderPopup = (instance, params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getContainer()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getPopup()

  // Width
  if (params.toast) { // #2170
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(container, 'width', params.width)
    popup.style.width = '100%'
    popup.insertBefore(_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getLoader(), _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getIcon())
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(popup, 'width', params.width)
  }

  // Padding
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyNumericalStyle(popup, 'padding', params.padding)

  // Background
  if (params.background) {
    popup.style.background = params.background
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.hide(_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.getValidationMessage())

  // Classes
  addClasses(popup, params)
}

const addClasses = (popup, params) => {
  // Default Class + showClass when updating Swal.update({})
  popup.className = `${_classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.popup} ${_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.isVisible(popup) ? params.showClass.popup : ''}`

  if (params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["toast-shown"])
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.toast)
  } else {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses.modal)
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomClass(popup, params, 'popup')
  if (typeof params.customClass === 'string') {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, params.customClass)
  }

  // Icon class (#1842)
  if (params.icon) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.addClass(popup, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses[`icon-${params.icon}`])
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderProgressSteps.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProgressSteps": () => (/* binding */ renderProgressSteps)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");




const createStepElement = (step) => {
  const stepEl = document.createElement('li')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(stepEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-step"])
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.setInnerHtml(stepEl, step)
  return stepEl
}

const createLineElement = (params) => {
  const lineEl = document.createElement('li')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(lineEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["progress-step-line"])
  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance
  }
  return lineEl
}

const renderProgressSteps = (instance, params) => {
  const progressStepsContainer = _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.getProgressSteps()
  if (!params.progressSteps || params.progressSteps.length === 0) {
    return _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.hide(progressStepsContainer)
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.show(progressStepsContainer)
  progressStepsContainer.textContent = ''
  if (params.currentProgressStep >= params.progressSteps.length) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(
      'Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
      '(currentProgressStep like JS arrays starts from 0)'
    )
  }

  params.progressSteps.forEach((step, index) => {
    const stepEl = createStepElement(step)
    progressStepsContainer.appendChild(stepEl)
    if (index === params.currentProgressStep) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_2__.addClass(stepEl, _classes_js__WEBPACK_IMPORTED_MODULE_0__.swalClasses["active-progress-step"])
    }

    if (index !== params.progressSteps.length - 1) {
      const lineEl = createLineElement(params)
      progressStepsContainer.appendChild(lineEl)
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/dom/renderers/renderTitle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTitle": () => (/* binding */ renderTitle)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const renderTitle = (instance, params) => {
  const title = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getTitle()

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.toggle(title, params.title || params.titleText, 'block')

  if (params.title) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.parseHtmlToContainer(params.title, title)
  }

  if (params.titleText) {
    title.innerText = params.titleText
  }

  // Custom class
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.applyCustomClass(title, params, 'title')
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/getTemplateParams.js":
/*!*****************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/getTemplateParams.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplateParams": () => (/* binding */ getTemplateParams)
/* harmony export */ });
/* harmony import */ var _params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params.js */ "./node_modules/sweetalert2/src/utils/params.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");



const swalStringParams = ['swal-title', 'swal-html', 'swal-footer']

const getTemplateParams = (params) => {
  const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template
  if (!template) {
    return {}
  }
  const templateContent = template.content

  showWarningsForElements(templateContent)

  const result = Object.assign(
    getSwalParams(templateContent),
    getSwalButtons(templateContent),
    getSwalImage(templateContent),
    getSwalIcon(templateContent),
    getSwalInput(templateContent),
    getSwalStringParams(templateContent, swalStringParams),
  )
  return result
}

const getSwalParams = (templateContent) => {
  const result = {}
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(templateContent.querySelectorAll('swal-param')).forEach((param) => {
    showWarningsForAttributes(param, ['name', 'value'])
    const paramName = param.getAttribute('name')
    let value = param.getAttribute('value')
    if (typeof _params_js__WEBPACK_IMPORTED_MODULE_0__["default"][paramName] === 'boolean' && value === 'false') {
      value = false
    }
    if (typeof _params_js__WEBPACK_IMPORTED_MODULE_0__["default"][paramName] === 'object') {
      value = JSON.parse(value)
    }
    result[paramName] = value
  })
  return result
}

const getSwalButtons = (templateContent) => {
  const result = {}
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(templateContent.querySelectorAll('swal-button')).forEach((button) => {
    showWarningsForAttributes(button, ['type', 'color', 'aria-label'])
    const type = button.getAttribute('type')
    result[`${type}ButtonText`] = button.innerHTML
    result[`show${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter)(type)}Button`] = true
    if (button.hasAttribute('color')) {
      result[`${type}ButtonColor`] = button.getAttribute('color')
    }
    if (button.hasAttribute('aria-label')) {
      result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label')
    }
  })
  return result
}

const getSwalImage = (templateContent) => {
  const result = {}
  const image = templateContent.querySelector('swal-image')
  if (image) {
    showWarningsForAttributes(image, ['src', 'width', 'height', 'alt'])
    if (image.hasAttribute('src')) {
      result.imageUrl = image.getAttribute('src')
    }
    if (image.hasAttribute('width')) {
      result.imageWidth = image.getAttribute('width')
    }
    if (image.hasAttribute('height')) {
      result.imageHeight = image.getAttribute('height')
    }
    if (image.hasAttribute('alt')) {
      result.imageAlt = image.getAttribute('alt')
    }
  }
  return result
}

const getSwalIcon = (templateContent) => {
  const result = {}
  const icon = templateContent.querySelector('swal-icon')
  if (icon) {
    showWarningsForAttributes(icon, ['type', 'color'])
    if (icon.hasAttribute('type')) {
      result.icon = icon.getAttribute('type')
    }
    if (icon.hasAttribute('color')) {
      result.iconColor = icon.getAttribute('color')
    }
    result.iconHtml = icon.innerHTML
  }
  return result
}

const getSwalInput = (templateContent) => {
  const result = {}
  const input = templateContent.querySelector('swal-input')
  if (input) {
    showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value'])
    result.input = input.getAttribute('type') || 'text'
    if (input.hasAttribute('label')) {
      result.inputLabel = input.getAttribute('label')
    }
    if (input.hasAttribute('placeholder')) {
      result.inputPlaceholder = input.getAttribute('placeholder')
    }
    if (input.hasAttribute('value')) {
      result.inputValue = input.getAttribute('value')
    }
  }
  const inputOptions = templateContent.querySelectorAll('swal-input-option')
  if (inputOptions.length) {
    result.inputOptions = {}
    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(inputOptions).forEach((option) => {
      showWarningsForAttributes(option, ['value'])
      const optionValue = option.getAttribute('value')
      const optionName = option.innerHTML
      result.inputOptions[optionValue] = optionName
    })
  }
  return result
}

const getSwalStringParams = (templateContent, paramNames) => {
  const result = {}
  for (const i in paramNames) {
    const paramName = paramNames[i]
    const tag = templateContent.querySelector(paramName)
    if (tag) {
      showWarningsForAttributes(tag, [])
      result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim()
    }
  }
  return result
}

const showWarningsForElements = (template) => {
  const allowedElements = swalStringParams.concat([
    'swal-param',
    'swal-button',
    'swal-image',
    'swal-icon',
    'swal-input',
    'swal-input-option',
  ])
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(template.children).forEach((el) => {
    const tagName = el.tagName.toLowerCase()
    if (allowedElements.indexOf(tagName) === -1) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)(`Unrecognized element <${tagName}>`)
    }
  })
}

const showWarningsForAttributes = (el, allowedAttributes) => {
  ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toArray)(el.attributes).forEach((attribute) => {
    if (allowedAttributes.indexOf(attribute.name) === -1) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.warn)([
        `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
        `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`
      ])
    }
  })
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/iosFix.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/iosFix.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iOSfix": () => (/* binding */ iOSfix),
/* harmony export */   "undoIOSfix": () => (/* binding */ undoIOSfix)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* istanbul ignore file */



// Fix iOS scrolling http://stackoverflow.com/q/39626302

const iOSfix = () => {
  const iOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  if (iOS && !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)) {
    const offset = document.body.scrollTop
    document.body.style.top = `${offset * -1}px`
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)
    lockBodyScroll()
    addBottomPaddingForTallPopups() // #1948
  }
}

const addBottomPaddingForTallPopups = () => {
  const safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)
  if (safari) {
    const bottomPanelHeight = 44
    if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
      _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer().style.paddingBottom = `${bottomPanelHeight}px`
    }
  }
}

const lockBodyScroll = () => { // #1246
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  let preventTouchMove
  container.ontouchstart = (e) => {
    preventTouchMove = shouldPreventTouchMove(e)
  }
  container.ontouchmove = (e) => {
    if (preventTouchMove) {
      e.preventDefault()
      e.stopPropagation()
    }
  }
}

const shouldPreventTouchMove = (event) => {
  const target = event.target
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  if (isStylys(event) || isZoom(event)) {
    return false
  }
  if (target === container) {
    return true
  }
  if (
    !_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isScrollable(container) &&
    target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(
      _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isScrollable(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer()) && // #1944
      _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getHtmlContainer().contains(target)
    )
  ) {
    return true
  }
  return false
}

const isStylys = (event) => { // #1786
  return event.touches && event.touches.length && event.touches[0].touchType === 'stylus'
}

const isZoom = (event) => { // #1891
  return event.touches && event.touches.length > 1
}

const undoIOSfix = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)) {
    const offset = parseInt(document.body.style.top, 10)
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(document.body, _utils_classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.iosfix)
    document.body.style.top = ''
    document.body.scrollTop = (offset * -1)
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/isNodeEnv.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/isNodeEnv.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeEnv": () => (/* binding */ isNodeEnv)
/* harmony export */ });
// Detect Node env
const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined'


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/openPopup.js":
/*!*********************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/openPopup.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHOW_CLASS_TIMEOUT": () => (/* binding */ SHOW_CLASS_TIMEOUT),
/* harmony export */   "openPopup": () => (/* binding */ openPopup)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./node_modules/sweetalert2/src/utils/classes.js");
/* harmony import */ var _scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbarFix.js */ "./node_modules/sweetalert2/src/utils/scrollbarFix.js");
/* harmony import */ var _iosFix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iosFix.js */ "./node_modules/sweetalert2/src/utils/iosFix.js");
/* harmony import */ var _aria_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aria.js */ "./node_modules/sweetalert2/src/utils/aria.js");
/* harmony import */ var _globalState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalState.js */ "./node_modules/sweetalert2/src/globalState.js");







const SHOW_CLASS_TIMEOUT = 10

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param params
 */
const openPopup = (params) => {
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()

  if (typeof params.willOpen === 'function') {
    params.willOpen(popup)
  }

  const bodyStyles = window.getComputedStyle(document.body)
  const initialBodyOverflow = bodyStyles.overflowY
  addClasses(container, popup, params)

  // scrolling is 'hidden' until animation is done, after that 'auto'
  setTimeout(() => {
    setScrollingVisibility(container, popup)
  }, SHOW_CLASS_TIMEOUT)

  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isModal()) {
    fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow)
    ;(0,_aria_js__WEBPACK_IMPORTED_MODULE_4__.setAriaHidden)()
  }

  if (!_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.isToast() && !_globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].previousActiveElement) {
    _globalState_js__WEBPACK_IMPORTED_MODULE_5__["default"].previousActiveElement = document.activeElement
  }

  if (typeof params.didOpen === 'function') {
    setTimeout(() => params.didOpen(popup))
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(container, _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["no-transition"])
}

const swalOpenAnimationFinished = (event) => {
  const popup = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getPopup()
  if (event.target !== popup) {
    return
  }
  const container = _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.getContainer()
  popup.removeEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.animationEndEvent, swalOpenAnimationFinished)
  container.style.overflowY = 'auto'
}

const setScrollingVisibility = (container, popup) => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.animationEndEvent && _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden'
    popup.addEventListener(_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.animationEndEvent, swalOpenAnimationFinished)
  } else {
    container.style.overflowY = 'auto'
  }
}

const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
  ;(0,_iosFix_js__WEBPACK_IMPORTED_MODULE_3__.iOSfix)()

  if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
    (0,_scrollbarFix_js__WEBPACK_IMPORTED_MODULE_2__.fixScrollbar)()
  }

  // sweetalert2/issues/1247
  setTimeout(() => {
    container.scrollTop = 0
  })
}

const addClasses = (container, popup, params) => {
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(container, params.showClass.backdrop)
  // the workaround with setting/unsetting opacity is needed for #2019 and 2059
  popup.style.setProperty('opacity', '0', 'important')
  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.show(popup, 'grid')
  setTimeout(() => {
    // Animate popup right after showing it
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass(popup, params.showClass.popup)
    // and remove the opacity workaround
    popup.style.removeProperty('opacity')
  }, SHOW_CLASS_TIMEOUT) // 10ms in order to fix #2062

  _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses.shown)
  if (params.heightAuto && params.backdrop && !params.toast) {
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.addClass([document.documentElement, document.body], _classes_js__WEBPACK_IMPORTED_MODULE_1__.swalClasses["height-auto"])
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/params.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/params.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultParams": () => (/* binding */ defaultParams),
/* harmony export */   "updatableParams": () => (/* binding */ updatableParams),
/* harmony export */   "deprecatedParams": () => (/* binding */ deprecatedParams),
/* harmony export */   "isValidParameter": () => (/* binding */ isValidParameter),
/* harmony export */   "isUpdatableParameter": () => (/* binding */ isUpdatableParameter),
/* harmony export */   "isDeprecatedParameter": () => (/* binding */ isDeprecatedParameter),
/* harmony export */   "showWarningsForParams": () => (/* binding */ showWarningsForParams),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");


const defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: undefined,
  iconColor: undefined,
  iconHtml: undefined,
  template: undefined,
  toast: false,
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show',
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide',
  },
  customClass: {},
  target: 'body',
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showDenyButton: false,
  showCancelButton: false,
  preConfirm: undefined,
  preDeny: undefined,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: undefined,
  denyButtonText: 'No',
  denyButtonAriaLabel: '',
  denyButtonColor: undefined,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: undefined,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusDeny: false,
  focusCancel: false,
  returnFocus: true,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  loaderHtml: '',
  showLoaderOnConfirm: false,
  showLoaderOnDeny: false,
  imageUrl: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: '',
  timer: undefined,
  timerProgressBar: false,
  width: undefined,
  padding: undefined,
  background: undefined,
  input: undefined,
  inputPlaceholder: '',
  inputLabel: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: undefined,
  returnInputValueOnDeny: false,
  validationMessage: undefined,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: undefined,
  progressStepsDistance: undefined,
  willOpen: undefined,
  didOpen: undefined,
  didRender: undefined,
  willClose: undefined,
  didClose: undefined,
  didDestroy: undefined,
  scrollbarPadding: true
}

const updatableParams = [
  'allowEscapeKey',
  'allowOutsideClick',
  'background',
  'buttonsStyling',
  'cancelButtonAriaLabel',
  'cancelButtonColor',
  'cancelButtonText',
  'closeButtonAriaLabel',
  'closeButtonHtml',
  'confirmButtonAriaLabel',
  'confirmButtonColor',
  'confirmButtonText',
  'currentProgressStep',
  'customClass',
  'denyButtonAriaLabel',
  'denyButtonColor',
  'denyButtonText',
  'didClose',
  'didDestroy',
  'footer',
  'hideClass',
  'html',
  'icon',
  'iconColor',
  'iconHtml',
  'imageAlt',
  'imageHeight',
  'imageUrl',
  'imageWidth',
  'preConfirm',
  'preDeny',
  'progressSteps',
  'returnFocus',
  'reverseButtons',
  'showCancelButton',
  'showCloseButton',
  'showConfirmButton',
  'showDenyButton',
  'text',
  'title',
  'titleText',
  'willClose',
]

const deprecatedParams = {}

const toastIncompatibleParams = [
  'allowOutsideClick',
  'allowEnterKey',
  'backdrop',
  'focusConfirm',
  'focusDeny',
  'focusCancel',
  'returnFocus',
  'heightAuto',
  'keydownListenerCapture'
]

/**
 * Is valid parameter
 * @param {String} paramName
 */
const isValidParameter = (paramName) => {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName)
}

/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */
const isUpdatableParameter = (paramName) => {
  return updatableParams.indexOf(paramName) !== -1
}

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
const isDeprecatedParameter = (paramName) => {
  return deprecatedParams[paramName]
}

const checkIfParamIsValid = (param) => {
  if (!isValidParameter(param)) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)(`Unknown parameter "${param}"`)
  }
}

const checkIfToastParamIsValid = (param) => {
  if (toastIncompatibleParams.includes(param)) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)(`The parameter "${param}" is incompatible with toasts`)
  }
}

const checkIfParamIsDeprecated = (param) => {
  if (isDeprecatedParameter(param)) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warnAboutDeprecation)(param, isDeprecatedParameter(param))
  }
}

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
const showWarningsForParams = (params) => {
  if (!params.backdrop && params.allowOutsideClick) {
    (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`')
  }

  for (const param in params) {
    checkIfParamIsValid(param)

    if (params.toast) {
      checkIfToastParamIsValid(param)
    }

    checkIfParamIsDeprecated(param)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultParams);


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/scrollbarFix.js":
/*!************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/scrollbarFix.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fixScrollbar": () => (/* binding */ fixScrollbar),
/* harmony export */   "undoScrollbar": () => (/* binding */ undoScrollbar)
/* harmony export */ });
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");


const fixScrollbar = () => {
  // for queues, do not do this more than once
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding !== null) {
    return
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'))
    document.body.style.paddingRight = `${_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding + _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.measureScrollbar()}px`
  }
}

const undoScrollbar = () => {
  if (_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding !== null) {
    document.body.style.paddingRight = `${_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding}px`
    _dom_index_js__WEBPACK_IMPORTED_MODULE_0__.states.previousBodyPadding = null
  }
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/setParameters.js":
/*!*************************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/setParameters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setParameters)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/sweetalert2/src/utils/utils.js");
/* harmony import */ var _dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/index.js */ "./node_modules/sweetalert2/src/utils/dom/index.js");
/* harmony import */ var _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultInputValidators.js */ "./node_modules/sweetalert2/src/utils/defaultInputValidators.js");




function setDefaultInputValidators (params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(_defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__["default"]).forEach((key) => {
      if (params.input === key) {
        params.inputValidator = _defaultInputValidators_js__WEBPACK_IMPORTED_MODULE_2__["default"][key]
      }
    })
  }
}

function validateCustomTargetElement (params) {
  // Determine if the custom target element is valid
  if (
    !params.target ||
    (typeof params.target === 'string' && !document.querySelector(params.target)) ||
    (typeof params.target !== 'string' && !params.target.appendChild)
  ) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)('Target parameter is not valid, defaulting to "body"')
    params.target = 'body'
  }
}

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters (params) {
  setDefaultInputValidators(params)

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.warn)(
      'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
      'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
      'https://sweetalert2.github.io/#ajax-request'
    )
  }

  validateCustomTargetElement(params)

  // Replace newlines with <br> in title
  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />')
  }

  _dom_index_js__WEBPACK_IMPORTED_MODULE_1__.init(params)
}


/***/ }),

/***/ "./node_modules/sweetalert2/src/utils/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/sweetalert2/src/utils/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "consolePrefix": () => (/* binding */ consolePrefix),
/* harmony export */   "uniqueArray": () => (/* binding */ uniqueArray),
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "warnOnce": () => (/* binding */ warnOnce),
/* harmony export */   "warnAboutDeprecation": () => (/* binding */ warnAboutDeprecation),
/* harmony export */   "callIfFunction": () => (/* binding */ callIfFunction),
/* harmony export */   "hasToPromiseFn": () => (/* binding */ hasToPromiseFn),
/* harmony export */   "asPromise": () => (/* binding */ asPromise),
/* harmony export */   "isPromise": () => (/* binding */ isPromise)
/* harmony export */ });
const consolePrefix = 'SweetAlert2:'

/**
 * Filter the unique values into a new array
 * @param arr
 */
const uniqueArray = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}

/**
 * Capitalize the first letter of a string
 * @param str
 */
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Convert NodeList to Array
 * @param nodeList
 */
const toArray = (nodeList) => Array.prototype.slice.call(nodeList)

/**
 * Standardise console warnings
 * @param message
 */
const warn = (message) => {
  console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`)
}

/**
 * Standardise console errors
 * @param message
 */
const error = (message) => {
  console.error(`${consolePrefix} ${message}`)
}

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
const previousWarnOnceMessages = []

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
const warnOnce = (message) => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message)
    warn(message)
  }
}

/**
 * Show a one-time console warning about deprecated params/methods
 */
const warnAboutDeprecation = (deprecatedParam, useInstead) => {
  warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`)
}

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
const callIfFunction = (arg) => typeof arg === 'function' ? arg() : arg

const hasToPromiseFn = (arg) => arg && typeof arg.toPromise === 'function'

const asPromise = (arg) => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg)

const isPromise = (arg) => arg && Promise.resolve(arg) === arg


/***/ }),

/***/ "./src/Modules/domManager.js":
/*!***********************************!*\
  !*** ./src/Modules/domManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formModule */ "./src/Modules/formModule.js");
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFactory */ "./src/Modules/projectFactory.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ "./src/Modules/projectManager.js");
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskFactory */ "./src/Modules/taskFactory.js");





const domManager = (function(){
    let display; 
    let sideBar;
    let taskList;
    let projects;
    let selectedProject;
    let scrollPosition = 0;
    const render = (domElement, projectsList) => {
        display = domElement;
        display.innerHTML = ''; //Clean the page contents 
        projects = projectsList;

        sideBar = document.createElement('div');
        sideBar.classList.add('side-bar');
        addProjectsToSidebar(projects);

        taskList = document.createElement('div');
        taskList.classList.add('task-list');
        addTasklistContents(projects);
        
        display.appendChild(sideBar);
        display.appendChild(taskList);
        taskList.scrollTop = scrollPosition
    }
    const createProjectElement = (project) => {
        let newProjectElement = document.createElement('div');
        newProjectElement.innerHTML = `<div class="project"><h2>${project.name}</h3></div>`;
        if(project.isSelected){
            newProjectElement.classList.add('selected');
            selectedProject = project;
        }
        newProjectElement.addEventListener('click', changeSelectedProject.bind(null, project));
        return newProjectElement;
    }
    const createTaskElement = (task) => {
        let newTaskElement = document.createElement('div');
        newTaskElement.innerHTML = `<div class="task">
        <div class="task-header">
        <input type="checkbox" ${task.isDone? 'checked':''}> 
                <h2>${task.title}</h2>
                <h3>${task.dueDate}</h3>
            </div>
            <p>${task.description}</p>
        </div>`;

        if (task.isDone) newTaskElement.classList.add('done');
        newTaskElement.querySelector('input').addEventListener('change', onTaskComplete.bind(null, task));

        return newTaskElement;
    }
    const createAddTaskButton = (pos) => {
        let newTaskButtonElement = document.createElement('div');
        newTaskButtonElement.innerHTML = `
        <div class="add-task-button">
            <h2>Add task</h2>
        </div>
        `;
        newTaskButtonElement.addEventListener('click', addTaskToProject.bind(null, pos));
        return newTaskButtonElement;
    }
    const createAddProjectButton = () => {
        let newProjectButtonElement = document.createElement('div');
        newProjectButtonElement.innerHTML = `
        <div class="add-task-button">
            <h2>Add project<h2>
        </div>
        `;
        newProjectButtonElement.addEventListener('click', addNewProject);
        return newProjectButtonElement;
    }
    const addProjectsToSidebar = (projects) => {
        projects.forEach(project => {
            let newProject = createProjectElement(project);
            sideBar.appendChild(newProject);
        })
        sideBar.appendChild(createAddProjectButton());
    }
    const addTasklistContents = () => {
        let title = document.createElement('h1');
        title.innerHTML = selectedProject.name;
        taskList.appendChild(title);
        taskList.appendChild(createAddTaskButton('start'));
        selectedProject.tasks.forEach(task =>{
            let newTask = createTaskElement(task);
            taskList.appendChild(newTask);
        })
        if(selectedProject.tasks.length > 0){
            taskList.appendChild(createAddTaskButton('end'));
        }
    }
    const changeSelectedProject = (newSelectedProject, e) => {
        projects.forEach((project)=>{
            project.toggleSelected(false); // Unselect all projects
        })
        newSelectedProject.toggleSelected(true); 
        selectedProject = newSelectedProject;
        render(display, projects); // Clean the page and draw again
    }
    const onTaskComplete = (completedTask, e) => {
        completedTask.setCompleted();
        scrollPosition = taskList.scrollTop;
        render(display, projects);
    }  
    const addTaskToProject = (pos, e) => {
        _formModule__WEBPACK_IMPORTED_MODULE_0__["default"].askTaskInfo().then((taskData)=>{
            if(taskData){
                let newTaskData = JSON.parse(taskData);
                selectedProject.addTask((0,_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])(newTaskData.title, newTaskData.description, newTaskData.date,1), pos);
                scrollPosition = taskList.scrollTop;
                render(display, projects);  
            }else{
                console.log('No task was created');
                return
            }
        });
    }
    const addNewProject = (e) => {
            _formModule__WEBPACK_IMPORTED_MODULE_0__["default"].askProjectInfo().then((projectName)=>{
                if(projectName){
                    let isDuplicate = _projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].addProject((0,_projectFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName));
                    if(isDuplicate){
                        _formModule__WEBPACK_IMPORTED_MODULE_0__["default"].showDuplicateMessage();
                    }
                    render(display, projects);
                }
        })
    }
    return {
        render
    } 
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManager);

/***/ }),

/***/ "./src/Modules/formModule.js":
/*!***********************************!*\
  !*** ./src/Modules/formModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ "./node_modules/sweetalert2/src/sweetalert2.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");


const formModule = (function(){
    const askTaskInfo =async()=> {
        const {value: formValues } = await sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__["default"].fire({
            title: 'New Task',
            html:
              `<div class="form-container"> 
                <input id="task-title-input" name="title" placeholder="Task title" class="swal2-input" required>
                <input id="task-date-input" class="swal2-input" value="${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(),'yyyy-MM-dd')}" type="date">   
              </div>
              <input id="task-desc-input" placeholder="Task description..." class="swal2-input">`,
            focusConfirm: false,
            preConfirm: () => {
              if(document.getElementById('task-title-input').value){
                let dateString = document.getElementById('task-date-input').value;
                return {
                  title: document.getElementById('task-title-input').value,
                  description: document.getElementById('task-desc-input').value,
                  date: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dateString), 'dd/MM/yyyy'),
                }
              }else{
                sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__["default"].showValidationMessage('You must provide a title');
              }
            }
          })
          
          if (formValues) {
            return(JSON.stringify(formValues));
          }
    }
    const askProjectInfo = async() => {
      const { value: projectName } = await sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__["default"].fire({
        title: 'New Project',
        input: 'text',
        inputLabel: 'Project name',
        inputValue: 'My project',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Project name can\'t be empty';
          }
          if(value.length > 10){
            return 'Project name must be under 10 characters';
          }
        }
      })
      
      if (projectName) {
        return projectName;
      }
    }
    const showDuplicateMessage = () => {
      sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__["default"].fire("Error", 'Can\'t add duplicate projects', 'error');
    }
    return {
        askTaskInfo,
        askProjectInfo,
        showDuplicateMessage
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formModule);

/***/ }),

/***/ "./src/Modules/projectFactory.js":
/*!***************************************!*\
  !*** ./src/Modules/projectFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectFactory = (name, selected = false) => {
    let project = {};
    project.name = name;
    project.isSelected = selected;
    project.tasks = [];

    project.addTask = (task, position = 'end') => {
        if(position == 'start'){
            project.tasks.unshift(task)
        }else{
            project.tasks.push(task);
        }
    }
    project.toggleSelected = (selected) => {
        if(selected && project.isSelected){
            return // Do nothing if the project is already selected
        }
        project.isSelected = selected;
    }
    return project;
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);

/***/ }),

/***/ "./src/Modules/projectManager.js":
/*!***************************************!*\
  !*** ./src/Modules/projectManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectManager = (function(){
    let projects = []
    const getProjects = () => {
        return projects;
    }
    const addProject = (newProject) => {  //Returns true if project is a duplicate
        let isDuplicate = projects.some((project)=>{
            return project.name == newProject.name;
        })
        if(isDuplicate){
            return true; 
        }else{
            projects.push(newProject);
        }
    }
    const removeProject = (projectName) => {
        projects = projects.filter((project)=>{
            return project.name != projectName;
        })
    }
    return {
        getProjects,
        addProject,
        removeProject
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);

/***/ }),

/***/ "./src/Modules/taskFactory.js":
/*!************************************!*\
  !*** ./src/Modules/taskFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskFactory = (title, description, dueDate, priority, isDone = false) => {
    let task = {}
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.isDone = isDone;
    task.setCompleted = () =>{
        task.isDone = !task.isDone;
    }
    return task
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modules_domManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/domManager */ "./src/Modules/domManager.js");
/* harmony import */ var _Modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/projectFactory */ "./src/Modules/projectFactory.js");
/* harmony import */ var _Modules_projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/projectManager */ "./src/Modules/projectManager.js");
/* harmony import */ var _Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/taskFactory */ "./src/Modules/taskFactory.js");





let display = document.querySelector('main');
const project1 = (0,_Modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('LOKOK', true);
const project2 = (0,_Modules_projectFactory__WEBPACK_IMPORTED_MODULE_1__["default"])('COoC');
_Modules_projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(project1);
_Modules_projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(project2);
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project1.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1));
project2.addTask((0,_Modules_taskFactory__WEBPACK_IMPORTED_MODULE_3__["default"])('Task 1', 'Description blablblablala', '10/10/1999', 1, true));

_Modules_domManager__WEBPACK_IMPORTED_MODULE_0__["default"].render(display, _Modules_projectManager__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDBEO0FBQ1c7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EseUJBQXlCLHdFQUFjLGlCQUFpQjs7QUFFeEQsNkVBQTZFOztBQUU3RTtBQUNBO0FBQ0EsYUFBYSxxRUFBZTtBQUM1QixNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTs7O0FBR04sV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFzQiwyRUFBaUIsUUFBUTs7QUFFL0MsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFpQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsb0VBQVU7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQix5RUFBZTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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ZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL1N3ZWV0QWxlcnQuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9nbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9fZGVzdHJveS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9fbWFpbi5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9idXR0b25zLWhhbmRsZXJzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL2Nsb3NlLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL2VuYWJsZS1kaXNhYmxlLWVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL2dldElucHV0LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL2hpZGVMb2FkaW5nLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL2tleWRvd24taGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy9wb3B1cC1jbGljay1oYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL3Byb2dyZXNzLXN0ZXBzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvaW5zdGFuY2VNZXRob2RzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL2luc3RhbmNlTWV0aG9kcy92YWxpZGF0aW9uLW1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9wcml2YXRlTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3ByaXZhdGVQcm9wcy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N0YXRpY01ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zdGF0aWNNZXRob2RzL2FyZ3NUb1BhcmFtcy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N0YXRpY01ldGhvZHMvYmluZENsaWNrSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N0YXRpY01ldGhvZHMvZG9tLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3RhdGljTWV0aG9kcy9maXJlLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3RhdGljTWV0aG9kcy9taXhpbi5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3N0YXRpY01ldGhvZHMvc2hvd0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zdGF0aWNNZXRob2RzL3RpbWVyLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9EaXNtaXNzUmVhc29uLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9hcmlhLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RlZmF1bHRJbnB1dFZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vYW5pbWF0aW9uRW5kRXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vZG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vZ2V0dGVycy5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9pbml0LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL2lucHV0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vbWVhc3VyZVNjcm9sbGJhci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9wYXJzZUh0bWxUb0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJBY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJDbG9zZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJDb250ZW50LmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJGb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcmVuZGVyZXJzL3JlbmRlckljb24uanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcmVuZGVyZXJzL3JlbmRlckltYWdlLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZG9tL3JlbmRlcmVycy9yZW5kZXJJbnB1dC5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL3V0aWxzL2RvbS9yZW5kZXJlcnMvcmVuZGVyUG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcmVuZGVyZXJzL3JlbmRlclByb2dyZXNzU3RlcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9kb20vcmVuZGVyZXJzL3JlbmRlclRpdGxlLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvZ2V0VGVtcGxhdGVQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9pb3NGaXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9pc05vZGVFbnYuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9vcGVuUG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9zY3JvbGxiYXJGaXguanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy91dGlscy9zZXRQYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3RvLWRheS8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZGF5Ly4vc3JjL01vZHVsZXMvZG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kYXkvLi9zcmMvTW9kdWxlcy9mb3JtTW9kdWxlLmpzIiwid2VicGFjazovL3RvLWRheS8uL3NyYy9Nb2R1bGVzL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRheS8uL3NyYy9Nb2R1bGVzL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRheS8uL3NyYy9Nb2R1bGVzL3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRheS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kYXkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRheS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRheS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRheS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRoZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGFuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMDtcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDA7XG52YXIgREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA9IDI7XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHByZXZpb3VzIGBwYXJzZWAgaW1wbGVtZW50YXRpb24gd2FzIHJlbmFtZWQgdG8gYHBhcnNlSVNPYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBwYXJzZSgnMjAxNi0wMS0wMScpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIHBhcnNlSVNPKCcyMDE2LTAxLTAxJylcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyB2YWxpZGF0ZXMgc2VwYXJhdGUgZGF0ZSBhbmQgdGltZSB2YWx1ZXMgaW4gSVNPLTg2MDEgc3RyaW5nc1xuICogICBhbmQgcmV0dXJucyBgSW52YWxpZCBEYXRlYCBpZiB0aGUgZGF0ZSBpcyBpbnZhbGlkLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBwYXJzZUlTTygnMjAxOC0xMy0zMicpXG4gKiAgIC8vPT4gSW52YWxpZCBEYXRlXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgZG9lc24ndCBmYWxsIGJhY2sgdG8gYG5ldyBEYXRlYCBjb25zdHJ1Y3RvclxuICogICBpZiBpdCBmYWlscyB0byBwYXJzZSBhIHN0cmluZyBhcmd1bWVudC4gSW5zdGVhZCwgaXQgcmV0dXJucyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoaXNOYU4oZGF0ZSkgfHwgIWRhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSB8fCB0aW1lID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gbnVsbDtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdICYmIHBhcnNlSW50KGNhcHR1cmVzWzFdKTtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSAmJiBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG51bGw7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBEaXNtaXNzUmVhc29uIH0gZnJvbSAnLi91dGlscy9EaXNtaXNzUmVhc29uLmpzJ1xuaW1wb3J0ICogYXMgc3RhdGljTWV0aG9kcyBmcm9tICcuL3N0YXRpY01ldGhvZHMuanMnXG5pbXBvcnQgKiBhcyBpbnN0YW5jZU1ldGhvZHMgZnJvbSAnLi9pbnN0YW5jZU1ldGhvZHMuanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4vcHJpdmF0ZVByb3BzLmpzJ1xuXG5sZXQgY3VycmVudEluc3RhbmNlXG5cbmNsYXNzIFN3ZWV0QWxlcnQge1xuICBjb25zdHJ1Y3RvciAoLi4uYXJncykge1xuICAgIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjdXJyZW50SW5zdGFuY2UgPSB0aGlzXG5cbiAgICBjb25zdCBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdmFsdWU6IG91dGVyUGFyYW1zLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fbWFpbih0aGlzLnBhcmFtcylcbiAgICBwcml2YXRlUHJvcHMucHJvbWlzZS5zZXQodGhpcywgcHJvbWlzZSlcbiAgfVxuXG4gIC8vIGBjYXRjaGAgY2Fubm90IGJlIHRoZSBuYW1lIG9mIGEgbW9kdWxlIGV4cG9ydCwgc28gd2UgZGVmaW5lIG91ciB0aGVuYWJsZSBtZXRob2RzIGhlcmUgaW5zdGVhZFxuICB0aGVuIChvbkZ1bGZpbGxlZCkge1xuICAgIGNvbnN0IHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcylcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKG9uRnVsZmlsbGVkKVxuICB9XG5cbiAgZmluYWxseSAob25GaW5hbGx5KSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKVxuICAgIHJldHVybiBwcm9taXNlLmZpbmFsbHkob25GaW5hbGx5KVxuICB9XG59XG5cbi8vIEFzc2lnbiBpbnN0YW5jZSBtZXRob2RzIGZyb20gc3JjL2luc3RhbmNlTWV0aG9kcy8qLmpzIHRvIHByb3RvdHlwZVxuT2JqZWN0LmFzc2lnbihTd2VldEFsZXJ0LnByb3RvdHlwZSwgaW5zdGFuY2VNZXRob2RzKVxuXG4vLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG5PYmplY3QuYXNzaWduKFN3ZWV0QWxlcnQsIHN0YXRpY01ldGhvZHMpXG5cbi8vIFByb3h5IHRvIGluc3RhbmNlIG1ldGhvZHMgdG8gY29uc3RydWN0b3IsIGZvciBub3csIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuT2JqZWN0LmtleXMoaW5zdGFuY2VNZXRob2RzKS5mb3JFYWNoKGtleSA9PiB7XG4gIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgaWYgKGN1cnJlbnRJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRJbnN0YW5jZVtrZXldKC4uLmFyZ3MpXG4gICAgfVxuICB9XG59KVxuXG5Td2VldEFsZXJ0LkRpc21pc3NSZWFzb24gPSBEaXNtaXNzUmVhc29uXG5cblN3ZWV0QWxlcnQudmVyc2lvbiA9ICcxMS4xLjcnXG5cbmV4cG9ydCBkZWZhdWx0IFN3ZWV0QWxlcnRcbiIsImV4cG9ydCBjb25zdCBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQgPSAxMDBcbiIsImltcG9ydCB7IFJFU1RPUkVfRk9DVVNfVElNRU9VVCB9IGZyb20gJy4vY29uc3RhbnRzLmpzJ1xuXG5jb25zdCBnbG9iYWxTdGF0ZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFN0YXRlXG5cbmNvbnN0IGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50ID0gKCkgPT4ge1xuICBpZiAoZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpXG4gICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gbnVsbFxuICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgfVxufVxuXG4vLyBSZXN0b3JlIHByZXZpb3VzIGFjdGl2ZSAoZm9jdXNlZCkgZWxlbWVudFxuZXhwb3J0IGNvbnN0IHJlc3RvcmVBY3RpdmVFbGVtZW50ID0gKHJldHVybkZvY3VzKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBpZiAoIXJldHVybkZvY3VzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgfVxuICAgIGNvbnN0IHggPSB3aW5kb3cuc2Nyb2xsWFxuICAgIGNvbnN0IHkgPSB3aW5kb3cuc2Nyb2xsWVxuXG4gICAgZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQoKVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfSwgUkVTVE9SRV9GT0NVU19USU1FT1VUKSAvLyBpc3N1ZXMvOTAwXG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSlcbiAgfSlcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL2hpZGVMb2FkaW5nLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZU1ldGhvZHMvZ2V0SW5wdXQuanMnXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlTWV0aG9kcy9jbG9zZS5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL2VuYWJsZS1kaXNhYmxlLWVsZW1lbnRzLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZU1ldGhvZHMvdmFsaWRhdGlvbi1tZXNzYWdlLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZU1ldGhvZHMvcHJvZ3Jlc3Mtc3RlcHMuanMnXG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlTWV0aG9kcy9fbWFpbi5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL3VwZGF0ZS5qcydcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VNZXRob2RzL19kZXN0cm95LmpzJ1xuIiwiaW1wb3J0IGdsb2JhbFN0YXRlIGZyb20gJy4uL2dsb2JhbFN0YXRlLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5pbXBvcnQgcHJpdmF0ZU1ldGhvZHMgZnJvbSAnLi4vcHJpdmF0ZU1ldGhvZHMuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBfZGVzdHJveSAoKSB7XG4gIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKVxuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcylcblxuICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgcmV0dXJuIC8vIFRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFub3RoZXIgU3dhbCBjbG9zaW5nXG4gIGlmIChkb21DYWNoZS5wb3B1cCAmJiBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2spIHtcbiAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKVxuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2tcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgc3dhbCBkaXNwb3NhbCBkZWZlciB0aW1lclxuICBpZiAoZ2xvYmFsU3RhdGUuZGVmZXJEaXNwb3NhbFRpbWVyKSB7XG4gICAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLmRlZmVyRGlzcG9zYWxUaW1lcilcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUuZGVmZXJEaXNwb3NhbFRpbWVyXG4gIH1cblxuICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLmRpZERlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpbm5lclBhcmFtcy5kaWREZXN0cm95KClcbiAgfVxuXG4gIGRpc3Bvc2VTd2FsKHRoaXMpXG59XG5cbmNvbnN0IGRpc3Bvc2VTd2FsID0gKGluc3RhbmNlKSA9PiB7XG4gIC8vIFVuc2V0IHRoaXMucGFyYW1zIHNvIEdDIHdpbGwgZGlzcG9zZSBpdCAoIzE1NjkpXG4gIGRlbGV0ZSBpbnN0YW5jZS5wYXJhbXNcbiAgLy8gVW5zZXQgZ2xvYmFsU3RhdGUgcHJvcHMgc28gR0Mgd2lsbCBkaXNwb3NlIGdsb2JhbFN0YXRlICgjMTU2OSlcbiAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyXG4gIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0XG4gIC8vIFVuc2V0IFdlYWtNYXBzIHNvIEdDIHdpbGwgYmUgYWJsZSB0byBkaXNwb3NlIHRoZW0gKCMxNTY5KVxuICB1bnNldFdlYWtNYXBzKHByaXZhdGVQcm9wcylcbiAgdW5zZXRXZWFrTWFwcyhwcml2YXRlTWV0aG9kcylcbiAgLy8gVW5zZXQgY3VycmVudEluc3RhbmNlXG4gIGRlbGV0ZSBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2Vcbn1cblxuY29uc3QgdW5zZXRXZWFrTWFwcyA9IChvYmopID0+IHtcbiAgZm9yIChjb25zdCBpIGluIG9iaikge1xuICAgIG9ialtpXSA9IG5ldyBXZWFrTWFwKClcbiAgfVxufVxuIiwiaW1wb3J0IGRlZmF1bHRQYXJhbXMsIHsgc2hvd1dhcm5pbmdzRm9yUGFyYW1zIH0gZnJvbSAnLi4vdXRpbHMvcGFyYW1zLmpzJ1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL3V0aWxzL2RvbS9pbmRleC5qcydcbmltcG9ydCBUaW1lciBmcm9tICcuLi91dGlscy9UaW1lci5qcydcbmltcG9ydCB7IGNhbGxJZkZ1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnXG5pbXBvcnQgc2V0UGFyYW1ldGVycyBmcm9tICcuLi91dGlscy9zZXRQYXJhbWV0ZXJzLmpzJ1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVQYXJhbXMgfSBmcm9tICcuLi91dGlscy9nZXRUZW1wbGF0ZVBhcmFtcy5qcydcbmltcG9ydCBnbG9iYWxTdGF0ZSBmcm9tICcuLi9nbG9iYWxTdGF0ZS5qcydcbmltcG9ydCB7IG9wZW5Qb3B1cCB9IGZyb20gJy4uL3V0aWxzL29wZW5Qb3B1cC5qcydcbmltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vcHJpdmF0ZVByb3BzLmpzJ1xuaW1wb3J0IHByaXZhdGVNZXRob2RzIGZyb20gJy4uL3ByaXZhdGVNZXRob2RzLmpzJ1xuaW1wb3J0IHsgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUgfSBmcm9tICcuLi91dGlscy9kb20vaW5wdXRVdGlscy5qcydcbmltcG9ydCB7IGhhbmRsZUNvbmZpcm1CdXR0b25DbGljaywgaGFuZGxlRGVueUJ1dHRvbkNsaWNrLCBoYW5kbGVDYW5jZWxCdXR0b25DbGljayB9IGZyb20gJy4vYnV0dG9ucy1oYW5kbGVycy5qcydcbmltcG9ydCB7IGFkZEtleWRvd25IYW5kbGVyLCBzZXRGb2N1cyB9IGZyb20gJy4va2V5ZG93bi1oYW5kbGVyLmpzJ1xuaW1wb3J0IHsgaGFuZGxlUG9wdXBDbGljayB9IGZyb20gJy4vcG9wdXAtY2xpY2staGFuZGxlci5qcydcbmltcG9ydCB7IERpc21pc3NSZWFzb24gfSBmcm9tICcuLi91dGlscy9EaXNtaXNzUmVhc29uLmpzJ1xuaW1wb3J0IHsgdW5zZXRBcmlhSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvYXJpYS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9tYWluICh1c2VyUGFyYW1zLCBtaXhpblBhcmFtcyA9IHt9KSB7XG4gIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhPYmplY3QuYXNzaWduKHt9LCBtaXhpblBhcmFtcywgdXNlclBhcmFtcykpXG5cbiAgaWYgKGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZSkge1xuICAgIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZS5fZGVzdHJveSgpXG4gICAgaWYgKGRvbS5pc01vZGFsKCkpIHtcbiAgICAgIHVuc2V0QXJpYUhpZGRlbigpXG4gICAgfVxuICB9XG4gIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZSA9IHRoaXNcblxuICBjb25zdCBpbm5lclBhcmFtcyA9IHByZXBhcmVQYXJhbXModXNlclBhcmFtcywgbWl4aW5QYXJhbXMpXG4gIHNldFBhcmFtZXRlcnMoaW5uZXJQYXJhbXMpXG4gIE9iamVjdC5mcmVlemUoaW5uZXJQYXJhbXMpXG5cbiAgLy8gY2xlYXIgdGhlIHByZXZpb3VzIHRpbWVyXG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKClcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dFxuICB9XG5cbiAgLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuICBjbGVhclRpbWVvdXQoZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dClcblxuICBjb25zdCBkb21DYWNoZSA9IHBvcHVsYXRlRG9tQ2FjaGUodGhpcylcblxuICBkb20ucmVuZGVyKHRoaXMsIGlubmVyUGFyYW1zKVxuXG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgaW5uZXJQYXJhbXMpXG5cbiAgcmV0dXJuIHN3YWxQcm9taXNlKHRoaXMsIGRvbUNhY2hlLCBpbm5lclBhcmFtcylcbn1cblxuY29uc3QgcHJlcGFyZVBhcmFtcyA9ICh1c2VyUGFyYW1zLCBtaXhpblBhcmFtcykgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZVBhcmFtcyA9IGdldFRlbXBsYXRlUGFyYW1zKHVzZXJQYXJhbXMpXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMsIG1peGluUGFyYW1zLCB0ZW1wbGF0ZVBhcmFtcywgdXNlclBhcmFtcykgLy8gcHJlY2VkZW5jZSBpcyBkZXNjcmliZWQgaW4gIzIxMzFcbiAgcGFyYW1zLnNob3dDbGFzcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMuc2hvd0NsYXNzLCBwYXJhbXMuc2hvd0NsYXNzKVxuICBwYXJhbXMuaGlkZUNsYXNzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFBhcmFtcy5oaWRlQ2xhc3MsIHBhcmFtcy5oaWRlQ2xhc3MpXG4gIHJldHVybiBwYXJhbXNcbn1cblxuY29uc3Qgc3dhbFByb21pc2UgPSAoaW5zdGFuY2UsIGRvbUNhY2hlLCBpbm5lclBhcmFtcykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAvLyBmdW5jdGlvbnMgdG8gaGFuZGxlIGFsbCBjbG9zaW5ncy9kaXNtaXNzYWxzXG4gICAgY29uc3QgZGlzbWlzc1dpdGggPSAoZGlzbWlzcykgPT4ge1xuICAgICAgaW5zdGFuY2UuY2xvc2VQb3B1cCh7IGlzRGlzbWlzc2VkOiB0cnVlLCBkaXNtaXNzIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLnNldChpbnN0YW5jZSwgcmVzb2x2ZSlcblxuICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24ub25jbGljayA9ICgpID0+IGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayhpbnN0YW5jZSlcbiAgICBkb21DYWNoZS5kZW55QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBoYW5kbGVEZW55QnV0dG9uQ2xpY2soaW5zdGFuY2UpXG4gICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBoYW5kbGVDYW5jZWxCdXR0b25DbGljayhpbnN0YW5jZSwgZGlzbWlzc1dpdGgpXG5cbiAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSlcblxuICAgIGhhbmRsZVBvcHVwQ2xpY2soaW5zdGFuY2UsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aClcblxuICAgIGFkZEtleWRvd25IYW5kbGVyKGluc3RhbmNlLCBnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKVxuXG4gICAgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKVxuXG4gICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKVxuXG4gICAgc2V0dXBUaW1lcihnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKVxuXG4gICAgaW5pdEZvY3VzKGRvbUNhY2hlLCBpbm5lclBhcmFtcylcblxuICAgIC8vIFNjcm9sbCBjb250YWluZXIgdG8gdG9wIG9uIG9wZW4gKCMxMjQ3LCAjMTk0NilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwXG4gICAgfSlcbiAgfSlcbn1cblxuY29uc3QgcG9wdWxhdGVEb21DYWNoZSA9IChpbnN0YW5jZSkgPT4ge1xuICBjb25zdCBkb21DYWNoZSA9IHtcbiAgICBwb3B1cDogZG9tLmdldFBvcHVwKCksXG4gICAgY29udGFpbmVyOiBkb20uZ2V0Q29udGFpbmVyKCksXG4gICAgYWN0aW9uczogZG9tLmdldEFjdGlvbnMoKSxcbiAgICBjb25maXJtQnV0dG9uOiBkb20uZ2V0Q29uZmlybUJ1dHRvbigpLFxuICAgIGRlbnlCdXR0b246IGRvbS5nZXREZW55QnV0dG9uKCksXG4gICAgY2FuY2VsQnV0dG9uOiBkb20uZ2V0Q2FuY2VsQnV0dG9uKCksXG4gICAgbG9hZGVyOiBkb20uZ2V0TG9hZGVyKCksXG4gICAgY2xvc2VCdXR0b246IGRvbS5nZXRDbG9zZUJ1dHRvbigpLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlOiBkb20uZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSxcbiAgICBwcm9ncmVzc1N0ZXBzOiBkb20uZ2V0UHJvZ3Jlc3NTdGVwcygpXG4gIH1cbiAgcHJpdmF0ZVByb3BzLmRvbUNhY2hlLnNldChpbnN0YW5jZSwgZG9tQ2FjaGUpXG5cbiAgcmV0dXJuIGRvbUNhY2hlXG59XG5cbmNvbnN0IHNldHVwVGltZXIgPSAoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCkgPT4ge1xuICBjb25zdCB0aW1lclByb2dyZXNzQmFyID0gZG9tLmdldFRpbWVyUHJvZ3Jlc3NCYXIoKVxuICBkb20uaGlkZSh0aW1lclByb2dyZXNzQmFyKVxuICBpZiAoaW5uZXJQYXJhbXMudGltZXIpIHtcbiAgICBnbG9iYWxTdGF0ZS50aW1lb3V0ID0gbmV3IFRpbWVyKCgpID0+IHtcbiAgICAgIGRpc21pc3NXaXRoKCd0aW1lcicpXG4gICAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dFxuICAgIH0sIGlubmVyUGFyYW1zLnRpbWVyKVxuICAgIGlmIChpbm5lclBhcmFtcy50aW1lclByb2dyZXNzQmFyKSB7XG4gICAgICBkb20uc2hvdyh0aW1lclByb2dyZXNzQmFyKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQucnVubmluZykgeyAvLyB0aW1lciBjYW4gYmUgYWxyZWFkeSBzdG9wcGVkIG9yIHVuc2V0IGF0IHRoaXMgcG9pbnRcbiAgICAgICAgICBkb20uYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIoaW5uZXJQYXJhbXMudGltZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGluaXRGb2N1cyA9IChkb21DYWNoZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgaWYgKGlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RW50ZXJLZXkpKSB7XG4gICAgcmV0dXJuIGJsdXJBY3RpdmVFbGVtZW50KClcbiAgfVxuXG4gIGlmICghZm9jdXNCdXR0b24oZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSkge1xuICAgIHNldEZvY3VzKGlubmVyUGFyYW1zLCAtMSwgMSlcbiAgfVxufVxuXG5jb25zdCBmb2N1c0J1dHRvbiA9IChkb21DYWNoZSwgaW5uZXJQYXJhbXMpID0+IHtcbiAgaWYgKGlubmVyUGFyYW1zLmZvY3VzRGVueSAmJiBkb20uaXNWaXNpYmxlKGRvbUNhY2hlLmRlbnlCdXR0b24pKSB7XG4gICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5mb2N1cygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCAmJiBkb20uaXNWaXNpYmxlKGRvbUNhY2hlLmNhbmNlbEJ1dHRvbikpIHtcbiAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZm9jdXMoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDb25maXJtICYmIGRvbS5pc1Zpc2libGUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbikpIHtcbiAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IGJsdXJBY3RpdmVFbGVtZW50ID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNWaXNpYmxlIH0gZnJvbSAnLi4vdXRpbHMvZG9tL2RvbVV0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0SW5wdXRWYWx1ZSB9IGZyb20gJy4uL3V0aWxzL2RvbS9pbnB1dFV0aWxzLmpzJ1xuaW1wb3J0IHsgZ2V0RGVueUJ1dHRvbiwgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9kb20vZ2V0dGVycy5qcydcbmltcG9ydCB7IGFzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuaW1wb3J0IHsgc2hvd0xvYWRpbmcgfSBmcm9tICcuLi9zdGF0aWNNZXRob2RzL3Nob3dMb2FkaW5nLmpzJ1xuaW1wb3J0IHsgRGlzbWlzc1JlYXNvbiB9IGZyb20gJy4uL3V0aWxzL0Rpc21pc3NSZWFzb24uanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNvbmZpcm1CdXR0b25DbGljayA9IChpbnN0YW5jZSkgPT4ge1xuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpXG4gIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKClcbiAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dChpbnN0YW5jZSwgJ2NvbmZpcm0nKVxuICB9IGVsc2Uge1xuICAgIGNvbmZpcm0oaW5zdGFuY2UsIHRydWUpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZURlbnlCdXR0b25DbGljayA9IChpbnN0YW5jZSkgPT4ge1xuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpXG4gIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKClcbiAgaWYgKGlubmVyUGFyYW1zLnJldHVybklucHV0VmFsdWVPbkRlbnkpIHtcbiAgICBoYW5kbGVDb25maXJtT3JEZW55V2l0aElucHV0KGluc3RhbmNlLCAnZGVueScpXG4gIH0gZWxzZSB7XG4gICAgZGVueShpbnN0YW5jZSwgZmFsc2UpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gKGluc3RhbmNlLCBkaXNtaXNzV2l0aCkgPT4ge1xuICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpXG4gIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2FuY2VsKVxufVxuXG5jb25zdCBoYW5kbGVDb25maXJtT3JEZW55V2l0aElucHV0ID0gKGluc3RhbmNlLCB0eXBlIC8qICdjb25maXJtJyB8ICdkZW55JyAqLykgPT4ge1xuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpXG4gIGNvbnN0IGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcylcbiAgaWYgKGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgaGFuZGxlSW5wdXRWYWxpZGF0b3IoaW5zdGFuY2UsIGlucHV0VmFsdWUsIHR5cGUpXG4gIH0gZWxzZSBpZiAoIWluc3RhbmNlLmdldElucHV0KCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgaW5zdGFuY2UuZW5hYmxlQnV0dG9ucygpXG4gICAgaW5zdGFuY2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkZW55Jykge1xuICAgIGRlbnkoaW5zdGFuY2UsIGlucHV0VmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgY29uZmlybShpbnN0YW5jZSwgaW5wdXRWYWx1ZSlcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVJbnB1dFZhbGlkYXRvciA9IChpbnN0YW5jZSwgaW5wdXRWYWx1ZSwgdHlwZSAvKiAnY29uZmlybScgfCAnZGVueScgKi8pID0+IHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICBpbnN0YW5jZS5kaXNhYmxlSW5wdXQoKVxuICBjb25zdCB2YWxpZGF0aW9uUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gYXNQcm9taXNlKFxuICAgIGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKGlucHV0VmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSlcbiAgKVxuICB2YWxpZGF0aW9uUHJvbWlzZS50aGVuKFxuICAgICh2YWxpZGF0aW9uTWVzc2FnZSkgPT4ge1xuICAgICAgaW5zdGFuY2UuZW5hYmxlQnV0dG9ucygpXG4gICAgICBpbnN0YW5jZS5lbmFibGVJbnB1dCgpXG4gICAgICBpZiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRpb25NZXNzYWdlKVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVueScpIHtcbiAgICAgICAgZGVueShpbnN0YW5jZSwgaW5wdXRWYWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpcm0oaW5zdGFuY2UsIGlucHV0VmFsdWUpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmNvbnN0IGRlbnkgPSAoaW5zdGFuY2UsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSB8fCB0aGlzKVxuXG4gIGlmIChpbm5lclBhcmFtcy5zaG93TG9hZGVyT25EZW55KSB7XG4gICAgc2hvd0xvYWRpbmcoZ2V0RGVueUJ1dHRvbigpKVxuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLnByZURlbnkpIHtcbiAgICBjb25zdCBwcmVEZW55UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gYXNQcm9taXNlKFxuICAgICAgaW5uZXJQYXJhbXMucHJlRGVueSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKVxuICAgIClcbiAgICBwcmVEZW55UHJvbWlzZS50aGVuKFxuICAgICAgKHByZURlbnlWYWx1ZSkgPT4ge1xuICAgICAgICBpZiAocHJlRGVueVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnN0YW5jZS5jbG9zZVBvcHVwKHsgaXNEZW5pZWQ6IHRydWUsIHZhbHVlOiB0eXBlb2YgcHJlRGVueVZhbHVlID09PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogcHJlRGVueVZhbHVlIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgaW5zdGFuY2UuY2xvc2VQb3B1cCh7IGlzRGVuaWVkOiB0cnVlLCB2YWx1ZSB9KVxuICB9XG59XG5cbmNvbnN0IHN1Y2NlZWRXaXRoID0gKGluc3RhbmNlLCB2YWx1ZSkgPT4ge1xuICBpbnN0YW5jZS5jbG9zZVBvcHVwKHsgaXNDb25maXJtZWQ6IHRydWUsIHZhbHVlIH0pXG59XG5cbmNvbnN0IGNvbmZpcm0gPSAoaW5zdGFuY2UsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSB8fCB0aGlzKVxuXG4gIGlmIChpbm5lclBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtKSB7XG4gICAgc2hvd0xvYWRpbmcoKVxuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICBpbnN0YW5jZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlKClcbiAgICBjb25zdCBwcmVDb25maXJtUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gYXNQcm9taXNlKFxuICAgICAgaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKVxuICAgIClcbiAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKFxuICAgICAgKHByZUNvbmZpcm1WYWx1ZSkgPT4ge1xuICAgICAgICBpZiAoaXNWaXNpYmxlKGdldFZhbGlkYXRpb25NZXNzYWdlKCkpIHx8IHByZUNvbmZpcm1WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHR5cGVvZiBwcmVDb25maXJtVmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVDb25maXJtVmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKVxuICB9XG59XG4iLCJpbXBvcnQgeyB1bmRvU2Nyb2xsYmFyIH0gZnJvbSAnLi4vdXRpbHMvc2Nyb2xsYmFyRml4LmpzJ1xuaW1wb3J0IHsgdW5kb0lPU2ZpeCB9IGZyb20gJy4uL3V0aWxzL2lvc0ZpeC5qcydcbmltcG9ydCB7IHVuc2V0QXJpYUhpZGRlbiB9IGZyb20gJy4uL3V0aWxzL2FyaWEuanMnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi91dGlscy9jbGFzc2VzLmpzJ1xuaW1wb3J0IGdsb2JhbFN0YXRlLCB7IHJlc3RvcmVBY3RpdmVFbGVtZW50IH0gZnJvbSAnLi4vZ2xvYmFsU3RhdGUuanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcbmltcG9ydCBwcml2YXRlTWV0aG9kcyBmcm9tICcuLi9wcml2YXRlTWV0aG9kcy5qcydcblxuLypcbiAqIEluc3RhbmNlIG1ldGhvZCB0byBjbG9zZSBzd2VldEFsZXJ0XG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlIChpbnN0YW5jZSwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpIHtcbiAgaWYgKGRvbS5pc1RvYXN0KCkpIHtcbiAgICB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSlcbiAgfSBlbHNlIHtcbiAgICByZXN0b3JlQWN0aXZlRWxlbWVudChyZXR1cm5Gb2N1cykudGhlbigoKSA9PiB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSkpXG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHsgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSB9KVxuICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gIC8vIHdvcmthcm91bmQgZm9yICMyMDg4XG4gIC8vIGZvciBzb21lIHJlYXNvbiByZW1vdmluZyB0aGUgY29udGFpbmVyIGluIFNhZmFyaSB3aWxsIHNjcm9sbCB0aGUgZG9jdW1lbnQgdG8gYm90dG9tXG4gIGlmIChpc1NhZmFyaSkge1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50JylcbiAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpXG4gIH1cblxuICBpZiAoZG9tLmlzTW9kYWwoKSkge1xuICAgIHVuZG9TY3JvbGxiYXIoKVxuICAgIHVuZG9JT1NmaXgoKVxuICAgIHVuc2V0QXJpYUhpZGRlbigpXG4gIH1cblxuICByZW1vdmVCb2R5Q2xhc3NlcygpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUJvZHlDbGFzc2VzICgpIHtcbiAgZG9tLnJlbW92ZUNsYXNzKFxuICAgIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLFxuICAgIFtcbiAgICAgIHN3YWxDbGFzc2VzLnNob3duLFxuICAgICAgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10sXG4gICAgICBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSxcbiAgICAgIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLFxuICAgIF1cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2UgKHJlc29sdmVWYWx1ZSkge1xuICBjb25zdCBwb3B1cCA9IGRvbS5nZXRQb3B1cCgpXG5cbiAgaWYgKCFwb3B1cCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVzb2x2ZVZhbHVlID0gcHJlcGFyZVJlc29sdmVWYWx1ZShyZXNvbHZlVmFsdWUpXG5cbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpXG4gIGlmICghaW5uZXJQYXJhbXMgfHwgZG9tLmhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgc3dhbFByb21pc2VSZXNvbHZlID0gcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLmdldCh0aGlzKVxuXG4gIGRvbS5yZW1vdmVDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuc2hvd0NsYXNzLnBvcHVwKVxuICBkb20uYWRkQ2xhc3MocG9wdXAsIGlubmVyUGFyYW1zLmhpZGVDbGFzcy5wb3B1cClcblxuICBjb25zdCBiYWNrZHJvcCA9IGRvbS5nZXRDb250YWluZXIoKVxuICBkb20ucmVtb3ZlQ2xhc3MoYmFja2Ryb3AsIGlubmVyUGFyYW1zLnNob3dDbGFzcy5iYWNrZHJvcClcbiAgZG9tLmFkZENsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MuYmFja2Ryb3ApXG5cbiAgaGFuZGxlUG9wdXBBbmltYXRpb24odGhpcywgcG9wdXAsIGlubmVyUGFyYW1zKVxuXG4gIC8vIFJlc29sdmUgU3dhbCBwcm9taXNlXG4gIHN3YWxQcm9taXNlUmVzb2x2ZShyZXNvbHZlVmFsdWUpXG59XG5cbmNvbnN0IHByZXBhcmVSZXNvbHZlVmFsdWUgPSAocmVzb2x2ZVZhbHVlKSA9PiB7XG4gIC8vIFdoZW4gdXNlciBjYWxscyBTd2FsLmNsb3NlKClcbiAgaWYgKHR5cGVvZiByZXNvbHZlVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQ29uZmlybWVkOiBmYWxzZSxcbiAgICAgIGlzRGVuaWVkOiBmYWxzZSxcbiAgICAgIGlzRGlzbWlzc2VkOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICBpc0NvbmZpcm1lZDogZmFsc2UsXG4gICAgaXNEZW5pZWQ6IGZhbHNlLFxuICAgIGlzRGlzbWlzc2VkOiBmYWxzZSxcbiAgfSwgcmVzb2x2ZVZhbHVlKVxufVxuXG5jb25zdCBoYW5kbGVQb3B1cEFuaW1hdGlvbiA9IChpbnN0YW5jZSwgcG9wdXAsIGlubmVyUGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvbS5nZXRDb250YWluZXIoKVxuICAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG4gIGNvbnN0IGFuaW1hdGlvbklzU3VwcG9ydGVkID0gZG9tLmFuaW1hdGlvbkVuZEV2ZW50ICYmIGRvbS5oYXNDc3NBbmltYXRpb24ocG9wdXApXG5cbiAgaWYgKHR5cGVvZiBpbm5lclBhcmFtcy53aWxsQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpbm5lclBhcmFtcy53aWxsQ2xvc2UocG9wdXApXG4gIH1cblxuICBpZiAoYW5pbWF0aW9uSXNTdXBwb3J0ZWQpIHtcbiAgICBhbmltYXRlUG9wdXAoaW5zdGFuY2UsIHBvcHVwLCBjb250YWluZXIsIGlubmVyUGFyYW1zLnJldHVybkZvY3VzLCBpbm5lclBhcmFtcy5kaWRDbG9zZSlcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBpbW1lZGlhdGVseVxuICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShpbnN0YW5jZSwgY29udGFpbmVyLCBpbm5lclBhcmFtcy5yZXR1cm5Gb2N1cywgaW5uZXJQYXJhbXMuZGlkQ2xvc2UpXG4gIH1cbn1cblxuY29uc3QgYW5pbWF0ZVBvcHVwID0gKGluc3RhbmNlLCBwb3B1cCwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpID0+IHtcbiAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrID0gcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlLmJpbmQobnVsbCwgaW5zdGFuY2UsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKVxuICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGRvbS5hbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKVxuICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFja1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZSA9IChpbnN0YW5jZSwgZGlkQ2xvc2UpID0+IHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkaWRDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGlkQ2xvc2UuYmluZChpbnN0YW5jZS5wYXJhbXMpKClcbiAgICB9XG4gICAgaW5zdGFuY2UuX2Rlc3Ryb3koKVxuICB9KVxufVxuXG5leHBvcnQge1xuICBjbG9zZSBhcyBjbG9zZVBvcHVwLFxuICBjbG9zZSBhcyBjbG9zZU1vZGFsLFxuICBjbG9zZSBhcyBjbG9zZVRvYXN0XG59XG4iLCJpbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuZnVuY3Rpb24gc2V0QnV0dG9uc0Rpc2FibGVkIChpbnN0YW5jZSwgYnV0dG9ucywgZGlzYWJsZWQpIHtcbiAgY29uc3QgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KGluc3RhbmNlKVxuICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBkb21DYWNoZVtidXR0b25dLmRpc2FibGVkID0gZGlzYWJsZWRcbiAgfSlcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXREaXNhYmxlZCAoaW5wdXQsIGRpc2FibGVkKSB7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgIGNvbnN0IHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgIGNvbnN0IHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJhZGlvc1tpXS5kaXNhYmxlZCA9IGRpc2FibGVkXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucyAoKSB7XG4gIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnZGVueUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgZmFsc2UpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQnV0dG9ucyAoKSB7XG4gIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnZGVueUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgdHJ1ZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUlucHV0ICgpIHtcbiAgcmV0dXJuIHNldElucHV0RGlzYWJsZWQodGhpcy5nZXRJbnB1dCgpLCBmYWxzZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVJbnB1dCAoKSB7XG4gIHJldHVybiBzZXRJbnB1dERpc2FibGVkKHRoaXMuZ2V0SW5wdXQoKSwgdHJ1ZSlcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuLy8gR2V0IGlucHV0IGVsZW1lbnQgYnkgc3BlY2lmaWVkIHR5cGUgb3IsIGlmIHR5cGUgaXNuJ3Qgc3BlY2lmaWVkLCBieSBwYXJhbXMuaW5wdXRcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dCAoaW5zdGFuY2UpIHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlIHx8IHRoaXMpXG4gIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSB8fCB0aGlzKVxuICBpZiAoIWRvbUNhY2hlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gZG9tLmdldElucHV0KGRvbUNhY2hlLnBvcHVwLCBpbm5lclBhcmFtcy5pbnB1dClcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL3V0aWxzL2NsYXNzZXMuanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuLyoqXG4gKiBIaWRlcyBsb2FkZXIgYW5kIHNob3dzIGJhY2sgdGhlIGJ1dHRvbiB3aGljaCB3YXMgaGlkZGVuIGJ5IC5zaG93TG9hZGluZygpXG4gKi9cbmZ1bmN0aW9uIGhpZGVMb2FkaW5nICgpIHtcbiAgLy8gZG8gbm90aGluZyBpZiBwb3B1cCBpcyBjbG9zZWRcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpXG4gIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcylcbiAgZG9tLmhpZGUoZG9tQ2FjaGUubG9hZGVyKVxuICBpZiAoZG9tLmlzVG9hc3QoKSkge1xuICAgIGlmIChpbm5lclBhcmFtcy5pY29uKSB7XG4gICAgICBkb20uc2hvdyhkb20uZ2V0SWNvbigpKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzaG93UmVsYXRlZEJ1dHRvbihkb21DYWNoZSlcbiAgfVxuICBkb20ucmVtb3ZlQ2xhc3MoW2RvbUNhY2hlLnBvcHVwLCBkb21DYWNoZS5hY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZylcbiAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWJ1c3knKVxuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpXG4gIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuICBkb21DYWNoZS5kZW55QnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2Vcbn1cblxuY29uc3Qgc2hvd1JlbGF0ZWRCdXR0b24gPSAoZG9tQ2FjaGUpID0+IHtcbiAgY29uc3QgYnV0dG9uVG9SZXBsYWNlID0gZG9tQ2FjaGUucG9wdXAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShkb21DYWNoZS5sb2FkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi10by1yZXBsYWNlJykpXG4gIGlmIChidXR0b25Ub1JlcGxhY2UubGVuZ3RoKSB7XG4gICAgZG9tLnNob3coYnV0dG9uVG9SZXBsYWNlWzBdLCAnaW5saW5lLWJsb2NrJylcbiAgfSBlbHNlIGlmIChkb20uYWxsQnV0dG9uc0FyZUhpZGRlbigpKSB7XG4gICAgZG9tLmhpZGUoZG9tQ2FjaGUuYWN0aW9ucylcbiAgfVxufVxuXG5leHBvcnQge1xuICBoaWRlTG9hZGluZyxcbiAgaGlkZUxvYWRpbmcgYXMgZGlzYWJsZUxvYWRpbmdcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBEaXNtaXNzUmVhc29uIH0gZnJvbSAnLi4vdXRpbHMvRGlzbWlzc1JlYXNvbi5qcydcbmltcG9ydCB7IGNhbGxJZkZ1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnXG5pbXBvcnQgeyBjbGlja0NvbmZpcm0gfSBmcm9tICcuLi9zdGF0aWNNZXRob2RzL2RvbS5qcydcbmltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vcHJpdmF0ZVByb3BzLmpzJ1xuXG5leHBvcnQgY29uc3QgYWRkS2V5ZG93bkhhbmRsZXIgPSAoaW5zdGFuY2UsIGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpID0+IHtcbiAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgJiYgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7IGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgfSlcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2VcbiAgfVxuXG4gIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciA9IChlKSA9PiBrZXlkb3duSGFuZGxlcihpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpXG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBkb20uZ2V0UG9wdXAoKVxuICAgIGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHsgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSB9KVxuICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlXG4gIH1cbn1cblxuLy8gRm9jdXMgaGFuZGxpbmdcbmV4cG9ydCBjb25zdCBzZXRGb2N1cyA9IChpbm5lclBhcmFtcywgaW5kZXgsIGluY3JlbWVudCkgPT4ge1xuICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IGRvbS5nZXRGb2N1c2FibGVFbGVtZW50cygpXG4gIC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG4gIGlmIChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICBpbmRleCA9IGluZGV4ICsgaW5jcmVtZW50XG5cbiAgICAvLyByb2xsb3ZlciB0byBmaXJzdCBpdGVtXG4gICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gMFxuXG4gICAgICAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXG4gICAgfVxuXG4gICAgcmV0dXJuIGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XS5mb2N1cygpXG4gIH1cbiAgLy8gbm8gdmlzaWJsZSBmb2N1c2FibGUgZWxlbWVudHMsIGZvY3VzIHRoZSBwb3B1cFxuICBkb20uZ2V0UG9wdXAoKS5mb2N1cygpXG59XG5cbmNvbnN0IGFycm93S2V5c05leHRCdXR0b24gPSBbXG4gICdBcnJvd1JpZ2h0JywgJ0Fycm93RG93bicsXG5dXG5cbmNvbnN0IGFycm93S2V5c1ByZXZpb3VzQnV0dG9uID0gW1xuICAnQXJyb3dMZWZ0JywgJ0Fycm93VXAnLFxuXVxuXG5jb25zdCBrZXlkb3duSGFuZGxlciA9IChpbnN0YW5jZSwgZSwgZGlzbWlzc1dpdGgpID0+IHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuXG4gIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICByZXR1cm4gLy8gVGhpcyBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZFxuICB9XG5cbiAgaWYgKGlubmVyUGFyYW1zLnN0b3BLZXlkb3duUHJvcGFnYXRpb24pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICAvLyBFTlRFUlxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBoYW5kbGVFbnRlcihpbnN0YW5jZSwgZSwgaW5uZXJQYXJhbXMpXG5cbiAgLy8gVEFCXG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdUYWInKSB7XG4gICAgaGFuZGxlVGFiKGUsIGlubmVyUGFyYW1zKVxuXG4gIC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgfSBlbHNlIGlmIChbLi4uYXJyb3dLZXlzTmV4dEJ1dHRvbiwgLi4uYXJyb3dLZXlzUHJldmlvdXNCdXR0b25dLmluY2x1ZGVzKGUua2V5KSkge1xuICAgIGhhbmRsZUFycm93cyhlLmtleSlcblxuICAvLyBFU0NcbiAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICBoYW5kbGVFc2MoZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUVudGVyID0gKGluc3RhbmNlLCBlLCBpbm5lclBhcmFtcykgPT4ge1xuICAvLyAjNzIwICM3MjFcbiAgaWYgKGUuaXNDb21wb3NpbmcpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChlLnRhcmdldCAmJiBpbnN0YW5jZS5nZXRJbnB1dCgpICYmIGUudGFyZ2V0Lm91dGVySFRNTCA9PT0gaW5zdGFuY2UuZ2V0SW5wdXQoKS5vdXRlckhUTUwpIHtcbiAgICBpZiAoWyd0ZXh0YXJlYScsICdmaWxlJ10uaW5jbHVkZXMoaW5uZXJQYXJhbXMuaW5wdXQpKSB7XG4gICAgICByZXR1cm4gLy8gZG8gbm90IHN1Ym1pdFxuICAgIH1cblxuICAgIGNsaWNrQ29uZmlybSgpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlVGFiID0gKGUsIGlubmVyUGFyYW1zKSA9PiB7XG4gIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldFxuXG4gIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gZG9tLmdldEZvY3VzYWJsZUVsZW1lbnRzKClcbiAgbGV0IGJ0bkluZGV4ID0gLTFcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXJnZXRFbGVtZW50ID09PSBmb2N1c2FibGVFbGVtZW50c1tpXSkge1xuICAgICAgYnRuSW5kZXggPSBpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICghZS5zaGlmdEtleSkge1xuICAgIC8vIEN5Y2xlIHRvIHRoZSBuZXh0IGJ1dHRvblxuICAgIHNldEZvY3VzKGlubmVyUGFyYW1zLCBidG5JbmRleCwgMSlcbiAgfSBlbHNlIHtcbiAgICAvLyBDeWNsZSB0byB0aGUgcHJldiBidXR0b25cbiAgICBzZXRGb2N1cyhpbm5lclBhcmFtcywgYnRuSW5kZXgsIC0xKVxuICB9XG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG59XG5cbmNvbnN0IGhhbmRsZUFycm93cyA9IChrZXkpID0+IHtcbiAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvbS5nZXRDb25maXJtQnV0dG9uKClcbiAgY29uc3QgZGVueUJ1dHRvbiA9IGRvbS5nZXREZW55QnV0dG9uKClcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9tLmdldENhbmNlbEJ1dHRvbigpXG4gIGlmICghW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl0uaW5jbHVkZXMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBzaWJsaW5nID0gYXJyb3dLZXlzTmV4dEJ1dHRvbi5pbmNsdWRlcyhrZXkpID8gJ25leHRFbGVtZW50U2libGluZycgOiAncHJldmlvdXNFbGVtZW50U2libGluZydcbiAgY29uc3QgYnV0dG9uVG9Gb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRbc2libGluZ11cbiAgaWYgKGJ1dHRvblRvRm9jdXMpIHtcbiAgICBidXR0b25Ub0ZvY3VzLmZvY3VzKClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVFc2MgPSAoZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSA9PiB7XG4gIGlmIChjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VzY2FwZUtleSkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmVzYylcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FsbElmRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy91dGlscy5qcydcbmltcG9ydCB7IERpc21pc3NSZWFzb24gfSBmcm9tICcuLi91dGlscy9EaXNtaXNzUmVhc29uLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpID0+IHtcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICBpZiAoaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICBoYW5kbGVUb2FzdENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpXG4gIH0gZWxzZSB7XG4gICAgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIHBvcHVwIGJ1dCBtb3VzZXVwIG9uIHRoZSBjb250YWluZXJcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuICAgIGhhbmRsZU1vZGFsTW91c2Vkb3duKGRvbUNhY2hlKVxuXG4gICAgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIGNvbnRhaW5lciBidXQgbW91c2V1cCBvbiB0aGUgcG9wdXBcbiAgICBoYW5kbGVDb250YWluZXJNb3VzZWRvd24oZG9tQ2FjaGUpXG5cbiAgICBoYW5kbGVNb2RhbENsaWNrKGluc3RhbmNlLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlVG9hc3RDbGljayA9IChpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSA9PiB7XG4gIC8vIENsb3NpbmcgdG9hc3QgYnkgaW50ZXJuYWwgY2xpY2tcbiAgZG9tQ2FjaGUucG9wdXAub25jbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpXG4gICAgaWYgKFxuICAgICAgaW5uZXJQYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gfHxcbiAgICAgIGlubmVyUGFyYW1zLnNob3dEZW55QnV0dG9uIHx8XG4gICAgICBpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uIHx8XG4gICAgICBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24gfHxcbiAgICAgIGlubmVyUGFyYW1zLnRpbWVyIHx8XG4gICAgICBpbm5lclBhcmFtcy5pbnB1dFxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2xvc2UpXG4gIH1cbn1cblxubGV0IGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlXG5cbmNvbnN0IGhhbmRsZU1vZGFsTW91c2Vkb3duID0gKGRvbUNhY2hlKSA9PiB7XG4gIGRvbUNhY2hlLnBvcHVwLm9ubW91c2Vkb3duID0gKCkgPT4ge1xuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IHVuZGVmaW5lZFxuICAgICAgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgLy8gaGF2ZSBhbnkgb3RoZXIgZGlyZWN0IGNoaWxkcmVuIGFzaWRlIG9mIHRoZSBwb3B1cFxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5jb250YWluZXIpIHtcbiAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBoYW5kbGVDb250YWluZXJNb3VzZWRvd24gPSAoZG9tQ2FjaGUpID0+IHtcbiAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2Vkb3duID0gKCkgPT4ge1xuICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSB1bmRlZmluZWRcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgYSBjaGlsZCBvZiB0aGUgcG9wdXBcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUucG9wdXAgfHwgZG9tQ2FjaGUucG9wdXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaGFuZGxlTW9kYWxDbGljayA9IChpbnN0YW5jZSwgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKSA9PiB7XG4gIGRvbUNhY2hlLmNvbnRhaW5lci5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpXG4gICAgaWYgKGlnbm9yZU91dHNpZGVDbGljaykge1xuICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lciAmJiBjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd091dHNpZGVDbGljaykpIHtcbiAgICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uYmFja2Ryb3ApXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uL3ByaXZhdGVQcm9wcy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2dyZXNzU3RlcHMgKCkge1xuICBjb25zdCBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcylcbiAgcmV0dXJuIGRvbUNhY2hlLnByb2dyZXNzU3RlcHNcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9zcmMvdXRpbHMvZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJy4uLy4uL3NyYy91dGlscy91dGlscy5qcydcbmltcG9ydCBzd2VldEFsZXJ0IGZyb20gJy4uL3N3ZWV0YWxlcnQyLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbi8qKlxuICogVXBkYXRlcyBwb3B1cCBwYXJhbWV0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlIChwYXJhbXMpIHtcbiAgY29uc3QgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcylcblxuICBpZiAoIXBvcHVwIHx8IGRvbS5oYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgIHJldHVybiB3YXJuKGBZb3UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgY2xvc2VkIG9yIGNsb3NpbmcgcG9wdXAsIHRoYXQgd29uJ3Qgd29yay4gVXNlIHRoZSB1cGRhdGUoKSBtZXRob2QgaW4gcHJlQ29uZmlybSBwYXJhbWV0ZXIgb3Igc2hvdyBhIG5ldyBwb3B1cC5gKVxuICB9XG5cbiAgY29uc3QgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSB7fVxuXG4gIC8vIGFzc2lnbiB2YWxpZCBwYXJhbXMgZnJvbSBgcGFyYW1zYCB0byBgZGVmYXVsdHNgXG4gIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgaWYgKHN3ZWV0QWxlcnQuaXNVcGRhdGFibGVQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB2YWxpZFVwZGF0YWJsZVBhcmFtc1twYXJhbV0gPSBwYXJhbXNbcGFyYW1dXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oYEludmFsaWQgcGFyYW1ldGVyIHRvIHVwZGF0ZTogXCIke3BhcmFtfVwiLiBVcGRhdGFibGUgcGFyYW1zIGFyZSBsaXN0ZWQgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2Jsb2IvbWFzdGVyL3NyYy91dGlscy9wYXJhbXMuanNcXG5cXG5JZiB5b3UgdGhpbmsgdGhpcyBwYXJhbWV0ZXIgc2hvdWxkIGJlIHVwZGF0YWJsZSwgcmVxdWVzdCBpdCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzL25ldz90ZW1wbGF0ZT0wMl9mZWF0dXJlX3JlcXVlc3QubWRgKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCB1cGRhdGVkUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgaW5uZXJQYXJhbXMsIHZhbGlkVXBkYXRhYmxlUGFyYW1zKVxuXG4gIGRvbS5yZW5kZXIodGhpcywgdXBkYXRlZFBhcmFtcylcblxuICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIHVwZGF0ZWRQYXJhbXMpXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnBhcmFtcywgcGFyYW1zKSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9XG4gIH0pXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi91dGlscy9jbGFzc2VzLmpzJ1xuaW1wb3J0IHByaXZhdGVQcm9wcyBmcm9tICcuLi9wcml2YXRlUHJvcHMuanMnXG5cbi8vIFNob3cgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcbmV4cG9ydCBmdW5jdGlvbiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UgKGVycm9yKSB7XG4gIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKVxuICBjb25zdCBwYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpXG4gIGRvbS5zZXRJbm5lckh0bWwoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UsIGVycm9yKVxuICBkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ11cbiAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcyAmJiBwYXJhbXMuY3VzdG9tQ2xhc3MudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICBkb20uYWRkQ2xhc3MoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UsIHBhcmFtcy5jdXN0b21DbGFzcy52YWxpZGF0aW9uTWVzc2FnZSlcbiAgfVxuICBkb20uc2hvdyhkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSlcblxuICBjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKVxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIHRydWUpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jywgc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKVxuICAgIGRvbS5mb2N1c0lucHV0KGlucHV0KVxuICAgIGRvbS5hZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcilcbiAgfVxufVxuXG4vLyBIaWRlIGJsb2NrIHdpdGggdmFsaWRhdGlvbiBtZXNzYWdlXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSAoKSB7XG4gIGNvbnN0IGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKVxuICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICBkb20uaGlkZShkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSlcbiAgfVxuXG4gIGNvbnN0IGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpXG4gIGlmIChpbnB1dCkge1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJylcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgIGRvbS5yZW1vdmVDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcilcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWludHMgYFdlYWtNYXBgcyBmb3IgZWFjaCBlZmZlY3RpdmVseS1cInByaXZhdGUgIHByb3BlcnR5XCIgdGhhdCBhIGBTd2FsYCBoYXMuXG4gKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICogICB0aGVuIHdlIGNhbiB1c2UgdGhhdCBsYW5ndWFnZSBmZWF0dXJlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3dhbFByb21pc2VSZXNvbHZlOiBuZXcgV2Vha01hcCgpXG59XG4iLCIvKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW50cyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9taXNlOiBuZXcgV2Vha01hcCgpLFxuICBpbm5lclBhcmFtczogbmV3IFdlYWtNYXAoKSxcbiAgZG9tQ2FjaGU6IG5ldyBXZWFrTWFwKClcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vc3RhdGljTWV0aG9kcy9hcmdzVG9QYXJhbXMuanMnXG5leHBvcnQgKiBmcm9tICcuL3N0YXRpY01ldGhvZHMvZG9tLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0aWNNZXRob2RzL2ZpcmUuanMnXG5leHBvcnQgKiBmcm9tICcuL3N0YXRpY01ldGhvZHMvbWl4aW4uanMnXG5leHBvcnQgKiBmcm9tICcuL3N0YXRpY01ldGhvZHMvc2hvd0xvYWRpbmcuanMnXG5leHBvcnQgKiBmcm9tICcuL3N0YXRpY01ldGhvZHMvdGltZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3N0YXRpY01ldGhvZHMvYmluZENsaWNrSGFuZGxlci5qcydcbmV4cG9ydCB7XG4gIGlzVmFsaWRQYXJhbWV0ZXIsXG4gIGlzVXBkYXRhYmxlUGFyYW1ldGVyLFxuICBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXJcbn0gZnJvbSAnLi91dGlscy9wYXJhbXMuanMnXG4iLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuXG5jb25zdCBpc0pxdWVyeUVsZW1lbnQgPSAoZWxlbSkgPT4gdHlwZW9mIGVsZW0gPT09ICdvYmplY3QnICYmIGVsZW0uanF1ZXJ5XG5jb25zdCBpc0VsZW1lbnQgPSAoZWxlbSkgPT4gZWxlbSBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgaXNKcXVlcnlFbGVtZW50KGVsZW0pXG5cbmV4cG9ydCBjb25zdCBhcmdzVG9QYXJhbXMgPSAoYXJncykgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB7fVxuICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoYXJnc1swXSkpIHtcbiAgICBPYmplY3QuYXNzaWduKHBhcmFtcywgYXJnc1swXSlcbiAgfSBlbHNlIHtcbiAgICBbJ3RpdGxlJywgJ2h0bWwnLCAnaWNvbiddLmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhcmcgPSBhcmdzW2luZGV4XVxuICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8IGlzRWxlbWVudChhcmcpKSB7XG4gICAgICAgIHBhcmFtc1tuYW1lXSA9IGFyZ1xuICAgICAgfSBlbHNlIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcihgVW5leHBlY3RlZCB0eXBlIG9mICR7bmFtZX0hIEV4cGVjdGVkIFwic3RyaW5nXCIgb3IgXCJFbGVtZW50XCIsIGdvdCAke3R5cGVvZiBhcmd9YClcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiBwYXJhbXNcbn1cbiIsImxldCBib2R5Q2xpY2tMaXN0ZW5lckFkZGVkID0gZmFsc2VcbmNvbnN0IGNsaWNrSGFuZGxlcnMgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZENsaWNrSGFuZGxlciAoYXR0ciA9ICdkYXRhLXN3YWwtdGVtcGxhdGUnKSB7XG4gIGNsaWNrSGFuZGxlcnNbYXR0cl0gPSB0aGlzXG5cbiAgaWYgKCFib2R5Q2xpY2tMaXN0ZW5lckFkZGVkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvZHlDbGlja0xpc3RlbmVyKVxuICAgIGJvZHlDbGlja0xpc3RlbmVyQWRkZWQgPSB0cnVlXG4gIH1cbn1cblxuY29uc3QgYm9keUNsaWNrTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgZm9yIChsZXQgZWwgPSBldmVudC50YXJnZXQ7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgZm9yIChjb25zdCBhdHRyIGluIGNsaWNrSGFuZGxlcnMpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpXG4gICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgY2xpY2tIYW5kbGVyc1thdHRyXS5maXJlKHsgdGVtcGxhdGUgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vdXRpbHMvZG9tL2luZGV4LmpzJ1xuaW1wb3J0ICogYXMgZG9tVXRpbHMgZnJvbSAnLi4vdXRpbHMvZG9tL2RvbVV0aWxzLmpzJ1xuXG5leHBvcnQge1xuICBnZXRDb250YWluZXIsXG4gIGdldFBvcHVwLFxuICBnZXRUaXRsZSxcbiAgZ2V0SHRtbENvbnRhaW5lcixcbiAgZ2V0SW1hZ2UsXG4gIGdldEljb24sXG4gIGdldElucHV0TGFiZWwsXG4gIGdldENsb3NlQnV0dG9uLFxuICBnZXRBY3Rpb25zLFxuICBnZXRDb25maXJtQnV0dG9uLFxuICBnZXREZW55QnV0dG9uLFxuICBnZXRDYW5jZWxCdXR0b24sXG4gIGdldExvYWRlcixcbiAgZ2V0Rm9vdGVyLFxuICBnZXRUaW1lclByb2dyZXNzQmFyLFxuICBnZXRGb2N1c2FibGVFbGVtZW50cyxcbiAgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG4gIGlzTG9hZGluZ1xufSBmcm9tICcuLi91dGlscy9kb20vaW5kZXguanMnXG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIFN3ZWV0QWxlcnQyIHBvcHVwIGlzIHNob3duXG4gKi9cbmV4cG9ydCBjb25zdCBpc1Zpc2libGUgPSAoKSA9PiB7XG4gIHJldHVybiBkb21VdGlscy5pc1Zpc2libGUoZG9tLmdldFBvcHVwKCkpXG59XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICovXG5leHBvcnQgY29uc3QgY2xpY2tDb25maXJtID0gKCkgPT4gZG9tLmdldENvbmZpcm1CdXR0b24oKSAmJiBkb20uZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKClcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnRGVueScgYnV0dG9uXG4gKi9cbmV4cG9ydCBjb25zdCBjbGlja0RlbnkgPSAoKSA9PiBkb20uZ2V0RGVueUJ1dHRvbigpICYmIGRvbS5nZXREZW55QnV0dG9uKCkuY2xpY2soKVxuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICovXG5leHBvcnQgY29uc3QgY2xpY2tDYW5jZWwgPSAoKSA9PiBkb20uZ2V0Q2FuY2VsQnV0dG9uKCkgJiYgZG9tLmdldENhbmNlbEJ1dHRvbigpLmNsaWNrKClcbiIsImV4cG9ydCBmdW5jdGlvbiBmaXJlICguLi5hcmdzKSB7XG4gIGNvbnN0IFN3YWwgPSB0aGlzXG4gIHJldHVybiBuZXcgU3dhbCguLi5hcmdzKVxufVxuIiwiLyoqXG4gKiBSZXR1cm5zIGFuIGV4dGVuZGVkIHZlcnNpb24gb2YgYFN3YWxgIGNvbnRhaW5pbmcgYHBhcmFtc2AgYXMgZGVmYXVsdHMuXG4gKiBVc2VmdWwgZm9yIHJldXNpbmcgU3dhbCBjb25maWd1cmF0aW9uLlxuICpcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIEJlZm9yZTpcbiAqIGNvbnN0IHRleHRQcm9tcHRPcHRpb25zID0geyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH1cbiAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycgfSlcbiAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgU3dhbC5maXJlKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nIH0pXG4gKlxuICogQWZ0ZXI6XG4gKiBjb25zdCBUZXh0UHJvbXB0ID0gU3dhbC5taXhpbih7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfSlcbiAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycpXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JylcbiAqXG4gKiBAcGFyYW0gbWl4aW5QYXJhbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluIChtaXhpblBhcmFtcykge1xuICBjbGFzcyBNaXhpblN3YWwgZXh0ZW5kcyB0aGlzIHtcbiAgICBfbWFpbiAocGFyYW1zLCBwcmlvcml0eU1peGluUGFyYW1zKSB7XG4gICAgICByZXR1cm4gc3VwZXIuX21haW4ocGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBtaXhpblBhcmFtcywgcHJpb3JpdHlNaXhpblBhcmFtcykpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1peGluU3dhbFxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL3V0aWxzL2RvbS9pbmRleC5qcydcbmltcG9ydCBTd2FsIGZyb20gJy4uL3N3ZWV0YWxlcnQyLmpzJ1xuaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi91dGlscy9jbGFzc2VzLmpzJ1xuXG4vKipcbiAqIFNob3dzIGxvYWRlciAoc3Bpbm5lciksIHRoaXMgaXMgdXNlZnVsIHdpdGggQUpBWCByZXF1ZXN0cy5cbiAqIEJ5IGRlZmF1bHQgdGhlIGxvYWRlciBiZSBzaG93biBpbnN0ZWFkIG9mIHRoZSBcIkNvbmZpcm1cIiBidXR0b24uXG4gKi9cbmNvbnN0IHNob3dMb2FkaW5nID0gKGJ1dHRvblRvUmVwbGFjZSkgPT4ge1xuICBsZXQgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuICBpZiAoIXBvcHVwKSB7XG4gICAgU3dhbC5maXJlKClcbiAgfVxuICBwb3B1cCA9IGRvbS5nZXRQb3B1cCgpXG4gIGNvbnN0IGxvYWRlciA9IGRvbS5nZXRMb2FkZXIoKVxuXG4gIGlmIChkb20uaXNUb2FzdCgpKSB7XG4gICAgZG9tLmhpZGUoZG9tLmdldEljb24oKSlcbiAgfSBlbHNlIHtcbiAgICByZXBsYWNlQnV0dG9uKHBvcHVwLCBidXR0b25Ub1JlcGxhY2UpXG4gIH1cbiAgZG9tLnNob3cobG9hZGVyKVxuXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgdHJ1ZSlcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWJ1c3knLCB0cnVlKVxuICBwb3B1cC5mb2N1cygpXG59XG5cbmNvbnN0IHJlcGxhY2VCdXR0b24gPSAocG9wdXAsIGJ1dHRvblRvUmVwbGFjZSkgPT4ge1xuICBjb25zdCBhY3Rpb25zID0gZG9tLmdldEFjdGlvbnMoKVxuICBjb25zdCBsb2FkZXIgPSBkb20uZ2V0TG9hZGVyKClcblxuICBpZiAoIWJ1dHRvblRvUmVwbGFjZSAmJiBkb20uaXNWaXNpYmxlKGRvbS5nZXRDb25maXJtQnV0dG9uKCkpKSB7XG4gICAgYnV0dG9uVG9SZXBsYWNlID0gZG9tLmdldENvbmZpcm1CdXR0b24oKVxuICB9XG5cbiAgZG9tLnNob3coYWN0aW9ucylcbiAgaWYgKGJ1dHRvblRvUmVwbGFjZSkge1xuICAgIGRvbS5oaWRlKGJ1dHRvblRvUmVwbGFjZSlcbiAgICBsb2FkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi10by1yZXBsYWNlJywgYnV0dG9uVG9SZXBsYWNlLmNsYXNzTmFtZSlcbiAgfVxuICBsb2FkZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobG9hZGVyLCBidXR0b25Ub1JlcGxhY2UpXG4gIGRvbS5hZGRDbGFzcyhbcG9wdXAsIGFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKVxufVxuXG5leHBvcnQge1xuICBzaG93TG9hZGluZyxcbiAgc2hvd0xvYWRpbmcgYXMgZW5hYmxlTG9hZGluZ1xufVxuIiwiaW1wb3J0IHsgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIsIHN0b3BUaW1lclByb2dyZXNzQmFyIH0gZnJvbSAnLi4vdXRpbHMvZG9tL2RvbVV0aWxzLmpzJ1xuaW1wb3J0IGdsb2JhbFN0YXRlIGZyb20gJy4uL2dsb2JhbFN0YXRlLmpzJ1xuXG4vKipcbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzIHNldCwgcmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRpbWVyTGVmdCA9ICgpID0+IHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5nZXRUaW1lckxlZnQoKVxufVxuXG4vKipcbiAqIFN0b3AgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdG9wVGltZXIgPSAoKSA9PiB7XG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgc3RvcFRpbWVyUHJvZ3Jlc3NCYXIoKVxuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0b3AoKVxuICB9XG59XG5cbi8qKlxuICogUmVzdW1lIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3QgcmVzdW1lVGltZXIgPSAoKSA9PiB7XG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgY29uc3QgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5zdGFydCgpXG4gICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIocmVtYWluaW5nKVxuICAgIHJldHVybiByZW1haW5pbmdcbiAgfVxufVxuXG4vKipcbiAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVRpbWVyID0gKCkgPT4ge1xuICBjb25zdCB0aW1lciA9IGdsb2JhbFN0YXRlLnRpbWVvdXRcbiAgcmV0dXJuIHRpbWVyICYmICh0aW1lci5ydW5uaW5nID8gc3RvcFRpbWVyKCkgOiByZXN1bWVUaW1lcigpKVxufVxuXG4vKipcbiAqIEluY3JlYXNlIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgYW4gdXBkYXRlZCB0aW1lci5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBpbmNyZWFzZVRpbWVyID0gKG4pID0+IHtcbiAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICBjb25zdCByZW1haW5pbmcgPSBnbG9iYWxTdGF0ZS50aW1lb3V0LmluY3JlYXNlKG4pXG4gICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIocmVtYWluaW5nLCB0cnVlKVxuICAgIHJldHVybiByZW1haW5pbmdcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRpbWVyIGlzIHJ1bm5pbmcuIFJldHVybnMgdHJ1ZSBpZiB0aW1lciBpcyBydW5uaW5nXG4gKiBvciBmYWxzZSBpZiB0aW1lciBpcyBwYXVzZWQgb3Igc3RvcHBlZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVGltZXJSdW5uaW5nID0gKCkgPT4ge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmlzUnVubmluZygpXG59XG4iLCJpbXBvcnQgU3dlZXRBbGVydCBmcm9tICcuL1N3ZWV0QWxlcnQuanMnXG5cbmNvbnN0IFN3YWwgPSBTd2VldEFsZXJ0XG5Td2FsLmRlZmF1bHQgPSBTd2FsXG5cbmV4cG9ydCBkZWZhdWx0IFN3YWxcbiIsImV4cG9ydCBjb25zdCBEaXNtaXNzUmVhc29uID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGNhbmNlbDogJ2NhbmNlbCcsXG4gIGJhY2tkcm9wOiAnYmFja2Ryb3AnLFxuICBjbG9zZTogJ2Nsb3NlJyxcbiAgZXNjOiAnZXNjJyxcbiAgdGltZXI6ICd0aW1lcidcbn0pXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yIChjYWxsYmFjaywgZGVsYXkpIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB0aGlzLnJlbWFpbmluZyA9IGRlbGF5XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2VcblxuICAgIHRoaXMuc3RhcnQoKVxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlXG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZSgpXG4gICAgICB0aGlzLmlkID0gc2V0VGltZW91dCh0aGlzLmNhbGxiYWNrLCB0aGlzLnJlbWFpbmluZylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaWQpXG4gICAgICB0aGlzLnJlbWFpbmluZyAtPSBuZXcgRGF0ZSgpIC0gdGhpcy5zdGFydGVkXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1xuICB9XG5cbiAgaW5jcmVhc2UgKG4pIHtcbiAgICBjb25zdCBydW5uaW5nID0gdGhpcy5ydW5uaW5nXG4gICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuc3RvcCgpXG4gICAgfVxuICAgIHRoaXMucmVtYWluaW5nICs9IG5cbiAgICBpZiAocnVubmluZykge1xuICAgICAgdGhpcy5zdGFydCgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1xuICB9XG5cbiAgZ2V0VGltZXJMZWZ0ICgpIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnN0b3AoKVxuICAgICAgdGhpcy5zdGFydCgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1xuICB9XG5cbiAgaXNSdW5uaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5ydW5uaW5nXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldENvbnRhaW5lciB9IGZyb20gJy4vZG9tL2dldHRlcnMuanMnXG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi91dGlscy5qcydcblxuLy8gRnJvbSBodHRwczovL2RldmVsb3Blci5wYWNpZWxsb2dyb3VwLmNvbS9ibG9nLzIwMTgvMDYvdGhlLWN1cnJlbnQtc3RhdGUtb2YtbW9kYWwtZGlhbG9nLWFjY2Vzc2liaWxpdHkvXG4vLyBBZGRpbmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdG8gZWxlbWVudHMgb3V0c2lkZSBvZiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyBlbnN1cmVzIHRoYXRcbi8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4vLyByZWFkZXLigJlzIGxpc3Qgb2YgZWxlbWVudHMgKGhlYWRpbmdzLCBmb3JtIGNvbnRyb2xzLCBsYW5kbWFya3MsIGV0Yy4pIGluIHRoZSBkb2N1bWVudC5cblxuZXhwb3J0IGNvbnN0IHNldEFyaWFIaWRkZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgYm9keUNoaWxkcmVuLmZvckVhY2goZWwgPT4ge1xuICAgIGlmIChlbCA9PT0gZ2V0Q29udGFpbmVyKCkgfHwgZWwuY29udGFpbnMoZ2V0Q29udGFpbmVyKCkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpXG4gICAgfVxuICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1bnNldEFyaWFIaWRkZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgYm9keUNoaWxkcmVuLmZvckVhY2goZWwgPT4ge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKVxuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJylcbiAgICB9IGVsc2Uge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgfVxuICB9KVxufVxuIiwiZXhwb3J0IGNvbnN0IHN3YWxQcmVmaXggPSAnc3dhbDItJ1xuXG5leHBvcnQgY29uc3QgcHJlZml4ID0gKGl0ZW1zKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIGZvciAoY29uc3QgaSBpbiBpdGVtcykge1xuICAgIHJlc3VsdFtpdGVtc1tpXV0gPSBzd2FsUHJlZml4ICsgaXRlbXNbaV1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCBzd2FsQ2xhc3NlcyA9IHByZWZpeChbXG4gICdjb250YWluZXInLFxuICAnc2hvd24nLFxuICAnaGVpZ2h0LWF1dG8nLFxuICAnaW9zZml4JyxcbiAgJ3BvcHVwJyxcbiAgJ21vZGFsJyxcbiAgJ25vLWJhY2tkcm9wJyxcbiAgJ25vLXRyYW5zaXRpb24nLFxuICAndG9hc3QnLFxuICAndG9hc3Qtc2hvd24nLFxuICAnc2hvdycsXG4gICdoaWRlJyxcbiAgJ2Nsb3NlJyxcbiAgJ3RpdGxlJyxcbiAgJ2h0bWwtY29udGFpbmVyJyxcbiAgJ2FjdGlvbnMnLFxuICAnY29uZmlybScsXG4gICdkZW55JyxcbiAgJ2NhbmNlbCcsXG4gICdkZWZhdWx0LW91dGxpbmUnLFxuICAnZm9vdGVyJyxcbiAgJ2ljb24nLFxuICAnaWNvbi1jb250ZW50JyxcbiAgJ2ltYWdlJyxcbiAgJ2lucHV0JyxcbiAgJ2ZpbGUnLFxuICAncmFuZ2UnLFxuICAnc2VsZWN0JyxcbiAgJ3JhZGlvJyxcbiAgJ2NoZWNrYm94JyxcbiAgJ2xhYmVsJyxcbiAgJ3RleHRhcmVhJyxcbiAgJ2lucHV0ZXJyb3InLFxuICAnaW5wdXQtbGFiZWwnLFxuICAndmFsaWRhdGlvbi1tZXNzYWdlJyxcbiAgJ3Byb2dyZXNzLXN0ZXBzJyxcbiAgJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJyxcbiAgJ3Byb2dyZXNzLXN0ZXAnLFxuICAncHJvZ3Jlc3Mtc3RlcC1saW5lJyxcbiAgJ2xvYWRlcicsXG4gICdsb2FkaW5nJyxcbiAgJ3N0eWxlZCcsXG4gICd0b3AnLFxuICAndG9wLXN0YXJ0JyxcbiAgJ3RvcC1lbmQnLFxuICAndG9wLWxlZnQnLFxuICAndG9wLXJpZ2h0JyxcbiAgJ2NlbnRlcicsXG4gICdjZW50ZXItc3RhcnQnLFxuICAnY2VudGVyLWVuZCcsXG4gICdjZW50ZXItbGVmdCcsXG4gICdjZW50ZXItcmlnaHQnLFxuICAnYm90dG9tJyxcbiAgJ2JvdHRvbS1zdGFydCcsXG4gICdib3R0b20tZW5kJyxcbiAgJ2JvdHRvbS1sZWZ0JyxcbiAgJ2JvdHRvbS1yaWdodCcsXG4gICdncm93LXJvdycsXG4gICdncm93LWNvbHVtbicsXG4gICdncm93LWZ1bGxzY3JlZW4nLFxuICAncnRsJyxcbiAgJ3RpbWVyLXByb2dyZXNzLWJhcicsXG4gICd0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyJyxcbiAgJ3Njcm9sbGJhci1tZWFzdXJlJyxcbiAgJ2ljb24tc3VjY2VzcycsXG4gICdpY29uLXdhcm5pbmcnLFxuICAnaWNvbi1pbmZvJyxcbiAgJ2ljb24tcXVlc3Rpb24nLFxuICAnaWNvbi1lcnJvcicsXG5dKVxuXG5leHBvcnQgY29uc3QgaWNvblR5cGVzID0gcHJlZml4KFtcbiAgJ3N1Y2Nlc3MnLFxuICAnd2FybmluZycsXG4gICdpbmZvJyxcbiAgJ3F1ZXN0aW9uJyxcbiAgJ2Vycm9yJ1xuXSlcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZW1haWw6IChzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlKSA9PiB7XG4gICAgcmV0dXJuIC9eW2EtekEtWjAtOS4rXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVowLTktXXsyLDI0fSQvLnRlc3Qoc3RyaW5nKVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgfHwgJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpXG4gIH0sXG4gIHVybDogKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpID0+IHtcbiAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODA5NDM1IHdpdGggYSBzbWFsbCBjaGFuZ2UgZnJvbSAjMTMwNiBhbmQgIzIwMTNcbiAgICByZXR1cm4gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezEsMjU2fVxcLlthLXpdezIsNjN9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji89XSopJC8udGVzdChzdHJpbmcpXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSgpXG4gICAgICA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSB8fCAnSW52YWxpZCBVUkwnKVxuICB9XG59XG4iLCJpbXBvcnQgeyBpc05vZGVFbnYgfSBmcm9tICcuLi9pc05vZGVFbnYuanMnXG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25FbmRFdmVudCA9ICgoKSA9PiB7XG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQnLFxuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCdcbiAgfVxuICBmb3IgKGNvbnN0IGkgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0cmFuc0VuZEV2ZW50TmFtZXMsIGkpICYmIHR5cGVvZiB0ZXN0RWwuc3R5bGVbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdHJhbnNFbmRFdmVudE5hbWVzW2ldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59KSgpXG4iLCJpbXBvcnQgeyBnZXRUaW1lclByb2dyZXNzQmFyLCBnZXRDb25maXJtQnV0dG9uLCBnZXREZW55QnV0dG9uLCBnZXRDYW5jZWxCdXR0b24gfSBmcm9tICcuL2dldHRlcnMuanMnXG5pbXBvcnQgeyBzd2FsQ2xhc3NlcywgaWNvblR5cGVzIH0gZnJvbSAnLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IHRvQXJyYXksIHdhcm4gfSBmcm9tICcuLi91dGlscy5qcydcblxuLy8gUmVtZW1iZXIgc3RhdGUgaW4gY2FzZXMgd2hlcmUgb3BlbmluZyBhbmQgaGFuZGxpbmcgYSBtb2RhbCB3aWxsIGZpZGRsZSB3aXRoIGl0LlxuZXhwb3J0IGNvbnN0IHN0YXRlcyA9IHtcbiAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxufVxuXG5leHBvcnQgY29uc3Qgc2V0SW5uZXJIdG1sID0gKGVsZW0sIGh0bWwpID0+IHsgLy8gIzE5MjZcbiAgZWxlbS50ZXh0Q29udGVudCA9ICcnXG4gIGlmIChodG1sKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBgdGV4dC9odG1sYClcbiAgICB0b0FycmF5KHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuY2hpbGROb2RlcykuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfSlcbiAgICB0b0FycmF5KHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2hpbGROb2RlcykuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFzQ2xhc3MgPSAoZWxlbSwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmICghY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgY2xhc3NMaXN0ID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMrLylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTGlzdFtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5jb25zdCByZW1vdmVDdXN0b21DbGFzc2VzID0gKGVsZW0sIHBhcmFtcykgPT4ge1xuICB0b0FycmF5KGVsZW0uY2xhc3NMaXN0KS5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgaWYgKFxuICAgICAgIU9iamVjdC52YWx1ZXMoc3dhbENsYXNzZXMpLmluY2x1ZGVzKGNsYXNzTmFtZSkgJiZcbiAgICAgICFPYmplY3QudmFsdWVzKGljb25UeXBlcykuaW5jbHVkZXMoY2xhc3NOYW1lKSAmJlxuICAgICAgIU9iamVjdC52YWx1ZXMocGFyYW1zLnNob3dDbGFzcykuaW5jbHVkZXMoY2xhc3NOYW1lKVxuICAgICkge1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBhcHBseUN1c3RvbUNsYXNzID0gKGVsZW0sIHBhcmFtcywgY2xhc3NOYW1lKSA9PiB7XG4gIHJlbW92ZUN1c3RvbUNsYXNzZXMoZWxlbSwgcGFyYW1zKVxuXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MgJiYgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0uZm9yRWFjaCkge1xuICAgICAgcmV0dXJuIHdhcm4oYEludmFsaWQgdHlwZSBvZiBjdXN0b21DbGFzcy4ke2NsYXNzTmFtZX0hIEV4cGVjdGVkIHN0cmluZyBvciBpdGVyYWJsZSBvYmplY3QsIGdvdCBcIiR7dHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdfVwiYClcbiAgICB9XG5cbiAgICBhZGRDbGFzcyhlbGVtLCBwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SW5wdXQgPSAocG9wdXAsIGlucHV0VHlwZSkgPT4ge1xuICBpZiAoIWlucHV0VHlwZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICBjYXNlICdzZWxlY3QnOlxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICBjYXNlICdmaWxlJzpcbiAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzW2lucHV0VHlwZV0pXG4gICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLmNoZWNrYm94fSBpbnB1dGApXG4gICAgY2FzZSAncmFkaW8nOlxuICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLnJhZGlvfSBpbnB1dDpjaGVja2VkYCkgfHxcbiAgICAgICAgcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucmFkaW99IGlucHV0OmZpcnN0LWNoaWxkYClcbiAgICBjYXNlICdyYW5nZSc6XG4gICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucmFuZ2V9IGlucHV0YClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaW5wdXQpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZvY3VzSW5wdXQgPSAoaW5wdXQpID0+IHtcbiAgaW5wdXQuZm9jdXMoKVxuXG4gIC8vIHBsYWNlIGN1cnNvciBhdCBlbmQgb2YgdGV4dCBpbiB0ZXh0IGlucHV0XG4gIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzQ1OTE1XG4gICAgY29uc3QgdmFsID0gaW5wdXQudmFsdWVcbiAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgaW5wdXQudmFsdWUgPSB2YWxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlQ2xhc3MgPSAodGFyZ2V0LCBjbGFzc0xpc3QsIGNvbmRpdGlvbikgPT4ge1xuICBpZiAoIXRhcmdldCB8fCAhY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pXG4gIH1cbiAgY2xhc3NMaXN0LmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmICh0YXJnZXQuZm9yRWFjaCkge1xuICAgICAgdGFyZ2V0LmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgY29uZGl0aW9uID8gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZGl0aW9uID8gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBhZGRDbGFzcyA9ICh0YXJnZXQsIGNsYXNzTGlzdCkgPT4ge1xuICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgdHJ1ZSlcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzID0gKHRhcmdldCwgY2xhc3NMaXN0KSA9PiB7XG4gIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCBmYWxzZSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldENoaWxkQnlDbGFzcyA9IChlbGVtLCBjbGFzc05hbWUpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaGFzQ2xhc3MoZWxlbS5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gZWxlbS5jaGlsZE5vZGVzW2ldXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhcHBseU51bWVyaWNhbFN0eWxlID0gKGVsZW0sIHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUgPT09IGAke3BhcnNlSW50KHZhbHVlKX1gKSB7XG4gICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSlcbiAgfVxuICBpZiAodmFsdWUgfHwgcGFyc2VJbnQodmFsdWUpID09PSAwKSB7XG4gICAgZWxlbS5zdHlsZVtwcm9wZXJ0eV0gPSAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgPyBgJHt2YWx1ZX1weGAgOiB2YWx1ZVxuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNob3cgPSAoZWxlbSwgZGlzcGxheSA9ICdmbGV4JykgPT4ge1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5XG59XG5cbmV4cG9ydCBjb25zdCBoaWRlID0gKGVsZW0pID0+IHtcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbmV4cG9ydCBjb25zdCBzZXRTdHlsZSA9IChwYXJlbnQsIHNlbGVjdG9yLCBwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgY29uc3QgZWwgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgaWYgKGVsKSB7XG4gICAgZWwuc3R5bGVbcHJvcGVydHldID0gdmFsdWVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlID0gKGVsZW0sIGNvbmRpdGlvbiwgZGlzcGxheSkgPT4ge1xuICBjb25kaXRpb24gPyBzaG93KGVsZW0sIGRpc3BsYXkpIDogaGlkZShlbGVtKVxufVxuXG4vLyBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG5leHBvcnQgY29uc3QgaXNWaXNpYmxlID0gKGVsZW0pID0+ICEhKGVsZW0gJiYgKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpXG5cbmV4cG9ydCBjb25zdCBhbGxCdXR0b25zQXJlSGlkZGVuID0gKCkgPT4gIWlzVmlzaWJsZShnZXRDb25maXJtQnV0dG9uKCkpICYmICFpc1Zpc2libGUoZ2V0RGVueUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlKGdldENhbmNlbEJ1dHRvbigpKVxuXG5leHBvcnQgY29uc3QgaXNTY3JvbGxhYmxlID0gKGVsZW0pID0+ICEhKGVsZW0uc2Nyb2xsSGVpZ2h0ID4gZWxlbS5jbGllbnRIZWlnaHQpXG5cbi8vIGJvcnJvd2VkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2MzUyMTE5XG5leHBvcnQgY29uc3QgaGFzQ3NzQW5pbWF0aW9uID0gKGVsZW0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKVxuXG4gIGNvbnN0IGFuaW1EdXJhdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYW5pbWF0aW9uLWR1cmF0aW9uJykgfHwgJzAnKVxuICBjb25zdCB0cmFuc0R1cmF0aW9uID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2l0aW9uLWR1cmF0aW9uJykgfHwgJzAnKVxuXG4gIHJldHVybiBhbmltRHVyYXRpb24gPiAwIHx8IHRyYW5zRHVyYXRpb24gPiAwXG59XG5cbmV4cG9ydCBjb25zdCBhbmltYXRlVGltZXJQcm9ncmVzc0JhciA9ICh0aW1lciwgcmVzZXQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpXG4gIGlmIChpc1Zpc2libGUodGltZXJQcm9ncmVzc0JhcikpIHtcbiAgICBpZiAocmVzZXQpIHtcbiAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNpdGlvbiA9IGB3aWR0aCAke3RpbWVyIC8gMTAwMH1zIGxpbmVhcmBcbiAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMCUnXG4gICAgfSwgMTApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0b3BUaW1lclByb2dyZXNzQmFyID0gKCkgPT4ge1xuICBjb25zdCB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpXG4gIGNvbnN0IHRpbWVyUHJvZ3Jlc3NCYXJXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpbWVyUHJvZ3Jlc3NCYXIpLndpZHRoKVxuICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcbiAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICBjb25zdCB0aW1lclByb2dyZXNzQmFyRnVsbFdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGltZXJQcm9ncmVzc0Jhcikud2lkdGgpXG4gIGNvbnN0IHRpbWVyUHJvZ3Jlc3NCYXJQZXJjZW50ID0gcGFyc2VJbnQodGltZXJQcm9ncmVzc0JhcldpZHRoIC8gdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCAqIDEwMClcbiAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG4gIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHt0aW1lclByb2dyZXNzQmFyUGVyY2VudH0lYFxufVxuIiwiaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgdW5pcXVlQXJyYXksIHRvQXJyYXkgfSBmcm9tICcuLi91dGlscy5qcydcbmltcG9ydCB7IGlzVmlzaWJsZSB9IGZyb20gJy4vZG9tVXRpbHMuanMnXG5cbmV4cG9ydCBjb25zdCBnZXRDb250YWluZXIgPSAoKSA9PiBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLmNvbnRhaW5lcn1gKVxuXG5leHBvcnQgY29uc3QgZWxlbWVudEJ5U2VsZWN0b3IgPSAoc2VsZWN0b3JTdHJpbmcpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKClcbiAgcmV0dXJuIGNvbnRhaW5lciA/IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yU3RyaW5nKSA6IG51bGxcbn1cblxuY29uc3QgZWxlbWVudEJ5Q2xhc3MgPSAoY2xhc3NOYW1lKSA9PiB7XG4gIHJldHVybiBlbGVtZW50QnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb3B1cCA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnBvcHVwKVxuXG5leHBvcnQgY29uc3QgZ2V0SWNvbiA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmljb24pXG5cbmV4cG9ydCBjb25zdCBnZXRUaXRsZSA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnRpdGxlKVxuXG5leHBvcnQgY29uc3QgZ2V0SHRtbENvbnRhaW5lciA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddKVxuXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2UgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pbWFnZSlcblxuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzU3RlcHMgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSlcblxuZXhwb3J0IGNvbnN0IGdldFZhbGlkYXRpb25NZXNzYWdlID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKVxuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlybUJ1dHRvbiA9ICgpID0+IGVsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfSAuJHtzd2FsQ2xhc3Nlcy5jb25maXJtfWApXG5cbmV4cG9ydCBjb25zdCBnZXREZW55QnV0dG9uID0gKCkgPT4gZWxlbWVudEJ5U2VsZWN0b3IoYC4ke3N3YWxDbGFzc2VzLmFjdGlvbnN9IC4ke3N3YWxDbGFzc2VzLmRlbnl9YClcblxuZXhwb3J0IGNvbnN0IGdldElucHV0TGFiZWwgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaW5wdXQtbGFiZWwnXSlcblxuZXhwb3J0IGNvbnN0IGdldExvYWRlciA9ICgpID0+IGVsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5sb2FkZXJ9YClcblxuZXhwb3J0IGNvbnN0IGdldENhbmNlbEJ1dHRvbiA9ICgpID0+IGVsZW1lbnRCeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5hY3Rpb25zfSAuJHtzd2FsQ2xhc3Nlcy5jYW5jZWx9YClcblxuZXhwb3J0IGNvbnN0IGdldEFjdGlvbnMgPSAoKSA9PiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9vdGVyID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuZm9vdGVyKVxuXG5leHBvcnQgY29uc3QgZ2V0VGltZXJQcm9ncmVzc0JhciA9ICgpID0+IGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXInXSlcblxuZXhwb3J0IGNvbnN0IGdldENsb3NlQnV0dG9uID0gKCkgPT4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuY29uc3QgZm9jdXNhYmxlID0gYFxuICBhW2hyZWZdLFxuICBhcmVhW2hyZWZdLFxuICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXG4gIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXG4gIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcbiAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcbiAgaWZyYW1lLFxuICBvYmplY3QsXG4gIGVtYmVkLFxuICBbdGFiaW5kZXg9XCIwXCJdLFxuICBbY29udGVudGVkaXRhYmxlXSxcbiAgYXVkaW9bY29udHJvbHNdLFxuICB2aWRlb1tjb250cm9sc10sXG4gIHN1bW1hcnlcbmBcblxuZXhwb3J0IGNvbnN0IGdldEZvY3VzYWJsZUVsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IHRvQXJyYXkoXG4gICAgZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJylcbiAgKVxuICAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBhID0gcGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpXG4gICAgICBiID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICByZXR1cm4gMFxuICAgIH0pXG5cbiAgY29uc3Qgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHRvQXJyYXkoXG4gICAgZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZSlcbiAgKS5maWx0ZXIoZWwgPT4gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9PSAnLTEnKVxuXG4gIHJldHVybiB1bmlxdWVBcnJheShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50cykpLmZpbHRlcihlbCA9PiBpc1Zpc2libGUoZWwpKVxufVxuXG5leHBvcnQgY29uc3QgaXNNb2RhbCA9ICgpID0+IHtcbiAgcmV0dXJuICFpc1RvYXN0KCkgJiYgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKVxufVxuXG5leHBvcnQgY29uc3QgaXNUb2FzdCA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKVxufVxuXG5leHBvcnQgY29uc3QgaXNMb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0UG9wdXAoKS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2RvbVV0aWxzLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9pbml0LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9nZXR0ZXJzLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9wYXJzZUh0bWxUb0NvbnRhaW5lci5qcydcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uRW5kRXZlbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL21lYXN1cmVTY3JvbGxiYXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVycy9yZW5kZXIuanMnXG4iLCJpbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL2NsYXNzZXMuanMnXG5pbXBvcnQgeyBnZXRDb250YWluZXIsIGdldFBvcHVwIH0gZnJvbSAnLi9nZXR0ZXJzLmpzJ1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBnZXRDaGlsZEJ5Q2xhc3MsIHNldElubmVySHRtbCB9IGZyb20gJy4vZG9tVXRpbHMuanMnXG5pbXBvcnQgeyBpc05vZGVFbnYgfSBmcm9tICcuLi9pc05vZGVFbnYuanMnXG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnLi4vLi4vc3dlZXRhbGVydDIuanMnXG5cbmNvbnN0IHN3ZWV0SFRNTCA9IGBcbiA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cIiR7c3dhbENsYXNzZXMudGl0bGV9XCIgYXJpYS1kZXNjcmliZWRieT1cIiR7c3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ119XCIgY2xhc3M9XCIke3N3YWxDbGFzc2VzLnBvcHVwfVwiIHRhYmluZGV4PVwiLTFcIj5cbiAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5jbG9zZX1cIj48L2J1dHRvbj5cbiAgIDx1bCBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ119XCI+PC91bD5cbiAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmljb259XCI+PC9kaXY+XG4gICA8aW1nIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5pbWFnZX1cIiAvPlxuICAgPGgyIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy50aXRsZX1cIiBpZD1cIiR7c3dhbENsYXNzZXMudGl0bGV9XCI+PC9oMj5cbiAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddfVwiIGlkPVwiJHtzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXX1cIj48L2Rpdj5cbiAgIDxpbnB1dCBjbGFzcz1cIiR7c3dhbENsYXNzZXMuaW5wdXR9XCIgLz5cbiAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5maWxlfVwiIC8+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5yYW5nZX1cIj5cbiAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIC8+XG4gICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XG4gICA8L2Rpdj5cbiAgIDxzZWxlY3QgY2xhc3M9XCIke3N3YWxDbGFzc2VzLnNlbGVjdH1cIj48L3NlbGVjdD5cbiAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzLnJhZGlvfVwiPjwvZGl2PlxuICAgPGxhYmVsIGZvcj1cIiR7c3dhbENsYXNzZXMuY2hlY2tib3h9XCIgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmNoZWNrYm94fVwiPlxuICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgPHNwYW4gY2xhc3M9XCIke3N3YWxDbGFzc2VzLmxhYmVsfVwiPjwvc3Bhbj5cbiAgIDwvbGFiZWw+XG4gICA8dGV4dGFyZWEgY2xhc3M9XCIke3N3YWxDbGFzc2VzLnRleHRhcmVhfVwiPjwvdGV4dGFyZWE+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ119XCIgaWQ9XCIke3N3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXX1cIj48L2Rpdj5cbiAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmFjdGlvbnN9XCI+XG4gICAgIDxkaXYgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmxvYWRlcn1cIj48L2Rpdj5cbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3N3YWxDbGFzc2VzLmNvbmZpcm19XCI+PC9idXR0b24+XG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5kZW55fVwiPjwvYnV0dG9uPlxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7c3dhbENsYXNzZXMuY2FuY2VsfVwiPjwvYnV0dG9uPlxuICAgPC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlcy5mb290ZXJ9XCI+PC9kaXY+XG4gICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciddfVwiPlxuICAgICA8ZGl2IGNsYXNzPVwiJHtzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ119XCI+PC9kaXY+XG4gICA8L2Rpdj5cbiA8L2Rpdj5cbmAucmVwbGFjZSgvKF58XFxuKVxccyovZywgJycpXG5cbmNvbnN0IHJlc2V0T2xkQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBvbGRDb250YWluZXIgPSBnZXRDb250YWluZXIoKVxuICBpZiAoIW9sZENvbnRhaW5lcikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgb2xkQ29udGFpbmVyLnJlbW92ZSgpXG4gIHJlbW92ZUNsYXNzKFxuICAgIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLFxuICAgIFtcbiAgICAgIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLFxuICAgICAgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sXG4gICAgICBzd2FsQ2xhc3Nlc1snaGFzLWNvbHVtbiddXG4gICAgXVxuICApXG5cbiAgcmV0dXJuIHRydWVcbn1cblxuY29uc3QgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSA9ICgpID0+IHtcbiAgaWYgKHN3ZWV0QWxlcnQuaXNWaXNpYmxlKCkpIHtcbiAgICBzd2VldEFsZXJ0LnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKVxuICB9XG59XG5cbmNvbnN0IGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKClcblxuICBjb25zdCBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaW5wdXQpXG4gIGNvbnN0IGZpbGUgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmZpbGUpXG4gIGNvbnN0IHJhbmdlID0gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMucmFuZ2V9IGlucHV0YClcbiAgY29uc3QgcmFuZ2VPdXRwdXQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKGAuJHtzd2FsQ2xhc3Nlcy5yYW5nZX0gb3V0cHV0YClcbiAgY29uc3Qgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5zZWxlY3QpXG4gIGNvbnN0IGNoZWNrYm94ID0gcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7c3dhbENsYXNzZXMuY2hlY2tib3h9IGlucHV0YClcbiAgY29uc3QgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRleHRhcmVhKVxuXG4gIGlucHV0Lm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlXG4gIGZpbGUub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlXG4gIHNlbGVjdC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2VcbiAgY2hlY2tib3gub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlXG4gIHRleHRhcmVhLm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlXG5cbiAgcmFuZ2Uub25pbnB1dCA9ICgpID0+IHtcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKClcbiAgICByYW5nZU91dHB1dC52YWx1ZSA9IHJhbmdlLnZhbHVlXG4gIH1cblxuICByYW5nZS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKClcbiAgICByYW5nZS5uZXh0U2libGluZy52YWx1ZSA9IHJhbmdlLnZhbHVlXG4gIH1cbn1cblxuY29uc3QgZ2V0VGFyZ2V0ID0gKHRhcmdldCkgPT4gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXRcblxuY29uc3Qgc2V0dXBBY2Nlc3NpYmlsaXR5ID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBwb3B1cCA9IGdldFBvcHVwKClcblxuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBwYXJhbXMudG9hc3QgPyAnYWxlcnQnIDogJ2RpYWxvZycpXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcGFyYW1zLnRvYXN0ID8gJ3BvbGl0ZScgOiAnYXNzZXJ0aXZlJylcbiAgaWYgKCFwYXJhbXMudG9hc3QpIHtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpXG4gIH1cbn1cblxuY29uc3Qgc2V0dXBSVEwgPSAodGFyZ2V0RWxlbWVudCkgPT4ge1xuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0RWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpXG4gIH1cbn1cblxuLypcbiAqIEFkZCBtb2RhbCArIGJhY2tkcm9wIHRvIERPTVxuICovXG5leHBvcnQgY29uc3QgaW5pdCA9IChwYXJhbXMpID0+IHtcbiAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBwb3B1cCBjb250YWluZXIgaWYgaXQgZXhpc3RzXG4gIGNvbnN0IG9sZENvbnRhaW5lckV4aXN0ZWQgPSByZXNldE9sZENvbnRhaW5lcigpXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIGVycm9yKCdTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXJcbiAgaWYgKG9sZENvbnRhaW5lckV4aXN0ZWQpIHtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pXG4gIH1cbiAgc2V0SW5uZXJIdG1sKGNvbnRhaW5lciwgc3dlZXRIVE1MKVxuXG4gIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBnZXRUYXJnZXQocGFyYW1zLnRhcmdldClcbiAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbiAgc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcylcbiAgc2V0dXBSVEwodGFyZ2V0RWxlbWVudClcbiAgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMoKVxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vaW5kZXguanMnXG5pbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL2NsYXNzZXMuanMnXG5pbXBvcnQgeyBnZXRDaGlsZEJ5Q2xhc3MgfSBmcm9tICcuL2RvbVV0aWxzLmpzJ1xuaW1wb3J0IHsgYXNQcm9taXNlLCBlcnJvciwgaGFzVG9Qcm9taXNlRm4sIGlzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuaW1wb3J0IHsgc2hvd0xvYWRpbmcgfSBmcm9tICcuLi8uLi9zdGF0aWNNZXRob2RzL3Nob3dMb2FkaW5nLmpzJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBpZiAocGFyYW1zLmlucHV0ID09PSAnc2VsZWN0JyB8fCBwYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcylcbiAgfSBlbHNlIGlmIChcbiAgICBbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLmluY2x1ZGVzKHBhcmFtcy5pbnB1dCkgJiZcbiAgICAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0VmFsdWUpIHx8IGlzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkpXG4gICkge1xuICAgIHNob3dMb2FkaW5nKGRvbS5nZXRDb25maXJtQnV0dG9uKCkpXG4gICAgaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRJbnB1dFZhbHVlID0gKGluc3RhbmNlLCBpbm5lclBhcmFtcykgPT4ge1xuICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KClcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGlucHV0KVxuICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgIHJldHVybiBnZXRSYWRpb1ZhbHVlKGlucHV0KVxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgcmV0dXJuIGdldEZpbGVWYWx1ZShpbnB1dClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZVxuICB9XG59XG5cbmNvbnN0IGdldENoZWNrYm94VmFsdWUgPSAoaW5wdXQpID0+IGlucHV0LmNoZWNrZWQgPyAxIDogMFxuXG5jb25zdCBnZXRSYWRpb1ZhbHVlID0gKGlucHV0KSA9PiBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiBudWxsXG5cbmNvbnN0IGdldEZpbGVWYWx1ZSA9IChpbnB1dCkgPT4gaW5wdXQuZmlsZXMubGVuZ3RoID8gKGlucHV0LmdldEF0dHJpYnV0ZSgnbXVsdGlwbGUnKSAhPT0gbnVsbCA/IGlucHV0LmZpbGVzIDogaW5wdXQuZmlsZXNbMF0pIDogbnVsbFxuXG5jb25zdCBoYW5kbGVJbnB1dE9wdGlvbnMgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBwb3B1cCA9IGRvbS5nZXRQb3B1cCgpXG4gIGNvbnN0IHByb2Nlc3NJbnB1dE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zKSA9PiBwb3B1bGF0ZUlucHV0T3B0aW9uc1twYXJhbXMuaW5wdXRdKHBvcHVwLCBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSwgcGFyYW1zKVxuICBpZiAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0T3B0aW9ucykgfHwgaXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgc2hvd0xvYWRpbmcoZG9tLmdldENvbmZpcm1CdXR0b24oKSlcbiAgICBhc1Byb21pc2UocGFyYW1zLmlucHV0T3B0aW9ucykudGhlbigoaW5wdXRPcHRpb25zKSA9PiB7XG4gICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpXG4gICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucylcbiAgICB9KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMuaW5wdXRPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMocGFyYW1zLmlucHV0T3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBlcnJvcihgVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0LCBNYXAgb3IgUHJvbWlzZSwgZ290ICR7dHlwZW9mIHBhcmFtcy5pbnB1dE9wdGlvbnN9YClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVJbnB1dFZhbHVlID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpXG4gIGRvbS5oaWRlKGlucHV0KVxuICBhc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpLnRoZW4oKGlucHV0VmFsdWUpID0+IHtcbiAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dCA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KGlucHV0VmFsdWUpIHx8IDAgOiBgJHtpbnB1dFZhbHVlfWBcbiAgICBkb20uc2hvdyhpbnB1dClcbiAgICBpbnB1dC5mb2N1cygpXG4gICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKVxuICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBlcnJvcihgRXJyb3IgaW4gaW5wdXRWYWx1ZSBwcm9taXNlOiAke2Vycn1gKVxuICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgZG9tLnNob3coaW5wdXQpXG4gICAgICBpbnB1dC5mb2N1cygpXG4gICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpXG4gICAgfSlcbn1cblxuY29uc3QgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSB7XG4gIHNlbGVjdDogKHBvcHVwLCBpbnB1dE9wdGlvbnMsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2VsZWN0KVxuICAgIGNvbnN0IHJlbmRlck9wdGlvbiA9IChwYXJlbnQsIG9wdGlvbkxhYmVsLCBvcHRpb25WYWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlXG4gICAgICBkb20uc2V0SW5uZXJIdG1sKG9wdGlvbiwgb3B0aW9uTGFiZWwpXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvblZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSlcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfVxuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGlucHV0T3B0aW9uID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gaW5wdXRPcHRpb25bMF1cbiAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gaW5wdXRPcHRpb25bMV1cbiAgICAgIC8vIDxvcHRncm91cD4gc3BlYzpcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNDAxL2ludGVyYWN0L2Zvcm1zLmh0bWwjaC0xNy42XG4gICAgICAvLyBcIi4uLmFsbCBPUFRHUk9VUCBlbGVtZW50cyBtdXN0IGJlIHNwZWNpZmllZCBkaXJlY3RseSB3aXRoaW4gYSBTRUxFQ1QgZWxlbWVudCAoaS5lLiwgZ3JvdXBzIG1heSBub3QgYmUgbmVzdGVkKS4uLlwiXG4gICAgICAvLyBjaGVjayB3aGV0aGVyIHRoaXMgaXMgYSA8b3B0Z3JvdXA+XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25MYWJlbCkpIHsgLy8gaWYgaXQgaXMgYW4gYXJyYXksIHRoZW4gaXQgaXMgYW4gPG9wdGdyb3VwPlxuICAgICAgICBjb25zdCBvcHRncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJylcbiAgICAgICAgb3B0Z3JvdXAubGFiZWwgPSBvcHRpb25WYWx1ZVxuICAgICAgICBvcHRncm91cC5kaXNhYmxlZCA9IGZhbHNlIC8vIG5vdCBjb25maWd1cmFibGUgZm9yIG5vd1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0Z3JvdXApXG4gICAgICAgIG9wdGlvbkxhYmVsLmZvckVhY2gobyA9PiByZW5kZXJPcHRpb24ob3B0Z3JvdXAsIG9bMV0sIG9bMF0pKVxuICAgICAgfSBlbHNlIHsgLy8gY2FzZSBvZiA8b3B0aW9uPlxuICAgICAgICByZW5kZXJPcHRpb24oc2VsZWN0LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICBzZWxlY3QuZm9jdXMoKVxuICB9LFxuXG4gIHJhZGlvOiAocG9wdXAsIGlucHV0T3B0aW9ucywgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnJhZGlvKVxuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGlucHV0T3B0aW9uID0+IHtcbiAgICAgIGNvbnN0IHJhZGlvVmFsdWUgPSBpbnB1dE9wdGlvblswXVxuICAgICAgY29uc3QgcmFkaW9MYWJlbCA9IGlucHV0T3B0aW9uWzFdXG4gICAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgY29uc3QgcmFkaW9MYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICByYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nXG4gICAgICByYWRpb0lucHV0Lm5hbWUgPSBzd2FsQ2xhc3Nlcy5yYWRpb1xuICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHJhZGlvVmFsdWVcbiAgICAgIGlmIChpc1NlbGVjdGVkKHJhZGlvVmFsdWUsIHBhcmFtcy5pbnB1dFZhbHVlKSkge1xuICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlXG4gICAgICB9XG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgZG9tLnNldElubmVySHRtbChsYWJlbCwgcmFkaW9MYWJlbClcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmxhYmVsXG4gICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChyYWRpb0lucHV0KVxuICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICByYWRpby5hcHBlbmRDaGlsZChyYWRpb0xhYmVsRWxlbWVudClcbiAgICB9KVxuICAgIGNvbnN0IHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylcbiAgICBpZiAocmFkaW9zLmxlbmd0aCkge1xuICAgICAgcmFkaW9zWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgaW5wdXRPcHRpb25zYCBpbnRvIGFuIGFycmF5IG9mIGBbdmFsdWUsIGxhYmVsXWBzXG4gKiBAcGFyYW0gaW5wdXRPcHRpb25zXG4gKi9cbmNvbnN0IGZvcm1hdElucHV0T3B0aW9ucyA9IChpbnB1dE9wdGlvbnMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnICYmIGlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBsZXQgdmFsdWVGb3JtYXR0ZWQgPSB2YWx1ZVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZUZvcm1hdHRlZCA9PT0gJ29iamVjdCcpIHsgLy8gY2FzZSBvZiA8b3B0Z3JvdXA+XG4gICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKVxuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVGb3JtYXR0ZWRdKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRPcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgdmFsdWVGb3JtYXR0ZWQgPSBpbnB1dE9wdGlvbnNba2V5XVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZUZvcm1hdHRlZCA9PT0gJ29iamVjdCcpIHsgLy8gY2FzZSBvZiA8b3B0Z3JvdXA+XG4gICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKVxuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVGb3JtYXR0ZWRdKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBpc1NlbGVjdGVkID0gKG9wdGlvblZhbHVlLCBpbnB1dFZhbHVlKSA9PiB7XG4gIHJldHVybiBpbnB1dFZhbHVlICYmIGlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gb3B0aW9uVmFsdWUudG9TdHJpbmcoKVxufVxuIiwiaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi9jbGFzc2VzLmpzJ1xuXG4vLyBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9qcy9zcmMvbW9kYWwuanNcbmV4cG9ydCBjb25zdCBtZWFzdXJlU2Nyb2xsYmFyID0gKCkgPT4ge1xuICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbJ3Njcm9sbGJhci1tZWFzdXJlJ11cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbn1cbiIsImltcG9ydCB7IHNldElubmVySHRtbCB9IGZyb20gJy4vZG9tVXRpbHMuanMnXG5cbmV4cG9ydCBjb25zdCBwYXJzZUh0bWxUb0NvbnRhaW5lciA9IChwYXJhbSwgdGFyZ2V0KSA9PiB7XG4gIC8vIERPTSBlbGVtZW50XG4gIGlmIChwYXJhbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmFtKVxuXG4gIC8vIE9iamVjdFxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ29iamVjdCcpIHtcbiAgICBoYW5kbGVPYmplY3QocGFyYW0sIHRhcmdldClcblxuICAvLyBQbGFpbiBzdHJpbmdcbiAgfSBlbHNlIGlmIChwYXJhbSkge1xuICAgIHNldElubmVySHRtbCh0YXJnZXQsIHBhcmFtKVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZU9iamVjdCA9IChwYXJhbSwgdGFyZ2V0KSA9PiB7XG4gIC8vIEpRdWVyeSBlbGVtZW50KHMpXG4gIGlmIChwYXJhbS5qcXVlcnkpIHtcbiAgICBoYW5kbGVKcXVlcnlFbGVtKHRhcmdldCwgcGFyYW0pXG5cbiAgLy8gRm9yIG90aGVyIG9iamVjdHMgdXNlIHRoZWlyIHN0cmluZyByZXByZXNlbnRhdGlvblxuICB9IGVsc2Uge1xuICAgIHNldElubmVySHRtbCh0YXJnZXQsIHBhcmFtLnRvU3RyaW5nKCkpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlSnF1ZXJ5RWxlbSA9ICh0YXJnZXQsIGVsZW0pID0+IHtcbiAgdGFyZ2V0LnRleHRDb250ZW50ID0gJydcbiAgaWYgKDAgaW4gZWxlbSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIGluIGVsZW07IGkrKykge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1baV0uY2xvbmVOb2RlKHRydWUpKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbS5jbG9uZU5vZGUodHJ1ZSkpXG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFBvcHVwIH0gZnJvbSAnLi4vZ2V0dGVycy5qcydcbmltcG9ydCB7IHJlbmRlckFjdGlvbnMgfSBmcm9tICcuL3JlbmRlckFjdGlvbnMuanMnXG5pbXBvcnQgeyByZW5kZXJDb250YWluZXIgfSBmcm9tICcuL3JlbmRlckNvbnRhaW5lci5qcydcbmltcG9ydCB7IHJlbmRlckNvbnRlbnQgfSBmcm9tICcuL3JlbmRlckNvbnRlbnQuanMnXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tICcuL3JlbmRlckZvb3Rlci5qcydcbmltcG9ydCB7IHJlbmRlckNsb3NlQnV0dG9uIH0gZnJvbSAnLi9yZW5kZXJDbG9zZUJ1dHRvbi5qcydcbmltcG9ydCB7IHJlbmRlckljb24gfSBmcm9tICcuL3JlbmRlckljb24uanMnXG5pbXBvcnQgeyByZW5kZXJJbWFnZSB9IGZyb20gJy4vcmVuZGVySW1hZ2UuanMnXG5pbXBvcnQgeyByZW5kZXJQcm9ncmVzc1N0ZXBzIH0gZnJvbSAnLi9yZW5kZXJQcm9ncmVzc1N0ZXBzLmpzJ1xuaW1wb3J0IHsgcmVuZGVyVGl0bGUgfSBmcm9tICcuL3JlbmRlclRpdGxlLmpzJ1xuaW1wb3J0IHsgcmVuZGVyUG9wdXAgfSBmcm9tICcuL3JlbmRlclBvcHVwLmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcylcbiAgcmVuZGVyQ29udGFpbmVyKGluc3RhbmNlLCBwYXJhbXMpXG5cbiAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyhpbnN0YW5jZSwgcGFyYW1zKVxuICByZW5kZXJJY29uKGluc3RhbmNlLCBwYXJhbXMpXG4gIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpXG4gIHJlbmRlclRpdGxlKGluc3RhbmNlLCBwYXJhbXMpXG4gIHJlbmRlckNsb3NlQnV0dG9uKGluc3RhbmNlLCBwYXJhbXMpXG5cbiAgcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKVxuICByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpXG4gIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKVxuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmRpZFJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhcmFtcy5kaWRSZW5kZXIoZ2V0UG9wdXAoKSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi8uLi9jbGFzc2VzLmpzJ1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyQWN0aW9ucyA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGFjdGlvbnMgPSBkb20uZ2V0QWN0aW9ucygpXG4gIGNvbnN0IGxvYWRlciA9IGRvbS5nZXRMb2FkZXIoKVxuICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9tLmdldENvbmZpcm1CdXR0b24oKVxuICBjb25zdCBkZW55QnV0dG9uID0gZG9tLmdldERlbnlCdXR0b24oKVxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb20uZ2V0Q2FuY2VsQnV0dG9uKClcblxuICAvLyBBY3Rpb25zIChidXR0b25zKSB3cmFwcGVyXG4gIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0RlbnlCdXR0b24gJiYgIXBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgZG9tLmhpZGUoYWN0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBkb20uc2hvdyhhY3Rpb25zKVxuICB9XG5cbiAgLy8gQ3VzdG9tIGNsYXNzXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKGFjdGlvbnMsIHBhcmFtcywgJ2FjdGlvbnMnKVxuXG4gIC8vIFJlbmRlciBidXR0b25zXG4gIHJlbmRlckJ1dHRvbihjb25maXJtQnV0dG9uLCAnY29uZmlybScsIHBhcmFtcylcbiAgcmVuZGVyQnV0dG9uKGRlbnlCdXR0b24sICdkZW55JywgcGFyYW1zKVxuICByZW5kZXJCdXR0b24oY2FuY2VsQnV0dG9uLCAnY2FuY2VsJywgcGFyYW1zKVxuICBoYW5kbGVCdXR0b25zU3R5bGluZyhjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b24sIHBhcmFtcylcblxuICBpZiAocGFyYW1zLnJldmVyc2VCdXR0b25zKSB7XG4gICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoY2FuY2VsQnV0dG9uLCBsb2FkZXIpXG4gICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoZGVueUJ1dHRvbiwgbG9hZGVyKVxuICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNvbmZpcm1CdXR0b24sIGxvYWRlcilcbiAgfVxuXG4gIC8vIExvYWRlclxuICBkb20uc2V0SW5uZXJIdG1sKGxvYWRlciwgcGFyYW1zLmxvYWRlckh0bWwpXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKGxvYWRlciwgcGFyYW1zLCAnbG9hZGVyJylcbn1cblxuZnVuY3Rpb24gaGFuZGxlQnV0dG9uc1N0eWxpbmcgKGNvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKSB7XG4gIGlmICghcGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgcmV0dXJuIGRvbS5yZW1vdmVDbGFzcyhbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKVxuICB9XG5cbiAgZG9tLmFkZENsYXNzKFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpXG5cbiAgLy8gQnV0dG9ucyBiYWNrZ3JvdW5kIGNvbG9yc1xuICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvclxuICAgIGRvbS5hZGRDbGFzcyhjb25maXJtQnV0dG9uLCBzd2FsQ2xhc3Nlc1snZGVmYXVsdC1vdXRsaW5lJ10pXG4gIH1cbiAgaWYgKHBhcmFtcy5kZW55QnV0dG9uQ29sb3IpIHtcbiAgICBkZW55QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5kZW55QnV0dG9uQ29sb3JcbiAgICBkb20uYWRkQ2xhc3MoZGVueUJ1dHRvbiwgc3dhbENsYXNzZXNbJ2RlZmF1bHQtb3V0bGluZSddKVxuICB9XG4gIGlmIChwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3IpIHtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yXG4gICAgZG9tLmFkZENsYXNzKGNhbmNlbEJ1dHRvbiwgc3dhbENsYXNzZXNbJ2RlZmF1bHQtb3V0bGluZSddKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJ1dHRvbiAoYnV0dG9uLCBidXR0b25UeXBlLCBwYXJhbXMpIHtcbiAgZG9tLnRvZ2dsZShidXR0b24sIHBhcmFtc1tgc2hvdyR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJ1dHRvblR5cGUpfUJ1dHRvbmBdLCAnaW5saW5lLWJsb2NrJylcbiAgZG9tLnNldElubmVySHRtbChidXR0b24sIHBhcmFtc1tgJHtidXR0b25UeXBlfUJ1dHRvblRleHRgXSkgLy8gU2V0IGNhcHRpb24gdGV4dFxuICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zW2Ake2J1dHRvblR5cGV9QnV0dG9uQXJpYUxhYmVsYF0pIC8vIEFSSUEgbGFiZWxcblxuICAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuICBidXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbYnV0dG9uVHlwZV1cbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoYnV0dG9uLCBwYXJhbXMsIGAke2J1dHRvblR5cGV9QnV0dG9uYClcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbiwgcGFyYW1zW2Ake2J1dHRvblR5cGV9QnV0dG9uQ2xhc3NgXSlcbn1cbiIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5cbmV4cG9ydCBjb25zdCByZW5kZXJDbG9zZUJ1dHRvbiA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9tLmdldENsb3NlQnV0dG9uKClcblxuICBkb20uc2V0SW5uZXJIdG1sKGNsb3NlQnV0dG9uLCBwYXJhbXMuY2xvc2VCdXR0b25IdG1sKVxuXG4gIC8vIEN1c3RvbSBjbGFzc1xuICBkb20uYXBwbHlDdXN0b21DbGFzcyhjbG9zZUJ1dHRvbiwgcGFyYW1zLCAnY2xvc2VCdXR0b24nKVxuXG4gIGRvbS50b2dnbGUoY2xvc2VCdXR0b24sIHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pXG4gIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbClcbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy5qcydcbmltcG9ydCB7IHdhcm4gfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5cbmZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wUGFyYW0gKGNvbnRhaW5lciwgYmFja2Ryb3ApIHtcbiAgaWYgKHR5cGVvZiBiYWNrZHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tkcm9wXG4gIH0gZWxzZSBpZiAoIWJhY2tkcm9wKSB7XG4gICAgZG9tLmFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQb3NpdGlvblBhcmFtIChjb250YWluZXIsIHBvc2l0aW9uKSB7XG4gIGlmIChwb3NpdGlvbiBpbiBzd2FsQ2xhc3Nlcykge1xuICAgIGRvbS5hZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW3Bvc2l0aW9uXSlcbiAgfSBlbHNlIHtcbiAgICB3YXJuKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpXG4gICAgZG9tLmFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuY2VudGVyKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUdyb3dQYXJhbSAoY29udGFpbmVyLCBncm93KSB7XG4gIGlmIChncm93ICYmIHR5cGVvZiBncm93ID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGdyb3dDbGFzcyA9IGBncm93LSR7Z3Jvd31gXG4gICAgaWYgKGdyb3dDbGFzcyBpbiBzd2FsQ2xhc3Nlcykge1xuICAgICAgZG9tLmFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlckNvbnRhaW5lciA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvbS5nZXRDb250YWluZXIoKVxuXG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLmJhY2tkcm9wKVxuXG4gIGhhbmRsZVBvc2l0aW9uUGFyYW0oY29udGFpbmVyLCBwYXJhbXMucG9zaXRpb24pXG4gIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIHBhcmFtcy5ncm93KVxuXG4gIC8vIEN1c3RvbSBjbGFzc1xuICBkb20uYXBwbHlDdXN0b21DbGFzcyhjb250YWluZXIsIHBhcmFtcywgJ2NvbnRhaW5lcicpXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgcmVuZGVySW5wdXQgfSBmcm9tICcuL3JlbmRlcklucHV0LmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyQ29udGVudCA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGh0bWxDb250YWluZXIgPSBkb20uZ2V0SHRtbENvbnRhaW5lcigpXG5cbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoaHRtbENvbnRhaW5lciwgcGFyYW1zLCAnaHRtbENvbnRhaW5lcicpXG5cbiAgLy8gQ29udGVudCBhcyBIVE1MXG4gIGlmIChwYXJhbXMuaHRtbCkge1xuICAgIGRvbS5wYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgaHRtbENvbnRhaW5lcilcbiAgICBkb20uc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKVxuXG4gIC8vIENvbnRlbnQgYXMgcGxhaW4gdGV4dFxuICB9IGVsc2UgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgaHRtbENvbnRhaW5lci50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0XG4gICAgZG9tLnNob3coaHRtbENvbnRhaW5lciwgJ2Jsb2NrJylcblxuICAvLyBObyBjb250ZW50XG4gIH0gZWxzZSB7XG4gICAgZG9tLmhpZGUoaHRtbENvbnRhaW5lcilcbiAgfVxuXG4gIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyRm9vdGVyID0gKGluc3RhbmNlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9tLmdldEZvb3RlcigpXG5cbiAgZG9tLnRvZ2dsZShmb290ZXIsIHBhcmFtcy5mb290ZXIpXG5cbiAgaWYgKHBhcmFtcy5mb290ZXIpIHtcbiAgICBkb20ucGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKVxuICB9XG5cbiAgLy8gQ3VzdG9tIGNsYXNzXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKGZvb3RlciwgcGFyYW1zLCAnZm9vdGVyJylcbn1cbiIsImltcG9ydCB7IHN3YWxDbGFzc2VzLCBpY29uVHlwZXMgfSBmcm9tICcuLi8uLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20vaW5kZXguanMnXG5pbXBvcnQgcHJpdmF0ZVByb3BzIGZyb20gJy4uLy4uLy4uL3ByaXZhdGVQcm9wcy5qcydcblxuZXhwb3J0IGNvbnN0IHJlbmRlckljb24gPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpXG4gIGNvbnN0IGljb24gPSBkb20uZ2V0SWNvbigpXG5cbiAgLy8gaWYgdGhlIGdpdmVuIGljb24gYWxyZWFkeSByZW5kZXJlZCwgYXBwbHkgdGhlIHN0eWxpbmcgd2l0aG91dCByZS1yZW5kZXJpbmcgdGhlIGljb25cbiAgaWYgKGlubmVyUGFyYW1zICYmIHBhcmFtcy5pY29uID09PSBpbm5lclBhcmFtcy5pY29uKSB7XG4gICAgLy8gQ3VzdG9tIG9yIGRlZmF1bHQgY29udGVudFxuICAgIHNldENvbnRlbnQoaWNvbiwgcGFyYW1zKVxuXG4gICAgYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFwYXJhbXMuaWNvbiAmJiAhcGFyYW1zLmljb25IdG1sKSB7XG4gICAgcmV0dXJuIGRvbS5oaWRlKGljb24pXG4gIH1cblxuICBpZiAocGFyYW1zLmljb24gJiYgT2JqZWN0LmtleXMoaWNvblR5cGVzKS5pbmRleE9mKHBhcmFtcy5pY29uKSA9PT0gLTEpIHtcbiAgICBlcnJvcihgVW5rbm93biBpY29uISBFeHBlY3RlZCBcInN1Y2Nlc3NcIiwgXCJlcnJvclwiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIgb3IgXCJxdWVzdGlvblwiLCBnb3QgXCIke3BhcmFtcy5pY29ufVwiYClcbiAgICByZXR1cm4gZG9tLmhpZGUoaWNvbilcbiAgfVxuXG4gIGRvbS5zaG93KGljb24pXG5cbiAgLy8gQ3VzdG9tIG9yIGRlZmF1bHQgY29udGVudFxuICBzZXRDb250ZW50KGljb24sIHBhcmFtcylcblxuICBhcHBseVN0eWxlcyhpY29uLCBwYXJhbXMpXG5cbiAgLy8gQW5pbWF0ZSBpY29uXG4gIGRvbS5hZGRDbGFzcyhpY29uLCBwYXJhbXMuc2hvd0NsYXNzLmljb24pXG59XG5cbmNvbnN0IGFwcGx5U3R5bGVzID0gKGljb24sIHBhcmFtcykgPT4ge1xuICBmb3IgKGNvbnN0IGljb25UeXBlIGluIGljb25UeXBlcykge1xuICAgIGlmIChwYXJhbXMuaWNvbiAhPT0gaWNvblR5cGUpIHtcbiAgICAgIGRvbS5yZW1vdmVDbGFzcyhpY29uLCBpY29uVHlwZXNbaWNvblR5cGVdKVxuICAgIH1cbiAgfVxuICBkb20uYWRkQ2xhc3MoaWNvbiwgaWNvblR5cGVzW3BhcmFtcy5pY29uXSlcblxuICAvLyBJY29uIGNvbG9yXG4gIHNldENvbG9yKGljb24sIHBhcmFtcylcblxuICAvLyBTdWNjZXNzIGljb24gYmFja2dyb3VuZCBjb2xvclxuICBhZGp1c3RTdWNjZXNzSWNvbkJhY2tnb3VuZENvbG9yKClcblxuICAvLyBDdXN0b20gY2xhc3NcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3MoaWNvbiwgcGFyYW1zLCAnaWNvbicpXG59XG5cbi8vIEFkanVzdCBzdWNjZXNzIGljb24gYmFja2dyb3VuZCBjb2xvciB0byBtYXRjaCB0aGUgcG9wdXAgYmFja2dyb3VuZCBjb2xvclxuY29uc3QgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvciA9ICgpID0+IHtcbiAgY29uc3QgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuICBjb25zdCBwb3B1cEJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBvcHVwKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJylcbiAgY29uc3Qgc3VjY2Vzc0ljb25QYXJ0cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4JylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwb3B1cEJhY2tncm91bmRDb2xvclxuICB9XG59XG5cbmNvbnN0IHNldENvbnRlbnQgPSAoaWNvbiwgcGFyYW1zKSA9PiB7XG4gIGljb24udGV4dENvbnRlbnQgPSAnJ1xuXG4gIGlmIChwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICBkb20uc2V0SW5uZXJIdG1sKGljb24sIGljb25Db250ZW50KHBhcmFtcy5pY29uSHRtbCkpXG4gIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdzdWNjZXNzJykge1xuICAgIGRvbS5zZXRJbm5lckh0bWwoaWNvbiwgYFxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XCI+PC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcIj48L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1yaW5nXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWZpeFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFwiPjwvZGl2PlxuICAgIGApXG4gIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdlcnJvcicpIHtcbiAgICBkb20uc2V0SW5uZXJIdG1sKGljb24sIGBcbiAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1yaWdodFwiPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICBgKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlZmF1bHRJY29uSHRtbCA9IHtcbiAgICAgIHF1ZXN0aW9uOiAnPycsXG4gICAgICB3YXJuaW5nOiAnIScsXG4gICAgICBpbmZvOiAnaSdcbiAgICB9XG4gICAgZG9tLnNldElubmVySHRtbChpY29uLCBpY29uQ29udGVudChkZWZhdWx0SWNvbkh0bWxbcGFyYW1zLmljb25dKSlcbiAgfVxufVxuXG5jb25zdCBzZXRDb2xvciA9IChpY29uLCBwYXJhbXMpID0+IHtcbiAgaWYgKCFwYXJhbXMuaWNvbkNvbG9yKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWNvbi5zdHlsZS5jb2xvciA9IHBhcmFtcy5pY29uQ29sb3JcbiAgaWNvbi5zdHlsZS5ib3JkZXJDb2xvciA9IHBhcmFtcy5pY29uQ29sb3JcbiAgZm9yIChjb25zdCBzZWwgb2YgWycuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCcsICcuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcnLCAnLnN3YWwyLXgtbWFyay1saW5lLWxlZnQnLCAnLnN3YWwyLXgtbWFyay1saW5lLXJpZ2h0J10pIHtcbiAgICBkb20uc2V0U3R5bGUoaWNvbiwgc2VsLCAnYmFja2dyb3VuZENvbG9yJywgcGFyYW1zLmljb25Db2xvcilcbiAgfVxuICBkb20uc2V0U3R5bGUoaWNvbiwgJy5zd2FsMi1zdWNjZXNzLXJpbmcnLCAnYm9yZGVyQ29sb3InLCBwYXJhbXMuaWNvbkNvbG9yKVxufVxuXG5jb25zdCBpY29uQ29udGVudCA9IChjb250ZW50KSA9PiBgPGRpdiBjbGFzcz1cIiR7c3dhbENsYXNzZXNbJ2ljb24tY29udGVudCddfVwiPiR7Y29udGVudH08L2Rpdj5gXG4iLCJpbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uLy4uL2NsYXNzZXMuanMnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVySW1hZ2UgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBpbWFnZSA9IGRvbS5nZXRJbWFnZSgpXG5cbiAgaWYgKCFwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICByZXR1cm4gZG9tLmhpZGUoaW1hZ2UpXG4gIH1cblxuICBkb20uc2hvdyhpbWFnZSwgJycpXG5cbiAgLy8gU3JjLCBhbHRcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXJhbXMuaW1hZ2VVcmwpXG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0KVxuXG4gIC8vIFdpZHRoLCBoZWlnaHRcbiAgZG9tLmFwcGx5TnVtZXJpY2FsU3R5bGUoaW1hZ2UsICd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKVxuICBkb20uYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodClcblxuICAvLyBDbGFzc1xuICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZVxuICBkb20uYXBwbHlDdXN0b21DbGFzcyhpbWFnZSwgcGFyYW1zLCAnaW1hZ2UnKVxufVxuIiwiaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi8uLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgd2FybiwgZXJyb3IsIGlzUHJvbWlzZSB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJ1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcbmltcG9ydCBwcml2YXRlUHJvcHMgZnJvbSAnLi4vLi4vLi4vcHJpdmF0ZVByb3BzLmpzJ1xuXG5jb25zdCBpbnB1dFR5cGVzID0gWydpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddXG5cbmV4cG9ydCBjb25zdCByZW5kZXJJbnB1dCA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IHBvcHVwID0gZG9tLmdldFBvcHVwKClcbiAgY29uc3QgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKVxuICBjb25zdCByZXJlbmRlciA9ICFpbm5lclBhcmFtcyB8fCBwYXJhbXMuaW5wdXQgIT09IGlubmVyUGFyYW1zLmlucHV0XG5cbiAgaW5wdXRUeXBlcy5mb3JFYWNoKChpbnB1dFR5cGUpID0+IHtcbiAgICBjb25zdCBpbnB1dENsYXNzID0gc3dhbENsYXNzZXNbaW5wdXRUeXBlXVxuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9tLmdldENoaWxkQnlDbGFzcyhwb3B1cCwgaW5wdXRDbGFzcylcblxuICAgIC8vIHNldCBhdHRyaWJ1dGVzXG4gICAgc2V0QXR0cmlidXRlcyhpbnB1dFR5cGUsIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXMpXG5cbiAgICAvLyBzZXQgY2xhc3NcbiAgICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBpbnB1dENsYXNzXG5cbiAgICBpZiAocmVyZW5kZXIpIHtcbiAgICAgIGRvbS5oaWRlKGlucHV0Q29udGFpbmVyKVxuICAgIH1cbiAgfSlcblxuICBpZiAocGFyYW1zLmlucHV0KSB7XG4gICAgaWYgKHJlcmVuZGVyKSB7XG4gICAgICBzaG93SW5wdXQocGFyYW1zKVxuICAgIH1cbiAgICAvLyBzZXQgY3VzdG9tIGNsYXNzXG4gICAgc2V0Q3VzdG9tQ2xhc3MocGFyYW1zKVxuICB9XG59XG5cbmNvbnN0IHNob3dJbnB1dCA9IChwYXJhbXMpID0+IHtcbiAgaWYgKCFyZW5kZXJJbnB1dFR5cGVbcGFyYW1zLmlucHV0XSkge1xuICAgIHJldHVybiBlcnJvcihgVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcInRleHRcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCIsIFwibnVtYmVyXCIsIFwidGVsXCIsIFwic2VsZWN0XCIsIFwicmFkaW9cIiwgXCJjaGVja2JveFwiLCBcInRleHRhcmVhXCIsIFwiZmlsZVwiIG9yIFwidXJsXCIsIGdvdCBcIiR7cGFyYW1zLmlucHV0fVwiYClcbiAgfVxuXG4gIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZ2V0SW5wdXRDb250YWluZXIocGFyYW1zLmlucHV0KVxuICBjb25zdCBpbnB1dCA9IHJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKGlucHV0Q29udGFpbmVyLCBwYXJhbXMpXG4gIGRvbS5zaG93KGlucHV0KVxuXG4gIC8vIGlucHV0IGF1dG9mb2N1c1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb20uZm9jdXNJbnB1dChpbnB1dClcbiAgfSlcbn1cblxuY29uc3QgcmVtb3ZlQXR0cmlidXRlcyA9IChpbnB1dCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbaV0ubmFtZVxuICAgIGlmICghWyd0eXBlJywgJ3ZhbHVlJywgJ3N0eWxlJ10uaW5jbHVkZXMoYXR0ck5hbWUpKSB7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoaW5wdXRUeXBlLCBpbnB1dEF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb20uZ2V0SW5wdXQoZG9tLmdldFBvcHVwKCksIGlucHV0VHlwZSlcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlcyhpbnB1dClcblxuICBmb3IgKGNvbnN0IGF0dHIgaW4gaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIGlucHV0QXR0cmlidXRlc1thdHRyXSlcbiAgfVxufVxuXG5jb25zdCBzZXRDdXN0b21DbGFzcyA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBnZXRJbnB1dENvbnRhaW5lcihwYXJhbXMuaW5wdXQpXG4gIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MpIHtcbiAgICBkb20uYWRkQ2xhc3MoaW5wdXRDb250YWluZXIsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dClcbiAgfVxufVxuXG5jb25zdCBzZXRJbnB1dFBsYWNlaG9sZGVyID0gKGlucHV0LCBwYXJhbXMpID0+IHtcbiAgaWYgKCFpbnB1dC5wbGFjZWhvbGRlciB8fCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXJcbiAgfVxufVxuXG5jb25zdCBzZXRJbnB1dExhYmVsID0gKGlucHV0LCBwcmVwZW5kVG8sIHBhcmFtcykgPT4ge1xuICBpZiAocGFyYW1zLmlucHV0TGFiZWwpIHtcbiAgICBpbnB1dC5pZCA9IHN3YWxDbGFzc2VzLmlucHV0XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgbGFiZWxDbGFzcyA9IHN3YWxDbGFzc2VzWydpbnB1dC1sYWJlbCddXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dC5pZClcbiAgICBsYWJlbC5jbGFzc05hbWUgPSBsYWJlbENsYXNzXG4gICAgZG9tLmFkZENsYXNzKGxhYmVsLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXRMYWJlbClcbiAgICBsYWJlbC5pbm5lclRleHQgPSBwYXJhbXMuaW5wdXRMYWJlbFxuICAgIHByZXBlbmRUby5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbGFiZWwpXG4gIH1cbn1cblxuY29uc3QgZ2V0SW5wdXRDb250YWluZXIgPSAoaW5wdXRUeXBlKSA9PiB7XG4gIGNvbnN0IGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdID8gc3dhbENsYXNzZXNbaW5wdXRUeXBlXSA6IHN3YWxDbGFzc2VzLmlucHV0XG4gIHJldHVybiBkb20uZ2V0Q2hpbGRCeUNsYXNzKGRvbS5nZXRQb3B1cCgpLCBpbnB1dENsYXNzKVxufVxuXG5jb25zdCByZW5kZXJJbnB1dFR5cGUgPSB7fVxuXG5yZW5kZXJJbnB1dFR5cGUudGV4dCA9XG5yZW5kZXJJbnB1dFR5cGUuZW1haWwgPVxucmVuZGVySW5wdXRUeXBlLnBhc3N3b3JkID1cbnJlbmRlcklucHV0VHlwZS5udW1iZXIgPVxucmVuZGVySW5wdXRUeXBlLnRlbCA9XG5yZW5kZXJJbnB1dFR5cGUudXJsID0gKGlucHV0LCBwYXJhbXMpID0+IHtcbiAgaWYgKHR5cGVvZiBwYXJhbXMuaW5wdXRWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhcmFtcy5pbnB1dFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWVcbiAgfSBlbHNlIGlmICghaXNQcm9taXNlKHBhcmFtcy5pbnB1dFZhbHVlKSkge1xuICAgIHdhcm4oYFVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dFZhbHVlISBFeHBlY3RlZCBcInN0cmluZ1wiLCBcIm51bWJlclwiIG9yIFwiUHJvbWlzZVwiLCBnb3QgXCIke3R5cGVvZiBwYXJhbXMuaW5wdXRWYWx1ZX1cImApXG4gIH1cbiAgc2V0SW5wdXRMYWJlbChpbnB1dCwgaW5wdXQsIHBhcmFtcylcbiAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKVxuICBpbnB1dC50eXBlID0gcGFyYW1zLmlucHV0XG4gIHJldHVybiBpbnB1dFxufVxuXG5yZW5kZXJJbnB1dFR5cGUuZmlsZSA9IChpbnB1dCwgcGFyYW1zKSA9PiB7XG4gIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpXG4gIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcylcbiAgcmV0dXJuIGlucHV0XG59XG5cbnJlbmRlcklucHV0VHlwZS5yYW5nZSA9IChyYW5nZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gIGNvbnN0IHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0JylcbiAgcmFuZ2VJbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlXG4gIHJhbmdlSW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dFxuICByYW5nZU91dHB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlXG4gIHNldElucHV0TGFiZWwocmFuZ2VJbnB1dCwgcmFuZ2UsIHBhcmFtcylcbiAgcmV0dXJuIHJhbmdlXG59XG5cbnJlbmRlcklucHV0VHlwZS5zZWxlY3QgPSAoc2VsZWN0LCBwYXJhbXMpID0+IHtcbiAgc2VsZWN0LnRleHRDb250ZW50ID0gJydcbiAgaWYgKHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGRvbS5zZXRJbm5lckh0bWwocGxhY2Vob2xkZXIsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKVxuICAgIHBsYWNlaG9sZGVyLnZhbHVlID0gJydcbiAgICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWVcbiAgICBwbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWVcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpXG4gIH1cbiAgc2V0SW5wdXRMYWJlbChzZWxlY3QsIHNlbGVjdCwgcGFyYW1zKVxuICByZXR1cm4gc2VsZWN0XG59XG5cbnJlbmRlcklucHV0VHlwZS5yYWRpbyA9IChyYWRpbykgPT4ge1xuICByYWRpby50ZXh0Q29udGVudCA9ICcnXG4gIHJldHVybiByYWRpb1xufVxuXG5yZW5kZXJJbnB1dFR5cGUuY2hlY2tib3ggPSAoY2hlY2tib3hDb250YWluZXIsIHBhcmFtcykgPT4ge1xuICBjb25zdCBjaGVja2JveCA9IGRvbS5nZXRJbnB1dChkb20uZ2V0UG9wdXAoKSwgJ2NoZWNrYm94JylcbiAgY2hlY2tib3gudmFsdWUgPSAxXG4gIGNoZWNrYm94LmlkID0gc3dhbENsYXNzZXMuY2hlY2tib3hcbiAgY2hlY2tib3guY2hlY2tlZCA9IEJvb2xlYW4ocGFyYW1zLmlucHV0VmFsdWUpXG4gIGNvbnN0IGxhYmVsID0gY2hlY2tib3hDb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpXG4gIGRvbS5zZXRJbm5lckh0bWwobGFiZWwsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKVxuICByZXR1cm4gY2hlY2tib3hDb250YWluZXJcbn1cblxucmVuZGVySW5wdXRUeXBlLnRleHRhcmVhID0gKHRleHRhcmVhLCBwYXJhbXMpID0+IHtcbiAgdGV4dGFyZWEudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZVxuICBzZXRJbnB1dFBsYWNlaG9sZGVyKHRleHRhcmVhLCBwYXJhbXMpXG4gIHNldElucHV0TGFiZWwodGV4dGFyZWEsIHRleHRhcmVhLCBwYXJhbXMpXG5cbiAgY29uc3QgZ2V0TWFyZ2luID0gKGVsKSA9PiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkubWFyZ2luTGVmdCkgKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkubWFyZ2luUmlnaHQpXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7IC8vICMyMjkxXG4gICAgaWYgKCdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHsgLy8gIzE2OTlcbiAgICAgIGNvbnN0IGluaXRpYWxQb3B1cFdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tLmdldFBvcHVwKCkpLndpZHRoKVxuICAgICAgY29uc3QgdGV4dGFyZWFSZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0YXJlYVdpZHRoID0gdGV4dGFyZWEub2Zmc2V0V2lkdGggKyBnZXRNYXJnaW4odGV4dGFyZWEpXG4gICAgICAgIGlmICh0ZXh0YXJlYVdpZHRoID4gaW5pdGlhbFBvcHVwV2lkdGgpIHtcbiAgICAgICAgICBkb20uZ2V0UG9wdXAoKS5zdHlsZS53aWR0aCA9IGAke3RleHRhcmVhV2lkdGh9cHhgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9tLmdldFBvcHVwKCkuc3R5bGUud2lkdGggPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKHRleHRhcmVhUmVzaXplSGFuZGxlcikub2JzZXJ2ZSh0ZXh0YXJlYSwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHRleHRhcmVhXG59XG4iLCJpbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uLy4uL2NsYXNzZXMuanMnXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUG9wdXAgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb20uZ2V0Q29udGFpbmVyKClcbiAgY29uc3QgcG9wdXAgPSBkb20uZ2V0UG9wdXAoKVxuXG4gIC8vIFdpZHRoXG4gIGlmIChwYXJhbXMudG9hc3QpIHsgLy8gIzIxNzBcbiAgICBkb20uYXBwbHlOdW1lcmljYWxTdHlsZShjb250YWluZXIsICd3aWR0aCcsIHBhcmFtcy53aWR0aClcbiAgICBwb3B1cC5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgIHBvcHVwLmluc2VydEJlZm9yZShkb20uZ2V0TG9hZGVyKCksIGRvbS5nZXRJY29uKCkpXG4gIH0gZWxzZSB7XG4gICAgZG9tLmFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICd3aWR0aCcsIHBhcmFtcy53aWR0aClcbiAgfVxuXG4gIC8vIFBhZGRpbmdcbiAgZG9tLmFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICdwYWRkaW5nJywgcGFyYW1zLnBhZGRpbmcpXG5cbiAgLy8gQmFja2dyb3VuZFxuICBpZiAocGFyYW1zLmJhY2tncm91bmQpIHtcbiAgICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmRcbiAgfVxuXG4gIGRvbS5oaWRlKGRvbS5nZXRWYWxpZGF0aW9uTWVzc2FnZSgpKVxuXG4gIC8vIENsYXNzZXNcbiAgYWRkQ2xhc3Nlcyhwb3B1cCwgcGFyYW1zKVxufVxuXG5jb25zdCBhZGRDbGFzc2VzID0gKHBvcHVwLCBwYXJhbXMpID0+IHtcbiAgLy8gRGVmYXVsdCBDbGFzcyArIHNob3dDbGFzcyB3aGVuIHVwZGF0aW5nIFN3YWwudXBkYXRlKHt9KVxuICBwb3B1cC5jbGFzc05hbWUgPSBgJHtzd2FsQ2xhc3Nlcy5wb3B1cH0gJHtkb20uaXNWaXNpYmxlKHBvcHVwKSA/IHBhcmFtcy5zaG93Q2xhc3MucG9wdXAgOiAnJ31gXG5cbiAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgIGRvbS5hZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pXG4gICAgZG9tLmFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdClcbiAgfSBlbHNlIHtcbiAgICBkb20uYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm1vZGFsKVxuICB9XG5cbiAgLy8gQ3VzdG9tIGNsYXNzXG4gIGRvbS5hcHBseUN1c3RvbUNsYXNzKHBvcHVwLCBwYXJhbXMsICdwb3B1cCcpXG4gIGlmICh0eXBlb2YgcGFyYW1zLmN1c3RvbUNsYXNzID09PSAnc3RyaW5nJykge1xuICAgIGRvbS5hZGRDbGFzcyhwb3B1cCwgcGFyYW1zLmN1c3RvbUNsYXNzKVxuICB9XG5cbiAgLy8gSWNvbiBjbGFzcyAoIzE4NDIpXG4gIGlmIChwYXJhbXMuaWNvbikge1xuICAgIGRvbS5hZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXNbYGljb24tJHtwYXJhbXMuaWNvbn1gXSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuLi8uLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJ1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbS9pbmRleC5qcydcblxuY29uc3QgY3JlYXRlU3RlcEVsZW1lbnQgPSAoc3RlcCkgPT4ge1xuICBjb25zdCBzdGVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gIGRvbS5hZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwJ10pXG4gIGRvbS5zZXRJbm5lckh0bWwoc3RlcEVsLCBzdGVwKVxuICByZXR1cm4gc3RlcEVsXG59XG5cbmNvbnN0IGNyZWF0ZUxpbmVFbGVtZW50ID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBsaW5lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gIGRvbS5hZGRDbGFzcyhsaW5lRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwLWxpbmUnXSlcbiAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpIHtcbiAgICBsaW5lRWwuc3R5bGUud2lkdGggPSBwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlXG4gIH1cbiAgcmV0dXJuIGxpbmVFbFxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IChpbnN0YW5jZSwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzU3RlcHNDb250YWluZXIgPSBkb20uZ2V0UHJvZ3Jlc3NTdGVwcygpXG4gIGlmICghcGFyYW1zLnByb2dyZXNzU3RlcHMgfHwgcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGRvbS5oaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpXG4gIH1cblxuICBkb20uc2hvdyhwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKVxuICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJydcbiAgaWYgKHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwID49IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICtcbiAgICAgICcoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKSdcbiAgICApXG4gIH1cblxuICBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHN0ZXBFbCA9IGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApXG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVwRWwpXG4gICAgaWYgKGluZGV4ID09PSBwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCkge1xuICAgICAgZG9tLmFkZENsYXNzKHN0ZXBFbCwgc3dhbENsYXNzZXNbJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJ10pXG4gICAgfVxuXG4gICAgaWYgKGluZGV4ICE9PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBsaW5lRWwgPSBjcmVhdGVMaW5lRWxlbWVudChwYXJhbXMpXG4gICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmVFbClcbiAgICB9XG4gIH0pXG59XG4iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tL2luZGV4LmpzJ1xuXG5leHBvcnQgY29uc3QgcmVuZGVyVGl0bGUgPSAoaW5zdGFuY2UsIHBhcmFtcykgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRvbS5nZXRUaXRsZSgpXG5cbiAgZG9tLnRvZ2dsZSh0aXRsZSwgcGFyYW1zLnRpdGxlIHx8IHBhcmFtcy50aXRsZVRleHQsICdibG9jaycpXG5cbiAgaWYgKHBhcmFtcy50aXRsZSkge1xuICAgIGRvbS5wYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMudGl0bGUsIHRpdGxlKVxuICB9XG5cbiAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBwYXJhbXMudGl0bGVUZXh0XG4gIH1cblxuICAvLyBDdXN0b20gY2xhc3NcbiAgZG9tLmFwcGx5Q3VzdG9tQ2xhc3ModGl0bGUsIHBhcmFtcywgJ3RpdGxlJylcbn1cbiIsImltcG9ydCBkZWZhdWx0UGFyYW1zIGZyb20gJy4vcGFyYW1zLmpzJ1xuaW1wb3J0IHsgdG9BcnJheSwgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCB3YXJuIH0gZnJvbSAnLi91dGlscy5qcydcblxuY29uc3Qgc3dhbFN0cmluZ1BhcmFtcyA9IFsnc3dhbC10aXRsZScsICdzd2FsLWh0bWwnLCAnc3dhbC1mb290ZXInXVxuXG5leHBvcnQgY29uc3QgZ2V0VGVtcGxhdGVQYXJhbXMgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlID0gdHlwZW9mIHBhcmFtcy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50ZW1wbGF0ZSkgOiBwYXJhbXMudGVtcGxhdGVcbiAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgIHJldHVybiB7fVxuICB9XG4gIGNvbnN0IHRlbXBsYXRlQ29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnRcblxuICBzaG93V2FybmluZ3NGb3JFbGVtZW50cyh0ZW1wbGF0ZUNvbnRlbnQpXG5cbiAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihcbiAgICBnZXRTd2FsUGFyYW1zKHRlbXBsYXRlQ29udGVudCksXG4gICAgZ2V0U3dhbEJ1dHRvbnModGVtcGxhdGVDb250ZW50KSxcbiAgICBnZXRTd2FsSW1hZ2UodGVtcGxhdGVDb250ZW50KSxcbiAgICBnZXRTd2FsSWNvbih0ZW1wbGF0ZUNvbnRlbnQpLFxuICAgIGdldFN3YWxJbnB1dCh0ZW1wbGF0ZUNvbnRlbnQpLFxuICAgIGdldFN3YWxTdHJpbmdQYXJhbXModGVtcGxhdGVDb250ZW50LCBzd2FsU3RyaW5nUGFyYW1zKSxcbiAgKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGdldFN3YWxQYXJhbXMgPSAodGVtcGxhdGVDb250ZW50KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIHRvQXJyYXkodGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtcGFyYW0nKSkuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKHBhcmFtLCBbJ25hbWUnLCAndmFsdWUnXSlcbiAgICBjb25zdCBwYXJhbU5hbWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuICAgIGxldCB2YWx1ZSA9IHBhcmFtLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgIGlmICh0eXBlb2YgZGVmYXVsdFBhcmFtc1twYXJhbU5hbWVdID09PSAnYm9vbGVhbicgJiYgdmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIHZhbHVlID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0UGFyYW1zW3BhcmFtTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpXG4gICAgfVxuICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gdmFsdWVcbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBnZXRTd2FsQnV0dG9ucyA9ICh0ZW1wbGF0ZUNvbnRlbnQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgdG9BcnJheSh0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1idXR0b24nKSkuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhidXR0b24sIFsndHlwZScsICdjb2xvcicsICdhcmlhLWxhYmVsJ10pXG4gICAgY29uc3QgdHlwZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgIHJlc3VsdFtgJHt0eXBlfUJ1dHRvblRleHRgXSA9IGJ1dHRvbi5pbm5lckhUTUxcbiAgICByZXN1bHRbYHNob3cke2NhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKX1CdXR0b25gXSA9IHRydWVcbiAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnY29sb3InKSkge1xuICAgICAgcmVzdWx0W2Ake3R5cGV9QnV0dG9uQ29sb3JgXSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2NvbG9yJylcbiAgICB9XG4gICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgcmVzdWx0W2Ake3R5cGV9QnV0dG9uQXJpYUxhYmVsYF0gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgZ2V0U3dhbEltYWdlID0gKHRlbXBsYXRlQ29udGVudCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICBjb25zdCBpbWFnZSA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWltYWdlJylcbiAgaWYgKGltYWdlKSB7XG4gICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpbWFnZSwgWydzcmMnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ2FsdCddKVxuICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ3NyYycpKSB7XG4gICAgICByZXN1bHQuaW1hZ2VVcmwgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgfVxuICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ3dpZHRoJykpIHtcbiAgICAgIHJlc3VsdC5pbWFnZVdpZHRoID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCd3aWR0aCcpXG4gICAgfVxuICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XG4gICAgICByZXN1bHQuaW1hZ2VIZWlnaHQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpXG4gICAgfVxuICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ2FsdCcpKSB7XG4gICAgICByZXN1bHQuaW1hZ2VBbHQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgZ2V0U3dhbEljb24gPSAodGVtcGxhdGVDb250ZW50KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIGNvbnN0IGljb24gPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pY29uJylcbiAgaWYgKGljb24pIHtcbiAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGljb24sIFsndHlwZScsICdjb2xvciddKVxuICAgIGlmIChpY29uLmhhc0F0dHJpYnV0ZSgndHlwZScpKSB7XG4gICAgICByZXN1bHQuaWNvbiA9IGljb24uZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICB9XG4gICAgaWYgKGljb24uaGFzQXR0cmlidXRlKCdjb2xvcicpKSB7XG4gICAgICByZXN1bHQuaWNvbkNvbG9yID0gaWNvbi5nZXRBdHRyaWJ1dGUoJ2NvbG9yJylcbiAgICB9XG4gICAgcmVzdWx0Lmljb25IdG1sID0gaWNvbi5pbm5lckhUTUxcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGdldFN3YWxJbnB1dCA9ICh0ZW1wbGF0ZUNvbnRlbnQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgY29uc3QgaW5wdXQgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pbnB1dCcpXG4gIGlmIChpbnB1dCkge1xuICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW5wdXQsIFsndHlwZScsICdsYWJlbCcsICdwbGFjZWhvbGRlcicsICd2YWx1ZSddKVxuICAgIHJlc3VsdC5pbnB1dCA9IGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpIHx8ICd0ZXh0J1xuICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ2xhYmVsJykpIHtcbiAgICAgIHJlc3VsdC5pbnB1dExhYmVsID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdsYWJlbCcpXG4gICAgfVxuICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpIHtcbiAgICAgIHJlc3VsdC5pbnB1dFBsYWNlaG9sZGVyID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpXG4gICAgfVxuICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIHJlc3VsdC5pbnB1dFZhbHVlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgfVxuICB9XG4gIGNvbnN0IGlucHV0T3B0aW9ucyA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLWlucHV0LW9wdGlvbicpXG4gIGlmIChpbnB1dE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgcmVzdWx0LmlucHV0T3B0aW9ucyA9IHt9XG4gICAgdG9BcnJheShpbnB1dE9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhvcHRpb24sIFsndmFsdWUnXSlcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgICAgY29uc3Qgb3B0aW9uTmFtZSA9IG9wdGlvbi5pbm5lckhUTUxcbiAgICAgIHJlc3VsdC5pbnB1dE9wdGlvbnNbb3B0aW9uVmFsdWVdID0gb3B0aW9uTmFtZVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBnZXRTd2FsU3RyaW5nUGFyYW1zID0gKHRlbXBsYXRlQ29udGVudCwgcGFyYW1OYW1lcykgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICBmb3IgKGNvbnN0IGkgaW4gcGFyYW1OYW1lcykge1xuICAgIGNvbnN0IHBhcmFtTmFtZSA9IHBhcmFtTmFtZXNbaV1cbiAgICBjb25zdCB0YWcgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvcihwYXJhbU5hbWUpXG4gICAgaWYgKHRhZykge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyh0YWcsIFtdKVxuICAgICAgcmVzdWx0W3BhcmFtTmFtZS5yZXBsYWNlKC9ec3dhbC0vLCAnJyldID0gdGFnLmlubmVySFRNTC50cmltKClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBzaG93V2FybmluZ3NGb3JFbGVtZW50cyA9ICh0ZW1wbGF0ZSkgPT4ge1xuICBjb25zdCBhbGxvd2VkRWxlbWVudHMgPSBzd2FsU3RyaW5nUGFyYW1zLmNvbmNhdChbXG4gICAgJ3N3YWwtcGFyYW0nLFxuICAgICdzd2FsLWJ1dHRvbicsXG4gICAgJ3N3YWwtaW1hZ2UnLFxuICAgICdzd2FsLWljb24nLFxuICAgICdzd2FsLWlucHV0JyxcbiAgICAnc3dhbC1pbnB1dC1vcHRpb24nLFxuICBdKVxuICB0b0FycmF5KHRlbXBsYXRlLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoYWxsb3dlZEVsZW1lbnRzLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICB3YXJuKGBVbnJlY29nbml6ZWQgZWxlbWVudCA8JHt0YWdOYW1lfT5gKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3Qgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyA9IChlbCwgYWxsb3dlZEF0dHJpYnV0ZXMpID0+IHtcbiAgdG9BcnJheShlbC5hdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUubmFtZSkgPT09IC0xKSB7XG4gICAgICB3YXJuKFtcbiAgICAgICAgYFVucmVjb2duaXplZCBhdHRyaWJ1dGUgXCIke2F0dHJpYnV0ZS5uYW1lfVwiIG9uIDwke2VsLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0+LmAsXG4gICAgICAgIGAke2FsbG93ZWRBdHRyaWJ1dGVzLmxlbmd0aCA/IGBBbGxvd2VkIGF0dHJpYnV0ZXMgYXJlOiAke2FsbG93ZWRBdHRyaWJ1dGVzLmpvaW4oJywgJyl9YCA6ICdUbyBzZXQgdGhlIHZhbHVlLCB1c2UgSFRNTCB3aXRoaW4gdGhlIGVsZW1lbnQuJ31gXG4gICAgICBdKVxuICAgIH1cbiAgfSlcbn1cbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20vaW5kZXguanMnXG5pbXBvcnQgeyBzd2FsQ2xhc3NlcyB9IGZyb20gJy4uL3V0aWxzL2NsYXNzZXMuanMnXG5cbi8vIEZpeCBpT1Mgc2Nyb2xsaW5nIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5NjI2MzAyXG5cbmV4cG9ydCBjb25zdCBpT1NmaXggPSAoKSA9PiB7XG4gIGNvbnN0IGlPUyA9ICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtKSB8fCAobmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpXG4gIGlmIChpT1MgJiYgIWRvbS5oYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IGAke29mZnNldCAqIC0xfXB4YFxuICAgIGRvbS5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpXG4gICAgbG9ja0JvZHlTY3JvbGwoKVxuICAgIGFkZEJvdHRvbVBhZGRpbmdGb3JUYWxsUG9wdXBzKCkgLy8gIzE5NDhcbiAgfVxufVxuXG5jb25zdCBhZGRCb3R0b21QYWRkaW5nRm9yVGFsbFBvcHVwcyA9ICgpID0+IHtcbiAgY29uc3Qgc2FmYXJpID0gIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhDcmlPU3xGeGlPU3xFZGdpT1N8WWFCcm93c2VyfFVDQnJvd3NlcikvaSlcbiAgaWYgKHNhZmFyaSkge1xuICAgIGNvbnN0IGJvdHRvbVBhbmVsSGVpZ2h0ID0gNDRcbiAgICBpZiAoZG9tLmdldFBvcHVwKCkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0IC0gYm90dG9tUGFuZWxIZWlnaHQpIHtcbiAgICAgIGRvbS5nZXRDb250YWluZXIoKS5zdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7Ym90dG9tUGFuZWxIZWlnaHR9cHhgXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGxvY2tCb2R5U2Nyb2xsID0gKCkgPT4geyAvLyAjMTI0NlxuICBjb25zdCBjb250YWluZXIgPSBkb20uZ2V0Q29udGFpbmVyKClcbiAgbGV0IHByZXZlbnRUb3VjaE1vdmVcbiAgY29udGFpbmVyLm9udG91Y2hzdGFydCA9IChlKSA9PiB7XG4gICAgcHJldmVudFRvdWNoTW92ZSA9IHNob3VsZFByZXZlbnRUb3VjaE1vdmUoZSlcbiAgfVxuICBjb250YWluZXIub250b3VjaG1vdmUgPSAoZSkgPT4ge1xuICAgIGlmIChwcmV2ZW50VG91Y2hNb3ZlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc2hvdWxkUHJldmVudFRvdWNoTW92ZSA9IChldmVudCkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgY29uc3QgY29udGFpbmVyID0gZG9tLmdldENvbnRhaW5lcigpXG4gIGlmIChpc1N0eWx5cyhldmVudCkgfHwgaXNab29tKGV2ZW50KSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmICh0YXJnZXQgPT09IGNvbnRhaW5lcikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKFxuICAgICFkb20uaXNTY3JvbGxhYmxlKGNvbnRhaW5lcikgJiZcbiAgICB0YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiAvLyAjMTYwM1xuICAgIHRhcmdldC50YWdOYW1lICE9PSAnVEVYVEFSRUEnICYmIC8vICMyMjY2XG4gICAgIShcbiAgICAgIGRvbS5pc1Njcm9sbGFibGUoZG9tLmdldEh0bWxDb250YWluZXIoKSkgJiYgLy8gIzE5NDRcbiAgICAgIGRvbS5nZXRIdG1sQ29udGFpbmVyKCkuY29udGFpbnModGFyZ2V0KVxuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgaXNTdHlseXMgPSAoZXZlbnQpID0+IHsgLy8gIzE3ODZcbiAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggJiYgZXZlbnQudG91Y2hlc1swXS50b3VjaFR5cGUgPT09ICdzdHlsdXMnXG59XG5cbmNvbnN0IGlzWm9vbSA9IChldmVudCkgPT4geyAvLyAjMTg5MVxuICByZXR1cm4gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDFcbn1cblxuZXhwb3J0IGNvbnN0IHVuZG9JT1NmaXggPSAoKSA9PiB7XG4gIGlmIChkb20uaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIGNvbnN0IG9mZnNldCA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMClcbiAgICBkb20ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJydcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IChvZmZzZXQgKiAtMSlcbiAgfVxufVxuIiwiLy8gRGV0ZWN0IE5vZGUgZW52XG5leHBvcnQgY29uc3QgaXNOb2RlRW52ID0gKCkgPT4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJ1xuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tL2luZGV4LmpzJ1xuaW1wb3J0IHsgc3dhbENsYXNzZXMgfSBmcm9tICcuL2NsYXNzZXMuanMnXG5pbXBvcnQgeyBmaXhTY3JvbGxiYXIgfSBmcm9tICcuL3Njcm9sbGJhckZpeC5qcydcbmltcG9ydCB7IGlPU2ZpeCB9IGZyb20gJy4vaW9zRml4LmpzJ1xuaW1wb3J0IHsgc2V0QXJpYUhpZGRlbiB9IGZyb20gJy4vYXJpYS5qcydcbmltcG9ydCBnbG9iYWxTdGF0ZSBmcm9tICcuLi9nbG9iYWxTdGF0ZS5qcydcblxuZXhwb3J0IGNvbnN0IFNIT1dfQ0xBU1NfVElNRU9VVCA9IDEwXG5cbi8qKlxuICogT3BlbiBwb3B1cCwgYWRkIG5lY2Vzc2FyeSBjbGFzc2VzIGFuZCBzdHlsZXMsIGZpeCBzY3JvbGxiYXJcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKi9cbmV4cG9ydCBjb25zdCBvcGVuUG9wdXAgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvbS5nZXRDb250YWluZXIoKVxuICBjb25zdCBwb3B1cCA9IGRvbS5nZXRQb3B1cCgpXG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMud2lsbE9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMud2lsbE9wZW4ocG9wdXApXG4gIH1cblxuICBjb25zdCBib2R5U3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcbiAgY29uc3QgaW5pdGlhbEJvZHlPdmVyZmxvdyA9IGJvZHlTdHlsZXMub3ZlcmZsb3dZXG4gIGFkZENsYXNzZXMoY29udGFpbmVyLCBwb3B1cCwgcGFyYW1zKVxuXG4gIC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eShjb250YWluZXIsIHBvcHVwKVxuICB9LCBTSE9XX0NMQVNTX1RJTUVPVVQpXG5cbiAgaWYgKGRvbS5pc01vZGFsKCkpIHtcbiAgICBmaXhTY3JvbGxDb250YWluZXIoY29udGFpbmVyLCBwYXJhbXMuc2Nyb2xsYmFyUGFkZGluZywgaW5pdGlhbEJvZHlPdmVyZmxvdylcbiAgICBzZXRBcmlhSGlkZGVuKClcbiAgfVxuXG4gIGlmICghZG9tLmlzVG9hc3QoKSAmJiAhZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMuZGlkT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcGFyYW1zLmRpZE9wZW4ocG9wdXApKVxuICB9XG5cbiAgZG9tLnJlbW92ZUNsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbJ25vLXRyYW5zaXRpb24nXSlcbn1cblxuY29uc3Qgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCA9IChldmVudCkgPT4ge1xuICBjb25zdCBwb3B1cCA9IGRvbS5nZXRQb3B1cCgpXG4gIGlmIChldmVudC50YXJnZXQgIT09IHBvcHVwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgY29udGFpbmVyID0gZG9tLmdldENvbnRhaW5lcigpXG4gIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tLmFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKVxuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nXG59XG5cbmNvbnN0IHNldFNjcm9sbGluZ1Zpc2liaWxpdHkgPSAoY29udGFpbmVyLCBwb3B1cCkgPT4ge1xuICBpZiAoZG9tLmFuaW1hdGlvbkVuZEV2ZW50ICYmIGRvbS5oYXNDc3NBbmltYXRpb24ocG9wdXApKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihkb20uYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQpXG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJ1xuICB9XG59XG5cbmNvbnN0IGZpeFNjcm9sbENvbnRhaW5lciA9IChjb250YWluZXIsIHNjcm9sbGJhclBhZGRpbmcsIGluaXRpYWxCb2R5T3ZlcmZsb3cpID0+IHtcbiAgaU9TZml4KClcblxuICBpZiAoc2Nyb2xsYmFyUGFkZGluZyAmJiBpbml0aWFsQm9keU92ZXJmbG93ICE9PSAnaGlkZGVuJykge1xuICAgIGZpeFNjcm9sbGJhcigpXG4gIH1cblxuICAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0N1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gMFxuICB9KVxufVxuXG5jb25zdCBhZGRDbGFzc2VzID0gKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcykgPT4ge1xuICBkb20uYWRkQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMuc2hvd0NsYXNzLmJhY2tkcm9wKVxuICAvLyB0aGUgd29ya2Fyb3VuZCB3aXRoIHNldHRpbmcvdW5zZXR0aW5nIG9wYWNpdHkgaXMgbmVlZGVkIGZvciAjMjAxOSBhbmQgMjA1OVxuICBwb3B1cC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsICcwJywgJ2ltcG9ydGFudCcpXG4gIGRvbS5zaG93KHBvcHVwLCAnZ3JpZCcpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vIEFuaW1hdGUgcG9wdXAgcmlnaHQgYWZ0ZXIgc2hvd2luZyBpdFxuICAgIGRvbS5hZGRDbGFzcyhwb3B1cCwgcGFyYW1zLnNob3dDbGFzcy5wb3B1cClcbiAgICAvLyBhbmQgcmVtb3ZlIHRoZSBvcGFjaXR5IHdvcmthcm91bmRcbiAgICBwb3B1cC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3BhY2l0eScpXG4gIH0sIFNIT1dfQ0xBU1NfVElNRU9VVCkgLy8gMTBtcyBpbiBvcmRlciB0byBmaXggIzIwNjJcblxuICBkb20uYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzLnNob3duKVxuICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICBkb20uYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddKVxuICB9XG59XG4iLCJpbXBvcnQgeyB3YXJuLCB3YXJuQWJvdXREZXByZWNhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgdGl0bGU6ICcnLFxuICB0aXRsZVRleHQ6ICcnLFxuICB0ZXh0OiAnJyxcbiAgaHRtbDogJycsXG4gIGZvb3RlcjogJycsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgaWNvbkNvbG9yOiB1bmRlZmluZWQsXG4gIGljb25IdG1sOiB1bmRlZmluZWQsXG4gIHRlbXBsYXRlOiB1bmRlZmluZWQsXG4gIHRvYXN0OiBmYWxzZSxcbiAgc2hvd0NsYXNzOiB7XG4gICAgcG9wdXA6ICdzd2FsMi1zaG93JyxcbiAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLXNob3cnLFxuICAgIGljb246ICdzd2FsMi1pY29uLXNob3cnLFxuICB9LFxuICBoaWRlQ2xhc3M6IHtcbiAgICBwb3B1cDogJ3N3YWwyLWhpZGUnLFxuICAgIGJhY2tkcm9wOiAnc3dhbDItYmFja2Ryb3AtaGlkZScsXG4gICAgaWNvbjogJ3N3YWwyLWljb24taGlkZScsXG4gIH0sXG4gIGN1c3RvbUNsYXNzOiB7fSxcbiAgdGFyZ2V0OiAnYm9keScsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBoZWlnaHRBdXRvOiB0cnVlLFxuICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gIGFsbG93RW50ZXJLZXk6IHRydWUsXG4gIHN0b3BLZXlkb3duUHJvcGFnYXRpb246IHRydWUsXG4gIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0RlbnlCdXR0b246IGZhbHNlLFxuICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgcHJlQ29uZmlybTogdW5kZWZpbmVkLFxuICBwcmVEZW55OiB1bmRlZmluZWQsXG4gIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY29uZmlybUJ1dHRvbkNvbG9yOiB1bmRlZmluZWQsXG4gIGRlbnlCdXR0b25UZXh0OiAnTm8nLFxuICBkZW55QnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgZGVueUJ1dHRvbkNvbG9yOiB1bmRlZmluZWQsXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjYW5jZWxCdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICBmb2N1c0NvbmZpcm06IHRydWUsXG4gIGZvY3VzRGVueTogZmFsc2UsXG4gIGZvY3VzQ2FuY2VsOiBmYWxzZSxcbiAgcmV0dXJuRm9jdXM6IHRydWUsXG4gIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uSHRtbDogJyZ0aW1lczsnLFxuICBjbG9zZUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIHRoaXMgZGlhbG9nJyxcbiAgbG9hZGVySHRtbDogJycsXG4gIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlLFxuICBzaG93TG9hZGVyT25EZW55OiBmYWxzZSxcbiAgaW1hZ2VVcmw6IHVuZGVmaW5lZCxcbiAgaW1hZ2VXaWR0aDogdW5kZWZpbmVkLFxuICBpbWFnZUhlaWdodDogdW5kZWZpbmVkLFxuICBpbWFnZUFsdDogJycsXG4gIHRpbWVyOiB1bmRlZmluZWQsXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICB3aWR0aDogdW5kZWZpbmVkLFxuICBwYWRkaW5nOiB1bmRlZmluZWQsXG4gIGJhY2tncm91bmQ6IHVuZGVmaW5lZCxcbiAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgaW5wdXRQbGFjZWhvbGRlcjogJycsXG4gIGlucHV0TGFiZWw6ICcnLFxuICBpbnB1dFZhbHVlOiAnJyxcbiAgaW5wdXRPcHRpb25zOiB7fSxcbiAgaW5wdXRBdXRvVHJpbTogdHJ1ZSxcbiAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgaW5wdXRWYWxpZGF0b3I6IHVuZGVmaW5lZCxcbiAgcmV0dXJuSW5wdXRWYWx1ZU9uRGVueTogZmFsc2UsXG4gIHZhbGlkYXRpb25NZXNzYWdlOiB1bmRlZmluZWQsXG4gIGdyb3c6IGZhbHNlLFxuICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gIHByb2dyZXNzU3RlcHM6IFtdLFxuICBjdXJyZW50UHJvZ3Jlc3NTdGVwOiB1bmRlZmluZWQsXG4gIHByb2dyZXNzU3RlcHNEaXN0YW5jZTogdW5kZWZpbmVkLFxuICB3aWxsT3BlbjogdW5kZWZpbmVkLFxuICBkaWRPcGVuOiB1bmRlZmluZWQsXG4gIGRpZFJlbmRlcjogdW5kZWZpbmVkLFxuICB3aWxsQ2xvc2U6IHVuZGVmaW5lZCxcbiAgZGlkQ2xvc2U6IHVuZGVmaW5lZCxcbiAgZGlkRGVzdHJveTogdW5kZWZpbmVkLFxuICBzY3JvbGxiYXJQYWRkaW5nOiB0cnVlXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGFibGVQYXJhbXMgPSBbXG4gICdhbGxvd0VzY2FwZUtleScsXG4gICdhbGxvd091dHNpZGVDbGljaycsXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2J1dHRvbnNTdHlsaW5nJyxcbiAgJ2NhbmNlbEJ1dHRvbkFyaWFMYWJlbCcsXG4gICdjYW5jZWxCdXR0b25Db2xvcicsXG4gICdjYW5jZWxCdXR0b25UZXh0JyxcbiAgJ2Nsb3NlQnV0dG9uQXJpYUxhYmVsJyxcbiAgJ2Nsb3NlQnV0dG9uSHRtbCcsXG4gICdjb25maXJtQnV0dG9uQXJpYUxhYmVsJyxcbiAgJ2NvbmZpcm1CdXR0b25Db2xvcicsXG4gICdjb25maXJtQnV0dG9uVGV4dCcsXG4gICdjdXJyZW50UHJvZ3Jlc3NTdGVwJyxcbiAgJ2N1c3RvbUNsYXNzJyxcbiAgJ2RlbnlCdXR0b25BcmlhTGFiZWwnLFxuICAnZGVueUJ1dHRvbkNvbG9yJyxcbiAgJ2RlbnlCdXR0b25UZXh0JyxcbiAgJ2RpZENsb3NlJyxcbiAgJ2RpZERlc3Ryb3knLFxuICAnZm9vdGVyJyxcbiAgJ2hpZGVDbGFzcycsXG4gICdodG1sJyxcbiAgJ2ljb24nLFxuICAnaWNvbkNvbG9yJyxcbiAgJ2ljb25IdG1sJyxcbiAgJ2ltYWdlQWx0JyxcbiAgJ2ltYWdlSGVpZ2h0JyxcbiAgJ2ltYWdlVXJsJyxcbiAgJ2ltYWdlV2lkdGgnLFxuICAncHJlQ29uZmlybScsXG4gICdwcmVEZW55JyxcbiAgJ3Byb2dyZXNzU3RlcHMnLFxuICAncmV0dXJuRm9jdXMnLFxuICAncmV2ZXJzZUJ1dHRvbnMnLFxuICAnc2hvd0NhbmNlbEJ1dHRvbicsXG4gICdzaG93Q2xvc2VCdXR0b24nLFxuICAnc2hvd0NvbmZpcm1CdXR0b24nLFxuICAnc2hvd0RlbnlCdXR0b24nLFxuICAndGV4dCcsXG4gICd0aXRsZScsXG4gICd0aXRsZVRleHQnLFxuICAnd2lsbENsb3NlJyxcbl1cblxuZXhwb3J0IGNvbnN0IGRlcHJlY2F0ZWRQYXJhbXMgPSB7fVxuXG5jb25zdCB0b2FzdEluY29tcGF0aWJsZVBhcmFtcyA9IFtcbiAgJ2FsbG93T3V0c2lkZUNsaWNrJyxcbiAgJ2FsbG93RW50ZXJLZXknLFxuICAnYmFja2Ryb3AnLFxuICAnZm9jdXNDb25maXJtJyxcbiAgJ2ZvY3VzRGVueScsXG4gICdmb2N1c0NhbmNlbCcsXG4gICdyZXR1cm5Gb2N1cycsXG4gICdoZWlnaHRBdXRvJyxcbiAgJ2tleWRvd25MaXN0ZW5lckNhcHR1cmUnXG5dXG5cbi8qKlxuICogSXMgdmFsaWQgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkUGFyYW1ldGVyID0gKHBhcmFtTmFtZSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRQYXJhbXMsIHBhcmFtTmFtZSlcbn1cblxuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXIgZm9yIFN3YWwudXBkYXRlKCkgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cbmV4cG9ydCBjb25zdCBpc1VwZGF0YWJsZVBhcmFtZXRlciA9IChwYXJhbU5hbWUpID0+IHtcbiAgcmV0dXJuIHVwZGF0YWJsZVBhcmFtcy5pbmRleE9mKHBhcmFtTmFtZSkgIT09IC0xXG59XG5cbi8qKlxuICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRGVwcmVjYXRlZFBhcmFtZXRlciA9IChwYXJhbU5hbWUpID0+IHtcbiAgcmV0dXJuIGRlcHJlY2F0ZWRQYXJhbXNbcGFyYW1OYW1lXVxufVxuXG5jb25zdCBjaGVja0lmUGFyYW1Jc1ZhbGlkID0gKHBhcmFtKSA9PiB7XG4gIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICB3YXJuKGBVbmtub3duIHBhcmFtZXRlciBcIiR7cGFyYW19XCJgKVxuICB9XG59XG5cbmNvbnN0IGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZCA9IChwYXJhbSkgPT4ge1xuICBpZiAodG9hc3RJbmNvbXBhdGlibGVQYXJhbXMuaW5jbHVkZXMocGFyYW0pKSB7XG4gICAgd2FybihgVGhlIHBhcmFtZXRlciBcIiR7cGFyYW19XCIgaXMgaW5jb21wYXRpYmxlIHdpdGggdG9hc3RzYClcbiAgfVxufVxuXG5jb25zdCBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQgPSAocGFyYW0pID0+IHtcbiAgaWYgKGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICB3YXJuQWJvdXREZXByZWNhdGlvbihwYXJhbSwgaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSlcbiAgfVxufVxuXG4vKipcbiAqIFNob3cgcmVsZXZhbnQgd2FybmluZ3MgZm9yIGdpdmVuIHBhcmFtc1xuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IChwYXJhbXMpID0+IHtcbiAgaWYgKCFwYXJhbXMuYmFja2Ryb3AgJiYgcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgd2FybignXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJylcbiAgfVxuXG4gIGZvciAoY29uc3QgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSlcblxuICAgIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICAgIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZChwYXJhbSlcbiAgICB9XG5cbiAgICBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQocGFyYW0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFBhcmFtc1xuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tL2luZGV4LmpzJ1xuXG5leHBvcnQgY29uc3QgZml4U2Nyb2xsYmFyID0gKCkgPT4ge1xuICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICBpZiAoZG9tLnN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIC8vIGFkZCBwYWRkaW5nIHNvIHRoZSBjb250ZW50IGRvZXNuJ3Qgc2hpZnQgYWZ0ZXIgcmVtb3ZhbCBvZiBzY3JvbGxiYXJcbiAgICBkb20uc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtkb20uc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgKyBkb20ubWVhc3VyZVNjcm9sbGJhcigpfXB4YFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1bmRvU2Nyb2xsYmFyID0gKCkgPT4ge1xuICBpZiAoZG9tLnN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtkb20uc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmd9cHhgXG4gICAgZG9tLnN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgeyB3YXJuIH0gZnJvbSAnLi91dGlscy5qcydcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbS9pbmRleC5qcydcbmltcG9ydCBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzIGZyb20gJy4vZGVmYXVsdElucHV0VmFsaWRhdG9ycy5qcydcblxuZnVuY3Rpb24gc2V0RGVmYXVsdElucHV0VmFsaWRhdG9ycyAocGFyYW1zKSB7XG4gIC8vIFVzZSBkZWZhdWx0IGBpbnB1dFZhbGlkYXRvcmAgZm9yIHN1cHBvcnRlZCBpbnB1dCB0eXBlcyBpZiBub3QgcHJvdmlkZWRcbiAgaWYgKCFwYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICBPYmplY3Qua2V5cyhkZWZhdWx0SW5wdXRWYWxpZGF0b3JzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09IGtleSkge1xuICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzW2tleV1cbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudCAocGFyYW1zKSB7XG4gIC8vIERldGVybWluZSBpZiB0aGUgY3VzdG9tIHRhcmdldCBlbGVtZW50IGlzIHZhbGlkXG4gIGlmIChcbiAgICAhcGFyYW1zLnRhcmdldCB8fFxuICAgICh0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkpIHx8XG4gICAgKHR5cGVvZiBwYXJhbXMudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLnRhcmdldC5hcHBlbmRDaGlsZClcbiAgKSB7XG4gICAgd2FybignVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKVxuICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSdcbiAgfVxufVxuXG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMgKHBhcmFtcykge1xuICBzZXREZWZhdWx0SW5wdXRWYWxpZGF0b3JzKHBhcmFtcylcblxuICAvLyBzaG93TG9hZGVyT25Db25maXJtICYmIHByZUNvbmZpcm1cbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgIHdhcm4oXG4gICAgICAnc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArXG4gICAgICAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgK1xuICAgICAgJ2h0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNhamF4LXJlcXVlc3QnXG4gICAgKVxuICB9XG5cbiAgdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcylcblxuICAvLyBSZXBsYWNlIG5ld2xpbmVzIHdpdGggPGJyPiBpbiB0aXRsZVxuICBpZiAodHlwZW9mIHBhcmFtcy50aXRsZSA9PT0gJ3N0cmluZycpIHtcbiAgICBwYXJhbXMudGl0bGUgPSBwYXJhbXMudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxiciAvPicpXG4gIH1cblxuICBkb20uaW5pdChwYXJhbXMpXG59XG4iLCJleHBvcnQgY29uc3QgY29uc29sZVByZWZpeCA9ICdTd2VldEFsZXJ0MjonXG5cbi8qKlxuICogRmlsdGVyIHRoZSB1bmlxdWUgdmFsdWVzIGludG8gYSBuZXcgYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqL1xuZXhwb3J0IGNvbnN0IHVuaXF1ZUFycmF5ID0gKGFycikgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXN1bHQuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nXG4gKiBAcGFyYW0gc3RyXG4gKi9cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyKSA9PiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcblxuLyoqXG4gKiBDb252ZXJ0IE5vZGVMaXN0IHRvIEFycmF5XG4gKiBAcGFyYW0gbm9kZUxpc3RcbiAqL1xuZXhwb3J0IGNvbnN0IHRvQXJyYXkgPSAobm9kZUxpc3QpID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KVxuXG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjb25zdCB3YXJuID0gKG1lc3NhZ2UpID0+IHtcbiAgY29uc29sZS53YXJuKGAke2NvbnNvbGVQcmVmaXh9ICR7dHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnID8gbWVzc2FnZS5qb2luKCcgJykgOiBtZXNzYWdlfWApXG59XG5cbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSBlcnJvcnNcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbmV4cG9ydCBjb25zdCBlcnJvciA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoYCR7Y29uc29sZVByZWZpeH0gJHttZXNzYWdlfWApXG59XG5cbi8qKlxuICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcyA9IFtdXG5cbi8qKlxuICogU2hvdyBhIGNvbnNvbGUgd2FybmluZywgYnV0IG9ubHkgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBzaG93blxuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xuZXhwb3J0IGNvbnN0IHdhcm5PbmNlID0gKG1lc3NhZ2UpID0+IHtcbiAgaWYgKCFwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMuaW5jbHVkZXMobWVzc2FnZSkpIHtcbiAgICBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMucHVzaChtZXNzYWdlKVxuICAgIHdhcm4obWVzc2FnZSlcbiAgfVxufVxuXG4vKipcbiAqIFNob3cgYSBvbmUtdGltZSBjb25zb2xlIHdhcm5pbmcgYWJvdXQgZGVwcmVjYXRlZCBwYXJhbXMvbWV0aG9kc1xuICovXG5leHBvcnQgY29uc3Qgd2FybkFib3V0RGVwcmVjYXRpb24gPSAoZGVwcmVjYXRlZFBhcmFtLCB1c2VJbnN0ZWFkKSA9PiB7XG4gIHdhcm5PbmNlKGBcIiR7ZGVwcmVjYXRlZFBhcmFtfVwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBQbGVhc2UgdXNlIFwiJHt1c2VJbnN0ZWFkfVwiIGluc3RlYWQuYClcbn1cblxuLyoqXG4gKiBJZiBgYXJnYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0ICh3aXRoIG5vIGFyZ3VtZW50cyBvciBjb250ZXh0KSBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gKiBPdGhlcndpc2UsIGp1c3QgcGFzcyB0aGUgdmFsdWUgdGhyb3VnaFxuICogQHBhcmFtIGFyZ1xuICovXG5leHBvcnQgY29uc3QgY2FsbElmRnVuY3Rpb24gPSAoYXJnKSA9PiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKCkgOiBhcmdcblxuZXhwb3J0IGNvbnN0IGhhc1RvUHJvbWlzZUZuID0gKGFyZykgPT4gYXJnICYmIHR5cGVvZiBhcmcudG9Qcm9taXNlID09PSAnZnVuY3Rpb24nXG5cbmV4cG9ydCBjb25zdCBhc1Byb21pc2UgPSAoYXJnKSA9PiBoYXNUb1Byb21pc2VGbihhcmcpID8gYXJnLnRvUHJvbWlzZSgpIDogUHJvbWlzZS5yZXNvbHZlKGFyZylcblxuZXhwb3J0IGNvbnN0IGlzUHJvbWlzZSA9IChhcmcpID0+IGFyZyAmJiBQcm9taXNlLnJlc29sdmUoYXJnKSA9PT0gYXJnXG4iLCJpbXBvcnQgZm9ybU1vZHVsZSBmcm9tIFwiLi9mb3JtTW9kdWxlXCI7XHJcbmltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi9wcm9qZWN0RmFjdG9yeVwiO1xyXG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuL3Rhc2tGYWN0b3J5XCI7XHJcblxyXG5jb25zdCBkb21NYW5hZ2VyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgZGlzcGxheTsgXHJcbiAgICBsZXQgc2lkZUJhcjtcclxuICAgIGxldCB0YXNrTGlzdDtcclxuICAgIGxldCBwcm9qZWN0cztcclxuICAgIGxldCBzZWxlY3RlZFByb2plY3Q7XHJcbiAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSAwO1xyXG4gICAgY29uc3QgcmVuZGVyID0gKGRvbUVsZW1lbnQsIHByb2plY3RzTGlzdCkgPT4ge1xyXG4gICAgICAgIGRpc3BsYXkgPSBkb21FbGVtZW50O1xyXG4gICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gJyc7IC8vQ2xlYW4gdGhlIHBhZ2UgY29udGVudHMgXHJcbiAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0c0xpc3Q7XHJcblxyXG4gICAgICAgIHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyJyk7XHJcbiAgICAgICAgYWRkUHJvamVjdHNUb1NpZGViYXIocHJvamVjdHMpO1xyXG5cclxuICAgICAgICB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xyXG4gICAgICAgIGFkZFRhc2tsaXN0Q29udGVudHMocHJvamVjdHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XHJcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XHJcbiAgICAgICAgdGFza0xpc3Quc2Nyb2xsVG9wID0gc2Nyb2xsUG9zaXRpb25cclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RFbGVtZW50ID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBsZXQgbmV3UHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByb2plY3RcIj48aDI+JHtwcm9qZWN0Lm5hbWV9PC9oMz48L2Rpdj5gO1xyXG4gICAgICAgIGlmKHByb2plY3QuaXNTZWxlY3RlZCl7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlU2VsZWN0ZWRQcm9qZWN0LmJpbmQobnVsbCwgcHJvamVjdCkpO1xyXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0RWxlbWVudDtcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50ID0gKHRhc2spID0+IHtcclxuICAgICAgICBsZXQgbmV3VGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdUYXNrRWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRhc2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXJcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHt0YXNrLmlzRG9uZT8gJ2NoZWNrZWQnOicnfT4gXHJcbiAgICAgICAgICAgICAgICA8aDI+JHt0YXNrLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+JHt0YXNrLmR1ZURhdGV9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwPiR7dGFzay5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgaWYgKHRhc2suaXNEb25lKSBuZXdUYXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcbiAgICAgICAgbmV3VGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvblRhc2tDb21wbGV0ZS5iaW5kKG51bGwsIHRhc2spKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlQWRkVGFza0J1dHRvbiA9IChwb3MpID0+IHtcclxuICAgICAgICBsZXQgbmV3VGFza0J1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdUYXNrQnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8aDI+QWRkIHRhc2s8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgbmV3VGFza0J1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrVG9Qcm9qZWN0LmJpbmQobnVsbCwgcG9zKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tCdXR0b25FbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3UHJvamVjdEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8aDI+QWRkIHByb2plY3Q8aDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Byb2plY3QpO1xyXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0QnV0dG9uRWxlbWVudDtcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFByb2plY3RzVG9TaWRlYmFyID0gKHByb2plY3RzKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KTtcclxuICAgICAgICAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvamVjdEJ1dHRvbigpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRhc2tsaXN0Q29udGVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBzZWxlY3RlZFByb2plY3QubmFtZTtcclxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkVGFza0J1dHRvbignc3RhcnQnKSk7XHJcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PntcclxuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKTtcclxuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobmV3VGFzayk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihzZWxlY3RlZFByb2plY3QudGFza3MubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRhc2tCdXR0b24oJ2VuZCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VTZWxlY3RlZFByb2plY3QgPSAobmV3U2VsZWN0ZWRQcm9qZWN0LCBlKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgICAgICAgICAgcHJvamVjdC50b2dnbGVTZWxlY3RlZChmYWxzZSk7IC8vIFVuc2VsZWN0IGFsbCBwcm9qZWN0c1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbmV3U2VsZWN0ZWRQcm9qZWN0LnRvZ2dsZVNlbGVjdGVkKHRydWUpOyBcclxuICAgICAgICBzZWxlY3RlZFByb2plY3QgPSBuZXdTZWxlY3RlZFByb2plY3Q7XHJcbiAgICAgICAgcmVuZGVyKGRpc3BsYXksIHByb2plY3RzKTsgLy8gQ2xlYW4gdGhlIHBhZ2UgYW5kIGRyYXcgYWdhaW5cclxuICAgIH1cclxuICAgIGNvbnN0IG9uVGFza0NvbXBsZXRlID0gKGNvbXBsZXRlZFRhc2ssIGUpID0+IHtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrLnNldENvbXBsZXRlZCgpO1xyXG4gICAgICAgIHNjcm9sbFBvc2l0aW9uID0gdGFza0xpc3Quc2Nyb2xsVG9wO1xyXG4gICAgICAgIHJlbmRlcihkaXNwbGF5LCBwcm9qZWN0cyk7XHJcbiAgICB9ICBcclxuICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAocG9zLCBlKSA9PiB7XHJcbiAgICAgICAgZm9ybU1vZHVsZS5hc2tUYXNrSW5mbygpLnRoZW4oKHRhc2tEYXRhKT0+e1xyXG4gICAgICAgICAgICBpZih0YXNrRGF0YSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFza0RhdGEgPSBKU09OLnBhcnNlKHRhc2tEYXRhKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5hZGRUYXNrKHRhc2tGYWN0b3J5KG5ld1Rhc2tEYXRhLnRpdGxlLCBuZXdUYXNrRGF0YS5kZXNjcmlwdGlvbiwgbmV3VGFza0RhdGEuZGF0ZSwxKSwgcG9zKTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uID0gdGFza0xpc3Quc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyKGRpc3BsYXksIHByb2plY3RzKTsgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyB0YXNrIHdhcyBjcmVhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkTmV3UHJvamVjdCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1Nb2R1bGUuYXNrUHJvamVjdEluZm8oKS50aGVuKChwcm9qZWN0TmFtZSk9PntcclxuICAgICAgICAgICAgICAgIGlmKHByb2plY3ROYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNEdXBsaWNhdGUgPSBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNEdXBsaWNhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtTW9kdWxlLnNob3dEdXBsaWNhdGVNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcihkaXNwbGF5LCBwcm9qZWN0cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVuZGVyXHJcbiAgICB9IFxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tTWFuYWdlcjsiLCJpbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mi9zcmMvc3dlZXRhbGVydDIuanMnO1xyXG5pbXBvcnQge2Zvcm1hdCwgcGFyc2UsIHBhcnNlSVNPfSBmcm9tICdkYXRlLWZucydcclxuY29uc3QgZm9ybU1vZHVsZSA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYXNrVGFza0luZm8gPWFzeW5jKCk9PiB7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBmb3JtVmFsdWVzIH0gPSBhd2FpdCBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ05ldyBUYXNrJyxcclxuICAgICAgICAgICAgaHRtbDpcclxuICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyXCI+IFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGFzay10aXRsZS1pbnB1dFwiIG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGFzayB0aXRsZVwiIGNsYXNzPVwic3dhbDItaW5wdXRcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stZGF0ZS1pbnB1dFwiIGNsYXNzPVwic3dhbDItaW5wdXRcIiB2YWx1ZT1cIiR7Zm9ybWF0KG5ldyBEYXRlKCksJ3l5eXktTU0tZGQnKX1cIiB0eXBlPVwiZGF0ZVwiPiAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stZGVzYy1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBkZXNjcmlwdGlvbi4uLlwiIGNsYXNzPVwic3dhbDItaW5wdXRcIj5gLFxyXG4gICAgICAgICAgICBmb2N1c0NvbmZpcm06IGZhbHNlLFxyXG4gICAgICAgICAgICBwcmVDb25maXJtOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUtaW5wdXQnKS52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZVN0cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUtaW5wdXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZS1pbnB1dCcpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzYy1pbnB1dCcpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBkYXRlOiBmb3JtYXQocGFyc2VJU08oZGF0ZVN0cmluZyksICdkZC9NTS95eXl5JyksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBTd2FsLnNob3dWYWxpZGF0aW9uTWVzc2FnZSgnWW91IG11c3QgcHJvdmlkZSBhIHRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoZm9ybVZhbHVlcykge1xyXG4gICAgICAgICAgICByZXR1cm4oSlNPTi5zdHJpbmdpZnkoZm9ybVZhbHVlcykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYXNrUHJvamVjdEluZm8gPSBhc3luYygpID0+IHtcclxuICAgICAgY29uc3QgeyB2YWx1ZTogcHJvamVjdE5hbWUgfSA9IGF3YWl0IFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6ICdOZXcgUHJvamVjdCcsXHJcbiAgICAgICAgaW5wdXQ6ICd0ZXh0JyxcclxuICAgICAgICBpbnB1dExhYmVsOiAnUHJvamVjdCBuYW1lJyxcclxuICAgICAgICBpbnB1dFZhbHVlOiAnTXkgcHJvamVjdCcsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBpbnB1dFZhbGlkYXRvcjogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnUHJvamVjdCBuYW1lIGNhblxcJ3QgYmUgZW1wdHknO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYodmFsdWUubGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICByZXR1cm4gJ1Byb2plY3QgbmFtZSBtdXN0IGJlIHVuZGVyIDEwIGNoYXJhY3RlcnMnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0TmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd0R1cGxpY2F0ZU1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICAgIFN3YWwuZmlyZShcIkVycm9yXCIsICdDYW5cXCd0IGFkZCBkdXBsaWNhdGUgcHJvamVjdHMnLCAnZXJyb3InKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXNrVGFza0luZm8sXHJcbiAgICAgICAgYXNrUHJvamVjdEluZm8sXHJcbiAgICAgICAgc2hvd0R1cGxpY2F0ZU1lc3NhZ2VcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1Nb2R1bGU7IiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSwgc2VsZWN0ZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgbGV0IHByb2plY3QgPSB7fTtcclxuICAgIHByb2plY3QubmFtZSA9IG5hbWU7XHJcbiAgICBwcm9qZWN0LmlzU2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgIHByb2plY3QudGFza3MgPSBbXTtcclxuXHJcbiAgICBwcm9qZWN0LmFkZFRhc2sgPSAodGFzaywgcG9zaXRpb24gPSAnZW5kJykgPT4ge1xyXG4gICAgICAgIGlmKHBvc2l0aW9uID09ICdzdGFydCcpe1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzLnVuc2hpZnQodGFzaylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb2plY3QudG9nZ2xlU2VsZWN0ZWQgPSAoc2VsZWN0ZWQpID0+IHtcclxuICAgICAgICBpZihzZWxlY3RlZCAmJiBwcm9qZWN0LmlzU2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gLy8gRG8gbm90aGluZyBpZiB0aGUgcHJvamVjdCBpcyBhbHJlYWR5IHNlbGVjdGVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3QuaXNTZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb2plY3Q7XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RmFjdG9yeTsiLCJjb25zdCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbigpe1xyXG4gICAgbGV0IHByb2plY3RzID0gW11cclxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4geyAgLy9SZXR1cm5zIHRydWUgaWYgcHJvamVjdCBpcyBhIGR1cGxpY2F0ZVxyXG4gICAgICAgIGxldCBpc0R1cGxpY2F0ZSA9IHByb2plY3RzLnNvbWUoKHByb2plY3QpPT57XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Lm5hbWUgPT0gbmV3UHJvamVjdC5uYW1lO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoaXNEdXBsaWNhdGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdC5uYW1lICE9IHByb2plY3ROYW1lO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFByb2plY3RzLFxyXG4gICAgICAgIGFkZFByb2plY3QsXHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWFuYWdlcjsiLCJjb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUgPSBmYWxzZSkgPT4ge1xyXG4gICAgbGV0IHRhc2sgPSB7fVxyXG4gICAgdGFzay50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRhc2suaXNEb25lID0gaXNEb25lO1xyXG4gICAgdGFzay5zZXRDb21wbGV0ZWQgPSAoKSA9PntcclxuICAgICAgICB0YXNrLmlzRG9uZSA9ICF0YXNrLmlzRG9uZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXNrXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tGYWN0b3J5IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tTWFuYWdlciBmcm9tIFwiLi9Nb2R1bGVzL2RvbU1hbmFnZXJcIjtcclxuaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gXCIuL01vZHVsZXMvcHJvamVjdEZhY3RvcnlcIjtcclxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL01vZHVsZXMvcHJvamVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuL01vZHVsZXMvdGFza0ZhY3RvcnlcIjtcclxuXHJcbmxldCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5jb25zdCBwcm9qZWN0MSA9IHByb2plY3RGYWN0b3J5KCdMT0tPSycsIHRydWUpO1xyXG5jb25zdCBwcm9qZWN0MiA9IHByb2plY3RGYWN0b3J5KCdDT29DJyk7XHJcbnByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdDEpO1xyXG5wcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3QyKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEpKTtcclxucHJvamVjdDIuYWRkVGFzayh0YXNrRmFjdG9yeSgnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGJsYWJsYmxhYmxhbGEnLCAnMTAvMTAvMTk5OScsIDEsIHRydWUpKTtcclxuXHJcbmRvbU1hbmFnZXIucmVuZGVyKGRpc3BsYXksIHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==