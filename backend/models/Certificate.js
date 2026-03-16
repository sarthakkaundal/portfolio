import mongoose from 'mongoose';

const certificateSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  issuer: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  credentialUrl: {
    type: String,
  }
}, {
  timestamps: true,
});

const Certificate = mongoose.model('Certificate', certificateSchema);
export default Certificate;
