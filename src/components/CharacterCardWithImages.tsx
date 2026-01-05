import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CharacterWithImages } from '@/data/charactersWithImages';
import { useFavoritesStore } from '@/store/useFavoritesStore';

interface CharacterCardWithImagesProps {
  character: CharacterWithImages;
  index: number;
}

export const CharacterCardWithImages = ({ character, index }: CharacterCardWithImagesProps) => {
  const { toggleFavoriteCharacter, isFavoriteCharacter } = useFavoritesStore();
  const isFavorite = isFavoriteCharacter(character.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group h-full"
    >
      <div
        className="rounded-2xl overflow-hidden h-full glass glow-border transition-all duration-300 hover:glow-border-bright flex flex-col"
        style={{
          background: character.backgroundColor,
          borderColor: character.accentColor
        }}
      >
        {/* Image Section */}
        <div className="relative w-full h-64 overflow-hidden bg-gray-900">
          <motion.img
            src={character.images.profileImage}
            alt={character.name}
            className="w-full h-full object-contain bg-gray-900 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
          />
          <motion.button
            onClick={() => toggleFavoriteCharacter(character.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
          >
            <Heart
              size={20}
              fill={isFavorite ? '#ef4444' : 'none'}
              color={isFavorite ? '#ef4444' : '#ffffff'}
            />
          </motion.button>
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold"
            style={{ backgroundColor: character.accentColor }}
          >
            {character.role}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ color: character.accentColor }}
            >
              {character.name}
            </h3>
            <p
              className="text-sm font-medium mb-3"
              style={{ color: character.accentColor, opacity: 0.8 }}
            >
              {character.japaneseName}
            </p>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {character.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-3">TRAITS:</p>
            <div className="flex flex-wrap gap-2">
              {character.personality.map((trait, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-full text-xs font-medium border"
                  style={{
                    backgroundColor: character.accentColor + '20',
                    borderColor: character.accentColor,
                    color: character.accentColor
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t" style={{ borderColor: character.accentColor + '30' }}>
            <p className="text-xs italic text-muted-foreground">
              With Nobita: {character.relationshipWithNobita}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
