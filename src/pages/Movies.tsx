import { motion } from 'framer-motion';
import { MovieCard } from '@/components/MovieCard';
import { movies } from '@/data/movies';
import { useState } from 'react';

const Movies = () => {
  const [filter, setFilter] = useState<string>('all');
  const filters = ['all', 'time', 'space', 'adventure', 'friendship'];

  const filteredMovies = filter === 'all' 
    ? movies 
    : movies.filter(m => m.theme === filter || m.emotion === filter);

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium mb-4 block">🎬 Cinema</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Movies</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-story italic text-lg">
            Epic adventures that touched hearts across generations
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-primary text-primary-foreground'
                  : 'glass text-foreground/70 hover:text-foreground'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMovies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Movies;
