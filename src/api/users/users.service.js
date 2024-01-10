import * as usersRepository from './users.repository.js';

async function getById({ id }) {
  const user = await usersRepository.getById({ id });
  return user;
}
console.log();
export {
  getById,
};
