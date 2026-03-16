import Project from '../models/Project.js';

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a project (Admin)
// @route   POST /api/projects
// @access  Public (for demo, ideally protected)
export const createProject = async (req, res, next) => {
  try {
    const project = new Project(req.body);
    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    next(error);
  }
};
