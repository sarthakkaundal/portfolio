import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import ContactForm from '../molecules/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Column: Let's Connect */}
        <div className="lg:w-1/2 lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-text-dark text-text-dark font-display font-bold text-xs mb-6 shadow-[2px_2px_0_var(--text-dark)] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
            </span>
            Ready for Software Roles
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark mb-6 leading-tight tracking-tight uppercase">
            Let's build your next <span className="bg-accent-gold text-white px-2 mt-2 inline-block -rotate-1 shadow-[4px_4px_0_var(--text-dark)] border-4 border-text-dark">solution.</span>
          </h2>
          <p className="text-text-medium text-base md:text-lg mb-10 max-w-md leading-relaxed font-medium">
            Whether you have a project idea, internship, or software role in mind, I’d be glad to connect.
          </p>

          <div className="space-y-4">
            <a href="mailto:skkaundal9314@gmail.com" className="flex items-center gap-4 text-text-dark hover:bg-white transition-all group p-3 border-2 border-transparent hover:border-text-dark hover:shadow-[4px_4px_0_var(--text-dark)] rounded-xl">
              <div className="w-12 h-12 bg-white border-2 border-text-dark flex items-center justify-center group-hover:bg-accent-teal group-hover:text-white shadow-[2px_2px_0_var(--text-dark)] transition-all">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-medium block mb-0.5 font-display">Email</span>
                <span className="font-black text-sm">skkaundal9314@gmail.com</span>
              </div>
            </a>
            
            <a href="https://github.com/sarthakkaundal" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-dark hover:bg-white transition-all group p-3 border-2 border-transparent hover:border-text-dark hover:shadow-[4px_4px_0_var(--text-dark)] rounded-xl">
              <div className="w-12 h-12 bg-white border-2 border-text-dark flex items-center justify-center group-hover:bg-accent-purple group-hover:text-white shadow-[2px_2px_0_var(--text-dark)] transition-all">
                <Github size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-medium block mb-0.5 font-display">GitHub</span>
                <span className="font-black text-sm">github.com/sarthakkaundal</span>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/sarthak-kaundal" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-dark hover:bg-white transition-all group p-3 border-2 border-transparent hover:border-text-dark hover:shadow-[4px_4px_0_var(--text-dark)] rounded-xl">
              <div className="w-12 h-12 bg-white border-2 border-text-dark flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white shadow-[2px_2px_0_var(--text-dark)] transition-all">
                <Linkedin size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-medium block mb-0.5 font-display">LinkedIn</span>
                <span className="font-black text-sm">linkedin.com/in/sarthak-kaundal</span>
              </div>
            </a>
            
            <div className="flex items-center gap-4 text-text-dark p-3 rounded-xl border-2 border-transparent cursor-default">
              <div className="w-12 h-12 bg-white border-2 border-text-dark flex items-center justify-center shadow-[2px_2px_0_var(--text-dark)]">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-medium block mb-0.5 font-display">Location</span>
                <span className="font-black text-sm">Based in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-1/2 w-full relative z-10 pt-4 lg:pt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
