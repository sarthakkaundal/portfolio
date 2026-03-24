import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ProjectCard from '../molecules/ProjectCard';
import api from '../../services/api';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const defaultProjects = [
      {
        _id: '1',
        title: 'Linkro — Recruitment Platform',
        description: 'Linkro is a full-stack recruitment platform that connects job seekers, recruiters, and administrators in a single system. The platform manages the complete hiring workflow including job posting, candidate applications, resume management, and administrative oversight through dedicated role-based dashboards.',
        purpose: 'The project was built to simulate a real-world hiring ecosystem and demonstrate the implementation of role-based authentication.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
        features: [
          'Role-Based Dashboards for Admin, Recruiter, and Job Seeker',
          'Application Tracking Workflow',
        ],
        githubLink: 'https://github.com/sarthakkaundal/linkro',
        imagePlaceholder: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      },
      {
        _id: '2',
        title: 'PRAYAS — Flood Prediction',
        description: 'PRAYAS (Prediction, Response And Yojana for Aapda Suraksha) is an AI-powered disaster management platform designed to improve flood preparedness and emergency response in India.',
        purpose: 'The project was developed to address the recurring flood disasters in India by combining data analytics, geospatial visualization, and AI.',
        techStack: ['React.js', 'Firebase', 'Gemini API'],
        features: [
          'Interactive Flood Risk Map based on rainfall and terrain elevation',
          'Evacuation Route Planning with AI-assisted routing',
        ],
        githubLink: 'https://github.com/sarthakkaundal/PRAYAS',
        imagePlaceholder: '/projects/prayas.png',
      },
      {
        _id: '3',
        title: 'Udyog Saarthi — Job Platform',
        description: 'Udyog Saarthi is a dedicated career empowerment and job portal designed to provide personalized job coaching, training materials, and job opportunities.',
        purpose: 'The project was developed to empower individuals by combining access to a supportive community, tailored career mentorship, and comprehensive skill-building resources.',
        techStack: ['HTML5', 'Tailwind CSS', 'PHP'],
        features: [
          'Exclusive Job Board featuring inclusive opportunities',
          'Personalized Learning Hub with structured training tools',
        ],
        githubLink: 'https://github.com/arpitkumar08/Udyog-Saarthi',
        imagePlaceholder: '/projects/udyogsarthi.png',
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
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-black text-text-dark uppercase tracking-tight inline-block mb-3">
          Featured Projects
        </h2>
        <div className="h-1 w-24 bg-accent-blue border border-text-dark"></div>
      </div>

      {loading ? (
        <div className="flex justify-center flex-1 py-20">
          <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-text-dark animate-spin"></div>
        </div>
      ) : (
        <div className="relative max-w-[100vw] -mx-6 md:mx-0">
          <div className="overflow-hidden p-4" ref={emblaRef}>
            <div className="flex touch-pan-y py-8 px-4 md:px-0 items-center">
              {projects.map((project, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <div 
                    key={project._id || idx} 
                    className="relative min-w-0 flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_60%] lg:flex-[0_0_45%] mx-2 md:mx-4"
                    onClick={() => !isActive && scrollTo(idx)}
                  >
                    <div className={`h-full py-4 ${!isActive && 'cursor-pointer hover:opacity-100 transition-all duration-300'}`}>
                      <ProjectCard project={project} isActive={isActive} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          {projects.length > 1 && (
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                onClick={scrollPrev}
                className="retro-icon font-bold"
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-3">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className={`h-3 rounded border-2 border-text-dark transition-all duration-300 ${
                      selectedIndex === idx 
                        ? 'w-10 bg-accent-teal shadow-[2px_2px_0_var(--text-dark)]' 
                        : 'w-3 bg-white hover:bg-gray-200'
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="retro-icon font-bold"
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
