import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

const TerminalEasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to the Developer Terminal v1.0.0' },
    { type: 'system', text: 'Type "help" for a list of available commands.' }
  ]);
  const endOfHistoryRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Listen for Ctrl+` or Cmd+`
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
              className="group flex items-center bg-background/80 backdrop-blur-md border border-glassBorder text-lightGray p-3 rounded-full hover:border-neonBlue hover:text-neonBlue transition-all shadow-lg hover:shadow-neonBlue/20"
            >
              <Terminal size={20} />
              <div className="w-0 overflow-hidden group-hover:w-[110px] transition-all duration-500 ease-out flex items-center">
                <span className="font-mono text-xs whitespace-nowrap pl-3">
                  Press Ctrl + `
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Dark Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-3xl h-[500px] max-h-[85vh] bg-[#ffffff] dark:bg-[#1e1e1e] text-foreground dark:text-[#d4d4d4] rounded-lg shadow-2xl shadow-neonBlue/10 overflow-hidden font-mono border border-gray-200 dark:border-[#333] flex flex-col z-10"
          >
            {/* Default macOS-like terminal header */}
            <div className="flex items-center px-4 py-3 bg-gray-100 dark:bg-[#2d2d2d] border-b border-gray-200 dark:border-[#333] select-none cursor-default">
              <div className="flex gap-2">
                <div 
                  className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[#4c0000] leading-none" style={{fontSize: '8px'}}>x</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></div>
              </div>
              <div className="mx-auto text-xs font-semibold text-gray-600 dark:text-gray-400">guest@portfolio:~</div>
            </div>

            <div 
              className="flex-1 overflow-y-auto p-6 custom-scrollbar text-[15px] leading-relaxed"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((cmd, i) => (
                <div
                  key={i}
                  className={`mb-2 ${
                    cmd.type === 'command' ? 'text-white font-bold' :
                    cmd.type === 'system' ? 'text-green-600 dark:text-green-400' : 'text-foreground dark:text-[#d4d4d4]'
                  }`}
                >
                  {cmd.type === 'response' ? <span className="ml-2 whitespace-pre-wrap">{cmd.text}</span> : cmd.text}
                </div>
              ))}
              
              <form onSubmit={handleSubmit} className="flex items-center mt-4 group">
                <span className="text-neonBlue mr-3 font-bold whitespace-nowrap">guest@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white w-full focus:ring-0 p-0 m-0"
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
