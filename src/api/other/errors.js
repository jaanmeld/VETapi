function sayMyName(name) {
  if (!name) {
    const myError = {
      code: 1,
      msg: 'El nombre es requerido',
    };
    throw new Error(JSON.stringify(myError));
  }
  console.log(name);

  try {
    sayMyName();
  } catch (error) {
    console.log(error.message);
  }
}

function sayMySurname(name) {
  if (!name) {
    throw new Error('No name provided');
  }
  console.log(name);

  try {
    sayMySurname();
  } catch (error) {
    console.log(error.message);
  }
}

function initApp() {
  sayMyName();
  sayMySurname();
}