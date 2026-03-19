import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import ContactForm from '../molecules/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Animated Blobs */}
      <div className="absolute top-1/4 -left-[20%] w-[500px] h-[500px] bg-neonBlue/10 rounded-full blur-[150px] -z-10 mix-blend-screen animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 -right-[20%] w-[500px] h-[500px] bg-electricPurple/10 rounded-full blur-[150px] -z-10 mix-blend-screen animate-pulse duration-7000" />

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Column: Let's Connect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 lg:sticky lg:top-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electricPurple/10 border border-electricPurple/20 text-electricPurple text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electricPurple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electricPurple"></span>
            </span>
            My inbox is always open
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Let's build something <span className="text-gradient">extraordinary.</span>
          </h2>
          <p className="text-lightGray text-lg mb-12 max-w-md leading-relaxed">
            Whether you have a question, an idea for a project, or just want to chat about tech, I'm always open to talking.
          </p>

          <div className="space-y-6">
            <a href="mailto:sarthakkaundal@gmail.com" className="flex items-center gap-4 text-lightGray hover:text-neonBlue transition-colors group">
              <div className="w-12 h-12 rounded-full bg-background border border-glassBorder flex items-center justify-center group-hover:border-neonBlue transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-medium">sarthakkaundal@gmail.com</span>
            </a>
            <a href="https://github.com/sarthakkaundal" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-lightGray hover:text-neonBlue transition-colors group">
              <div className="w-12 h-12 rounded-full bg-background border border-glassBorder flex items-center justify-center group-hover:border-neonBlue transition-colors">
                <Github size={20} />
              </div>
              <span className="font-medium">github.com/sarthakkaundal</span>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-lightGray hover:text-neonBlue transition-colors group">
              <div className="w-12 h-12 rounded-full bg-background border border-glassBorder flex items-center justify-center group-hover:border-neonBlue transition-colors">
                <Linkedin size={20} />
              </div>
              <span className="font-medium">LinkedIn Profile</span>
            </a>
            <div className="flex items-center gap-4 text-lightGray opacity-80 cursor-default">
              <div className="w-12 h-12 rounded-full bg-background border border-glassBorder flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="font-medium">Based in India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 w-full relative"
        >
          {/* Subtle glow behind the form card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-neonBlue/20 to-electricPurple/20 blur-2xl -z-10 rounded-3xl" />
          <div className="relative z-10 w-full glass border border-glassBorder/50 rounded-3xl p-[1px]">
            <div className="bg-background/80 backdrop-blur-3xl rounded-3xl w-full">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
