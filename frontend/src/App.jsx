import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Home from './pages/Home';
import CustomCursor from './components/atoms/CustomCursor';
import TerminalEasterEgg from './components/organisms/TerminalEasterEgg';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-background text-white selection:bg-neonBlue selection:text-darkGray">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neonBlue to-electricPurple z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <CustomCursor />
      <TerminalEasterEgg />
      <Home />
    </div>
  );
}

export default App;
