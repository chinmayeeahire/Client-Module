import express from 'express';
import { createClient, deleteClient, deleteManyClients, editClient, listClient } from '../../controller/client-controller.js';

const router = express.Router();

router.post('/clients/create', createClient);
router.put('/clients/edit/:id', editClient);
router.get('/clients/list', listClient);
router.delete('/clients/delete/:id', deleteClient);
router.delete('/clients/multidelete', deleteManyClients);

export default router;

