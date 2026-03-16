import express from 'express';
import { getCertificates, createCertificate } from '../controllers/certificateController.js';

const router = express.Router();

router.route('/').get(getCertificates).post(createCertificate);

export default router;
