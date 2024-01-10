import Router from 'express';
import db from './questions.js';
import * as questionsController from './questions.controller.js'; // exporting all from QuestionsControler.js
import * as questionsService from './questions.service.js';

const router = Router();

router.get('/random', questionsController.getRandom);

router.get('/byIndex/:index', (req, res) => {
  const { index } = req.params;
  const indexAsInt = parseInt(index);
  const question = db[indexAsInt];
  if (indexAsInt >= db.length) {
    res.json({ error: 'indice no permitido' });
  }
  res.json(question);
});

router.get('/byFilter', (req, res) => { // query
  const { query } = req;
  let dbCopy = [...db];
  const keys = Object.keys(query); // [category] || [level] || [category.level]
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]; // 1) Category. 2) level
    const value = query[key];
    dbCopy = dbCopy.filter((question) => question[key] === value);
  }
  res.json(dbCopy);
});

router.post('', (req, res) => {
  const { body } = req;
  db.push(body);
  console.log(body);
  res.json(body);
});

router.delete('/:id', (req, res) => {
  const { id } = req;
  const index = db.findIndex((question) => question._id === id);
  const deleted = db.splice(index, 1);
  res.json(deleted);
});

router.put('/:id', (req, res) => { // sustituye
  const { id } = req.params; // thing that will be replaced
  const index = db.findIndex((question) => question._id === id); // checks if question with that id exist in db, if yes returns index.
  if (index === -1) {
    res.json({ msg: 'el indice proporcionado no existe' });
  }
  const { body } = req; // new item
  const { _id } = db[index];
  // const _id = db[index]_id; // the same as prev line
  db[index] = { ...body, _id }; // _id always last to prevent overwriting any other objects
  res.json(db[index]);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id); // checks if question with that id exist in db, if yes returns index.
  if (index === -1) {
    res.json({ msg: 'el indice proporcionado no existe' });
  }
  const { body } = req;
  db[index] = { ...db[index], ...body, _id: db[index]._id };
  res.json(db[index]);
});

export default router;
