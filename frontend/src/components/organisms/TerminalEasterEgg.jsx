import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        response = ['I am a passionate software engineer building scalable solutions and intuitive frontend experiences.'];
        break;
      case 'projects':
        response = ['1. Linkro', '2. PRAYAS', '(Check the Projects section for visuals!)'];
        break;
      case 'skills':
        response = ['React, Node.js, Python, CSS/Tailwind, MongoDB, SQL'];
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-4 right-4 w-[400px] h-[300px] max-w-[calc(100vw-2rem)] bg-[#1e1e1e] text-[#d4d4d4] rounded-lg shadow-2xl overflow-hidden z-[1000] font-mono border border-[#333] flex flex-col"
        >
          {/* Default macOS-like terminal header */}
          <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#333] select-none cursor-default">
            <div className="flex gap-2">
              <div 
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 relative group"
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[#4c0000] leading-none" style={{fontSize: '8px'}}>x</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-xs font-semibold text-gray-400">guest@portfolio:~</div>
          </div>

          <div 
            className="flex-1 overflow-y-auto p-4 custom-scrollbar text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((cmd, i) => (
              <div
                key={i}
                className={`mb-1 ${
                  cmd.type === 'command' ? 'text-white font-bold' :
                  cmd.type === 'system' ? 'text-green-400' : 'text-[#d4d4d4]'
                }`}
              >
                {cmd.text}
              </div>
            ))}
            
            <form onSubmit={handleSubmit} className="flex items-center mt-2 group">
              <span className="text-green-500 mr-2 font-bold whitespace-nowrap">guest@portfolio:~$</span>
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
      )}
    </AnimatePresence>
  );
};

export default TerminalEasterEgg;
