import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Calendar, Sparkles } from 'lucide-react';
import { Movie } from '@/data/movies';
import { useFavoritesStore } from '@/store/useFavoritesStore';

interface MovieCardProps {
  movie: Movie;
  index: number;
}

export const MovieCard = ({ movie, index }: MovieCardProps) => {
  const { toggleFavoriteMovie, isFavoriteMovie } = useFavoritesStore();
  const isFavorite = isFavoriteMovie(movie.id);

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case 'happy':
        return 'bg-emotion-happy/20 text-emotion-happy border-emotion-happy/30';
      case 'sad':
        return 'bg-emotion-sad/20 text-emotion-sad border-emotion-sad/30';
      case 'adventure':
        return 'bg-emotion-adventure/20 text-emotion-adventure border-emotion-adventure/30';
      case 'nostalgic':
        return 'bg-emotion-nostalgic/20 text-emotion-nostalgic border-emotion-nostalgic/30';
      default:
        return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case 'time':
        return '⏰';
      case 'space':
        return '🚀';
      case 'fantasy':
        return '🌟';
      case 'adventure':
        return '🗺️';
      case 'friendship':
        return '💙';
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
    >
      <Link to={`/movies/${movie.id}`}>
        <motion.div
          whileHover={{ y: -8 }}
          className="relative group h-full rounded-3xl overflow-hidden glass border border-border/50 card-hover"
        >
          {/* Movie Poster Area */}
          <div className="relative h-48 bg-gradient-to-br from-primary/20 via-background to-accent/10 flex items-center justify-center">
            <span className="text-7xl">{getThemeIcon(movie.theme)}</span>
            
            {/* Year Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm font-medium">
              <Calendar size={14} />
              {movie.year}
            </div>

            {/* Favorite Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavoriteMovie(movie.id);
              }}
              className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Heart
                size={20}
                className={isFavorite ? 'fill-red-500 text-red-500' : 'text-foreground/70'}
              />
            </button>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {movie.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {movie.japaneseTitle}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getEmotionColor(movie.emotion)}`}>
                {movie.emotion.charAt(0).toUpperCase() + movie.emotion.slice(1)}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {movie.theme.charAt(0).toUpperCase() + movie.theme.slice(1)}
              </span>
            </div>

            <p className="text-sm text-foreground/70 line-clamp-3 mb-4">
              {movie.synopsis}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
              <Sparkles size={16} />
              <span>Read Full Story</span>
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
