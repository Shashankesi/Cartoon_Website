import { motion } from 'framer-motion';
import { Heart, Zap } from 'lucide-react';
import { Gadget } from '@/data/gadgets';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useState } from 'react';

interface GadgetCardProps {
  gadget: Gadget;
  index: number;
}

export const GadgetCard = ({ gadget, index }: GadgetCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { toggleFavoriteGadget, isFavoriteGadget } = useFavoritesStore();
  const isFavorite = isFavoriteGadget(gadget.id);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'transportation':
        return 'from-blue-500/30 to-blue-500/10 border-blue-500/30';
      case 'transformation':
        return 'from-purple-500/30 to-purple-500/10 border-purple-500/30';
      case 'utility':
        return 'from-green-500/30 to-green-500/10 border-green-500/30';
      case 'time':
        return 'from-amber-500/30 to-amber-500/10 border-amber-500/30';
      case 'communication':
        return 'from-pink-500/30 to-pink-500/10 border-pink-500/30';
      case 'combat':
        return 'from-red-500/30 to-red-500/10 border-red-500/30';
      default:
        return 'from-muted/30 to-muted/10 border-muted/30';
    }
  };

  const getGadgetEmoji = (id: string) => {
    switch (id) {
      case 'anywhere-door':
        return '🚪';
      case 'take-copter':
        return '🚁';
      case 'time-machine':
        return '⏰';
      case 'small-light':
        return '🔦';
      case 'translation-konjac':
        return '🍮';
      case 'memory-bread':
        return '🍞';
      case 'air-cannon':
        return '💨';
      case 'time-furoshiki':
        return '🧣';
      default:
        return '✨';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        className="relative h-80 cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-3xl overflow-hidden glass border bg-gradient-to-br ${getCategoryColor(
            gadget.category
          )} backface-hidden`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavoriteGadget(gadget.id);
            }}
            className="absolute top-4 right-4 z-10 p-2 rounded-full glass"
          >
            <Heart
              size={20}
              className={isFavorite ? 'fill-red-500 text-red-500' : 'text-foreground/70'}
            />
          </button>

          {/* Icon */}
          <div className="flex items-center justify-center h-1/2 text-7xl">
            <motion.span
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring' }}
            >
              {getGadgetEmoji(gadget.id)}
            </motion.span>
          </div>

          {/* Content */}
          <div className="p-6 pt-0 text-center">
            <h3 className="text-xl font-bold mb-1">{gadget.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{gadget.japaneseName}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
              {gadget.category}
            </span>
            <p className="text-xs text-muted-foreground mt-3">
              Tap to flip →
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-3xl overflow-hidden glass border bg-gradient-to-br ${getCategoryColor(
            gadget.category
          )} backface-hidden p-6`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Zap size={20} className="text-primary" />
              <h3 className="text-lg font-bold">{gadget.name}</h3>
            </div>
            
            <p className="text-sm text-foreground/80 mb-4 flex-1 overflow-y-auto">
              {gadget.description}
            </p>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Fun Facts:</p>
              <ul className="text-xs text-foreground/70 space-y-1">
                {gadget.funFacts.slice(0, 2).map((fact, i) => (
                  <li key={i}>• {fact}</li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-muted-foreground mt-3 text-center">
              ← Tap to flip back
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
