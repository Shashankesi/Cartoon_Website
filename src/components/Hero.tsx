import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Particle Effects */}
      <div className="absolute inset-0 particle-bg" />
      
      {/* Floating Gadgets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Anywhere Door */}
        <motion.div
          className="absolute top-[20%] left-[10%] text-5xl md:text-7xl float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          🚪
        </motion.div>
        
        {/* Take-copter */}
        <motion.div
          className="absolute top-[15%] right-[15%] text-4xl md:text-6xl float-delayed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          🚁
        </motion.div>
        
        {/* Time Machine */}
        <motion.div
          className="absolute bottom-[25%] left-[15%] text-4xl md:text-5xl float-slow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          ⏰
        </motion.div>
        
        {/* Stars */}
        <motion.div
          className="absolute top-[30%] right-[25%] text-3xl md:text-4xl float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          ⭐
        </motion.div>
        
        <motion.div
          className="absolute bottom-[35%] right-[10%] text-2xl md:text-3xl float-delayed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          ✨
        </motion.div>
      </div>

      {/* Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} />
            Welcome to the 22nd Century
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text-animated">Doraemon</span>
          <br />
          <span className="text-foreground neon-glow">Universe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-story italic"
        >
          "A story of friendship that transcends time itself. 
          Journey through the adventures of a robotic cat and the boy he was sent to save."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/journey">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:shadow-xl transition-shadow glow-blue button-pulse hard-shadow"
            >
              Begin the Journey
            </motion.button>
          </Link>
          <Link to="/characters">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl glass-premium glow-border font-semibold text-lg hover:bg-muted/50 transition-all hover-glow"
            >
              Meet the Characters
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
