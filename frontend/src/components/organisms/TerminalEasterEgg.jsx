import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';

const TerminalEasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to the Developer Terminal v1.1.0 (Neo-Brutalism Edition)' },
    { type: 'system', text: 'Type "help" for a list of available commands.' }
  ]);
  const endOfHistoryRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      scrollToBottom();
    }
  }, [isOpen, history]);

  const scrollToBottom = () => {
    endOfHistoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response = [];

    switch (trimmedCmd) {
      case 'help':
        response = [
          'Available commands:',
          '  help     - Show this exact message',
          '  whoami   - Display information about the current user',
          '  projects - List featured projects',
          '  skills   - Display technical skills',
          '  clear    - Clear terminal output',
          '  exit     - Close the terminal'
        ];
        break;
      case 'whoami':
        response = [
          'NAME: Sarthak Kaundal',
          'ROLE: MERN Developer & Problem Solver',
          'LOCATION: India',
          'MISSION: Building scalable solutions and intuitive frontend experiences that bridge the gap between complex logic and beautiful design.',
          'STATUS: Always open to chat.'
        ];
        break;
      case 'projects':
        response = [
          'FEATURED PROJECTS:',
          '1. Linkro  - Full-stack recruitment platform (MERN, Role-based dashboards)',
          '2. PRAYAS  - AI Flood Prediction Platform (Geospatial mapping, Gemini API)',
          '',
          '(Type "exit" to view them visually in the Projects section with live links!)'
        ];
        break;
      case 'skills':
        response = [
          'TECHNICAL ARSENAL:',
          '> Frontend : React.js, Tailwind CSS, Leaflet.js',
          '> Backend  : Node.js, Express.js, Firebase',
          '> Language : Python, Java, C++, JavaScript',
          '> Database : MongoDB, SQL',
          '> Tooling  : Git, REST APIs, AI Integration'
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        setIsOpen(false);
        return;
      case '':
        return;
      default:
        response = [`Command not found: ${trimmedCmd}. Type "help" for available commands.`];
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', text: `guest@portfolio:~$ ${cmd}` },
      ...response.map((text) => ({ type: 'response', text }))
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <>
      {/* Sleek Floating Hint */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 left-6 z-[900]"
          >
            <button 
              onClick={() => setIsOpen(true)}
              className="retro-icon group flex items-center bg-white p-3 rotate-3 hover:rotate-0 hover:bg-accent-blue hover:text-white"
            >
              <Terminal size={24} strokeWidth={2.5} />
              <div className="w-0 overflow-hidden group-hover:w-[130px] transition-all duration-500 ease-out flex items-center">
                <span className="font-display font-black text-sm whitespace-nowrap pl-3 tracking-wide">
                  CTRL + `
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-text-dark/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="relative w-full max-w-3xl h-[500px] max-h-[85vh] bg-text-dark text-white rounded-none shadow-[12px_12px_0_var(--accent-teal)] overflow-hidden font-mono border-4 border-text-dark flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center px-4 py-3 bg-white border-b-4 border-text-dark select-none" onClick={() => inputRef.current?.focus()}>
              <div className="flex gap-2 mr-auto">
                <button 
                  className="w-5 h-5 bg-accent-coral border-2 border-text-dark flex justify-center items-center hover:bg-red-500 shadow-[2px_2px_0_var(--text-dark)]"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close terminal"
                >
                  <X size={12} strokeWidth={4} className="text-text-dark opacity-0 hover:opacity-100 transition-opacity" />
                </button>
                <div className="w-5 h-5 bg-accent-gold border-2 border-text-dark shadow-[2px_2px_0_var(--text-dark)]"></div>
                <div className="w-5 h-5 bg-accent-green border-2 border-text-dark shadow-[2px_2px_0_var(--text-dark)]"></div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 font-display font-black text-sm tracking-widest uppercase text-text-dark">Dev_Terminal.exe</div>
            </div>

            <div 
              className="flex-1 overflow-y-auto p-6 scrollbar-hide text-[15px] leading-relaxed relative"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((cmd, i) => (
                <div
                  key={i}
                  className={`mb-3 ${
                    cmd.type === 'command' ? 'text-accent-teal font-bold' :
                    cmd.type === 'system' ? 'text-accent-gold font-bold uppercase' : 'text-gray-300'
                  }`}
                >
                  {cmd.type === 'response' ? <span className="whitespace-pre-wrap">{cmd.text}</span> : cmd.text}
                </div>
              ))}
              
              <form onSubmit={handleSubmit} className="flex items-center mt-6">
                <span className="text-accent-green mr-3 font-bold whitespace-nowrap">guest@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white w-full focus:ring-0 p-0 m-0 caret-white"
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
              <div ref={endOfHistoryRef} />
            </div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
    </>
  );
};

export default TerminalEasterEgg;
