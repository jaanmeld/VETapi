import clientModel from './clients.model.js';

async function getAll() {
  const clients = await clientModel.find({}).lean();
  // .lean()  without lean received object is not changable.
  return clients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientModel.findOne({ 'document.number': documentNumber }).lean();
  // key put in as a string because using subkey in mongoose.
  return client;
}

async function getById({ id }) {
  const client = await clientModel.findOne({ _id: id }).lean();
  return client;
}

async function getByFilter({ query }) {
  const filteredClients = await clientModel.find(query).lean(); // query already is object.
  return filteredClients;
}

async function deleteClient({ id }) {
  const client = await clientModel.findByIdAndDelete({ _id: id });
  return client;
}

async function post({ newClient }) {
  console.log(newClient);
  const createdClient = await clientModel.create(newClient);
  return createdClient;
}

async function put({ _id, newClient }) {
  const replacedClient = await clientModel.findOneAndReplace({ _id }, newClient); //id passed as obj
  return replacedClient;
}

async function edit(id, body) {
  const updatedClient = await clientModel.findByIdAndUpdate({ _id: id }, body);
  return updatedClient;
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
