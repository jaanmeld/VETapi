import * as clientsRepository from './clients.repository.js';

async function getAll() {
  const clients = await clientsRepository.getAll();
  return clients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientsRepository.getByDocumentNumber({ documentNumber });
  return client;
}

async function getById({ id }) {
  const client = await clientsRepository.getById({ id });
  return client;
}

async function getByFilter({ query }) {
  console.log('query service', { query });
  const filteredClients = await clientsRepository.getByFilter({ query });
  console.log('filt clients service', { query });
  return filteredClients;
}

async function deleteClient({ id }) {
  const client = await clientsRepository.deleteClient({ id });
  return client;
}

async function post({ newClient }) {
  const createdClient = await clientsRepository.post({ newClient }); // have id as comes from repo.
  return createdClient;
}

async function put({ _id, newClient }) {
  const replacedClient = await clientsRepository.put({ _id, newClient });
  return replacedClient;
}

async function edit(id, body) {
  const editedClient = await clientsRepository.edit(id, body);

  return editedClient;
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
