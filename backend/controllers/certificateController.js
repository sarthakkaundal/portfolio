import Certificate from '../models/Certificate.js';

// @desc    Fetch all certificates
// @route   GET /api/certificates
// @access  Public
export const getCertificates = async (req, res, next) => {
  try {
    const certificates = await Certificate.find({});
    res.json(certificates);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a certificate (Admin)
// @route   POST /api/certificates
// @access  Public
export const createCertificate = async (req, res, next) => {
  try {
    const certificate = new Certificate(req.body);
    const createdCertificate = await certificate.save();
    res.status(201).json(createdCertificate);
  } catch (error) {
    next(error);
  }
};
