import { motion } from 'framer-motion';
import { Heart, Play } from 'lucide-react';
import { MovieWithImages } from '@/data/moviesWithImages';
import { useFavoritesStore } from '@/store/useFavoritesStore';

interface MovieCardWithImagesProps {
  movie: MovieWithImages;
  index: number;
}

export const MovieCardWithImages = ({ movie, index }: MovieCardWithImagesProps) => {
  const { toggleFavoriteMovie, isFavoriteMovie } = useFavoritesStore();
  const isFavorite = isFavoriteMovie(movie.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="rounded-2xl overflow-hidden h-full glass glow-border transition-all duration-300 hover:glow-border-bright flex flex-col bg-slate-900">
        {/* Image Section */}
        <div className="relative w-full h-72 overflow-hidden bg-gray-900">
          <motion.img
            src={movie.images.poster}
            alt={movie.title}
            className="w-full h-full object-contain bg-gray-900 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Overlay Buttons */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-3">
            <motion.button
              onClick={() => toggleFavoriteMovie(movie.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
            >
              <Heart
                size={20}
                fill={isFavorite ? '#ef4444' : 'none'}
                color={isFavorite ? '#ef4444' : '#ffffff'}
              />
            </motion.button>
            
            <motion.button
              onClick={() => window.open(movie.watchUrl, '_blank')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/40 transition-colors"
            >
              <Play size={20} fill="#3b82f6" color="#3b82f6" />
            </motion.button>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
            📅 {movie.year}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">{movie.title}</h3>
            <p className="text-sm font-medium text-primary mb-3">{movie.japaneseTitle}</p>
            <p className="text-sm text-gray-300 mb-4 line-clamp-3">{movie.synopsis}</p>
          </div>

          {/* Themes */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-400 mb-2">THEMES:</p>
            <div className="flex flex-wrap gap-2">
              {movie.themes.slice(0, 3).map((theme, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="pt-4 border-t border-gray-700/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="font-bold text-white">{movie.ratingOutOfTen}/10</span>
            </div>
            <motion.button
              onClick={() => window.open(movie.watchUrl, '_blank')}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Watch Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
