import * as animalsService from './animals.service.js';

async function getAll(req, res) {
  const { page, itemsPerPage } = req.query;
  const animals = await animalsService.getAll({ page, itemsPerPage });
  res.json({ animals });
}

async function getAnimalByClientId(req, res) {
  const ClientDocumentNumber = req.params.number;
  const animals = await animalsService.getAnimalByClientDocumntNumber(ClientDocumentNumber);
  res.json(animals);
}

async function updateByClientId(req, res) {
  const ClientDocumentNumber = req.params.number;
  const newProperties = req.body;

  const updatedProperties = await animalsService.updateByClientId({
    ClientDocumentNumber, newProperties,
  });

  res.json(updatedProperties);
}

export {
  getAll,
  getAnimalByClientId,
  updateByClientId,
};
