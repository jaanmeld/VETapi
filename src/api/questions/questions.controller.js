import * as questionsService from './questions.service.js';

function getRandom(req, res) {
  const randomQuestion = questionsService.getRandom();
  res.json(randomQuestion);
}
export {
  // eslint-disable-next-line import/prefer-default-export
  getRandom,
};
