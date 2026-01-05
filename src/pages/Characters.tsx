import { motion } from 'framer-motion';
import { CharacterCard } from '@/components/CharacterCard';
import { characters } from '@/data/characters';

const Characters = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-4 block">👥 The Gang</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Characters</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-story italic text-lg">
            Meet the beloved friends whose adventures span across time and space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Characters;
