import Router from 'express';
import * as animalsController from './animals.controller.js';

const router = Router();

router.get('/all', animalsController.getAll);
router.get('/client/document/:number', animalsController.getAnimalByClientId);
router.patch('/client/document/:number', animalsController.updateByClientId);

export default router;
