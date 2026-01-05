import { motion } from 'framer-motion';
import { JourneyChapter } from '@/data/journey';

interface TimelineProps {
  chapters: JourneyChapter[];
  activeChapter: string;
  onChapterClick: (id: string) => void;
}

export const Timeline = ({ chapters, activeChapter, onChapterClick }: TimelineProps) => {
  return (
    <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-3 top-4 bottom-4 w-0.5 timeline-line" />

        {/* Timeline Points */}
        <div className="space-y-8">
          {chapters.map((chapter, index) => {
            const isActive = activeChapter === chapter.id;
            return (
              <motion.button
                key={chapter.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onChapterClick(chapter.id)}
                className="flex items-center gap-4 group"
              >
                {/* Dot */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.3 : 1,
                    backgroundColor: isActive ? 'hsl(200 100% 43%)' : 'hsl(222 30% 18%)',
                  }}
                  className={`relative w-6 h-6 rounded-full border-2 transition-colors ${
                    isActive ? 'border-primary' : 'border-muted group-hover:border-primary/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="timeline-glow"
                      className="absolute inset-0 rounded-full bg-primary animate-pulse-glow"
                    />
                  )}
                </motion.div>

                {/* Label */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.5 }}
                  className={`text-left transition-colors ${
                    isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground/70'
                  }`}
                >
                  <p className="text-xs font-medium">{chapter.era}</p>
                  <p className="text-sm font-bold">{chapter.title}</p>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
