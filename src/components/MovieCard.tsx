import { motion } from 'framer-motion';
import { Heart, Calendar, Play, Copy, Check } from 'lucide-react';
import { Movie } from '@/data/movies';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { movieImages } from '@/data/movieImages';
import { useState } from 'react';

interface MovieCardProps {
  movie: Movie;
  index: number;
}

export const MovieCard = ({ movie, index }: MovieCardProps) => {
  const { toggleFavoriteMovie, isFavoriteMovie } = useFavoritesStore();
  const isFavorite = isFavoriteMovie(movie.id);
  const [copied, setCopied] = useState(false);

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return '';
    // Look up the image in the dynamically imported images
    return movieImages[imagePath] || '';
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      <motion.div
        whileHover={{ y: -8 }}
        className="relative group h-full rounded-3xl overflow-hidden glass border border-border/50 card-hover"
      >
          {/* Movie Poster Area */}
          <div className="relative h-48 bg-gradient-to-br from-primary/20 via-background to-accent/10 flex items-center justify-center overflow-hidden">
            {movie.posterImage ? (
              <img
                src={getImageUrl(movie.posterImage)}
                alt={movie.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to theme icon if image fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <span className="text-7xl">{getThemeIcon(movie.theme)}</span>
            )}
            
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
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
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
              <div className="flex-1">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2 select-text cursor-text">
                  {movie.title}
                </h3>
                <p className="text-sm text-muted-foreground select-text cursor-text">
                  {movie.japaneseTitle}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  copyToClipboard(`${movie.title}\n${movie.japaneseTitle || ''}\n${movie.synopsis}`);
                }}
                className="p-2 rounded-lg hover:bg-primary/20 transition-colors flex-shrink-0"
                title="Copy text"
              >
                {copied ? (
                  <Check size={18} className="text-green-500" />
                ) : (
                  <Copy size={18} className="text-muted-foreground hover:text-primary" />
                )}
              </button>
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

            <p className="text-sm text-foreground/70 line-clamp-3 mb-4 select-text cursor-text">
              {movie.synopsis}
            </p>

            {/* Watch Now Button */}
            <div className="flex flex-col gap-3">
              {movie.watchLink ? (
                <a
                  href={movie.watchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Play size={16} />
                  <span>Watch Now</span>
                </a>
              ) : (
                <button
                  disabled
                  className="flex items-center justify-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-lg text-sm font-medium opacity-50 cursor-not-allowed"
                >
                  <Play size={16} />
                  <span>Watch Now</span>
                </button>
              )}
            </div>
          </div>

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
          </div>
        </motion.div>
    </motion.div>
  );
};
