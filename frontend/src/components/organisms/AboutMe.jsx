import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-black text-text-dark uppercase tracking-tight inline-block mb-3">
          About Me
        </h2>
        <div className="h-1 w-24 bg-accent-teal border border-text-dark"></div>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-text-medium space-y-6 text-base md:text-lg relative">
          <p className="leading-relaxed font-medium">
            Hello! I'm Sarthak, a <span className="text-text-dark font-bold underline decoration-accent-teal decoration-4">MERN stack developer</span> and competitive programmer. I bridge the gap between algorithmic problem-solving and building robust, real-world software applications.
          </p>
          
          <ul className="space-y-4 font-medium mt-6">
            <li className="flex items-start gap-3">
              <span className="text-accent-teal mt-1 text-xl font-bold">»</span>
              <span className="leading-relaxed">Focusing heavily on <span className="text-text-dark font-bold">scalable backend systems</span> and interactive frontends.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-coral mt-1 text-xl font-bold">»</span>
              <span className="leading-relaxed">Applying competitive programming logic and data structures to design highly efficient architectures.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-gold mt-1 text-xl font-bold">»</span>
              <span className="leading-relaxed">Exploring modern tools and AI integrations to build more useful and scalable applications.</span>
            </li>
          </ul>

          <div className="mt-8">
            <div className="retro-card bg-primary-cream p-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2 text-text-dark font-display font-bold text-sm tracking-tight whitespace-nowrap bg-white px-3 py-1 border-2 border-text-dark rounded-md shadow-[2px_2px_0_var(--text-dark)]">
                <div className="w-3 h-3 rounded-full bg-accent-green animate-pulse border border-text-dark" />
                SYSTEM STATUS
              </div>
              <p className="text-sm text-text-medium leading-snug font-medium">
                Pursuing BTech CS. Actively seeking <span className="text-text-dark font-bold">software engineering roles</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="retro-card p-6 bg-white">
            <h3 className="text-sm font-display font-bold uppercase tracking-widest text-text-dark mb-4 border-b-2 border-text-dark pb-2 inline-block">Education</h3>
            
            <div className="space-y-6 pt-2">
              <div>
                <p className="text-lg font-bold text-text-dark mb-1">BTech Computer Science</p>
                <p className="text-text-medium text-sm mb-3 font-medium">Lovely Professional University</p>
                <div className="retro-tag retro-tag-teal border-gray-900 border-2">
                  CGPA: 8.39
                </div>
              </div>

              <div className="w-full h-0.5 bg-text-dark"></div>

              <div>
                <p className="text-lg font-bold text-text-dark mb-1">Class 12th</p>
                <p className="text-text-medium text-sm mb-3">CBSE Board</p>
                <div className="retro-tag retro-tag-coral border-gray-900 border-2">
                  Percentage: 86%
                </div>
              </div>

              <div className="w-full h-0.5 bg-text-dark"></div>

              <div>
                <p className="text-lg font-bold text-text-dark mb-1">Class 10th</p>
                <p className="text-text-medium text-sm mb-3">CBSE Board</p>
                <div className="retro-tag retro-tag-blue border-gray-900 border-2">
                  Percentage: 95%
                </div>
              </div>
            </div>
          </div>

          <div className="retro-card p-6 bg-primary-cream">
            <h3 className="text-sm font-display font-bold uppercase tracking-widest text-text-dark mb-4 border-b-2 border-text-dark pb-2 inline-block">Key Highlights</h3>
            <ul className="text-text-dark font-medium text-sm space-y-4">
              <li className="flex items-center gap-3">
                <span className="retro-icon font-display font-bold text-lg bg-white">2nd</span>
                <span className="leading-snug">Position — Group Discussion</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="retro-icon font-display font-bold text-lg bg-accent-gold text-white">3★</span>
                <span className="leading-snug">Silver Badge HackerRank</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
