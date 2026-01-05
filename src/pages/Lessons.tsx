import { motion } from 'framer-motion';
import { Heart, Users, Star, Sunrise, BookOpen } from 'lucide-react';

const lessons = [
  { icon: Heart, title: 'Friendship', description: 'True friends stand by you through every challenge, believing in you when you doubt yourself.', color: 'text-red-400' },
  { icon: Star, title: 'Self-Confidence', description: 'You are capable of more than you know. Sometimes you just need someone to show you.', color: 'text-yellow-400' },
  { icon: Users, title: 'Responsibility', description: 'With every gadget comes a lesson—shortcuts rarely lead to lasting success.', color: 'text-blue-400' },
  { icon: Sunrise, title: 'Growing Up', description: 'Change is inevitable, but the bonds we form shape who we become.', color: 'text-orange-400' },
  { icon: BookOpen, title: 'Letting Go', description: 'The greatest gift a teacher can give is preparing you to thrive without them.', color: 'text-purple-400' },
];

const Lessons = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-medium mb-4 block">💙 Life Lessons</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text-warm">Lessons</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-story italic text-lg">
            Timeless wisdom hidden within every adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl p-8 text-center card-hover"
            >
              <lesson.icon size={48} className={`mx-auto mb-4 ${lesson.color}`} />
              <h3 className="text-xl font-bold mb-3">{lesson.title}</h3>
              <p className="text-muted-foreground font-story">{lesson.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Lessons;
