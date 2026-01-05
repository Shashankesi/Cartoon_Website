import { motion } from 'framer-motion';
import { JourneyChapter } from '@/data/journey';

interface StoryBlockProps {
  chapter: JourneyChapter;
  index: number;
}

export const StoryBlock = ({ chapter, index }: StoryBlockProps) => {
  const isEven = index % 2 === 0;

  const getToneColor = (tone: string) => {
    switch (tone) {
      case 'hopeful':
        return 'border-l-primary';
      case 'sad':
        return 'border-l-emotion-sad';
      case 'adventurous':
        return 'border-l-emotion-adventure';
      case 'heartwarming':
        return 'border-l-secondary';
      case 'bittersweet':
        return 'border-l-emotion-nostalgic';
      default:
        return 'border-l-primary';
    }
  };

  const getToneEmoji = (tone: string) => {
    switch (tone) {
      case 'hopeful':
        return '🌟';
      case 'sad':
        return '💙';
      case 'adventurous':
        return '🚀';
      case 'heartwarming':
        return '💛';
      case 'bittersweet':
        return '🌅';
      default:
        return '✨';
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`relative max-w-4xl mx-auto ${isEven ? 'lg:ml-0' : 'lg:mr-0 lg:ml-auto'}`}
    >
      {/* Chapter Card */}
      <div className={`glass rounded-3xl p-8 md:p-12 border-l-4 ${getToneColor(chapter.emotionalTone)}`}>
        {/* Era Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-3xl">{getToneEmoji(chapter.emotionalTone)}</span>
          <div>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              {chapter.era}
            </span>
            <span className="mx-3 text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground capitalize">
              {chapter.emotionalTone}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="story-title gradient-text mb-8"
        >
          {chapter.title}
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="story-text space-y-6"
        >
          {chapter.content.split('\n\n').map((paragraph, pIndex) => (
            <p key={pIndex} className="first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -z-10 inset-0 blur-3xl opacity-30">
        <div className={`w-full h-full bg-gradient-to-br ${
          chapter.emotionalTone === 'hopeful' ? 'from-primary/20 to-transparent' :
          chapter.emotionalTone === 'sad' ? 'from-emotion-sad/20 to-transparent' :
          chapter.emotionalTone === 'adventurous' ? 'from-emotion-adventure/20 to-transparent' :
          chapter.emotionalTone === 'heartwarming' ? 'from-secondary/20 to-transparent' :
          'from-emotion-nostalgic/20 to-transparent'
        }`} />
      </div>
    </motion.article>
  );
};
