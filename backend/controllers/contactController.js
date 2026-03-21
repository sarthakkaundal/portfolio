import Message from '../models/Message.js';
import nodemailer from 'nodemailer';

// @desc    Submit a contact form message
// @route   POST /api/contact
// @access  Public
export const submitMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Direct email bypass activated (removed Database save requirement)

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name} (Portfolio)" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    next(error);
  }
};
