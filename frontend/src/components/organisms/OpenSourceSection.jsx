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
    // Fetch top GitHub repos
    const fetchGithub = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sarthakkaundal/repos?sort=stars&per_page=4');
        if (!response.ok) {
          throw new Error('Rate limit or fetch error');
        }
        const data = await response.json();
        setRepos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setRepos([]);
      }
    };

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

    fetchGithub();
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
            <span className="text-neonBlue font-mono text-xl mr-2">03.</span> Open Source & Coding
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </div>

        <div className="space-y-16">
          {/* GitHub Heatmap */}
          <div className="glass p-8 rounded-2xl flex flex-col items-center overflow-x-auto border-white/5">
            <h3 className="text-xl font-semibold text-white mb-6 self-start flex items-center gap-2">
              <Code2 className="text-neonBlue" /> GitHub Contributions
            </h3>
            <div className="min-w-[800px] pb-4">
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Top Repositories */}
            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-white mb-4">Top Repositories</h3>
               <div className="grid grid-cols-1 gap-4">
                 {repos.length > 0 ? (
                   repos.map(repo => (
                     <a 
                       key={repo.id} 
                       href={repo.html_url} 
                       target="_blank" 
                       rel="noreferrer"
                       className="glass p-5 rounded-lg border border-white/5 hover:border-electricPurple/50 hover:-translate-y-1 transition-all group"
                     >
                       <h4 className="text-neonBlue font-semibold text-lg mb-2 group-hover:text-electricPurple transition-colors">{repo.name}</h4>
                       <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px]">{repo.description || 'No description available.'}</p>
                       <div className="flex items-center gap-4 text-xs text-gray-500">
                         <span className="flex items-center gap-1"><Star size={14} className="text-yellow-400"/> {repo.stargazers_count}</span>
                         <span className="flex items-center gap-1"><GitFork size={14} className="text-gray-400"/> {repo.forks_count}</span>
                         <span>{repo.language}</span>
                       </div>
                     </a>
                   ))
                 ) : (
                   <div className="glass p-5 rounded-lg border border-white/5 text-center text-gray-500 text-sm h-[150px] flex items-center justify-center">
                     Could not load repositories due to GitHub API rate limits.
                     <br />
                     <a href="https://github.com/sarthakkaundal" target="_blank" rel="noreferrer" className="text-neonBlue hover:underline mt-2 inline-block">View directly on GitHub</a>
                   </div>
                 )}
               </div>
            </div>

            {/* LeetCode Stats */}
            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-white mb-4">LeetCode Profile</h3>
               {leetCodeStats ? (
                  leetCodeStats.error ? (
                    <div className="glass p-6 rounded-lg border border-red-500/20 h-[350px] flex flex-col items-center justify-center text-center">
                      <p className="text-red-400 mb-2">Failed to load LeetCode statistics.</p>
                      <p className="text-gray-500 text-sm">The API might be temporarily down or heavily rate-limited.</p>
                      <a href="https://leetcode.com/u/saarthak_kaundal/" target="_blank" rel="noreferrer" className="mt-6 px-4 py-2 border border-white/10 rounded-md hover:bg-white/5 transition-colors text-sm">View Profile Directly</a>
                    </div>
                  ) : (
                    <div className="glass p-6 rounded-lg border border-white/5 flex flex-col items-center justify-center h-[350px]">
                      <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#12121c" strokeWidth="10" />
                          <circle 
                            cx="50" cy="50" r="45" fill="none" 
                            stroke="#bc13fe" strokeWidth="10" 
                            strokeDasharray={`${(leetCodeStats.totalSolved / leetCodeStats.totalQuestions) * 283} 283`}
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold text-white">{leetCodeStats.totalSolved}</span>
                          <span className="text-xs text-gray-500">Solved</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 w-full gap-4 text-center">
                        <div className="bg-darkGray/50 p-2 rounded border border-green-500/20">
                          <p className="text-xs text-green-500 font-semibold mb-1">Easy</p>
                          <p className="text-white font-bold">{leetCodeStats.easySolved} <span className="text-[10px] text-gray-500">/ {leetCodeStats.totalEasy}</span></p>
                        </div>
                        <div className="bg-darkGray/50 p-2 rounded border border-yellow-500/20">
                          <p className="text-xs text-yellow-500 font-semibold mb-1">Med</p>
                          <p className="text-white font-bold">{leetCodeStats.mediumSolved} <span className="text-[10px] text-gray-500">/ {leetCodeStats.totalMedium}</span></p>
                        </div>
                        <div className="bg-darkGray/50 p-2 rounded border border-red-500/20">
                          <p className="text-xs text-red-500 font-semibold mb-1">Hard</p>
                          <p className="text-white font-bold">{leetCodeStats.hardSolved} <span className="text-[10px] text-gray-500">/ {leetCodeStats.totalHard}</span></p>
                        </div>
                      </div>

                      <a href="https://leetcode.com/u/saarthak_kaundal/" target="_blank" rel="noreferrer" className="mt-8 text-neonBlue text-sm hover:underline">View Full Profile →</a>
                    </div>
                  )
               ) : (
                 <div className="glass p-6 rounded-lg border border-white/5 h-[350px] flex items-center justify-center">
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
