import express from 'express';
import { createClient } from '../../controller/client-controller.js';

const router = express.Router();

router.post('/clients', createClient);

export default router;

