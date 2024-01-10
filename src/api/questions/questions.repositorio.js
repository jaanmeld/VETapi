import db from './questions.js';

function getByIndex({ index }) {
  return db[index];
}

function getLength() {
  return db.length;
}
export { getLength, getByIndex };
