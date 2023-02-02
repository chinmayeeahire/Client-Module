import express from 'express';
import { createClient, editClient } from '../../controller/client-controller.js';

const router = express.Router();

router.post('/clients/create', createClient);
router.put('/clients/edit/:id', editClient);

export default router;

