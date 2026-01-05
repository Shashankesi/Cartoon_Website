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
        className="rounded-2xl overflow-hidden h-full glass-premium transition-all duration-300 flex flex-col hover-lift glow-border"
        style={{
          background: character.backgroundColor,
          borderColor: character.accentColor
        }}
      >
        {/* Image Section */}
        <div className="relative w-full h-64 overflow-hidden bg-gradient-mesh">
          <motion.img
            src={character.images.profileImage}
            alt={character.name}
            className="w-full h-full object-contain bg-gray-900 group-hover:scale-110 transition-transform duration-500 blur-in"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
          />
          <motion.button
            onClick={() => toggleFavoriteCharacter(character.id)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-md hover:shadow-xl transition-all button-pulse hard-shadow"
            style={{ backgroundColor: character.accentColor + '30', borderColor: character.accentColor }}
          >
            <Heart
              size={20}
              fill={isFavorite ? '#ef4444' : 'none'}
              color={isFavorite ? '#ef4444' : character.accentColor}
            />
          </motion.button>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
            style={{ backgroundColor: character.accentColor }}
          >
            {character.role}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-slate-900/30">
          <div>
            <h3
              className="text-xl font-bold mb-1 gradient-text-animated"
              style={{ color: character.accentColor }}
            >
              {character.name}
            </h3>
            <p
              className="text-sm font-medium mb-3 underline-animate"
              style={{ color: character.accentColor, opacity: 0.8 }}
            >
              {character.japaneseName}
            </p>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {character.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Traits:</p>
            <div className="flex flex-wrap gap-2">
              {character.personality.map((trait, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="stagger-item px-2 py-1 rounded-full text-xs font-medium border smooth-transition"
                  style={{
                    backgroundColor: character.accentColor + '20',
                    borderColor: character.accentColor,
                    color: character.accentColor
                  }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t smooth-transition" style={{ borderColor: character.accentColor + '30' }}>
            <p className="text-xs italic text-muted-foreground">
              With Nobita: <span className="text-accent">{character.relationshipWithNobita}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
