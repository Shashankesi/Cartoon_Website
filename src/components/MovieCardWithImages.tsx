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
      <div className="rounded-2xl overflow-hidden h-full glass-premium glow-border transition-all duration-300 hover-glow flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 hover-lift">
        {/* Image Section */}
        <div className="relative w-full h-72 overflow-hidden bg-gray-900 gradient-mesh">
          <motion.img
            src={movie.images.poster || '/placeholder.svg'}
            alt={movie.title}
            className="w-full h-full object-cover bg-gray-900 group-hover:scale-110 transition-transform duration-500 blur-in"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
          
          {/* Overlay Buttons */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-3 backdrop-plus">
            <motion.button
              onClick={() => toggleFavoriteMovie(movie.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/50 transition-all button-pulse hard-shadow"
            >
              <Heart
                size={20}
                fill={isFavorite ? '#ef4444' : 'none'}
                color={isFavorite ? '#ef4444' : '#ffffff'}
              />
            </motion.button>
            
            <motion.button
              onClick={() => window.open(movie.watchUrl, '_blank')}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-primary/40 backdrop-blur-md hover:bg-primary/70 transition-all button-pulse hard-shadow"
            >
              <Play size={20} fill="#3b82f6" color="#3b82f6" />
            </motion.button>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-bold glass-strong glow-blue">
            📅 {movie.year}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-slate-900/50">
          <div>
            <h3 className="text-lg font-bold mb-2 text-white gradient-text-animated">{movie.title}</h3>
            <p className="text-sm font-medium text-accent mb-3 underline-animate">{movie.japaneseTitle}</p>
            <p className="text-sm text-gray-300 mb-4 line-clamp-3">{movie.synopsis}</p>
          </div>

          {/* Themes */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Themes:</p>
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
              <span className="text-yellow-400 text-lg animate-bounce-subtle">⭐</span>
              <span className="font-bold text-white gradient-text">{movie.ratingOutOfTen}/10</span>
            </div>
            <motion.button
              onClick={() => window.open(movie.watchUrl, '_blank')}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold hover:shadow-xl transition-all button-pulse hard-shadow"
            >
              Watch Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
