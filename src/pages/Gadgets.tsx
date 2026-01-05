import { motion } from 'framer-motion';
import { GadgetCard } from '@/components/GadgetCard';
import { gadgets } from '@/data/gadgets';

const Gadgets = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-4 block">🧰 4D Pocket</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Gadgets</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-story italic text-lg">
            Marvelous inventions from the 22nd century
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gadgets.map((gadget, index) => (
            <GadgetCard key={gadget.id} gadget={gadget} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gadgets;
