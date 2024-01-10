import Router from 'express';
import * as clientsController from './clients.controller.js';
import isAdmin from '../../middlewares/isAdmin.js';

const router = Router();

router.get('/all', isAdmin, clientsController.getAll);
router.get('/document/:number', clientsController.getByDocumentNumber);
router.get('/:id', clientsController.getById);
router.get('/byFilter', clientsController.getByFilter);
router.delete('/:id', clientsController.deleteClient);
router.post('/', clientsController.post);
router.put('/:id', clientsController.put);
router.patch('/:id', clientsController.edit);

export default router;
