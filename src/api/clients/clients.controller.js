import * as clientsService from './clients.service.js';

async function getAll(req, res) {
  const clients = await clientsService.getAll();
  res.json({ clients });
}

async function getByDocumentNumber(req, res) {
  const { number } = req.params;

  const requiredDocNumberLength = 9;
  if (number.length !== requiredDocNumberLength) {
    console.log(`number${number}`);
    res.status(400);
    res.json({ msg: 'Error: doc number is not correct length' });
    return;
  }
  const client = await clientsService.getByDocumentNumber({ documentNumber: number });
  res.json(client);
}

async function getById(req, res) {
  const { id } = req.params; // id (:id) is sent from browser as params.
  console.log(`id ${id}`);
  // const { withExclamation } = req.query; // .../?withExclamation=true
  // params => obligatory
  // query => optional.
  // query received as string (true if exist)
  // res.json(` id here: ${id} exclamation here: ${withExclamation ? '!' : ''}`);
  const reply = await clientsService.getById({ id }); // deconstructured couse defined destructured as well.
  res.json({ reply });

  // res.json(id); // .json() same as return finishes the function.
}

async function getByFilter(req, res) {
  const { query } = req;
  console.log('query controller', { query });
  if (!Object.keys(query).lenght) {
    const errorMsg = 'Please specifie smth!';
    res.json({ errorMsg });
    return;
  }
  const filteredClients = await clientsService.getByFilter({ query });
  console.log('res controller ', filteredClients);
  res.json(filteredClients);
}

async function deleteClient(req, res) {
  const { id } = req.params;
  const reply = await clientsService.deleteClient({ id });
  console.log('deleted client ', reply);
  res.json({ reply });
}

async function post(req, res) {
  const { body } = req; // == req.body //
  if (!Object.keys(body).length) {
    res.status(400);
    res.json({ msg: 'Error: body cannot be empty' });
    return;
  }
  const createdClient = await clientsService.post({ newClient: body });
  res.json(createdClient);
}

async function put(req, res) {
  const { id } = req.params;
  const { body } = req;
  const replacedClient = await clientsService.put({ _id: id, newClient: body });
  res.json({ msg: 'Client was updated to: ', replacedClient });
}

async function edit(req, res) {
  const { id } = req.params;
  const { body } = req;
  const mongoDBIdRegex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i; // regex no need to put in''
  if (!mongoDBIdRegex.test(id)) {
    res.json({ error: 'Invalid mongoDB ID' });
    return;
  }

  const editedClient = await clientsService.edit(id, body);
  res.json({ msg: 'Client was updated to: ', editedClient });
}

export {
  getAll,
  getByDocumentNumber,
  getById,
  getByFilter,
  deleteClient,
  post,
  put,
  edit,
};
