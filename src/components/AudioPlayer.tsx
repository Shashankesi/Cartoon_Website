import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { useAudioStore } from '@/store/useAudioStore';
import { Slider } from '@/components/ui/slider';

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, volume, isMuted, setIsPlaying, setVolume, toggleMute } = useAudioStore();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error('Audio playback failed:', error);
            setIsPlaying(false);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Audio Element - Doraemon Theme Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        src="/doremon.mp3"
        onError={() => console.error('Failed to load audio')}
      />

      {/* Floating Audio Control */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glass-strong rounded-2xl p-4 flex items-center gap-4 shadow-lg"
        >
          {/* Play/Pause */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleTogglePlay}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isPlaying ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
            }`}
          >
            <Music size={20} />
          </motion.button>

          {/* Volume Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <div className="w-24">
              <Slider
                value={[isMuted ? 0 : volume * 100]}
                onValueChange={([value]) => setVolume(value / 100)}
                max={100}
                step={1}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Status */}
          <div className="hidden sm:block text-xs text-muted-foreground">
            {isPlaying ? 'Playing' : 'Paused'}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
