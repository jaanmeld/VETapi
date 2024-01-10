/* eslint-disable no-import-assign */
import romanParseator from './roman.js';
import * as parsers from './parsers.js';

function decimalToRomanMock({ splittedNumber }) {
  if (splittedNumber[0] === '1') {
    return 'I';
  }
  if (splittedNumber[0] === '2') {
    return 'II';
  }
  return '?';
}

function romanToDecimalMock({ splittedNumber }) {
  if (splittedNumber.length === 1 && splittedNumber[0] === 'I') {
    return 1;
  }
  if (splittedNumber.length === 2 && splittedNumber[0] === 'I' && splittedNumber[1] === 'V') {
    return 4;
  }
  return '?';
}

beforeAll(() => {
  parsers.decimalToRoman = jest.fn().mockImplementation(decimalToRomanMock);
  parsers.romanToDecimal = jest.fn().mockImplementation(romanToDecimalMock);
});


// describe is a group of tests  //
// describe('add tests', () => {
//   test('two positive nr', () => {
//     expect(2 + 3).toBe(5);
//   });
//   test('two negative nr', () => {
//     expect(-2 + -3).toBe(-5);
//   });
//   test('smth', () => {
//     expect(2 * 3).toBe(6);
//   });
// });

describe('validation params tests', () => {
  test('The arg is an object, but props are missing', () => {
    try {
      romanParseator({});
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(1);
      expect(parsedMessage.msg).toBe('The argument must be an object that contains the numberAsString property');
    }
  });
  test('The arg is an object, but numberasastring is a number', () => {
    try {
      romanParseator({ numberAsString: 1 });
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(2);
      expect(parsedMessage.msg).toBe('The numberAsString property must be a string');
    }
  });
});

describe('Roman to decimal functionality', () => {
  test('I Pass "I" and returns 1', () => {
    const decimal = romanParseator({ numberAsString: 'I' });
    expect(decimal).toBe(1);
  });
});

describe('Decimal to Roman functionality', () => {
  test('I Pass "1" and returns "I"', () => {
    const roman = romanParseator({ numberAsString: '1' });
    expect(roman).toBe('I');
  });
  test('I Pass "2" and returns "II"', () => {
    const roman = romanParseator({ numberAsString: '2' });
    expect(roman).toBe('II');
  });
});
