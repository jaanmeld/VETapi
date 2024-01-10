import * as animalsRepository from './animals.repository.js';
import * as clientsService from '../clients/clients.service.js';

function getSkipAndLimit({ page, itemsPerPage }) {
  const skip = (page - 1) * itemsPerPage;
  const limit = itemsPerPage;
  console.log(skip, limit);
  return (skip, limit);
}

async function getAll({ page, itemsPerPage }) {
  const { skip, limit } = getSkipAndLimit({ page, itemsPerPage });
  const animals = await animalsRepository.getAll({ skip, limit });
  return animals;
}

async function getAnimalByClientId({ ClientDocumntNumber }) {
  const client = await clientsService.getByDocumentNumber({ documentNumber: ClientDocumntNumber });
  const animals = await animalsRepository.getAnimalByClientDocumntNumber({ clientId: client._id });
  return animals;
}

async function updateByClientId({ ClientDocumentNumber, newProperties }) {
  const client = await clientsService.getByDocumentNumber({ documentNumber: ClientDocumentNumber });
  const namedParams = { clientId: client._id, newProperties };
  const updatedProperties = await animalsRepository.updateByClientId(namedParams);
  return updatedProperties;
}

export {
  getAll,
  getAnimalByClientId,
  updateByClientId,
};
