import animalModel from './animals.model.js';

async function getAll({ skip, limit }) {
  const animals = await animalModel
    .find({})
    .skip(skip)
    .limit(limit)
    .populate({ path: 'clientId', select: 'name phone.number -_id' }) // populates all client data from client ID.
    // select: only selects to return: client name 'space' phone.
    .lean();

  return animals;
}

async function getAnimalByClientId({ clientId }) {
  const animals = await animalModel.find({ clientId });
  return animals;
}

async function updateByClientId({ clientId, newProperties }) {
  const updatedInfo = await animalModel.updateMany({ clientId }, newProperties, {
    new: true,
  });
  const clientIdtoFind = newProperties.clientId || clientId; // if first not found use after OR.
  console.log(updatedInfo);
  const updatedAnimals = await animalModel.find({ clientId: clientIdtoFind }).lean();
  return updatedAnimals;
}

export {
  getAll,
  getAnimalByClientId,
  updateByClientId,
};
