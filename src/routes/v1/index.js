import express from 'express';
import { createClient, editClient, listClient } from '../../controller/client-controller.js';

const router = express.Router();

router.post('/clients/create', createClient);
router.put('/clients/edit/:id', editClient);
router.get('/clients/list', listClient);

export default router;

