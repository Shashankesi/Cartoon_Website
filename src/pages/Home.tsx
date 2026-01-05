import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { CharacterCard } from '@/components/CharacterCard';
import { MovieCard } from '@/components/MovieCard';
import { characters } from '@/data/characters';
import { movies } from '@/data/movies';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <main>
      <Hero />

      {/* Featured Characters Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <Sparkles size={16} /> Meet the Gang
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Beloved Characters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The friends who made every adventure unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {characters.slice(0, 3).map((character, index) => (
              <CharacterCard key={character.id} character={character} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/characters">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glow-border text-primary font-medium"
              >
                View All Characters <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-secondary text-sm font-medium mb-4">
              🎬 Cinematic Adventures
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Epic Movies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every film tells a story of courage, friendship, and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {movies.slice(0, 3).map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/movies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
              >
                Explore All Movies <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Begin Your Journey
            </h2>
            <p className="text-muted-foreground mb-8 font-story italic text-lg">
              "The future belongs to those who believe in the beauty of their dreams."
            </p>
            <Link to="/journey">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg glow-blue"
              >
                Start Reading
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
