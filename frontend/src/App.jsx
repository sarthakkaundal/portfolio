import { motion, useScroll } from 'framer-motion';
import Home from './pages/Home';
import CustomCursor from './components/atoms/CustomCursor';
import TerminalEasterEgg from './components/organisms/TerminalEasterEgg';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-primary-cream text-text-dark selection:bg-accent-teal selection:text-white overflow-x-hidden relative">
      <div className="fixed top-0 left-0 right-0 h-2 bg-text-dark z-[100] origin-left border-b-2 border-text-dark">
        <motion.div
          className="h-full bg-accent-teal w-full origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      <CustomCursor />
      <TerminalEasterEgg />
      <Home />
    </div>
  );
}

export default App;
