import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Character } from '@/data/characters';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { characterImages } from '@/data/characterImages';

interface CharacterCardProps {
  character: Character;
  index: number;
}

export const CharacterCard = ({ character, index }: CharacterCardProps) => {
  const { toggleFavoriteCharacter, isFavoriteCharacter } = useFavoritesStore();
  const isFavorite = isFavoriteCharacter(character.id);

  const getImageUrl = (imagePath: string | undefined) => {
    if (!imagePath) return '';
    return characterImages[imagePath] || '';
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary/30 to-primary/10 border-primary/30';
      case 'secondary':
        return 'from-secondary/30 to-secondary/10 border-secondary/30';
      case 'accent':
        return 'from-accent/30 to-accent/10 border-accent/30';
      case 'destructive':
        return 'from-destructive/30 to-destructive/10 border-destructive/30';
      default:
        return 'from-muted/30 to-muted/10 border-muted/30';
    }
  };

  const getEmojiForCharacter = (id: string) => {
    switch (id) {
      case 'doraemon':
        return '🤖';
      case 'nobita':
        return '👦';
      case 'shizuka':
        return '👧';
      case 'gian':
        return '💪';
      case 'suneo':
        return '💎';
      case 'dorami':
        return '🎀';
      default:
        return '⭐';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/characters/${character.id}`}>
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          className={`relative group h-full rounded-3xl overflow-hidden glass border bg-gradient-to-br ${getColorClass(
            character.color
          )} card-hover`}
        >
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavoriteCharacter(character.id);
            }}
            className="absolute top-4 right-4 z-10 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity"
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              size={20}
              className={isFavorite ? 'fill-red-500 text-red-500' : 'text-foreground/70'}
            />
          </button>

          {/* Character Image */}
          <div className="p-6 pb-2">
            <div className="w-24 h-24 mx-auto rounded-full bg-background/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              {character.image ? (
                <img
                  src={getImageUrl(character.image)}
                  alt={character.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to emoji if image fails
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                <span className="text-5xl">{getEmojiForCharacter(character.id)}</span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 pt-4 text-center">
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {character.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              {character.japaneseName}
            </p>
            <p className="text-sm text-primary font-medium mb-4">
              {character.role}
            </p>
            <p className="text-sm text-foreground/70 line-clamp-3">
              {character.description.slice(0, 150)}...
            </p>

            {/* Personality Tags */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {character.personality.slice(0, 3).map((trait) => (
                <span
                  key={trait}
                  className="px-2 py-1 text-xs rounded-full bg-background/50 text-foreground/80"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
