import express from 'express';
import { submitMessage } from '../controllers/contactController.js';

const router = express.Router();

router.route('/').post(submitMessage);

export default router;
