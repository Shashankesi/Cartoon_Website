import { motion } from 'framer-motion';
import { StoryBlock } from '@/components/StoryBlock';
import { journeyChapters } from '@/data/journey';

const Journey = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium mb-4 block">📖 The Story</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">The Journey</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-story italic text-lg">
            A tale of friendship that transcends time itself
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {journeyChapters.map((chapter, index) => (
            <StoryBlock key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Journey;
