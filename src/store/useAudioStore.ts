import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AudioState {
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  currentTrack: 'theme' | 'emotional' | null;
  setIsPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  setCurrentTrack: (track: 'theme' | 'emotional' | null) => void;
}

export const useAudioStore = create<AudioState>()(
  persist(
    (set) => ({
      isPlaying: true,
      volume: 0.3,
      isMuted: false,
      currentTrack: 'theme',
      setIsPlaying: (playing) => set({ isPlaying: playing }),
      setVolume: (volume) => set({ volume }),
      toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
      setCurrentTrack: (track) => set({ currentTrack: track }),
    }),
    {
      name: 'doraemon-audio-preferences',
    }
  )
);
