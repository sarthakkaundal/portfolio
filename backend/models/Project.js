import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  techStack: [{
    type: String,
  }],
  features: [{
    type: String,
  }],
  githubLink: {
    type: String,
  },
  demoLink: {
    type: String,
  },
  imagePlaceholder: {
    type: String,
    default: 'https://via.placeholder.com/600x400'
  }
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
