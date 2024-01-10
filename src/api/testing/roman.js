import { decimalToRoman, romanToDecimal } from './parsers.js';

function romanParseator({ numberAsString }) {
  if (!numberAsString) {
    const myError = {
      code: 1,
      msg: 'The argument must be an object that contains the numberAsString property',
    };

    throw new Error(JSON.stringify(myError));
  }

  if (typeof numberAsString !== 'string') {
    const myError = {
      code: 2,
      msg: 'The numberAsString property must be a string',
    };

    throw new Error(JSON.stringify(myError));
  }

  const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  const numberAsInteger = parseInt(numberAsString, 10);
  const isRomanString = Number.isNaN(numberAsInteger);

  const splittedNumber = numberAsString.split('');

  if (isRomanString) {
    const decimalNumber = romanToDecimal({ splittedNumber, romanLetters });
    console.log(`${numberAsString} ==> ${decimalNumber}`);
    return decimalNumber;
  }

  const romanNumber = decimalToRoman({ splittedNumber, romanLetters });
  console.log(`${numberAsString} ==> ${romanNumber}`);
  return romanNumber;
}

export default romanParseator;
