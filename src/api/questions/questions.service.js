import db from './questions.js';
import * as questionsRepository from './questions.repositorio.js';

function getRandom() {
  const randomIndex = Math.floor(Math.random() * db.length);
  const question = questionsRepository.getByIndex({ randomIndex });
  return question;


  
}
export { getRandom };
