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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/20 text-neonBlue text-xs font-mono mb-6 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neonBlue"></span>
            </span>
            Ready for Software Roles
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
            Let's build your next <span className="text-gradient">full-stack solution.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-md leading-relaxed font-light">
            Whether you have a project idea, internship, or software role in mind, I’d be glad to connect.
          </p>

          <div className="space-y-4">
            <a href="mailto:skkaundal9314@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group p-3 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neonBlue group-hover:text-neonBlue shadow-sm transition-all">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-600 block mb-0.5 font-mono">Email</span>
                <span className="font-medium text-sm">skkaundal9314@gmail.com</span>
              </div>
            </a>
            <a href="https://github.com/sarthakkaundal" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group p-3 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neonBlue group-hover:text-neonBlue shadow-sm transition-all">
                <Github size={18} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-600 block mb-0.5 font-mono">GitHub</span>
                <span className="font-medium text-sm">github.com/sarthakkaundal</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/sarthak-kaundal" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group p-3 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-electricPurple group-hover:text-electricPurple shadow-sm transition-all">
                <Linkedin size={18} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-600 block mb-0.5 font-mono">LinkedIn</span>
                <span className="font-medium text-sm">linkedin.com/in/sarthak-kaundal</span>
              </div>
            </a>
            <div className="flex items-center gap-4 text-gray-400 p-3 rounded-xl border border-transparent cursor-default">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-gray-600 block mb-0.5 font-mono">Location</span>
                <span className="font-medium text-sm">Based in India</span>
              </div>
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
          <div className="absolute inset-0 bg-neonBlue/20 blur-2xl -z-10 rounded-3xl" />
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
