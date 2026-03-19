import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../molecules/ProjectCard';
import api from '../../services/api';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial static projects to fallback to if API is empty or fails
    const defaultProjects = [
      {
        _id: '1',
        title: 'Linkro — Recruitment Management Platform',
        description: 'Linkro is a full-stack recruitment platform that connects job seekers, recruiters, and administrators in a single system. The platform manages the complete hiring workflow including job posting, candidate applications, resume management, and administrative oversight through dedicated role-based dashboards.',
        purpose: 'The project was built to simulate a real-world hiring ecosystem and demonstrate the implementation of role-based authentication, RESTful APIs, and full-stack application architecture using the MERN ecosystem.',
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer'],
        features: [
          'Role-Based Dashboards for Admin, Recruiter, and Job Seeker',
          'Job Management System (post, edit, close jobs)',
          'Application Tracking Workflow (Pending → Interview → Hired / Rejected)',
          'Resume Upload and Management',
          'Admin Control Panel with system statistics'
        ],
        githubLink: 'https://github.com/sarthakkaundal/linkro',
        imagePlaceholder: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      },
      {
        _id: '2',
        title: 'PRAYAS — AI-Powered Flood Prediction & Disaster Response Platform',
        description: 'PRAYAS (Prediction, Response And Yojana for Aapda Suraksha) is an AI-powered disaster management platform designed to improve flood preparedness and emergency response in India. The system integrates real-time weather data, terrain elevation models, and historical flood patterns to predict flood risks and provide actionable insights through an interactive map interface.',
        purpose: 'The project was developed to address the recurring flood disasters in India by combining data analytics, geospatial visualization, and AI-assisted decision support. PRAYAS helps both citizens and authorities make faster and more informed decisions during flood emergencies.',
        techStack: ['React.js', 'Leaflet.js', 'Firebase', 'Google Gemini API', 'OpenWeatherMap API'],
        features: [
          'Interactive Flood Risk Map based on rainfall and terrain elevation',
          'What-If Rainfall Simulation to visualize potential flood spread',
          'Evacuation Route Planning with AI-assisted routing avoiding flooded areas',
          'Relief Funds Transparency Dashboard showing fund allocation',
          'Emergency Alert System for high-risk zones',
          'Community Safety Services & victim reporting',
          'Impact: Achieved ~94% prediction accuracy and demonstrates AI integration with geospatial data'
        ],
        githubLink: 'https://github.com/sarthakkaundal/PRAYAS',
        imagePlaceholder: 'projects/prayas.png',
      }
    ];

    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects');
        if (response.data && response.data.length > 0) {
          setProjects(response.data);
        } else {
          setProjects(defaultProjects);
        }
      } catch (err) {
        setProjects(defaultProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-neonBlue font-mono text-xl mr-2">04.</span> Featured Projects
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </div>

        {loading ? (
          <div className="flex justify-center flex-1 py-20">
            <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-neonBlue animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project._id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
