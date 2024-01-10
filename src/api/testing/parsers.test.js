import * as parsers from './parsers.js';

const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

describe.only('Roman letters include only correct letters', () => {
  test('Passing a nonexistent roman letter', () => {
    try {
      const splittedNumber = ['X','V','M'];
      parsers.romanToDecimal({ splittedNumber, romanLetters });
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(3);
      expect(parsedMessage.msg).toBe('The entered number is not valid ');
    }
  });
});
