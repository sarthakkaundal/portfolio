import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Star, GitFork, Code2 } from 'lucide-react';

const OpenSourceSection = () => {
  const [repos, setRepos] = useState([]);
  const [leetCodeStats, setLeetCodeStats] = useState(null);

  useEffect(() => {
    const curatedRepos = [
      {
        id: 1,
        name: "PRAYAS",
        taxonomy: "AI Platform",
        description: "AI-powered disaster response tool for predicting floods using terrain data.",
        language: "JavaScript",
        tech: ["React", "Firebase", "Gemini"],
        html_url: "https://github.com/sarthakkaundal/PRAYAS"
      },
      {
        id: 2,
        name: "Linkro",
        taxonomy: "Recruitment",
        description: "Full-stack recruitment platform featuring role-based dashboards.",
        language: "JavaScript",
        tech: ["MERN", "Tailwind", "JWT"],
        html_url: "https://github.com/sarthakkaundal/linkro"
      },
      {
        id: 3,
        name: "Udyog-Saarthi",
        taxonomy: "Career Portal",
        description: "Inclusive job portal designed to facilitate employment under specific reservation policies.",
        language: "PHP",
        tech: ["HTML", "JS", "PHP"],
        html_url: "https://github.com/arpitkumar08/Udyog-Saarthi"
      }
    ];
    setRepos(curatedRepos);

    const fetchLeetCode = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      try {
        const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/saarthak_kaundal', {
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        const data = await response.json();
        if (data.totalSolved !== undefined) {
          setLeetCodeStats(data);
        } else {
          setLeetCodeStats({ error: true });
        }
      } catch (error) {
        clearTimeout(timeoutId);
        console.error('Error fetching Leetcode:', error);
        setLeetCodeStats({ error: true });
      }
    };

    fetchLeetCode();
  }, []);

  return (
    <section id="opensource" className="py-24 px-6 max-w-6xl mx-auto w-full overflow-hidden relative z-10">
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-black text-text-dark uppercase tracking-tight inline-block mb-3">
          Coding Profiles & GitHub
        </h2>
        <div className="h-1 w-24 bg-accent-purple border border-text-dark"></div>
      </div>

      <div className="space-y-16">
        {/* GitHub Heatmap */}
        <div className="retro-card-large bg-white p-4 md:p-8 flex flex-col w-full overflow-hidden">
          <h3 className="text-2xl font-black text-text-dark mb-6 self-start flex items-center gap-3 uppercase font-display border-b-4 border-text-dark pb-2">
            <div className="bg-accent-teal p-1 border-2 border-text-dark"><Code2 className="text-white" size={24} /></div>
            GitHub Contributions
          </h3>
          <div className="w-full overflow-x-auto pb-4 custom-scrollbar" style={{ direction: 'rtl' }}>
            <div className="min-w-[800px] w-max mx-auto pr-4 sm:pr-0 flex justify-center" style={{ direction: 'ltr' }}>
            <GitHubCalendar 
              username="sarthakkaundal" 
              colorScheme="light"
              theme={{
                light: ['#ebedf0', '#bae6fd', '#38bdf8', '#0ea5e9', '#0284c7']
              }}
            />
          </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Top Repositories */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-text-dark mb-6 flex items-center gap-3 uppercase font-display border-b-4 border-text-dark pb-2 inline-flex">
               <div className="bg-accent-gold p-1 border-2 border-text-dark"><Star className="text-text-dark" size={20} strokeWidth={3} /></div> 
               Curated Showcase
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {repos.map((repo, idx) => (
                <a 
                  key={repo.id} 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`retro-card p-5 group flex flex-col justify-between ${idx % 2 === 0 ? 'bg-primary-cream' : 'bg-white'}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-text-dark font-black text-xl leading-tight mb-2 underline decoration-transparent group-hover:decoration-text-dark transition-colors">{repo.name}</h4>
                        <span className="inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-accent-purple text-white border-2 border-text-dark shadow-[1px_1px_0_var(--text-dark)]">{repo.taxonomy}</span>
                      </div>
                      <span className="retro-icon bg-white text-text-dark group-hover:bg-accent-teal group-hover:text-white transition-colors"><GitFork size={16} strokeWidth={3} /></span>
                    </div>
                    <p className="text-text-medium text-sm mb-4 leading-relaxed font-medium">{repo.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-auto">
                    {repo.tech.map((t, i) => (
                      <span key={i} className="text-xs font-bold font-display px-2 py-0.5 border-2 border-text-dark text-text-dark bg-white shadow-[1px_1px_0_var(--text-dark)]">{t}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* LeetCode Stats */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-text-dark mb-6 flex items-center gap-3 uppercase font-display border-b-4 border-text-dark pb-2 inline-flex">
              <div className="bg-accent-blue p-1 border-2 border-text-dark"><Code2 className="text-white" size={20} strokeWidth={3} /></div> 
              Competitive Profiles
            </h3>
            
            {/* HackerRank Proof Card */}
            <div className="retro-card p-5 bg-white mb-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-gold border-2 border-text-dark shadow-[2px_2px_0_var(--text-dark)] flex items-center justify-center text-text-dark font-black text-xl">
                  ★
                </div>
                <div>
                  <p className="text-text-dark font-black flex items-center gap-2 text-lg">HackerRank <span className="text-xs px-2 py-0.5 bg-primary-cream border-2 border-text-dark shadow-[1px_1px_0_var(--text-dark)] uppercase">Java</span></p>
                  <p className="text-sm text-text-medium font-bold uppercase tracking-widest mt-1">3★ Silver Badge</p>
                </div>
              </div>
            </div>

            {leetCodeStats ? (
              leetCodeStats.error ? (
                <div className="retro-card p-6 min-h-[280px] flex flex-col items-center justify-center text-center bg-accent-coral text-white">
                  <p className="font-black text-xl mb-2">Failed to load statistics.</p>
                  <p className="text-white/80 text-sm font-medium">The API might be rate-limited.</p>
                  <a href="https://leetcode.com/u/saarthak_kaundal/" target="_blank" rel="noreferrer" className="mt-6 btn-retro-outline bg-white !text-text-dark">View Profile</a>
                </div>
              ) : (
                <div className="retro-card-large p-6 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden bg-white">
                  <div className="z-10 relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full py-4">
                    <div className="relative w-32 h-32 flex items-center justify-center bg-primary-cream rounded-full border-4 border-text-dark shadow-[4px_4px_0_var(--text-dark)]">
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-4xl font-black text-text-dark">{leetCodeStats.totalSolved}</span>
                        <span className="text-xs font-bold uppercase font-display tracking-widest text-text-medium">Solved</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 w-full sm:flex-1 max-w-[200px] mt-2 sm:mt-0">
                      <div className="flex items-center justify-between border-b-2 border-text-dark pb-1">
                        <span className="text-accent-green font-black uppercase text-sm">Easy</span>
                        <span className="text-text-dark font-bold bg-primary-cream px-2 py-0.5 border-2 border-text-dark">{leetCodeStats.easySolved}</span>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-text-dark pb-1">
                        <span className="text-accent-gold font-black uppercase text-sm">Med</span>
                        <span className="text-text-dark font-bold bg-primary-cream px-2 py-0.5 border-2 border-text-dark">{leetCodeStats.mediumSolved}</span>
                      </div>
                      <div className="flex items-center justify-between border-b-2 border-text-dark pb-1">
                        <span className="text-accent-coral font-black uppercase text-sm">Hard</span>
                        <span className="text-text-dark font-bold bg-primary-cream px-2 py-0.5 border-2 border-text-dark">{leetCodeStats.hardSolved}</span>
                      </div>
                    </div>
                  </div>

                  <a href="https://leetcode.com/u/saarthak_kaundal/" target="_blank" rel="noreferrer" className="absolute bottom-4 right-5 text-text-dark font-bold text-xs hover:text-accent-blue transition-colors flex items-center gap-1 uppercase tracking-widest">
                    View Profile <span className="text-lg leading-none mt-[-2px]">↗</span>
                  </a>
                </div>
              )
            ) : (
              <div className="retro-card p-6 min-h-[280px] flex items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-text-dark border-t-accent-teal animate-spin rounded-full"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
