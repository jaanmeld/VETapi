import express from 'express'; // Will look for in node_modules as there is no name.
import cors from 'cors';
import './database.js';
import apiRouter from './src/api/router.js';
import isLogged from './src/middlewares/isLogged.js';

const server = express();
const { PORT } = process.env;

server.use(express.json());
server.use(cors());
server.use(isLogged);
server.use(apiRouter);


server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
