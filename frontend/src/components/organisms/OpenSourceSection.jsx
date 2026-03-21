import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import api from '../../services/api';
import { Star, GitFork, Code2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const OpenSourceSection = () => {
  const { theme } = useTheme();
  const [repos, setRepos] = useState([]);
  const [leetCodeStats, setLeetCodeStats] = useState(null);

  useEffect(() => {
    // Use curated repositories instead of live API fetch to ensure highest quality presentation
    const curatedRepos = [
      {
        id: 1,
        name: "PRAYAS",
        taxonomy: "AI Platform",
        description: "AI-powered disaster response tool for predicting floods using terrain data.",
        language: "JavaScript",
        tech: ["React", "Firebase", "Gemini API"],
        stargazers_count: "★",
        html_url: "https://github.com/sarthakkaundal/PRAYAS"
      },
      {
        id: 2,
        name: "Linkro",
        taxonomy: "Recruitment System",
        description: "Full-stack recruitment platform featuring role-based dashboards and hiring workflows.",
        language: "JavaScript",
        tech: ["MERN", "Tailwind", "JWT"],
        stargazers_count: "★",
        html_url: "https://github.com/sarthakkaundal/linkro"
      },
      {
        id: 3,
        name: "Udyog-Saarthi",
        taxonomy: "Career Portal",
        description: "Inclusive job portal designed to facilitate employment under specific reservation policies.",
        language: "PHP",
        tech: ["HTML", "JS", "PHP"],
        stargazers_count: "★",
        html_url: "https://github.com/arpitkumar08/Udyog-Saarthi"
      }
    ];
    setRepos(curatedRepos);

    // Fetch LeetCode Stats
    const fetchLeetCode = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

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
    <section id="opensource" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-neonBlue font-mono text-xl mr-2">03.</span> Coding Profiles & GitHub Activity
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </div>

        <div className="space-y-16">
          {/* GitHub Heatmap */}
          <div className="glass p-4 md:p-8 rounded-2xl flex flex-col border-white/5 w-full overflow-hidden">
            <h3 className="text-xl font-semibold text-white mb-6 self-start flex items-center gap-2">
              <Code2 className="text-neonBlue" /> GitHub Contributions
            </h3>
            <div className="w-full overflow-x-auto pb-4">
              <div className="min-w-[800px] pr-4">
              <GitHubCalendar 
                username="sarthakkaundal" 
                colorScheme={theme === 'dark' ? 'dark' : 'light'}
                theme={{
                  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  dark: ['#12121c', '#00f3ff40', '#00f3ff80', '#00f3ffc0', '#00f3ff']
                }}
              />
            </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Top Repositories */}
            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                 <Star className="text-electricPurple" size={20} /> Curated Showcase
               </h3>
               <div className="grid grid-cols-1 gap-4">
                 {repos.map(repo => (
                   <a 
                     key={repo.id} 
                     href={repo.html_url} 
                     target="_blank" 
                     rel="noreferrer"
                     className="glass p-5 rounded-xl border border-white/5 hover:border-electricPurple/50 hover:bg-white/[0.03] transition-all group flex flex-col justify-between"
                   >
                     <div>
                       <div className="flex justify-between items-start mb-3">
                         <div>
                           <h4 className="text-neonBlue font-semibold text-lg group-hover:text-electricPurple transition-colors leading-tight mb-1.5">{repo.name}</h4>
                           <span className="inline-block px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-electricPurple/10 text-electricPurple border border-electricPurple/20 font-mono">{repo.taxonomy}</span>
                         </div>
                         <span className="text-gray-500 hover:text-white transition-colors mt-1"><GitFork size={16} /></span>
                       </div>
                       <p className="text-gray-400 text-sm mb-4 leading-relaxed font-light">{repo.description}</p>
                     </div>
                     <div className="flex flex-wrap items-center gap-2 mt-auto">
                       {repo.tech.map((t, i) => (
                         <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded font-mono text-gray-400">{t}</span>
                       ))}
                     </div>
                   </a>
                 ))}
               </div>
            </div>

            {/* LeetCode Stats */}
            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Code2 className="text-[#00f0ff]" size={20} /> Competitive Profiles
               </h3>
               
               {/* HackerRank Proof Card */}
               <div className="glass p-5 rounded-xl border border-white/5 bg-gradient-to-r from-electricPurple/10 to-transparent mb-4 flex items-center justify-between group hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-electricPurple/20 flex items-center justify-center text-electricPurple border border-electricPurple/30">
                      ★
                    </div>
                    <div>
                      <p className="text-white font-semibold flex items-center gap-2">HackerRank <span className="text-[10px] px-2 py-0.5 bg-gray-500/20 rounded-full text-gray-400">Java</span></p>
                      <p className="text-sm text-electricPurple font-medium">3★ Silver Badge</p>
                    </div>
                  </div>
               </div>

               {leetCodeStats ? (
                  leetCodeStats.error ? (
                    <div className="glass p-6 rounded-xl border border-red-500/20 min-h-[280px] flex flex-col items-center justify-center text-center">
                      <p className="text-red-400 mb-2">Failed to load LeetCode statistics.</p>
                      <p className="text-gray-500 text-sm">The API might be heavily rate-limited.</p>
                      <a href="https://leetcode.com/u/saarthak_kaundal/" target="_blank" rel="noreferrer" className="mt-6 px-4 py-2 border border-white/10 rounded-md hover:bg-white/5 transition-colors text-sm">View Profile Directly</a>
                    </div>
                  ) : (
                    <div className="glass p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden group hover:border-white/10 transition-colors">
                      <div className="z-10 relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full py-4">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#12121c" strokeWidth="8" />
                            <circle 
                              cx="50" cy="50" r="45" fill="none" 
                              stroke="#00f0ff" strokeWidth="8" strokeLinecap="round"
                              strokeDasharray={`${(leetCodeStats.totalSolved / leetCodeStats.totalQuestions) * 283} 283`}
                              className="transition-all duration-1000 ease-out"
                            />
                          </svg>
                          <div className="absolute flex flex-col items-center justify-center">
                            <span className="text-3xl font-extrabold text-white">{leetCodeStats.totalSolved}</span>
                            <span className="text-[10px] uppercase font-mono tracking-wider text-neonBlue">Solved</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-3 flex-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-green-500 font-medium">Easy</span>
                            <span className="text-white font-mono">{leetCodeStats.easySolved}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-yellow-500 font-medium">Med</span>
                            <span className="text-white font-mono">{leetCodeStats.mediumSolved}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-red-500 font-medium">Hard</span>
                            <span className="text-white font-mono">{leetCodeStats.hardSolved}</span>
                          </div>
                        </div>
                      </div>

                      <a href="https://leetcode.com/u/saarthak_kaundal/" target="_blank" rel="noreferrer" className="absolute bottom-4 right-5 text-gray-500 text-xs hover:text-neonBlue transition-colors flex items-center gap-1">
                        View Profile <span className="text-base leading-none">↗</span>
                      </a>
                    </div>
                  )
               ) : (
                 <div className="glass p-6 rounded-lg border border-white/5 min-h-[350px] flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full border-4 border-white/20 border-t-electricPurple animate-spin"></div>
                 </div>
               )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OpenSourceSection;
